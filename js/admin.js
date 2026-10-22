/**
 * Yogita Patil Bhashankala Karyashala - Comprehensive Admin CMS & CRM Portal
 * Manages: Hero section, Site Content, Photo/Video Gallery, Blog Posts, and CRM Leads.
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements - Shell & Authentication
  const adminModal = document.getElementById('adminModal');
  const adminOpenBtn = document.getElementById('adminPortalLink');
  const adminModalClose = document.getElementById('adminModalClose');
  const adminLockScreen = document.getElementById('adminLockScreen');
  const adminDashboard = document.getElementById('adminDashboard');
  const adminPinForm = document.getElementById('adminPinForm');
  const adminPinInput = document.getElementById('adminPinInput');
  const adminPinError = document.getElementById('adminPinError');
  const adminLogoutBtn = document.getElementById('adminLogoutBtn');
  const adminToast = document.getElementById('adminToast');
  const adminToastMsg = document.getElementById('adminToastMsg');

  // Default Fallback Configurations
  const DEFAULT_HERO = {
    badge: "🔥 सांगली • कोल्हापूर • ऑनलाइन व ऑफलाइन कम्बाईन कार्यशाळा",
    prefix: "योगिता पाटील भाषणकला कार्यशाळा",
    title: "बोला बिनधास्त!",
    subtitle: "तुमचा आवाज, तुमची ओळख!",
    desc: "भाषणाची भीती कमी करा. स्वतःचे विचार स्पष्टपणे मांडा. आत्मविश्वासाने व्यासपीठावर उभे राहायला शिका. तुम्ही विद्यार्थी असाल, शिक्षक, गृहिणी, व्यावसायिक किंवा नवोदित वक्ते—तुमच्यातील वक्तृत्वकौशल्य विकसित करण्यासाठी योग्य मार्गदर्शन आणि सराव मिळवा.",
    f1: "स्टेजवरील भीती कमी करण्यासाठी शास्त्रीय मार्गदर्शन",
    f2: "भाषणाची प्रभावी सुरुवात आणि भारदस्त समारोप",
    f3: "आवाज, देहबोली आणि आत्मविश्वासाचा सर्वांगीण विकास",
    f4: "मुद्देसूद, तार्किक आणि प्रभावी भाषणाची कला",
    f5: "प्रत्यक्ष भाषण सराव आणि वैयक्तिक फीडबॅक",
    f6: "ऑनलाइन आणि ऑफलाइन अशी दोन्ही कम्बाईन (हायब्रिड) कार्यशाळा",
    trust: "⭐ ४.९/५ रेटिंग (१,५००+ विद्यार्थ्यांचे प्रत्यक्ष अभिप्राय)",
    photo: "assets/images/speaker-hero.svg"
  };

  const DEFAULT_SITE = {
    aboutQuote: "“वक्तृत्व ही देवाने दिलेली देणगी नसून, सरावाने साध्य होणारी एक कला आहे!”",
    aboutExp: "१२+",
    aboutPhoto: "assets/images/about-yogita.svg",
    aboutP1: "मी योगिता पाटील, गेल्या १२ वर्षांहून अधिक काळ वक्तृत्व, संभाषणकला आणि व्यक्तिमत्त्व विकासाच्या क्षेत्रात हजारो विद्यार्थ्यांना, महिलांना, शिक्षकांना, उद्योजकांना आणि नवोदित वक्त्यांना मार्गदर्शन करत आहे.",
    aboutP2: "अनेकांना विचार खूप चांगले असतात, ज्ञान अथांग असते; पण चार लोकांसमोर बोलायला उभे राहिले की पाय लटलटतात, घसा कोरडा पडतो आणि शब्द सुचत नाहीत. ही समस्या विचारांची नसून ‘स्टेजच्या भीतीची’ आणि ‘मांडणीच्या योग्य पद्धतीची’ असते. माझ्या कार्यशाळेत ऑनलाइन आणि ऑफलाइन अशा दोन्ही कम्बाईन स्वरूपात सराव देऊन प्रत्येकाला कोणतीही भीती न बाळगता <strong>‘बोला बिनधास्त’</strong> ची ताकद देणे हेच आमचे ध्येय आहे.",
    aboutP3: "आमची ही भाषणकला कार्यशाळा ऑनलाइन आणि ऑफलाइन अशी दोन्ही कम्बाईन (हायब्रिड) स्वरूपात घेतली जाते. त्यामुळे सांगली व कोल्हापूर केंद्रावर प्रत्यक्ष उपस्थित राहून किंवा संपूर्ण महाराष्ट्रासह देश-विदेशातून घरबसल्या थेट ऑनलाइन Zoom द्वारे सर्व विद्यार्थी एकाच वेळी सहभागी होऊ शकतात. माझ्या मार्गदर्शनाखाली शिकलेले शेकडो विद्यार्थी आज उत्कृष्ट वक्ते, प्रभावी कॉर्पोरेट प्रेझेंटर आणि सामाजिक नेतृत्त्व करत आहेत.",
    phone1: "+91 89997 91550",
    phone2: "+91 94220 54321",
    waPhone: "918999791550",
    email: "contact@yogitapatil.com",
    helplineText: "थेट मार्गदर्शन हेल्पलाइन:"
  };

  // Toast Notification System
  let toastTimer = null;
  function showToast(message, isError = false) {
    if (!adminToast || !adminToastMsg) return;
    clearTimeout(toastTimer);
    adminToastMsg.textContent = message;
    if (isError) {
      adminToast.style.borderLeft = '4px solid #ef4444';
      adminToast.querySelector('i').className = 'fas fa-exclamation-triangle';
      adminToast.querySelector('i').style.color = '#ef4444';
    } else {
      adminToast.style.borderLeft = '4px solid var(--saffron-gold)';
      adminToast.querySelector('i').className = 'fas fa-check-circle';
      adminToast.querySelector('i').style.color = 'var(--saffron-gold)';
    }
    adminToast.classList.add('show');
    toastTimer = setTimeout(() => {
      adminToast.classList.remove('show');
    }, 3200);
  }

  // Image Compression Utility (Canvas-based to keep data within localStorage quotas)
  function compressImage(file, maxWidth, maxHeight, quality, callback) {
    if (!file || !file.type.startsWith('image/')) {
      callback(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = new Image();
      img.onload = function() {
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', quality || 0.82);
        callback(dataUrl);
      };
      img.onerror = function() {
        callback(e.target.result);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  // Check Authentication State
  function checkAuthState() {
    const isAuth = sessionStorage.getItem('yp_admin_authenticated') === 'true';
    if (isAuth) {
      if (adminLockScreen) adminLockScreen.style.display = 'none';
      if (adminDashboard) adminDashboard.style.display = 'block';
      initAllAdminTabs();
    } else {
      if (adminLockScreen) adminLockScreen.style.display = 'block';
      if (adminDashboard) adminDashboard.style.display = 'none';
      if (adminPinInput) {
        adminPinInput.value = '';
        setTimeout(() => adminPinInput.focus(), 150);
      }
      if (adminPinError) adminPinError.style.display = 'none';
    }
  }

  // Open / Close Admin Modal
  if (adminOpenBtn && adminModal) {
    adminOpenBtn.addEventListener('click', (e) => {
      e.preventDefault();
      checkAuthState();
      adminModal.classList.add('open');
    });
  }

  if (adminModalClose && adminModal) {
    adminModalClose.addEventListener('click', () => {
      adminModal.classList.remove('open');
    });
  }

  // Keyboard shortcut: Ctrl + Shift + A to open Admin CMS anywhere
  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
      e.preventDefault();
      checkAuthState();
      if (adminModal) adminModal.classList.add('open');
    }
  });

  // PIN Verification
  if (adminPinForm) {
    adminPinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const enteredPin = (adminPinInput.value || '').trim();
      const correctPin = localStorage.getItem('yp_admin_pin') || '1234';

      if (enteredPin === correctPin) {
        sessionStorage.setItem('yp_admin_authenticated', 'true');
        if (adminPinError) adminPinError.style.display = 'none';
        checkAuthState();
        showToast('प्रशासक पोर्टल यशस्वीरित्या अनलॉक झाले!');
      } else {
        if (adminPinError) adminPinError.style.display = 'block';
        adminPinInput.select();
      }
    });
  }

  // Logout Action
  if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('yp_admin_authenticated');
      checkAuthState();
      showToast('तुम्ही ॲडमिन पॅनेलमधून बाहेर पडला आहात.');
    });
  }

  // Tab Switcher Logic
  const tabBtns = document.querySelectorAll('.admin-tab-btn');
  const tabPanels = document.querySelectorAll('.admin-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }

      // Refresh specific tab contents on switch
      if (targetId === 'tab-gallery') renderAdminGalleryList();
      if (targetId === 'tab-blog') renderAdminBlogList();
      if (targetId === 'tab-leads') renderAdminLeads();
    });
  });

  // Master Initializer once logged in
  function initAllAdminTabs() {
    loadHeroFormData();
    loadSiteContentFormData();
    renderAdminGalleryList();
    renderAdminBlogList();
    renderAdminLeads();
  }

  // =========================================================================
  // TAB 1: HERO CMS LOGIC
  // =========================================================================
  const heroCmsForm = document.getElementById('heroCmsForm');
  const resetHeroBtn = document.getElementById('resetHeroBtn');
  const heroPhotoFileInput = document.getElementById('heroPhotoFileInput');
  const heroPhotoUrlInput = document.getElementById('heroPhotoUrlInput');
  const heroPhotoPreview = document.getElementById('heroPhotoPreview');

  function getHeroData() {
    try {
      const raw = localStorage.getItem('yp_hero_content');
      if (raw) return { ...DEFAULT_HERO, ...JSON.parse(raw) };
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_HERO;
  }

  function loadHeroFormData() {
    const data = getHeroData();
    const setVal = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.value = val || '';
    };

    setVal('cmsHeroBadge', data.badge);
    setVal('cmsHeroPrefix', data.prefix);
    setVal('cmsHeroTitle', data.title);
    setVal('cmsHeroSubtitle', data.subtitle);
    setVal('cmsHeroDesc', data.desc);
    setVal('cmsHeroF1', data.f1);
    setVal('cmsHeroF2', data.f2);
    setVal('cmsHeroF3', data.f3);
    setVal('cmsHeroF4', data.f4);
    setVal('cmsHeroF5', data.f5);
    setVal('cmsHeroF6', data.f6);
    setVal('cmsHeroTrust', data.trust);
    setVal('heroPhotoUrlInput', data.photo);

    if (heroPhotoPreview) heroPhotoPreview.src = data.photo || DEFAULT_HERO.photo;
  }

  if (heroPhotoFileInput) {
    heroPhotoFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        showToast('फोटो कॉम्प्रेस होत आहे...');
        compressImage(file, 900, 900, 0.85, (compressedUrl) => {
          if (compressedUrl) {
            heroPhotoUrlInput.value = compressedUrl;
            if (heroPhotoPreview) heroPhotoPreview.src = compressedUrl;
            showToast('नवीन फोटो निवडला गेला! आता "सेव्ह करा" दाबा.');
          }
        });
      }
    });
  }

  if (heroPhotoUrlInput) {
    heroPhotoUrlInput.addEventListener('input', () => {
      if (heroPhotoPreview) {
        heroPhotoPreview.src = heroPhotoUrlInput.value || DEFAULT_HERO.photo;
      }
    });
  }

  if (heroCmsForm) {
    heroCmsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const getVal = id => (document.getElementById(id) ? document.getElementById(id).value.trim() : '');

      const heroPayload = {
        badge: getVal('cmsHeroBadge'),
        prefix: getVal('cmsHeroPrefix'),
        title: getVal('cmsHeroTitle'),
        subtitle: getVal('cmsHeroSubtitle'),
        desc: getVal('cmsHeroDesc'),
        f1: getVal('cmsHeroF1'),
        f2: getVal('cmsHeroF2'),
        f3: getVal('cmsHeroF3'),
        f4: getVal('cmsHeroF4'),
        f5: getVal('cmsHeroF5'),
        f6: getVal('cmsHeroF6'),
        trust: getVal('cmsHeroTrust'),
        photo: getVal('heroPhotoUrlInput') || DEFAULT_HERO.photo
      };

      try {
        localStorage.setItem('yp_hero_content', JSON.stringify(heroPayload));
        if (typeof window.applyCmsData === 'function') {
          window.applyCmsData();
        }
        showToast('हिरो विभागातील सर्व बदल यशस्वीरित्या जतन झाले!');
      } catch (err) {
        console.error(err);
        showToast('साठवणूक मर्यादा ओलांडली, कृपया लहान फोटो वापरा.', true);
      }
    });
  }

  if (resetHeroBtn) {
    resetHeroBtn.addEventListener('click', () => {
      if (confirm('तुम्हाला हिरो विभागाचा मूळ मजकूर व फोटो परत आणायचा आहे का?')) {
        localStorage.removeItem('yp_hero_content');
        loadHeroFormData();
        if (typeof window.applyCmsData === 'function') window.applyCmsData();
        showToast('हिरो विभाग मूळ स्थितीत पूर्ववत केला गेला!');
      }
    });
  }

  // =========================================================================
  // TAB 2: SITE CONTENT CMS LOGIC
  // =========================================================================
  const siteContentForm = document.getElementById('siteContentForm');
  const resetSiteContentBtn = document.getElementById('resetSiteContentBtn');
  const aboutPhotoFileInput = document.getElementById('aboutPhotoFileInput');
  const aboutPhotoUrlInput = document.getElementById('aboutPhotoUrlInput');
  const aboutPhotoPreview = document.getElementById('aboutPhotoPreview');

  function getSiteData() {
    try {
      const raw = localStorage.getItem('yp_site_content');
      if (raw) return { ...DEFAULT_SITE, ...JSON.parse(raw) };
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_SITE;
  }

  function loadSiteContentFormData() {
    const data = getSiteData();
    const setVal = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.value = val || '';
    };

    setVal('cmsAboutQuote', data.aboutQuote);
    setVal('cmsAboutExp', data.aboutExp);
    setVal('aboutPhotoUrlInput', data.aboutPhoto);
    setVal('cmsAboutP1', data.aboutP1);
    setVal('cmsAboutP2', data.aboutP2);
    setVal('cmsAboutP3', data.aboutP3);
    setVal('cmsPhone1', data.phone1);
    setVal('cmsPhone2', data.phone2);
    setVal('cmsWaPhone', data.waPhone);
    setVal('cmsEmail', data.email);
    setVal('cmsHelplineText', data.helplineText);

    if (aboutPhotoPreview) aboutPhotoPreview.src = data.aboutPhoto || DEFAULT_SITE.aboutPhoto;
  }

  if (aboutPhotoFileInput) {
    aboutPhotoFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        showToast('परिचय फोटो कॉम्प्रेस होत आहे...');
        compressImage(file, 800, 800, 0.82, (compressedUrl) => {
          if (compressedUrl) {
            aboutPhotoUrlInput.value = compressedUrl;
            if (aboutPhotoPreview) aboutPhotoPreview.src = compressedUrl;
            showToast('नवीन परिचय फोटो निवडला गेला!');
          }
        });
      }
    });
  }

  if (aboutPhotoUrlInput) {
    aboutPhotoUrlInput.addEventListener('input', () => {
      if (aboutPhotoPreview) {
        aboutPhotoPreview.src = aboutPhotoUrlInput.value || DEFAULT_SITE.aboutPhoto;
      }
    });
  }

  if (siteContentForm) {
    siteContentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const getVal = id => (document.getElementById(id) ? document.getElementById(id).value.trim() : '');

      const sitePayload = {
        aboutQuote: getVal('cmsAboutQuote'),
        aboutExp: getVal('cmsAboutExp'),
        aboutPhoto: getVal('aboutPhotoUrlInput') || DEFAULT_SITE.aboutPhoto,
        aboutP1: getVal('cmsAboutP1'),
        aboutP2: getVal('cmsAboutP2'),
        aboutP3: getVal('cmsAboutP3'),
        phone1: getVal('cmsPhone1'),
        phone2: getVal('cmsPhone2'),
        waPhone: getVal('cmsWaPhone'),
        email: getVal('cmsEmail'),
        helplineText: getVal('cmsHelplineText')
      };

      try {
        localStorage.setItem('yp_site_content', JSON.stringify(sitePayload));
        if (typeof window.applyCmsData === 'function') {
          window.applyCmsData();
        }
        showToast('साइट मजकूर व संपर्क माहिती यशस्वीरित्या सेव्ह झाली!');
      } catch (err) {
        console.error(err);
        showToast('साठवणूक त्रुटी आली, कृपया डेटा तपासा.', true);
      }
    });
  }

  if (resetSiteContentBtn) {
    resetSiteContentBtn.addEventListener('click', () => {
      if (confirm('तुम्हाला परिचय व संपर्क मजकूर मूळ स्थितीत पूर्ववत करायचा आहे का?')) {
        localStorage.removeItem('yp_site_content');
        loadSiteContentFormData();
        if (typeof window.applyCmsData === 'function') window.applyCmsData();
        showToast('साइट मजकूर पूर्ववत केला गेला!');
      }
    });
  }

  // =========================================================================
  // TAB 3: PHOTO & VIDEO GALLERY MANAGER
  // =========================================================================
  const galleryUploadForm = document.getElementById('galleryUploadForm');
  const galleryCategory = document.getElementById('galleryCategory');
  const galleryFileInput = document.getElementById('galleryFileInput');
  const galleryUrlInput = document.getElementById('galleryUrlInput');
  const galleryTitleInput = document.getElementById('galleryTitleInput');
  const galleryDescInput = document.getElementById('galleryDescInput');
  const galleryCountBadge = document.getElementById('galleryCountBadge');
  const adminGalleryItemsList = document.getElementById('adminGalleryItemsList');
  const resetGalleryBtn = document.getElementById('resetGalleryBtn');
  const galleryLivePreviewBox = document.getElementById('galleryLivePreviewBox');
  const galleryLivePreviewContent = document.getElementById('galleryLivePreviewContent');

  function getAdminGalleryItems() {
    try {
      const raw = localStorage.getItem('yp_gallery_items');
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.error(e);
    }
    return (typeof DEFAULT_GALLERY_ITEMS !== 'undefined' ? DEFAULT_GALLERY_ITEMS : []);
  }

  function saveAdminGalleryItems(items) {
    localStorage.setItem('yp_gallery_items', JSON.stringify(items));
    if (typeof window.renderGalleryGrid === 'function') {
      window.renderGalleryGrid();
    }
    renderAdminGalleryList();
  }

  // Real-time URL Input Detection & Live Preview for YouTube and Images
  function updateGalleryUrlPreview() {
    if (!galleryUrlInput || !galleryLivePreviewBox || !galleryLivePreviewContent) return;
    const val = galleryUrlInput.value.trim();

    if (!val) {
      galleryLivePreviewBox.style.display = 'none';
      galleryLivePreviewContent.innerHTML = '';
      return;
    }

    galleryLivePreviewBox.style.display = 'block';

    const ytId = (typeof window.getYouTubeVideoId === 'function') 
      ? window.getYouTubeVideoId(val) 
      : null;

    if (ytId) {
      // Auto-switch radio to "video"
      const videoRadio = document.querySelector('input[name="mediaType"][value="video"]');
      if (videoRadio) videoRadio.checked = true;

      galleryLivePreviewContent.innerHTML = `
        <div style="background:#0f172a; color:#fff; border-radius:8px; padding:10px; margin-top:6px; display:flex; gap:12px; align-items:center; border:1px solid #334155;">
          <div style="position:relative; width:120px; height:75px; flex-shrink:0; border-radius:6px; overflow:hidden; background:#000;">
            <img src="https://img.youtube.com/vi/${ytId}/hqdefault.jpg" alt="YouTube Thumbnail" style="width:100%; height:100%; object-fit:cover;" onerror="this.src='assets/images/gallery-2.svg'">
            <span style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:#ff0000; font-size:1.4rem; background:rgba(0,0,0,0.35);"><i class="fab fa-youtube"></i></span>
          </div>
          <div style="flex:1; min-width:0;">
            <div style="font-weight:700; color:#22c55e; font-size:0.85rem; display:flex; align-items:center; gap:6px;">
              <i class="fas fa-check-circle"></i> YouTube व्हिडिओ ओळखला गेला!
            </div>
            <div style="font-size:0.75rem; color:#94a3b8; margin-top:2px;">
              व्हिडिओ ID: <code style="background:#1e293b; color:#38bdf8; padding:1px 6px; border-radius:4px;">${ytId}</code>
            </div>
            <div style="font-size:0.75rem; color:#cbd5e1; margin-top:4px;">
              <i class="fas fa-play-circle" style="color:#f59e0b;"></i> जोडल्यानंतर हा व्हिडिओ थेट वेबसाइटवरील गॅलरीत थंबनेल व प्लेअरसह दिसेल.
            </div>
          </div>
        </div>
      `;
    } else if (val.match(/^data:image\//i) || val.match(/\.(jpeg|jpg|png|gif|webp|svg)(\?.*)?$/i) || val.startsWith('http://') || val.startsWith('https://')) {
      // Photo / Image URL
      galleryLivePreviewContent.innerHTML = `
        <div style="margin-top:6px; display:flex; gap:10px; align-items:center; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:8px;">
          <img src="${val}" style="width:70px; height:50px; object-fit:cover; border-radius:4px; border:1px solid #cbd5e1;" onerror="this.parentElement.innerHTML='<span style=\\'color:#dc2626; font-size:0.8rem;\\'>⚠️ प्रतिमा लोड करता आली नाही. कृपया URL तपासा.</span>'">
          <div style="font-size:0.8rem; color:#475569; font-weight:600;"><i class="fas fa-image"></i> प्रतिमा URL प्रीव्ह्यू</div>
        </div>
      `;
    } else {
      galleryLivePreviewContent.innerHTML = `
        <div style="margin-top:6px; font-size:0.8rem; color:#94a3b8; padding:6px 10px; background:#f8fafc; border-radius:6px;">
          थेट इमेज URL किंवा YouTube व्हिडिओ लिंक टाका.
        </div>
      `;
    }
  }

  if (galleryUrlInput) {
    galleryUrlInput.addEventListener('input', updateGalleryUrlPreview);
    galleryUrlInput.addEventListener('change', updateGalleryUrlPreview);
    galleryUrlInput.addEventListener('paste', () => setTimeout(updateGalleryUrlPreview, 60));
  }

  function renderAdminGalleryList() {
    if (!adminGalleryItemsList) return;
    const items = getAdminGalleryItems();
    if (galleryCountBadge) galleryCountBadge.textContent = items.length;

    adminGalleryItemsList.innerHTML = '';
    if (items.length === 0) {
      adminGalleryItemsList.innerHTML = `<p style="padding:1.5rem; text-align:center; color:#94a3b8;">गॅलरीत सध्या कोणतेही फोटो किंवा व्हिडिओ नाहीत.</p>`;
      return;
    }

    const categoryNames = {
      workshops: 'कार्यशाळा क्षण',
      speeches: 'स्टेज सादरीकरण',
      practice: 'विद्यार्थी सराव'
    };

    items.forEach((item, index) => {
      const ytId = (typeof window.getYouTubeVideoId === 'function') 
        ? window.getYouTubeVideoId(item.url) 
        : null;
      const isVideo = item.type === 'video' || !!ytId;
      const card = document.createElement('div');
      card.className = 'admin-item-card';

      const thumbImg = (typeof window.getMediaThumbnail === 'function')
        ? window.getMediaThumbnail(item)
        : (ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : (item.url || 'assets/images/gallery-1.svg'));

      card.innerHTML = `
        <div style="position:relative; width:85px; height:65px; border-radius:6px; overflow:hidden; background:#0f172a; flex-shrink:0;">
          <img src="${thumbImg}" alt="${item.title}" style="width:100%; height:100%; object-fit:cover;" onerror="this.src='assets/images/gallery-1.svg'">
          ${isVideo ? `<span style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:${ytId ? '#ff0000' : '#fff'}; font-size:1.15rem; background:rgba(0,0,0,0.35);"><i class="${ytId ? 'fab fa-youtube' : 'fas fa-play-circle'}"></i></span>` : ''}
        </div>
        <div class="admin-item-info">
          <h5>${item.title}</h5>
          <p>${item.desc || 'वर्णन नाही'}</p>
          <div class="admin-item-meta">
            <span class="admin-media-badge ${isVideo ? 'video' : 'photo'}">
              <i class="${ytId ? 'fab fa-youtube' : (isVideo ? 'fas fa-video' : 'fas fa-camera')}"></i> ${ytId ? 'YouTube व्हिडिओ' : (isVideo ? 'व्हिडिओ' : 'फोटो')}
            </span>
            <span style="font-size:0.75rem; background:#f1f5f9; padding:2px 8px; border-radius:99px; color:#475569;">
              📂 ${categoryNames[item.category] || item.category}
            </span>
          </div>
        </div>
        <div class="admin-item-actions">
          <button type="button" class="btn btn-outline btn-sm admin-preview-media-btn" data-id="${item.id}" title="वेबसाइटवर पाहा">
            <i class="fas fa-eye"></i> पाहा
          </button>
          <button type="button" class="btn btn-outline btn-sm admin-delete-media-btn" data-id="${item.id}" style="color:#dc2626; border-color:#fca5a5;" title="हटवा">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      `;

      adminGalleryItemsList.appendChild(card);
    });

    // Attach Action Listeners
    adminGalleryItemsList.querySelectorAll('.admin-preview-media-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (typeof window.openMediaPreview === 'function') {
          window.openMediaPreview(id);
        }
      });
    });

    adminGalleryItemsList.querySelectorAll('.admin-delete-media-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (confirm('हा माध्यम घटक गॅलरीतून कायमचा हटवायचा आहे का?')) {
          let cur = getAdminGalleryItems();
          cur = cur.filter(x => String(x.id) !== String(id));
          saveAdminGalleryItems(cur);
          showToast('माध्यम गॅलरीतून यशस्वीरित्या हटवले गेले.');
        }
      });
    });
  }

  // Gallery File Dropzone change
  if (galleryFileInput) {
    galleryFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const mediaTypeEl = document.querySelector('input[name="mediaType"]:checked');
      const isVideo = mediaTypeEl && mediaTypeEl.value === 'video';

      if (isVideo || file.type.startsWith('video/')) {
        // Radio switch to video if detected
        const videoRadio = document.querySelector('input[name="mediaType"][value="video"]');
        if (videoRadio) videoRadio.checked = true;

        if (file.size > 15 * 1024 * 1024) {
          alert('व्हिडिओ फाइल १५MB पेक्षा मोठी आहे. स्थानिक स्टोरेजसाठी कृपया YouTube लिंक वापरा किंवा लहान व्हिडिओ क्लिप अपलोड करा.');
          return;
        }
        showToast('व्हिडिओ फाइल तयार होत आहे...');
        const reader = new FileReader();
        reader.onload = function(evt) {
          galleryUrlInput.value = evt.target.result;
          updateGalleryUrlPreview();
          showToast('व्हिडिओ अपलोड सज्ज! आता शीर्षक टाकून जोडा.');
        };
        reader.readAsDataURL(file);
      } else {
        // Photo
        const photoRadio = document.querySelector('input[name="mediaType"][value="photo"]');
        if (photoRadio) photoRadio.checked = true;

        showToast('फोटो कॉम्प्रेस होत आहे...');
        compressImage(file, 900, 750, 0.82, (compressedUrl) => {
          if (compressedUrl) {
            galleryUrlInput.value = compressedUrl;
            updateGalleryUrlPreview();
            showToast('फोटो अपलोड सज्ज! आता शीर्षक भरून गॅलरीत जोडा.');
          }
        });
      }
    });
  }

  if (galleryUploadForm) {
    galleryUploadForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const mediaTypeEl = document.querySelector('input[name="mediaType"]:checked');
      let type = mediaTypeEl ? mediaTypeEl.value : 'photo';
      const category = galleryCategory.value;
      const url = galleryUrlInput.value.trim();
      const title = galleryTitleInput.value.trim();
      const desc = galleryDescInput.value.trim();

      if (!title) {
        alert('कृपया गॅलरी माध्यमाचे शीर्षक टाका.');
        return;
      }
      if (!url) {
        alert('कृपया फाइल निवडा किंवा थेट URL टाका.');
        return;
      }

      // Check if URL is YouTube link
      const ytId = (typeof window.getYouTubeVideoId === 'function') 
        ? window.getYouTubeVideoId(url) 
        : null;

      if (ytId) {
        type = 'video';
      }

      const newItem = {
        id: 'gal-' + Date.now(),
        type,
        category,
        title,
        desc,
        url,
        youtubeId: ytId || undefined,
        thumbnail: ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : undefined
      };

      try {
        const cur = getAdminGalleryItems();
        cur.unshift(newItem);
        saveAdminGalleryItems(cur);
        galleryUploadForm.reset();
        updateGalleryUrlPreview();
        showToast(ytId 
          ? 'YouTube व्हिडिओ यशस्वीरित्या गॅलरीमध्ये जोडला गेला आणि वेबसाइटवर उपलब्ध झाला!' 
          : `नवीन ${type === 'video' ? 'व्हिडिओ' : 'फोटो'} गॅलरीमध्ये जोडला गेला!`
        );
      } catch (err) {
        console.error(err);
        showToast('साठवणूक मर्यादा ओलांडली. कृपया लहान आकाराची फाइल निवडा किंवा ऑनलाइन लिंक वापरा.', true);
      }
    });
  }

  if (resetGalleryBtn) {
    resetGalleryBtn.addEventListener('click', () => {
      if (confirm('तुम्हाला गॅलरीचे सर्व फोटो व व्हिडिओ डीफॉल्ट स्थितीत पूर्ववत करायचे आहेत का?')) {
        localStorage.removeItem('yp_gallery_items');
        if (typeof window.renderGalleryGrid === 'function') window.renderGalleryGrid();
        renderAdminGalleryList();
        updateGalleryUrlPreview();
        showToast('गॅलरी डीफॉल्ट स्थितीत पूर्ववत केली गेली!');
      }
    });
  }

  // =========================================================================
  // TAB 4: BLOG CMS (ADD, EDIT, DELETE)
  // =========================================================================
  const blogPostForm = document.getElementById('blogPostForm');
  const blogPostEditId = document.getElementById('blogPostEditId');
  const blogFormHeader = document.getElementById('blogFormHeader');
  const blogTitleInput = document.getElementById('blogTitleInput');
  const blogMetaInput = document.getElementById('blogMetaInput');
  const blogCoverUrlInput = document.getElementById('blogCoverUrlInput');
  const blogSnippetInput = document.getElementById('blogSnippetInput');
  const blogContentInput = document.getElementById('blogContentInput');
  const saveBlogBtn = document.getElementById('saveBlogBtn');
  const cancelBlogEditBtn = document.getElementById('cancelBlogEditBtn');
  const resetBlogBtn = document.getElementById('resetBlogBtn');
  const blogCountBadge = document.getElementById('blogCountBadge');
  const adminBlogPostsList = document.getElementById('adminBlogPostsList');

  function getAdminBlogPosts() {
    try {
      const raw = localStorage.getItem('yp_blog_posts');
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.error(e);
    }
    return (typeof DEFAULT_BLOG_ARTICLES !== 'undefined' ? DEFAULT_BLOG_ARTICLES : []);
  }

  function saveAdminBlogPosts(posts) {
    localStorage.setItem('yp_blog_posts', JSON.stringify(posts));
    if (typeof window.renderBlogGrid === 'function') {
      window.renderBlogGrid();
    }
    renderAdminBlogList();
  }

  function renderAdminBlogList() {
    if (!adminBlogPostsList) return;
    const posts = getAdminBlogPosts();
    if (blogCountBadge) blogCountBadge.textContent = posts.length;

    adminBlogPostsList.innerHTML = '';
    if (posts.length === 0) {
      adminBlogPostsList.innerHTML = `<p style="padding:1.5rem; text-align:center; color:#94a3b8;">सध्या कोणतेही ब्लॉग लेख उपलब्ध नाहीत.</p>`;
      return;
    }

    posts.forEach(post => {
      const card = document.createElement('div');
      card.className = 'admin-item-card';

      const title = post.title_mr || post.title || 'शीर्षक नाही';
      const snippet = post.snippet || (post.content_mr ? post.content_mr.replace(/<[^>]*>/g, '').slice(0, 95) + '...' : '');

      card.innerHTML = `
        <div style="width:44px; height:44px; border-radius:8px; background:linear-gradient(135deg, #f59e0b, #d97706); display:flex; align-items:center; justify-content:center; color:#fff; font-size:1.2rem; flex-shrink:0;">
          <i class="fas fa-newspaper"></i>
        </div>
        <div class="admin-item-info">
          <h5>${title}</h5>
          <p>${snippet}</p>
          <div class="admin-item-meta">
            <span><i class="far fa-clock"></i> ${post.meta || '५ मिनिटे वाचन'}</span>
            <span style="color:#d97706; font-weight:700;">आयडी: ${post.id}</span>
          </div>
        </div>
        <div class="admin-item-actions">
          <button type="button" class="btn btn-outline btn-sm admin-preview-blog-btn" data-id="${post.id}" title="संपूर्ण लेख पाहा">
            <i class="fas fa-eye"></i> पाहा
          </button>
          <button type="button" class="btn btn-primary btn-sm admin-edit-blog-btn" data-id="${post.id}" style="padding:4px 10px; font-size:0.8rem;" title="संपादित करा">
            <i class="fas fa-edit"></i> संपादित करा
          </button>
          <button type="button" class="btn btn-outline btn-sm admin-delete-blog-btn" data-id="${post.id}" style="color:#dc2626; border-color:#fca5a5;" title="हटवा">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      `;

      adminBlogPostsList.appendChild(card);
    });

    // Action listeners
    adminBlogPostsList.querySelectorAll('.admin-preview-blog-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (typeof window.openArticle === 'function') window.openArticle(id);
      });
    });

    adminBlogPostsList.querySelectorAll('.admin-edit-blog-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        startEditBlogPost(id);
      });
    });

    adminBlogPostsList.querySelectorAll('.admin-delete-blog-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (confirm('हा ब्लॉग लेख खरोखर हटवायचा आहे का?')) {
          let cur = getAdminBlogPosts();
          cur = cur.filter(x => String(x.id) !== String(id));
          saveAdminBlogPosts(cur);
          showToast('ब्लॉग लेख यशस्वीरित्या हटवला गेला.');
        }
      });
    });
  }

  function startEditBlogPost(id) {
    const posts = getAdminBlogPosts();
    const post = posts.find(p => String(p.id) === String(id));
    if (!post) return;

    if (blogPostEditId) blogPostEditId.value = post.id;
    if (blogTitleInput) blogTitleInput.value = post.title_mr || post.title || '';
    if (blogMetaInput) blogMetaInput.value = post.meta || '';
    if (blogCoverUrlInput) blogCoverUrlInput.value = post.coverImg || '';
    if (blogSnippetInput) blogSnippetInput.value = post.snippet || '';
    if (blogContentInput) blogContentInput.value = post.content_mr || post.content || '';

    if (blogFormHeader) {
      blogFormHeader.innerHTML = `<i class="fas fa-edit" style="color:var(--saffron-dark);"></i> लेख संपादित करत आहात: <span style="color:#0f172a;">${post.title_mr || post.title}</span>`;
    }
    if (saveBlogBtn) {
      saveBlogBtn.innerHTML = `<i class="fas fa-save"></i> बदल सेव्ह करा (Update Article)`;
    }
    if (cancelBlogEditBtn) {
      cancelBlogEditBtn.style.display = 'inline-flex';
    }

    blogPostForm.scrollIntoView({ behavior: 'smooth' });
  }

  function cancelEditBlogPost() {
    if (blogPostEditId) blogPostEditId.value = '';
    if (blogPostForm) blogPostForm.reset();
    if (blogFormHeader) {
      blogFormHeader.innerHTML = `<i class="fas fa-feather-alt"></i> नवीन लेख तयार करा (Write New Article)`;
    }
    if (saveBlogBtn) {
      saveBlogBtn.innerHTML = `<i class="fas fa-check-circle"></i> लेख सेव्ह करा व प्रसिद्ध करा`;
    }
    if (cancelBlogEditBtn) {
      cancelBlogEditBtn.style.display = 'none';
    }
  }

  if (cancelBlogEditBtn) {
    cancelBlogEditBtn.addEventListener('click', cancelEditBlogPost);
  }

  if (blogPostForm) {
    blogPostForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const editId = blogPostEditId.value;
      const title = blogTitleInput.value.trim();
      const meta = blogMetaInput.value.trim();
      const cover = blogCoverUrlInput.value.trim();
      const snippet = blogSnippetInput.value.trim();
      const content = blogContentInput.value.trim();

      if (!title || !snippet || !content) {
        alert('कृपया लेखाचे शीर्षक, सारांश आणि सविस्तर मजकूर भरा.');
        return;
      }

      let posts = getAdminBlogPosts();

      if (editId) {
        // Update existing article
        posts = posts.map(p => {
          if (String(p.id) === String(editId)) {
            return {
              ...p,
              title_mr: title,
              title_en: title,
              meta: meta || p.meta,
              coverImg: cover,
              snippet,
              content_mr: content,
              content_en: content
            };
          }
          return p;
        });
        showToast('ब्लॉग लेख यशस्वीरित्या अद्ययावत केला!');
      } else {
        // Create new article
        const newPost = {
          id: 'post-' + Date.now(),
          title_mr: title,
          title_en: title,
          meta: meta || '५ मिनिटे वाचन • योगिता पाटील • वक्तृत्व',
          coverImg: cover,
          snippet,
          content_mr: content,
          content_en: content
        };
        posts.unshift(newPost);
        showToast('नवीन ब्लॉग लेख यशस्वीरित्या प्रसिद्ध केला!');
      }

      saveAdminBlogPosts(posts);
      cancelEditBlogPost();
    });
  }

  if (resetBlogBtn) {
    resetBlogBtn.addEventListener('click', () => {
      if (confirm('तुम्हाला मूळ ४ ब्लॉग लेख पूर्ववत करायचे आहेत का?')) {
        localStorage.removeItem('yp_blog_posts');
        if (typeof window.renderBlogGrid === 'function') window.renderBlogGrid();
        renderAdminBlogList();
        cancelEditBlogPost();
        showToast('मूळ ब्लॉग लेख पूर्ववत केले गेले!');
      }
    });
  }

  // =========================================================================
  // TAB 5: LEADS & CRM LOGIC
  // =========================================================================
  const adminTableBody = document.getElementById('adminTableBody');
  const adminTotalCount = document.getElementById('adminTotalCount');
  const adminSangliCount = document.getElementById('adminSangliCount');
  const adminOnlineCount = document.getElementById('adminOnlineCount');
  const adminLeadsBadge = document.getElementById('adminLeadsBadge');
  const adminLeadsSearch = document.getElementById('adminLeadsSearch');
  const exportCsvBtn = document.getElementById('exportCsvBtn');
  const seedDemoBtn = document.getElementById('seedDemoBtn');
  const clearDataBtn = document.getElementById('clearDataBtn');

  function checkSeedData() {
    let existing = JSON.parse(localStorage.getItem('yp_workshop_registrations') || '[]');
    if (existing.length === 0) {
      const demoData = [
        {
          regId: "YP-482910",
          name: "सुनील विश्वासराव चव्हाण",
          phone: "9822154321",
          age: "२६ ते ४० वर्षे",
          city: "सांगली (चिंतामणीनगर)",
          course: "सांगली ऑफलाइन वीकेंड कार्यशाळा",
          experience: "थोडा अनुभव आहे, आत्मविश्वास हवा",
          date: "12/10/2026, 11:30 AM"
        },
        {
          regId: "YP-918234",
          name: "प्रियांका सागर जाधव",
          phone: "9423589120",
          age: "१८ ते २५ वर्षे",
          city: "कोल्हापूर (बिंदू चौक)",
          course: "कोल्हापूर ऑफलाइन वीकेंड कार्यशाळा",
          experience: "काहीच अनुभव नाही, खूप भीती वाटते",
          date: "12/10/2026, 03:15 PM"
        },
        {
          regId: "YP-324567",
          name: "अमित रवींद्र देशपांडे",
          phone: "9890123456",
          age: "२६ ते ४० वर्षे",
          city: "पुणे / ऑनलाइन",
          course: "ऑनलाइन लाइव्ह मास्टरक्लास (Zoom)",
          experience: "अधूनमधून बोलतो, भारदस्त भाषण करायचे आहे",
          date: "13/10/2026, 09:45 AM"
        }
      ];
      localStorage.setItem('yp_workshop_registrations', JSON.stringify(demoData));
    }
  }

  function renderAdminLeads() {
    let list = JSON.parse(localStorage.getItem('yp_workshop_registrations') || '[]');
    if (adminLeadsBadge) adminLeadsBadge.textContent = list.length;
    if (!adminTableBody) return;

    const searchTerm = (adminLeadsSearch ? adminLeadsSearch.value.trim().toLowerCase() : '');

    let sangliCount = 0;
    let onlineCount = 0;

    list.forEach(item => {
      if (item.city && item.city.toLowerCase().includes('सांगली')) sangliCount++;
      if ((item.course && item.course.toLowerCase().includes('ऑनलाइन')) || (item.city && item.city.toLowerCase().includes('ऑनलाइन'))) onlineCount++;
    });

    if (adminTotalCount) adminTotalCount.textContent = list.length;
    if (adminSangliCount) adminSangliCount.textContent = sangliCount;
    if (adminOnlineCount) adminOnlineCount.textContent = onlineCount;

    let filtered = list;
    if (searchTerm) {
      filtered = list.filter(item => {
        return (
          (item.name && item.name.toLowerCase().includes(searchTerm)) ||
          (item.phone && item.phone.includes(searchTerm)) ||
          (item.city && item.city.toLowerCase().includes(searchTerm)) ||
          (item.regId && item.regId.toLowerCase().includes(searchTerm)) ||
          (item.course && item.course.toLowerCase().includes(searchTerm))
        );
      });
    }

    adminTableBody.innerHTML = '';
    if (filtered.length === 0) {
      adminTableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 2rem; color:#94a3b8;">कोणतीही नोंदणी सापडली नाही.</td></tr>`;
      return;
    }

    filtered.forEach(item => {
      const cleanPhone = (item.phone || '').replace(/[^0-9]/g, '');
      const waMsg = `नमस्कार ${item.name || ''}, योगिता पाटील भाषणकला कार्यशाळेत नोंदणी केल्याबद्दल धन्यवाद!`;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong style="color:var(--primary-navy);">${item.regId || '#'}</strong></td>
        <td><strong>${item.name || '-'}</strong></td>
        <td><a href="tel:${cleanPhone}" style="color:#d97706; font-weight:700;"><i class="fas fa-phone-alt"></i> ${item.phone || '-'}</a></td>
        <td>${item.city || '-'}</td>
        <td><span style="font-size:0.8rem; background:#fef3c7; color:#92400e; padding:3px 8px; border-radius:99px; font-weight:700;">${item.course || '-'}</span></td>
        <td style="font-size:0.8rem; color:#64748b;">${item.date || '-'}</td>
        <td>
          <a href="https://wa.me/91${cleanPhone}?text=${encodeURIComponent(waMsg)}" 
             target="_blank" 
             class="btn btn-whatsapp btn-sm" 
             style="padding: 4px 10px; font-size: 0.8rem;">
             <i class="fab fa-whatsapp"></i> संपर्क
          </a>
        </td>
      `;
      adminTableBody.appendChild(tr);
    });
  }

  if (adminLeadsSearch) {
    adminLeadsSearch.addEventListener('input', renderAdminLeads);
  }

  // Export CSV (UTF-8 BOM support for Marathi)
  if (exportCsvBtn) {
    exportCsvBtn.addEventListener('click', () => {
      let list = JSON.parse(localStorage.getItem('yp_workshop_registrations') || '[]');
      if (list.length === 0) {
        alert('डाऊनलोड करण्यासाठी डेटा उपलब्ध नाही.');
        return;
      }

      let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
      csvContent += "नोंदणी क्रमांक,नाव,मोबाईल,शहर,अभ्यासक्रम,अनुभव,तारीख\n";

      list.forEach(row => {
        csvContent += `"${row.regId || ''}","${row.name || ''}","${row.phone || ''}","${row.city || ''}","${row.course || ''}","${row.experience || ''}","${row.date || ''}"\n`;
      });

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `Yogita_Patil_Registrations_${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('Excel/CSV फाइल डाउनलोड झाली!');
    });
  }

  if (clearDataBtn) {
    clearDataBtn.addEventListener('click', () => {
      if (confirm('तुम्हाला खरोखर सर्व नोंदणी डेटा हटवायचा आहे का?')) {
        localStorage.removeItem('yp_workshop_registrations');
        renderAdminLeads();
        showToast('सर्व नोंदणी डेटा हटवण्यात आला.');
      }
    });
  }

  if (seedDemoBtn) {
    seedDemoBtn.addEventListener('click', () => {
      localStorage.removeItem('yp_workshop_registrations');
      checkSeedData();
      renderAdminLeads();
      showToast('डेमो नोंदणी डेटा लोड केला गेला!');
    });
  }

  // Preload demo CRM records if completely empty
  checkSeedData();
});
