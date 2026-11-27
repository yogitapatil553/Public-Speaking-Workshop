/**
 * Eye Care Optical Shop - Admin CMS Engine
 * Full Content Management System with Authentication, CRUD for Products, Offers, Services, Inquiries CRM & CSV Export.
 */

document.addEventListener('DOMContentLoaded', () => {
  checkAdminAuth();
  initAdminTabs();
  initAdminActions();
});

const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "eyecare123"
};

function checkAdminAuth() {
  const isAuth = sessionStorage.getItem('eyecare_admin_logged_in') === 'true';
  const loginModal = document.getElementById('adminLoginModal');
  const adminWrapper = document.getElementById('adminAppWrapper');

  if (!isAuth) {
    if (loginModal) loginModal.style.display = 'flex';
    if (adminWrapper) adminWrapper.style.display = 'none';
  } else {
    if (loginModal) loginModal.style.display = 'none';
    if (adminWrapper) adminWrapper.style.display = 'block';
    renderDashboardOverview();
    renderProductsTable();
    renderOffersTable();
    renderEnquiriesTable();
    renderServicesTable();
    loadShopSettingsForm();
  }
}

// Login Handler
window.handleAdminLogin = function(e) {
  e.preventDefault();
  const userInput = document.getElementById('adminUser').value.trim();
  const passInput = document.getElementById('adminPass').value.trim();
  const errorEl = document.getElementById('loginError');

  if (userInput === ADMIN_CREDENTIALS.username && passInput === ADMIN_CREDENTIALS.password) {
    sessionStorage.setItem('eyecare_admin_logged_in', 'true');
    if (errorEl) errorEl.style.display = 'none';
    checkAdminAuth();
  } else {
    if (errorEl) {
      errorEl.textContent = "Invalid username or password. Default is admin / eyecare123";
      errorEl.style.display = 'block';
    }
  }
};

window.handleAdminLogout = function() {
  if (confirm("Are you sure you want to log out from Eye Care Admin?")) {
    sessionStorage.removeItem('eyecare_admin_logged_in');
    window.location.reload();
  }
};

/**
 * Tab Navigation in Admin
 */
function initAdminTabs() {
  const tabLinks = document.querySelectorAll('.admin-nav-item');
  const tabPanes = document.querySelectorAll('.admin-tab-pane');

  tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-tab');

      tabLinks.forEach(l => l.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      link.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

function initAdminActions() {
  // Reset demo data handler
  const resetBtn = document.getElementById('resetDataBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm("Reset all website data to initial demo products, brands, and settings? This will clear local changes.")) {
        DataStore.resetToDefault();
        alert("Data reset to initial state!");
        window.location.reload();
      }
    });
  }

  // Shop Settings form submit
  const settingsForm = document.getElementById('shopSettingsForm');
  if (settingsForm) {
    settingsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const current = DataStore.getShopInfo();
      const updated = {
        ...current,
        name: document.getElementById('setShopName').value.trim(),
        tagline: document.getElementById('setShopTagline').value.trim(),
        phone: document.getElementById('setShopPhone').value.trim(),
        phoneRaw: document.getElementById('setShopPhoneRaw').value.trim(),
        whatsapp: document.getElementById('setShopWhatsApp').value.trim(),
        whatsappRaw: document.getElementById('setShopWhatsAppRaw').value.trim(),
        email: document.getElementById('setShopEmail').value.trim(),
        address: document.getElementById('setShopAddress').value.trim(),
        workingHours: document.getElementById('setShopHours').value.trim(),
        mapEmbedUrl: document.getElementById('setShopMap').value.trim(),
        directionsUrl: document.getElementById('setShopDirections').value.trim()
      };
      DataStore.saveShopInfo(updated);
      alert("Shop Information & Contact details successfully updated and saved!");
      renderDashboardOverview();
    });
  }
}

/**
 * Dashboard Counters
 */
function renderDashboardOverview() {
  const products = DataStore.getProducts();
  const offers = DataStore.getOffers();
  const enquiries = DataStore.getEnquiries();
  const services = DataStore.getServices();

  const countProd = document.getElementById('dashCountProducts');
  const countOffers = document.getElementById('dashCountOffers');
  const countEnq = document.getElementById('dashCountEnquiries');
  const countServ = document.getElementById('dashCountServices');

  if (countProd) countProd.textContent = products.length;
  if (countOffers) countOffers.textContent = offers.length;
  if (countEnq) countEnq.textContent = enquiries.length;
  if (countServ) countServ.textContent = services.length;
}

/**
 * 1. Products Management
 */
function renderProductsTable() {
  const container = document.getElementById('productsTableBody');
  if (!container) return;

  const products = DataStore.getProducts();
  if (products.length === 0) {
    container.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:24px;color:#94a3b8;">No products found. Click "Add New Product" to create one.</td></tr>`;
    return;
  }

  container.innerHTML = products.map((p, idx) => `
    <tr>
      <td style="padding:12px;font-weight:600;font-size:0.85rem;color:var(--text-muted);">${idx + 1}</td>
      <td style="padding:12px;">
        <img src="${p.image}" alt="${p.name}" style="width:48px;height:48px;object-fit:cover;border-radius:6px;border:1px solid #e2e8f0;" />
      </td>
      <td style="padding:12px;">
        <strong style="color:var(--primary);display:block;">${p.name}</strong>
        <span style="font-size:0.75rem;color:#64748b;">ID: ${p.id}</span>
      </td>
      <td style="padding:12px;">
        <span class="badge-tag" style="background:#f1f5f9;color:#334155;text-transform:capitalize;">${p.category}</span>
        <span style="display:block;font-size:0.8rem;color:#64748b;margin-top:2px;">${p.brand}</span>
      </td>
      <td style="padding:12px;font-weight:700;color:var(--primary);font-size:0.9rem;">${p.priceRange}</td>
      <td style="padding:12px;">
        ${p.inStock ? '<span style="color:#16a34a;font-weight:600;font-size:0.8rem;">● In Stock</span>' : '<span style="color:#dc2626;font-size:0.8rem;">○ Out of Stock</span>'}
      </td>
      <td style="padding:12px;text-align:right;">
        <button class="btn btn-sm btn-outline" onclick="openEditProductModal('${p.id}')" style="padding:4px 10px;font-size:0.78rem;">Edit</button>
        <button class="btn btn-sm" onclick="deleteProduct('${p.id}')" style="padding:4px 10px;font-size:0.78rem;background:#fee2e2;color:#b91c1c;">Delete</button>
      </td>
    </tr>
  `).join('');
}

window.openAddProductModal = function() {
  document.getElementById('productFormModalTitle').textContent = "Add New Optical Product";
  document.getElementById('editProductId').value = "";
  document.getElementById('prodName').value = "";
  document.getElementById('prodCategory').value = "eyeglasses";
  document.getElementById('prodBrand').value = "Titan Eye+";
  document.getElementById('prodShape').value = "Square";
  document.getElementById('prodMaterial').value = "Italian Acetate";
  document.getElementById('prodColors').value = "Black, Tortoise, Blue";
  document.getElementById('prodPriceRange').value = "₹1,999 – ₹2,999";
  document.getElementById('prodImage').value = "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80";
  document.getElementById('prodDesc').value = "High quality spectacle frame with comfortable nose pads and durable hinges.";
  document.getElementById('prodStock').checked = true;

  document.getElementById('productEditorModal').style.display = 'flex';
};

window.openEditProductModal = function(id) {
  const products = DataStore.getProducts();
  const p = products.find(item => item.id === id);
  if (!p) return;

  document.getElementById('productFormModalTitle').textContent = `Edit Product: ${p.name}`;
  document.getElementById('editProductId').value = p.id;
  document.getElementById('prodName').value = p.name;
  document.getElementById('prodCategory').value = p.category;
  document.getElementById('prodBrand').value = p.brand;
  document.getElementById('prodShape').value = p.shape || "";
  document.getElementById('prodMaterial').value = p.material || "";
  document.getElementById('prodColors').value = (p.colors || []).join(', ');
  document.getElementById('prodPriceRange').value = p.priceRange;
  document.getElementById('prodImage').value = p.image;
  document.getElementById('prodDesc').value = p.description;
  document.getElementById('prodStock').checked = p.inStock !== false;

  document.getElementById('productEditorModal').style.display = 'flex';
};

window.closeProductEditorModal = function() {
  document.getElementById('productEditorModal').style.display = 'none';
};

window.saveProductForm = function(e) {
  e.preventDefault();
  const id = document.getElementById('editProductId').value;
  const products = DataStore.getProducts();

  const colors = document.getElementById('prodColors').value.split(',').map(c => c.trim()).filter(Boolean);

  if (id) {
    // Update existing
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      products[index] = {
        ...products[index],
        name: document.getElementById('prodName').value.trim(),
        category: document.getElementById('prodCategory').value,
        brand: document.getElementById('prodBrand').value.trim(),
        shape: document.getElementById('prodShape').value.trim(),
        material: document.getElementById('prodMaterial').value.trim(),
        colors: colors,
        priceRange: document.getElementById('prodPriceRange').value.trim(),
        image: document.getElementById('prodImage').value.trim(),
        description: document.getElementById('prodDesc').value.trim(),
        inStock: document.getElementById('prodStock').checked
      };
    }
  } else {
    // Create new
    const newProduct = {
      id: "EC-PRD-" + Date.now().toString().slice(-4),
      name: document.getElementById('prodName').value.trim(),
      category: document.getElementById('prodCategory').value,
      brand: document.getElementById('prodBrand').value.trim(),
      shape: document.getElementById('prodShape').value.trim(),
      material: document.getElementById('prodMaterial').value.trim(),
      colors: colors,
      size: "Standard Fit",
      priceRange: document.getElementById('prodPriceRange').value.trim(),
      image: document.getElementById('prodImage').value.trim(),
      description: document.getElementById('prodDesc').value.trim(),
      features: ["Premium quality finish", "Lightweight ergonomic bridge", "100% genuine brand warranty"],
      specifications: { "Frame Width": "138 mm", "Warranty": "1 Year" },
      inStock: document.getElementById('prodStock').checked,
      isFeatured: true
    };
    products.unshift(newProduct);
  }

  DataStore.saveProducts(products);
  closeProductEditorModal();
  renderProductsTable();
  renderDashboardOverview();
  alert("Product saved successfully!");
};

window.deleteProduct = function(id) {
  if (confirm(`Are you sure you want to delete product ID: ${id}?`)) {
    let products = DataStore.getProducts();
    products = products.filter(p => p.id !== id);
    DataStore.saveProducts(products);
    renderProductsTable();
    renderDashboardOverview();
  }
};

/**
 * 2. Offers & Promotions Management
 */
function renderOffersTable() {
  const container = document.getElementById('offersTableBody');
  if (!container) return;

  const offers = DataStore.getOffers();
  container.innerHTML = offers.map((o, idx) => `
    <tr>
      <td style="padding:12px;font-weight:600;">${idx + 1}</td>
      <td style="padding:12px;">
        <strong style="color:var(--primary);">${o.title}</strong>
        <span style="display:block;font-size:0.75rem;color:#64748b;">Code: <code style="background:#f1f5f9;padding:2px 6px;border-radius:4px;">${o.code}</code></span>
      </td>
      <td style="padding:12px;color:var(--accent);font-weight:700;">${o.discount}</td>
      <td style="padding:12px;font-size:0.85rem;color:#64748b;">${o.validTill}</td>
      <td style="padding:12px;text-align:right;">
        <button class="btn btn-sm" onclick="deleteOffer('${o.id}')" style="padding:4px 10px;font-size:0.78rem;background:#fee2e2;color:#b91c1c;">Remove</button>
      </td>
    </tr>
  `).join('');
}

window.deleteOffer = function(id) {
  if (confirm("Delete this promotional offer?")) {
    let offers = DataStore.getOffers();
    offers = offers.filter(o => o.id !== id);
    DataStore.saveOffers(offers);
    renderOffersTable();
    renderDashboardOverview();
  }
};

window.addNewOfferPrompt = function() {
  const title = prompt("Enter Offer Title (e.g. Festival 25% Off on Frames):");
  if (!title) return;
  const discount = prompt("Enter Discount Highlight (e.g. Flat 25% OFF):");
  const code = prompt("Enter Promo Code (e.g. FEST25):");
  const validTill = prompt("Valid Till (e.g. 30th November 2026):");
  const desc = prompt("Short description of offer:");

  const offers = DataStore.getOffers();
  offers.unshift({
    id: "OFFER-" + Date.now().toString().slice(-4),
    title,
    badge: "Special Promotion",
    discount: discount || "Special Discount",
    code: code || "EYECARE",
    validTill: validTill || "Limited Period",
    description: desc || "Exclusive store offer.",
    terms: "Terms and conditions apply. In-store only."
  });
  DataStore.saveOffers(offers);
  renderOffersTable();
  renderDashboardOverview();
  alert("Offer successfully created!");
};

/**
 * 3. Enquiries & Leads CRM
 */
function renderEnquiriesTable() {
  const container = document.getElementById('enquiriesTableBody');
  if (!container) return;

  const list = DataStore.getEnquiries();
  if (list.length === 0) {
    container.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:24px;color:#94a3b8;">No customer enquiries yet. Enquiries submitted from the website Contact Form will appear here.</td></tr>`;
    return;
  }

  container.innerHTML = list.map((enq, idx) => `
    <tr>
      <td style="padding:12px;font-size:0.85rem;color:#64748b;">${idx + 1}</td>
      <td style="padding:12px;font-size:0.8rem;color:#64748b;">${enq.date || "Recent"}</td>
      <td style="padding:12px;">
        <strong style="color:var(--primary);">${enq.name}</strong>
        <span style="display:block;font-size:0.75rem;color:#64748b;">${enq.email || "No email"}</span>
      </td>
      <td style="padding:12px;">
        <a href="tel:${enq.phone}" style="color:var(--primary);font-weight:700;">${enq.phone}</a>
        <a href="https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}" target="_blank" style="margin-left:6px;color:#25d366;font-size:0.85rem;">💬 Chat</a>
      </td>
      <td style="padding:12px;font-size:0.85rem;color:#334155;">
        <strong>${enq.serviceType || 'General'}</strong>:
        <span style="color:#64748b;display:block;">${enq.message || 'No additional note'}</span>
      </td>
      <td style="padding:12px;text-align:right;">
        <button class="btn btn-sm" onclick="deleteEnquiry('${enq.id}')" style="padding:4px 8px;font-size:0.75rem;background:#f1f5f9;color:#64748b;">✕ Delete</button>
      </td>
    </tr>
  `).join('');
}

window.deleteEnquiry = function(id) {
  let list = DataStore.getEnquiries();
  list = list.filter(e => e.id !== id);
  DataStore.saveEnquiries(list);
  renderEnquiriesTable();
  renderDashboardOverview();
};

window.exportEnquiriesCSV = function() {
  const list = DataStore.getEnquiries();
  if (list.length === 0) {
    alert("No enquiries to export.");
    return;
  }

  const headers = ["ID", "Date", "Name", "Phone", "Email", "Service Type", "Message", "Status"];
  const rows = list.map(e => [
    `"${e.id || ''}"`,
    `"${e.date || ''}"`,
    `"${(e.name || '').replace(/"/g, '""')}"`,
    `"${e.phone || ''}"`,
    `"${e.email || ''}"`,
    `"${(e.serviceType || '').replace(/"/g, '""')}"`,
    `"${(e.message || '').replace(/"/g, '""')}"`,
    `"${e.status || 'New'}"`
  ]);

  const csvContent = "\uFEFF" + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `EyeCare_Customer_Enquiries_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

/**
 * 4. Eye Care Services Manager
 */
function renderServicesTable() {
  const container = document.getElementById('servicesTableBody');
  if (!container) return;

  const services = DataStore.getServices();
  container.innerHTML = services.map((s, idx) => `
    <tr>
      <td style="padding:12px;font-weight:600;">${idx + 1}</td>
      <td style="padding:12px;">
        <strong style="color:var(--primary);">${s.title}</strong>
        <span style="display:block;font-size:0.8rem;color:#64748b;">${s.summary}</span>
      </td>
      <td style="padding:12px;font-size:0.85rem;color:var(--accent);font-weight:600;">${s.duration}</td>
      <td style="padding:12px;font-size:0.85rem;color:#334155;">${s.fee}</td>
    </tr>
  `).join('');
}

/**
 * 5. Settings Form Loader
 */
function loadShopSettingsForm() {
  const shop = DataStore.getShopInfo();
  if (!shop) return;

  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || "";
  };

  set('setShopName', shop.name);
  set('setShopTagline', shop.tagline);
  set('setShopPhone', shop.phone);
  set('setShopPhoneRaw', shop.phoneRaw);
  set('setShopWhatsApp', shop.whatsapp);
  set('setShopWhatsAppRaw', shop.whatsappRaw);
  set('setShopEmail', shop.email);
  set('setShopAddress', shop.address);
  set('setShopHours', shop.workingHours);
  set('setShopMap', shop.mapEmbedUrl);
  set('setShopDirections', shop.directionsUrl);
}
