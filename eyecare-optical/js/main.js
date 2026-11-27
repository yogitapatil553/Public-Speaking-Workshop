/**
 * Eye Care Optical Shop - Main JavaScript Engine
 * Handles UI interactions, mobile drawer, modals, dynamic data injection, WhatsApp enquiry links & forms.
 */

document.addEventListener('DOMContentLoaded', () => {
  initShopInfoSync();
  initMobileNavigation();
  initScrollEffects();
  initHeroBackgroundVideo();
  initProductModals();
  initContactForms();
  initFaqAccordions();
  initGalleryFilters();
  initOfferCopyButtons();
});

/**
 * 0. Hero Background Video Animation Controller
 */
function initHeroBackgroundVideo() {
  const video = document.querySelector('.hero-video-bg');
  const toggleBtn = document.getElementById('heroVideoToggle');
  if (!video) return;

  // Guarantee muted for cross-browser autoplay compliance
  video.muted = true;
  video.setAttribute('muted', '');
  video.setAttribute('playsinline', '');

  const startPlayback = () => {
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Retry autoplay on first user interaction if blocked by browser policy
        const resumeOnInteraction = () => {
          video.play().catch(() => {});
          document.removeEventListener('click', resumeOnInteraction);
          document.removeEventListener('touchstart', resumeOnInteraction);
        };
        document.addEventListener('click', resumeOnInteraction, { once: true });
        document.addEventListener('touchstart', resumeOnInteraction, { once: true });
      });
    }
  };

  startPlayback();

  // Ambient Play/Pause button
  if (toggleBtn) {
    const iconSpan = toggleBtn.querySelector('.video-toggle-icon');
    const labelSpan = toggleBtn.querySelector('.video-toggle-label');

    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (video.paused) {
        video.play().then(() => {
          if (iconSpan) iconSpan.textContent = '⏸';
          if (labelSpan) labelSpan.textContent = 'Pause Animation';
          toggleBtn.setAttribute('title', 'Pause background animation');
        }).catch(() => {});
      } else {
        video.pause();
        if (iconSpan) iconSpan.textContent = '▶';
        if (labelSpan) labelSpan.textContent = 'Play Animation';
        toggleBtn.setAttribute('title', 'Play background animation');
      }
    });
  }

  // Energy & GPU optimization: pause video when tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (!video.paused) video.pause();
    } else {
      if (video.paused && (!toggleBtn || toggleBtn.querySelector('.video-toggle-icon')?.textContent === '⏸')) {
        video.play().catch(() => {});
      }
    }
  });
}

/**
 * 1. Sync Shop Information across all UI elements dynamically
 */
function initShopInfoSync() {
  if (!window.DataStore) return;
  const shop = DataStore.getShopInfo();

  // Update text placeholders
  document.querySelectorAll('[data-shop-name]').forEach(el => el.textContent = shop.name);
  document.querySelectorAll('[data-shop-phone]').forEach(el => el.textContent = shop.phone);
  document.querySelectorAll('[data-shop-whatsapp]').forEach(el => el.textContent = shop.whatsapp);
  document.querySelectorAll('[data-shop-email]').forEach(el => el.textContent = shop.email);
  document.querySelectorAll('[data-shop-address]').forEach(el => el.textContent = shop.address);
  document.querySelectorAll('[data-shop-hours]').forEach(el => el.textContent = shop.workingHours);
  document.querySelectorAll('[data-shop-est]').forEach(el => el.textContent = shop.establishedYear);
  document.querySelectorAll('[data-shop-customers]').forEach(el => el.textContent = shop.happyCustomers);
  document.querySelectorAll('[data-shop-frames]').forEach(el => el.textContent = shop.framesInStock);

  // Update call links
  document.querySelectorAll('a[data-call-link]').forEach(el => {
    el.href = `tel:${shop.phoneRaw || "919876543210"}`;
  });

  // Update email links
  document.querySelectorAll('a[data-email-link]').forEach(el => {
    el.href = `mailto:${shop.email}`;
  });

  // Update directions
  document.querySelectorAll('a[data-directions-link]').forEach(el => {
    el.href = shop.directionsUrl || `https://maps.google.com/?q=${encodeURIComponent(shop.address)}`;
  });

  // Update WhatsApp links
  const defaultWhatsAppMsg = encodeURIComponent(`Hello Eye Care Optical, I would like to inquire about your eyewear collection and services.`);
  document.querySelectorAll('a[data-whatsapp-link]').forEach(el => {
    el.href = `https://wa.me/${shop.whatsappRaw || "919876543210"}?text=${defaultWhatsAppMsg}`;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });
}

/**
 * 2. Mobile Navigation Drawer
 */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.drawer-backdrop');
  const closeBtn = document.querySelector('.drawer-close');

  if (!toggleBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  // Close when clicking an anchor link inside drawer
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/**
 * 3. Header sticky shadow & back-to-top button
 */
function initScrollEffects() {
  const header = document.querySelector('.site-header');
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (header) {
      if (scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (backToTop) {
      if (scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/**
 * 4. Product Quick View Modal & WhatsApp Inquiry
 */
function initProductModals() {
  // Delegate click for any quick view button
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-view-product]');
    if (!btn) return;
    const productId = btn.getAttribute('data-view-product');
    openProductModal(productId);
  });

  // Modal close button
  document.addEventListener('click', (e) => {
    if (e.target.matches('.modal-overlay') || e.target.closest('.modal-close-btn')) {
      const activeModal = document.querySelector('.modal-overlay.active');
      if (activeModal) activeModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

function openProductModal(productId) {
  if (!window.DataStore) return;
  const products = DataStore.getProducts();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const shop = DataStore.getShopInfo();
  let modalOverlay = document.getElementById('productQuickModal');

  if (!modalOverlay) {
    modalOverlay = document.createElement('div');
    modalOverlay.id = 'productQuickModal';
    modalOverlay.className = 'modal-overlay';
    document.body.appendChild(modalOverlay);
  }

  const encodedMsg = encodeURIComponent(
    `Hello Eye Care Optical, I am interested in this eyewear:\n` +
    `• Product: ${product.name}\n` +
    `• Item ID: ${product.id}\n` +
    `• Brand: ${product.brand}\n` +
    `• Price Range: ${product.priceRange}\n` +
    `Please confirm if this is available for in-store trial or prescription fitting.`
  );
  const waUrl = `https://wa.me/${shop.whatsappRaw || "919876543210"}?text=${encodedMsg}`;

  const specsList = Object.entries(product.specifications || {})
    .map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:600;color:var(--primary);border-bottom:1px solid #f1f5f9;">${k}</td><td style="padding:6px 12px;color:var(--text-muted);border-bottom:1px solid #f1f5f9;">${v}</td></tr>`)
    .join('');

  const featuresList = (product.features || [])
    .map(f => `<li style="display:flex;align-items:center;gap:8px;margin-bottom:6px;"><span style="color:var(--accent);font-weight:bold;">✓</span> ${f}</li>`)
    .join('');

  const colorsList = (product.colors || [])
    .map(c => `<span style="background:var(--bg-alt);font-size:0.75rem;padding:3px 10px;border-radius:20px;font-weight:600;color:var(--primary);">${c}</span>`)
    .join(' ');

  modalOverlay.innerHTML = `
    <div class="modal-box" style="padding: 30px;">
      <button class="modal-close-btn" aria-label="Close modal">&times;</button>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 28px;">
        <div>
          <div style="height: 320px; border-radius: var(--radius-md); overflow: hidden; background: #f8fafc; border: 1px solid var(--border);">
            <img src="${product.image}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;" />
          </div>
          <div style="margin-top: 14px; display: flex; gap: 8px; flex-wrap: wrap;">
            <span class="badge-tag badge-stock">In Stock for Trial</span>
            <span class="badge-tag badge-brand">${product.brand}</span>
            <span class="badge-tag" style="background:#e0f2fe;color:#0369a1;">${product.shape || 'Standard'}</span>
          </div>
        </div>
        <div>
          <div style="font-size:0.8rem;text-transform:uppercase;color:var(--accent);font-weight:700;letter-spacing:0.06em;margin-bottom:4px;">
            ${product.category.replace('-', ' ')}
          </div>
          <h2 style="font-size: 1.5rem; margin-bottom: 8px; color: var(--primary);">${product.name}</h2>
          <div style="font-size: 1.3rem; font-weight: 800; color: var(--accent); margin-bottom: 14px;">
            ${product.priceRange}
            <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: normal; display: block;">*Indicative retail price. Actual depends on chosen lens options.</span>
          </div>

          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.55; margin-bottom: 16px;">
            ${product.description}
          </p>

          <div style="margin-bottom: 14px;">
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--primary); margin-bottom: 6px;">Available Colors:</div>
            <div style="display: flex; gap: 6px; flex-wrap: wrap;">${colorsList}</div>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--primary); margin-bottom: 6px;">Key Highlights:</div>
            <ul style="font-size: 0.85rem; color: var(--text-main);">${featuresList}</ul>
          </div>

          ${specsList ? `
            <div style="margin-bottom: 20px;">
              <table style="width:100%;border-collapse:collapse;font-size:0.82rem;background:#fafcff;border-radius:var(--radius-sm);overflow:hidden;">
                ${specsList}
              </table>
            </div>
          ` : ''}

          <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 14px;">
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="flex:1;">
              <span>💬 Enquire on WhatsApp</span>
            </a>
            <a href="tel:${shop.phoneRaw}" class="btn btn-outline" style="flex:1;">
              <span>📞 Call Store</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/**
 * 5. Contact / Booking Form Handler
 */
function initContactForms() {
  const contactForm = document.getElementById('contactEnquiryForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('[name="name"]')?.value.trim();
    const phone = contactForm.querySelector('[name="phone"]')?.value.trim();
    const email = contactForm.querySelector('[name="email"]')?.value.trim();
    const serviceType = contactForm.querySelector('[name="serviceType"]')?.value || "General Optical Enquiry";
    const message = contactForm.querySelector('[name="message"]')?.value.trim();

    if (!name || !phone) {
      alert("Please provide your name and contact phone number.");
      return;
    }

    // Save in DataStore
    if (window.DataStore) {
      DataStore.addEnquiry({
        name,
        phone,
        email,
        serviceType,
        message
      });
    }

    const shop = DataStore.getShopInfo();
    const forwardToWhatsApp = confirm(
      `Thank you, ${name}! Your enquiry has been received by Eye Care Optical.\n\n` +
      `Would you like to open WhatsApp to send these details instantly for immediate confirmation?`
    );

    if (forwardToWhatsApp) {
      const waMsg = encodeURIComponent(
        `Hello Eye Care Optical,\n` +
        `New Website Enquiry:\n` +
        `• Name: ${name}\n` +
        `• Phone: ${phone}\n` +
        `• Email: ${email || "Not provided"}\n` +
        `• Interest: ${serviceType}\n` +
        `• Message: ${message || "Interested in visiting your store."}`
      );
      window.open(`https://wa.me/${shop.whatsappRaw || "919876543210"}?text=${waMsg}`, '_blank');
    }

    contactForm.reset();
  });
}

/**
 * 6. FAQ Accordion Interaction
 */
function initFaqAccordions() {
  document.addEventListener('click', (e) => {
    const header = e.target.closest('.faq-header');
    if (!header) return;

    const card = header.closest('.faq-card');
    if (!card) return;

    const wasActive = card.classList.contains('active');

    // Close other sibling accordions in same container
    const container = card.closest('.faqs-container');
    if (container) {
      container.querySelectorAll('.faq-card').forEach(c => c.classList.remove('active'));
    }

    if (!wasActive) {
      card.classList.add('active');
    }
  });
}

/**
 * 7. Gallery Category Tabs
 */
function initGalleryFilters() {
  const tabs = document.querySelectorAll('.gallery-tab-btn');
  const items = document.querySelectorAll('.gallery-item');

  if (!tabs.length || !items.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filter === 'all' || itemCategory === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/**
 * 8. Offer Code Copy Buttons
 */
function initOfferCopyButtons() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-copy-code]');
    if (!btn) return;

    const code = btn.getAttribute('data-copy-code');
    navigator.clipboard.writeText(code).then(() => {
      const originalText = btn.innerHTML;
      btn.innerHTML = `✓ Copied!`;
      btn.style.background = "#10b981";
      btn.style.color = "#ffffff";
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = "";
        btn.style.color = "";
      }, 2000);
    }).catch(() => {
      alert(`Offer Code: ${code} - Mention this code at the store!`);
    });
  });
}

/**
 * Helper to render product card HTML
 */
window.createProductCardHTML = function(product) {
  const shop = window.DataStore ? DataStore.getShopInfo() : { whatsappRaw: "919876543210" };
  const waMsg = encodeURIComponent(`Hi Eye Care Optical, I would like to inquire about the ${product.name} (${product.brand}) priced around ${product.priceRange}.`);
  const waUrl = `https://wa.me/${shop.whatsappRaw}?text=${waMsg}`;

  return `
    <div class="product-card" data-category="${product.category}" data-brand="${product.brand}">
      <div class="product-media">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <div class="product-badge-list">
          ${product.inStock ? '<span class="badge-tag badge-stock">In Store</span>' : ''}
          <span class="badge-tag badge-brand">${product.brand}</span>
          ${product.isFeatured ? '<span class="badge-tag badge-popular">Popular</span>' : ''}
        </div>
        <div class="product-quick-action">
          <button type="button" class="quick-view-btn" data-view-product="${product.id}">
            <span>🔍 View Specifications & Details</span>
          </button>
        </div>
      </div>
      <div class="product-content">
        <div class="product-meta-row">
          <span class="product-category-name">${product.category.replace('-', ' ')}</span>
          <span class="product-brand-name">${product.brand}</span>
        </div>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-specs">
          <span class="spec-chip">📐 ${product.shape || 'Custom'}</span>
          <span class="spec-chip">🛡️ ${product.material || 'Durable'}</span>
          <span class="spec-chip">📏 ${product.size ? product.size.split(' ')[0] : 'Medium'}</span>
        </div>
        <p class="product-desc">${product.description}</p>
        <div class="product-footer">
          <div class="product-price">
            <span class="price-label">Price Range</span>
            <span class="price-value">${product.priceRange}</span>
          </div>
          <div style="display:flex;gap:6px;">
            <button type="button" class="btn btn-outline btn-sm" data-view-product="${product.id}" title="View Details">
              Details
            </button>
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm" title="Enquire on WhatsApp">
              💬 Enquire
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
};
