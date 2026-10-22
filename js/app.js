/**
 * Yogita Patil Bhashankala Karyashala - "बोला बिनधास्त!"
 * Main Application Logic & Language Engine with Dynamic CMS Integration
 */

// Default Gallery Items (Fallback if localStorage is empty)
const DEFAULT_GALLERY_ITEMS = [
  {
    id: "gal-1",
    type: "photo",
    category: "workshops",
    title: "सांगली प्रत्यक्ष बॅच",
    desc: "स्टेज भीतीमुक्ती सराव सत्र",
    url: "assets/images/gallery-1.svg"
  },
  {
    id: "gal-2",
    type: "video",
    category: "speeches",
    title: "कोल्हापूर भव्य मंच सादरीकरण",
    desc: "शाहू स्मारक सभागृहातील थेट सादरीकरण",
    url: "assets/images/gallery-2.svg"
  },
  {
    id: "gal-3",
    type: "photo",
    category: "workshops",
    title: "ऑनलाइन लाइव्ह मास्टरक्लास",
    desc: "महाराष्ट्र व देशभरातील विद्यार्थी",
    url: "assets/images/gallery-3.svg"
  },
  {
    id: "gal-4",
    type: "photo",
    category: "practice",
    title: "व्हॉईस कल्चर व देहबोली",
    desc: "वैयक्तिक व्हिडिओ रेकॉर्डिंग फीडबॅक",
    url: "assets/images/gallery-4.svg"
  },
  {
    id: "gal-5",
    type: "photo",
    category: "practice",
    title: "महिला सक्षमीकरण विशेष",
    desc: "संकोच मुक्ती व संवाद कौशल्य",
    url: "assets/images/gallery-5.svg"
  },
  {
    id: "gal-6",
    type: "photo",
    category: "speeches",
    title: "प्रमाणपत्र वितरण सोहळा",
    desc: "आत्मविश्वासी वक्त्यांचा दीक्षांत गौरव",
    url: "assets/images/gallery-6.svg"
  }
];

// Default Blog Posts
const DEFAULT_BLOG_ARTICLES = [
  {
    id: "1",
    title_mr: "स्टेजवर बोलताना भीती का वाटते आणि ५ सोप्या उपायांनी ती कशी घालवावी?",
    title_en: "Why Do We Feel Stage Fear and How to Overcome It with 5 Simple Habits?",
    meta: "५ मिनिटे वाचन • योगिता पाटील • वक्तृत्व मानसशास्त्र",
    snippet: "व्यासपीठावर उभे राहताच अनेकांचे पाय थरथरतात आणि घसा कोरडा पडतो. ही जैविक प्रतिक्रिया का होते आणि त्यावर मात कशी करायची, जाणून घ्या...",
    content_mr: `
      <p><strong>स्टेजच्या भीतीचे मानसशास्त्र:</strong></p>
      <p>जेव्हा आपण शेकडो लोकांच्या नजरा आपल्यावर रोखलेल्या पाहतो, तेव्हा आपला मेंदू त्याला धोक्याचा इशारा (Fight or Flight) समजतो. यामुळे शरीरात एड्रेनालिन हार्मोन वाढतो, ज्यामुळे छातीतील धडधड वाढते, हात-पाय थरथरतात आणि तोंड कोरडे पडते. ही एक पूर्णपणे नैसर्गिक जैविक प्रतिक्रिया आहे.</p>
      <br>
      <h4>भीतीवर मात करण्याचे ५ सिद्ध उपाय:</h4>
      <ol style="margin-left: 1.5rem; line-height: 1.8;">
        <li><strong>४-७-८ श्वसन तंत्र (Deep Breathing):</strong> स्टेजवर जाण्यापूर्वी ५ मिनिटे ४ सेकंद श्वास घ्या, ७ सेकंद रोखा आणि ८ सेकंदात हळूहळू सोडा. यामुळे मेंदू शांत होतो.</li>
        <li><strong>पहिल्या ३० सेकंदांची पक्की तयारी:</strong> भाषणाची पहिली ३-४ वाक्ये घोकून नव्हे तर मनात दृढ ठेवा. एकदा पहिली ३० सेकंदे सुरळीत पार पडली की भीती आपोआप नाहीशी होते.</li>
        <li><strong>श्रोत्यांना परीक्षक नव्हे तर मित्र समजा:</strong> श्रोते तुमचे भाषण ऐकायला आले आहेत, तुम्हाला हरवायला नव्हे! ते तुमच्या बाजूने आहेत हा विश्वास ठेवा.</li>
        <li><strong>३-बिंदू नजरभेट (Triangle Eye Contact):</strong> थेट एकाच व्यक्तीकडे पाहू नका. सभागृहाच्या डाव्या, मध्य आणि उजव्या कोपऱ्यात मित्रत्वाचे चेहरे शोधून त्यांच्याशी संवाद साधा.</li>
        <li><strong>प्रत्यक्ष पोडियम सराव:</strong> खोलीत एकटे बोलणे आणि माइकवर बोलणे यात फरक असतो. कार्यशाळेसारख्या सुरक्षित वातावरणात सराव करा.</li>
      </ol>
    `,
    content_en: `
      <p><strong>The Psychology of Stage Fright:</strong></p>
      <p>When hundreds of eyes fixate on you, your primitive brain interprets it as physical danger. It triggers the adrenaline-driven 'fight-or-flight' response, accelerating heart rates and tightening throats. It is not an intellectual defect; it is pure evolutionary biology.</p>
      <br>
      <h4>5 Actionable Hacks to Overcome It:</h4>
      <ol style="margin-left: 1.5rem; line-height: 1.8;">
        <li><strong>The 4-7-8 Breathing Drill:</strong> Inhale for 4s, hold for 7s, exhale slowly for 8s. Resets nervous cortisol levels.</li>
        <li><strong>Master the First 30 Seconds:</strong> Bulletproof your opening remarks. Once initial momentum is established, adrenaline subsides.</li>
        <li><strong>Reframe Audience Perception:</strong> Audiences root for speakers to succeed; they are allies, not examiners.</li>
        <li><strong>Triangle Eye Gaze:</strong> Alternate attention smoothly between left, center, and right quadrants of the audience.</li>
        <li><strong>Simulated Podium Drills:</strong> Practice in safe, supportive workshop environments to desensitize anxiety.</li>
      </ol>
    `
  },
  {
    id: "2",
    title_mr: "भाषणाची सुरुवात कशी करावी? श्रोत्यांना खिळवून ठेवणारे ५ फॉर्म्युले",
    title_en: "How to Begin Your Speech? 5 Proven Formulas to Hook Your Audience",
    meta: "४ मिनिटे वाचन • योगिता पाटील • भाषण रचना",
    snippet: "भाषणाचे पहिले ३० सेकंद सर्वात महत्त्वाचे असतात. जर सुरुवात दमदार असेल तर संपूर्ण सभागृह शांततेने तुमचे विचार ऐकते. शिका सुरुवात करण्याचे नियम...",
    content_mr: `
      <p>भाषणातील सर्वात मोठी चूक म्हणजे जुनाट, कंटाळवाणी सुरुवात करणे (उदा. "आज मला बोलण्याची संधी दिली म्हणून आभार..."). यामुळे श्रोते पहिल्या क्षणीच फोनमध्ये डोके खुपसतात.</p>
      <br>
      <h4>प्रभावी सुरुवातीचे ५ जबरदस्त फॉर्म्युले:</h4>
      <ul style="margin-left: 1.5rem; line-height: 1.8;">
        <li><strong>१. धक्कादायक प्रश्न विचारा:</strong> "येथे उपस्थित किती लोकांना वाटते की आयुष्यात एकदा तरी स्वतःचे विचार ठामपणे मांडता यावेत?" सर्व हात वर येतील आणि श्रोते जोडले जातील.</li>
        <li><strong>२. लहान, भावनिक प्रसंग किंवा गोष्ट सांगा:</strong> "१२ वर्षांपूर्वी एका लहानशा गावात एक मुलगी स्टेजवर बोलताना रडू लागली होती..." कथा नेहमी माणसाला आकर्षित करतात.</li>
        <li><strong>३. दमदार शेर किंवा सुविचार:</strong> विषयाला साजेसा काव्यमय शेर अथवा महाराजांचे, संतांचे प्रेरक विचार.</li>
        <li><strong>४. धक्कादायक आकडेवारी:</strong> "तुम्हाला माहित आहे का, जगातील ७३% लोक मृत्यूच्या भीतीपेक्षा भाषणाच्या भीतीला जास्त घाबरतात?"</li>
        <li><strong>५. थेट कृती किंवा कल्पनेचे आव्हान:</strong> "क्षणभर डोळे मिटा आणि कल्पना करा..."</li>
      </ul>
    `,
    content_en: `
      <p>The most common failure in public speaking is a dull, apologetic opening. The first 30 seconds dictate whether the audience is captivated or checks their phones.</p>
      <br>
      <h4>5 Proven Opening Hooks:</h4>
      <ul style="margin-left: 1.5rem; line-height: 1.8;">
        <li><strong>1. The Engaging Show-of-Hands Question:</strong> Pose a relatable dilemma that compels immediate engagement.</li>
        <li><strong>2. The 60-Second Story:</strong> Begin in media res with conflict and emotional resonance.</li>
        <li><strong>3. Impactful Quote or Poetic Couplet:</strong> Grounded in context to invoke instant gravity.</li>
        <li><strong>4. Counter-Intuitive Statistic:</strong> Shock the audience out of autopilot thinking.</li>
        <li><strong>5. The "Imagine If" Scenario:</strong> Invite active audience visualization.</li>
      </ul>
    `
  },
  {
    id: "3",
    title_mr: "ऐनवेळी भाषण करायला सांगितले तर काय करावे? (P.R.E.P. फॉर्म्युला)",
    title_en: "Asked to Speak Unexpectedly? Master the Extempore P.R.E.P. Framework",
    meta: "३ मिनिटे वाचन • योगिता पाटील • ऐनवेळचे भाषण",
    snippet: "अचानक कोणी माईक हातात दिला तर घाबरून न जाता P.R.E.P. या जगप्रसिद्ध सूत्राचा वापर करून प्रभावी भाषण कसे करावे...",
    content_mr: `
      <p>अनेकदा कौटुंबिक लग्नसोहळ्यात, ऑफिसच्या बैठकीत किंवा सार्वजनिक कार्यक्रमात अचानक उद्घोषक म्हणतो, "आता आपले मनोगत व्यक्त करतील आपले लाडके..." अशा वेळी छातीत धस्स होते. घाबरू नका! वापरा हा फॉर्म्युला:</p>
      <br>
      <h4>P.R.E.P. फॉर्म्युला:</h4>
      <ul style="margin-left: 1.5rem; line-height: 1.8;">
        <li><strong>P - Point (मुख्य मुद्दा):</strong> पहिल्या वाक्यात स्पष्ट मत मांडा. (उदा. "आजचा हा सोहळा केवळ आनंद नव्हे तर नव्या सुरुवातीचा साक्षीदार आहे.")</li>
        <li><strong>R - Reason (कारण द्या):</strong> ते मत का आहे त्याचे कारण सांगा. (उदा. "कारण जेव्हा दोन कुटुंबे एकत्र येतात...")</li>
        <li><strong>E - Example (उदाहरण/प्रसंग):</strong> एक लहान आठवण किंवा घटना सांगा. (उदा. "गेल्या महिन्यात जेव्हा आम्ही भेटलो होतो...")</li>
        <li><strong>P - Point (पुनरुच्चार व समारोप):</strong> पुन्हा पहिल्या मुद्द्याकडे वळून शुभेच्छा देऊन भाषण संपवा. (उदा. "म्हणूनच मी नवदाम्पत्याला उज्ज्वल भविष्यासाठी शुभेच्छा देतो.")</li>
      </ul>
    `,
    content_en: `
      <p>Caught off-guard when unexpectedly invited to say a few words? Never apologize or explain unpreparedness. Simply execute the world-renowned P.R.E.P. framework:</p>
      <br>
      <h4>The P.R.E.P. Architecture:</h4>
      <ul style="margin-left: 1.5rem; line-height: 1.8;">
        <li><strong>P - Point:</strong> State your core message crisply without waffle.</li>
        <li><strong>R - Reason:</strong> State why this thesis matters to everyone present.</li>
        <li><strong>E - Example:</strong> Provide a specific memory, anecdote, or evidence.</li>
        <li><strong>P - Point Restatement:</strong> Conclude firmly reinforcing your initial message with celebratory warmth.</li>
      </ul>
    `
  },
  {
    id: "4",
    title_mr: "आवाजातील चढ-उतार आणि देहबोली: भाषणाला जिवंत करणारी ताकद",
    title_en: "Voice Modulation and Body Language: The Hidden Secret of Powerful Speeches",
    meta: "४ मिनिटे वाचन • योगिता पाटील • व्हॉईस कल्चर",
    snippet: "केवळ चांगले शब्द असून चालत नाही; आवाजातील खर्जातला बेस, योग्य ठिकाणी पॉज आणि हातांच्या हालचाली भाषणाला जिवंत बनवतात...",
    content_mr: `
      <p>अल्बर्ट मेहराबियन यांच्या जगप्रसिद्ध संशोधानुसार, कोणत्याही संवादात <strong>शब्दांचा प्रभाव केवळ ७%</strong>, <strong>आवाजाच्या चढ-उताराचा प्रभाव ३८%</strong> आणि <strong>देहबोलीचा प्रभाव ५५%</strong> असतो!</p>
      <br>
      <h4>आवाज व देहबोली सुधारण्याचे नियम:</h4>
      <ul style="margin-left: 1.5rem; line-height: 1.8;">
        <li><strong>विराम (The Power of Pause):</strong> सलग न बोलता महत्त्वाच्या वाक्यानंतर २ सेकंदांचा पॉज घ्या. श्रोत्यांना विचार पचवू द्या.</li>
        <li><strong>खुले हात (Open Gestures):</strong> हात खिशात घालणे किंवा घडी घालणे टाळा. छातीच्या व नाभीच्या दरम्यान हात खुले ठेवून बोलल्यास प्रामाणिकपणा दिसतो.</li>
        <li><strong>पाठीचा कणा ताठ (Confident Posture):</strong> पोडियमवर रेलून उभे राहू नका. दोन्ही पायांवर समान भार ठेवून ताठ उभे राहा.</li>
        <li><strong>चेहऱ्यावरील स्मितहास्य:</strong> गंभीर विषयाव्यतिरिक्त चेहऱ्यावर प्रसन्नता ठेवा. हास्य श्रोत्यांचा तणाव दूर करते.</li>
      </ul>
    `,
    content_en: `
      <p>According to Dr. Albert Mehrabian's classic communication research: <strong>Verbal words account for only 7%</strong>, <strong>Tone & Voice Modulation 38%</strong>, and <strong>Body Language a staggering 55%</strong> of emotional message transmission.</p>
      <br>
      <h4>Vocal Culture & Stage Kinesthetics:</h4>
      <ul style="margin-left: 1.5rem; line-height: 1.8;">
        <li><strong>The Power of Deliberate Pauses:</strong> Silence emphasizes authority. Pause before and after pivotal words.</li>
        <li><strong>Open Palm Kinesthetics:</strong> Never fold arms or keep hands jammed in pockets.</li>
        <li><strong>Anchored Posture:</strong> Ground both feet hip-width apart; avoid leaning on the lectern.</li>
        <li><strong>Warm Facial Presence:</strong> Genuine micro-smiles release oxytocin and disarm audience skepticism.</li>
      </ul>
    `
  }
];

// YouTube Video ID and Thumbnail Extraction Helpers
function getYouTubeVideoId(url) {
  if (!url || typeof url !== 'string') return null;
  const trimmed = url.trim();
  const iframeMatch = trimmed.match(/src=["'](?:https?:)?\/\/(?:www\.)?youtube(?:-nocookie)?\.com\/embed\/([\w-]{11})/i);
  if (iframeMatch && iframeMatch[1]) return iframeMatch[1];
  const regExp = /(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|v\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/i;
  const match = trimmed.match(regExp);
  return (match && match[1]) ? match[1] : null;
}
window.getYouTubeVideoId = getYouTubeVideoId;

function getMediaThumbnail(item) {
  if (!item) return 'assets/images/gallery-1.svg';
  const ytId = getYouTubeVideoId(item.url);
  if (ytId) {
    return `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
  }
  if (item.thumbnail) return item.thumbnail;
  if (item.url && !item.url.startsWith('data:video') && !item.url.endsWith('.mp4') && !item.url.endsWith('.webm') && !item.url.endsWith('.ogg')) {
    return item.url;
  }
  return (item.type === 'video' ? 'assets/images/gallery-2.svg' : 'assets/images/gallery-1.svg');
}
window.getMediaThumbnail = getMediaThumbnail;

// Helper to retrieve Gallery data safely
function getStoredGallery() {
  try {
    const raw = localStorage.getItem('yp_gallery_items');
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading gallery items:', e);
  }
  return DEFAULT_GALLERY_ITEMS;
}

// Helper to retrieve Blog data safely
function getStoredBlogPosts() {
  try {
    const raw = localStorage.getItem('yp_blog_posts');
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading blog posts:', e);
  }
  return DEFAULT_BLOG_ARTICLES;
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Switcher Engine
  let currentLang = localStorage.getItem('bhashan_lang') || 'mr';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('bhashan_lang', lang);
    document.documentElement.lang = lang;
    
    if (lang === 'en') {
      document.body.classList.add('lang-en');
    } else {
      document.body.classList.remove('lang-en');
    }

    const dict = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang] : (typeof translations !== 'undefined' ? translations.mr : {});

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict && dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Translate placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict && dict[key]) {
        el.placeholder = dict[key];
      }
    });

    // Update Language Toggle Button Text
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
      if (lang === 'mr') {
        langBtn.innerHTML = '<i class="fas fa-globe"></i> <span class="lang-text-desktop">English मध्ये पहा</span><span class="lang-text-mobile">English</span>';
      } else {
        langBtn.innerHTML = '<i class="fas fa-globe"></i> <span class="lang-text-desktop">मराठी मध्ये पहा</span><span class="lang-text-mobile">मराठी</span>';
      }
    }

    // Re-apply admin CMS customization over Marathi text if applicable
    applyCmsData();

    // Re-render blog grid with appropriate language titles if available
    window.renderBlogGrid();
  }

  // Toggle Language Click
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const newLang = currentLang === 'mr' ? 'en' : 'mr';
      applyLanguage(newLang);
    });
  }

  // 2. CMS Dynamic Content Engine (Hero, About, Contact)
  window.applyCmsData = function() {
    // A. Apply Hero Section Content
    try {
      const heroDataRaw = localStorage.getItem('yp_hero_content');
      if (heroDataRaw) {
        const hero = JSON.parse(heroDataRaw);
        
        if (hero.badge) {
          if (typeof translations !== 'undefined' && translations.mr) translations.mr.hero_badge = hero.badge;
          const badgeEl = document.querySelector('[data-i18n="hero_badge"]');
          if (badgeEl && currentLang === 'mr') {
            badgeEl.innerHTML = `<i class="fas fa-fire"></i> ` + hero.badge.replace(/^🔥\s*/, '');
          }
        }
        if (hero.prefix) {
          if (typeof translations !== 'undefined' && translations.mr) translations.mr.hero_title_prefix = hero.prefix;
          document.querySelectorAll('[data-i18n="hero_title_prefix"]').forEach(el => {
            if (currentLang === 'mr') el.textContent = hero.prefix;
          });
        }
        if (hero.title) {
          if (typeof translations !== 'undefined' && translations.mr) {
            translations.mr.hero_main_title = hero.title;
            translations.mr.hero_title_main = hero.title;
          }
          document.querySelectorAll('[data-i18n="hero_main_title"], [data-i18n="hero_title_main"]').forEach(el => {
            if (currentLang === 'mr') el.textContent = hero.title;
          });
        }
        if (hero.subtitle) {
          if (typeof translations !== 'undefined' && translations.mr) translations.mr.hero_subtitle = hero.subtitle;
          const subEl = document.querySelector('.hero-subtitle [data-i18n="hero_subtitle"]');
          if (subEl && currentLang === 'mr') subEl.textContent = hero.subtitle;
        }
        if (hero.desc) {
          if (typeof translations !== 'undefined' && translations.mr) {
            translations.mr.hero_description = hero.desc;
            translations.mr.hero_desc = hero.desc;
          }
          document.querySelectorAll('[data-i18n="hero_description"], [data-i18n="hero_desc"]').forEach(el => {
            if (currentLang === 'mr') el.textContent = hero.desc;
          });
        }
        // Bullets
        ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'].forEach(f => {
          if (hero[f]) {
            if (typeof translations !== 'undefined' && translations.mr) translations.mr['hero_' + f] = hero[f];
            const el = document.querySelector(`[data-i18n="hero_${f}"]`);
            if (el && currentLang === 'mr') el.textContent = hero[f];
          }
        });
        if (hero.trust) {
          if (typeof translations !== 'undefined' && translations.mr) translations.mr.hero_trust_badge = hero.trust;
          const trustEl = document.querySelector('[data-i18n="hero_trust_badge"]');
          if (trustEl && currentLang === 'mr') trustEl.textContent = hero.trust;
        }
        if (hero.photo) {
          const heroImg = document.getElementById('heroSpeakerImg');
          if (heroImg) heroImg.src = hero.photo;
        }
      }
    } catch (e) {
      console.error('Error applying Hero CMS data:', e);
    }

    // B. Apply Site Content (About & Contact)
    try {
      const siteDataRaw = localStorage.getItem('yp_site_content');
      if (siteDataRaw) {
        const site = JSON.parse(siteDataRaw);
        
        if (site.aboutQuote) {
          if (typeof translations !== 'undefined' && translations.mr) translations.mr.about_subtitle = site.aboutQuote;
          const quoteEl = document.querySelector('[data-i18n="about_subtitle"]');
          if (quoteEl && currentLang === 'mr') quoteEl.textContent = site.aboutQuote;
        }
        if (site.aboutExp) {
          const expEl = document.getElementById('aboutExpNum');
          if (expEl) expEl.textContent = site.aboutExp;
        }
        if (site.aboutPhoto) {
          const portraitImg = document.getElementById('aboutPortraitImg');
          if (portraitImg) portraitImg.src = site.aboutPhoto;
        }
        if (site.aboutP1) {
          if (typeof translations !== 'undefined' && translations.mr) translations.mr.about_p1 = site.aboutP1;
          const p1El = document.querySelector('[data-i18n="about_p1"]');
          if (p1El && currentLang === 'mr') p1El.innerHTML = site.aboutP1;
        }
        if (site.aboutP2) {
          if (typeof translations !== 'undefined' && translations.mr) translations.mr.about_p2 = site.aboutP2;
          const p2El = document.querySelector('[data-i18n="about_p2"]');
          if (p2El && currentLang === 'mr') p2El.innerHTML = site.aboutP2;
        }
        if (site.aboutP3) {
          if (typeof translations !== 'undefined' && translations.mr) translations.mr.about_p3 = site.aboutP3;
          const p3El = document.querySelector('[data-i18n="about_p3"]');
          if (p3El && currentLang === 'mr') p3El.innerHTML = site.aboutP3;
        }
        if (site.helplineText) {
          if (typeof translations !== 'undefined' && translations.mr) translations.mr.emergency_call_text = site.helplineText;
          const helpEl = document.querySelector('[data-i18n="emergency_call_text"]');
          if (helpEl && currentLang === 'mr') helpEl.textContent = site.helplineText;
        }
        if (site.phone1) {
          document.querySelectorAll('a[href^="tel:"]').forEach(a => {
            const rawPhone = site.phone1.replace(/\s+/g, '');
            if (a.href.includes('8999791550')) {
              a.href = 'tel:' + rawPhone;
              if (a.textContent.includes('89997')) {
                a.innerHTML = a.innerHTML.replace(/\+91\s*89997\s*91550/g, site.phone1);
              }
            }
          });
        }
        if (site.waPhone) {
          const cleanWa = site.waPhone.replace(/[^0-9]/g, '');
          document.querySelectorAll('a[href*="wa.me/"]').forEach(a => {
            if (a.href.includes('8999791550')) {
              a.href = a.href.replace(/wa\.me\/918999791550/g, 'wa.me/' + cleanWa);
              if (a.innerHTML.includes('89997')) {
                a.innerHTML = a.innerHTML.replace(/\+91\s*89997\s*91550/g, site.waPhone);
              }
            }
          });
        }
        if (site.email) {
          document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
            a.href = 'mailto:' + site.email;
            a.textContent = site.email;
          });
        }
      }
    } catch (e) {
      console.error('Error applying Site Content CMS data:', e);
    }
  };

  // 3. Dynamic Photo & Video Gallery Engine
  window.renderGalleryGrid = function() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    const items = getStoredGallery();
    galleryGrid.innerHTML = '';

    if (!items || items.length === 0) {
      galleryGrid.innerHTML = `<p style="grid-column:1 / -1; text-align:center; padding:2.5rem; color:var(--text-muted);">गॅलरीत सध्या कोणतेही फोटो किंवा व्हिडिओ नाहीत.</p>`;
      return;
    }

    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'gallery-item';
      card.setAttribute('data-category', item.category || 'workshops');
      card.style.cursor = 'pointer';
      card.setAttribute('title', item.title || 'गॅलरी मीडिया');

      const ytId = window.getYouTubeVideoId(item.url);
      const isVideo = item.type === 'video' || !!ytId;
      card.setAttribute('data-type', isVideo ? 'video' : 'photo');

      const playBtn = isVideo 
        ? `<div class="gallery-play-btn" style="${ytId ? 'background:#ff0000; box-shadow:0 4px 15px rgba(255,0,0,0.5);' : ''}"><i class="fas fa-play"></i></div>` 
        : '';
      const mediaBadge = isVideo
        ? `<span class="admin-media-badge video" style="position:absolute; top:12px; left:12px; z-index:4;"><i class="fas fa-video"></i> व्हिडिओ</span>`
        : `<span class="admin-media-badge photo" style="position:absolute; top:12px; left:12px; z-index:4;"><i class="fas fa-camera"></i> फोटो</span>`;
      const ytBadge = ytId
        ? `<span class="gallery-youtube-badge" style="position:absolute; top:12px; right:12px; z-index:4; background:#ff0000; color:#fff; font-size:0.75rem; font-weight:700; padding:2px 8px; border-radius:99px; display:inline-flex; align-items:center; gap:4px; box-shadow:0 2px 6px rgba(0,0,0,0.3);"><i class="fab fa-youtube"></i> YouTube</span>`
        : '';

      const displayImg = window.getMediaThumbnail(item);

      card.innerHTML = `
        ${mediaBadge}
        ${ytBadge}
        <img src="${displayImg}" alt="${item.title}" style="width:100%; height:260px; object-fit:cover; display:block;" onerror="this.src='assets/images/gallery-1.svg'">
        <div class="gallery-overlay">
          <h4>${item.title}</h4>
          <p>${item.desc || ''}</p>
        </div>
        ${playBtn}
      `;

      card.addEventListener('click', () => {
        window.openMediaPreview(item.id);
      });

      galleryGrid.appendChild(card);
    });

    // Re-apply current active category filter
    const activeBtn = document.querySelector('.gallery-filter-btn.active');
    const activeFilter = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
    filterGalleryItems(activeFilter);
  };

  function filterGalleryItems(filterValue) {
    const items = document.querySelectorAll('#galleryGrid .gallery-item');
    items.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      const itemType = item.getAttribute('data-type');
      if (filterValue === 'all') {
        item.style.display = 'block';
      } else if (filterValue === 'video') {
        item.style.display = (itemType === 'video') ? 'block' : 'none';
      } else if (itemCategory === filterValue) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Gallery Filter Tabs Click Listener
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterGalleryItems(btn.getAttribute('data-filter'));
    });
  });

  // Media Preview Modal (Lightbox / Video Player)
  const mediaPreviewModal = document.getElementById('mediaPreviewModal');
  const mediaPreviewModalClose = document.getElementById('mediaPreviewModalClose');
  const mediaPreviewContainer = document.getElementById('mediaPreviewContainer');
  const mediaPreviewTitle = document.getElementById('mediaPreviewTitle');
  const mediaPreviewDesc = document.getElementById('mediaPreviewDesc');

  function closeMediaPreview() {
    if (mediaPreviewModal) mediaPreviewModal.classList.remove('open');
    if (mediaPreviewContainer) mediaPreviewContainer.innerHTML = '';
  }

  window.openMediaPreview = function(mediaId) {
    const items = getStoredGallery();
    const item = items.find(i => String(i.id) === String(mediaId));
    if (!item || !mediaPreviewModal || !mediaPreviewContainer) return;

    mediaPreviewContainer.innerHTML = '';
    const ytId = window.getYouTubeVideoId(item.url);
    const isVideo = item.type === 'video' || !!ytId;

    if (isVideo) {
      if (ytId) {
        mediaPreviewContainer.innerHTML = `
          <div style="position:relative; width:100%; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:8px; background:#000;">
            <iframe 
              src="https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1" 
              title="${item.title || 'YouTube Video'}" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen 
              style="position:absolute; top:0; left:0; width:100%; height:100%; border:none; border-radius:8px;">
            </iframe>
          </div>
          <div style="margin-top:0.85rem; display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap;">
            <a href="https://www.youtube.com/watch?v=${ytId}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" style="color:#ff0000; border-color:#ff0000; font-weight:700; display:inline-flex; align-items:center; gap:0.4rem;">
              <i class="fab fa-youtube" style="font-size:1.1rem;"></i> YouTube वर थेट पाहा (Watch on YouTube)
            </a>
          </div>
        `;
      } else if (item.url && (item.url.startsWith('data:video') || item.url.endsWith('.mp4') || item.url.endsWith('.webm') || item.url.endsWith('.ogg'))) {
        // Direct HTML5 video
        mediaPreviewContainer.innerHTML = `
          <video src="${item.url}" controls autoplay playsinline style="max-width:100%; max-height:70vh; border-radius:8px; width:100%;"></video>
        `;
      } else {
        // Fallback illustration
        mediaPreviewContainer.innerHTML = `
          <div style="position:relative; width:100%; max-width:600px; margin:0 auto;">
            <img src="${item.url || 'assets/images/gallery-2.svg'}" alt="${item.title}" style="max-width:100%; max-height:70vh; object-fit:contain; border-radius:8px;" onerror="this.src='assets/images/gallery-2.svg'">
            <div style="padding:1rem; color:#94a3b8; font-size:0.85rem;">
              <i class="fas fa-info-circle"></i> व्हिडिओ फाइल किंवा YouTube लिंक जोडल्यावर येथे थेट प्लेअर सुरू होईल.
            </div>
          </div>
        `;
      }
    } else {
      // Photo Lightbox
      mediaPreviewContainer.innerHTML = `
        <img src="${item.url}" alt="${item.title}" style="max-width:100%; max-height:70vh; object-fit:contain; border-radius:8px;" onerror="this.src='assets/images/gallery-1.svg'">
      `;
    }

    if (mediaPreviewTitle) mediaPreviewTitle.textContent = item.title;
    if (mediaPreviewDesc) mediaPreviewDesc.textContent = item.desc || '';

    mediaPreviewModal.classList.add('open');
  };

  if (mediaPreviewModalClose) {
    mediaPreviewModalClose.addEventListener('click', closeMediaPreview);
  }

  if (mediaPreviewModal) {
    mediaPreviewModal.addEventListener('click', (e) => {
      if (e.target === mediaPreviewModal) {
        closeMediaPreview();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mediaPreviewModal && mediaPreviewModal.classList.contains('open')) {
      closeMediaPreview();
    }
  });

  // 4. Dynamic Blog Engine (Cards & Full Article Reader)
  window.renderBlogGrid = function() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    const posts = getStoredBlogPosts();
    blogGrid.innerHTML = '';

    posts.forEach(art => {
      const card = document.createElement('div');
      card.className = 'blog-card';
      card.style.cursor = 'pointer';

      const title = currentLang === 'mr' ? (art.title_mr || art.title) : (art.title_en || art.title_mr || art.title);
      const meta = art.meta || (currentLang === 'mr' ? '५ मिनिटे वाचन • योगिता पाटील • वक्तृत्व' : '5 mins read • Yogita Patil • Public Speaking');
      const snippet = art.snippet || (art.content_mr ? art.content_mr.replace(/<[^>]*>/g, '').slice(0, 140) + '...' : '');

      let coverHtml = '';
      if (art.coverImg) {
        coverHtml = `
          <div style="height:150px; overflow:hidden; border-radius:8px; margin-bottom:0.75rem;">
            <img src="${art.coverImg}" alt="${title}" style="width:100%; height:100%; object-fit:cover;">
          </div>
        `;
      }

      card.innerHTML = `
        ${coverHtml}
        <div class="blog-meta-badge">${meta}</div>
        <h3 class="blog-card-title">${title}</h3>
        <p class="blog-card-snippet">${snippet}</p>
        <div class="blog-read-link">${currentLang === 'mr' ? 'संपूर्ण लेख वाचा →' : 'Read Full Article →'}</div>
      `;

      card.addEventListener('click', () => {
        window.openArticle(art.id);
      });

      blogGrid.appendChild(card);
    });
  };

  const articleModal = document.getElementById('articleModal');
  const articleModalClose = document.getElementById('articleModalClose');
  const articleModalBody = document.getElementById('articleModalBody');

  window.openArticle = function(articleId) {
    const posts = getStoredBlogPosts();
    const art = posts.find(p => String(p.id) === String(articleId));
    if (!art || !articleModal || !articleModalBody) return;

    const title = currentLang === 'mr' ? (art.title_mr || art.title) : (art.title_en || art.title_mr || art.title);
    const body = currentLang === 'mr' ? (art.content_mr || art.content || art.snippet) : (art.content_en || art.content_mr || art.content || art.snippet);

    let coverMarkup = '';
    if (art.coverImg) {
      coverMarkup = `<div style="max-height:260px; overflow:hidden; border-radius:10px; margin-bottom:1.5rem;"><img src="${art.coverImg}" alt="${title}" style="width:100%; height:100%; object-fit:cover;"></div>`;
    }

    articleModalBody.innerHTML = `
      ${coverMarkup}
      <div style="font-size:0.85rem; color:var(--saffron-dark); font-weight:700; margin-bottom:0.4rem;">${art.meta || ''}</div>
      <h2 style="font-size: 1.6rem; font-weight: 800; color: #0f172a; margin-bottom: 1.25rem; line-height: 1.35;">${title}</h2>
      <div style="font-size: 1.05rem; color: #334155; line-height: 1.75;">${body}</div>
      <div style="margin-top: 2rem; padding: 1.25rem; background: #fffbeb; border-radius: 12px; border: 1.5px solid #fde68a;">
        <h4 style="font-weight: 800; color: #b45309; margin-bottom: 0.5rem;">${currentLang === 'mr' ? 'हे सर्व प्रत्यक्ष शिकायचे आहे का?' : 'Want to master these drills live?'}</h4>
        <p style="font-size: 0.95rem; margin-bottom: 1rem; color: #475569;">${currentLang === 'mr' ? 'योगिता पाटील यांच्या आगामी बॅचमध्ये प्रवेश घ्या आणि स्वतःमध्ये बदल अनुभवा.' : 'Enroll in Coach Yogita Patil\'s upcoming batch and experience the breakthrough yourself.'}</p>
        <a href="#registration" class="btn btn-primary btn-sm" onclick="document.getElementById('articleModal').classList.remove('open')">${currentLang === 'mr' ? 'आता नोंदणी करा' : 'Register Now'}</a>
      </div>
    `;

    articleModal.classList.add('open');
  };

  if (articleModalClose && articleModal) {
    articleModalClose.addEventListener('click', () => {
      articleModal.classList.remove('open');
    });
  }

  // 5. Mobile Navigation Hamburger & Close Controls
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navCloseBtn = document.getElementById('navCloseBtn');

  function closeMobileNav() {
    if (navMenu) navMenu.classList.remove('active');
    if (hamburger) {
      const icon = hamburger.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      }
    }
  }

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      const icon = hamburger.querySelector('i');
      if (icon) {
        if (isOpen) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      }
    });

    if (navCloseBtn) {
      navCloseBtn.addEventListener('click', closeMobileNav);
    }

    navMenu.querySelectorAll('.nav-link, a').forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });
  }

  // 6. Smooth scrolling for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '' || targetId.length <= 1) return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 7. FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });

  // 8. Course & Batch Button Pre-selection
  window.selectCourse = function(courseId) {
    const courseSelect = document.getElementById('regCourse');
    if (courseSelect) {
      courseSelect.value = courseId;
    }
    const regSection = document.getElementById('registration');
    if (regSection) {
      regSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 9. Online Registration Form Submission & WhatsApp Hook
  const registrationForm = document.getElementById('registrationForm');
  const confirmModal = document.getElementById('confirmModal');
  const confirmModalClose = document.getElementById('confirmModalClose');
  const confirmModalWaBtn = document.getElementById('confirmModalWaBtn');
  const confirmDetailsBox = document.getElementById('confirmDetailsBox');

  let lastGeneratedWaUrl = '';

  if (registrationForm) {
    registrationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('regName').value.trim();
      const phone = document.getElementById('regPhone').value.trim();
      const age = document.getElementById('regAge').value;
      const city = document.getElementById('regCity').value.trim();
      const course = document.getElementById('regCourse').value;
      const experienceEl = document.querySelector('input[name="experience"]:checked');
      const experience = experienceEl ? experienceEl.value : 'उल्लेख नाही';

      if (!name || !phone || !course || !city) {
        alert(currentLang === 'mr' ? 'कृपया सर्व आवश्यक माहिती भरा.' : 'Please fill all required fields.');
        return;
      }

      // Generate Reference Code
      const regId = 'YP-' + Math.floor(100000 + Math.random() * 900000);
      const timestamp = new Date().toLocaleString('mr-IN');

      const registrationRecord = {
        regId,
        name,
        phone,
        age,
        city,
        course,
        experience,
        date: timestamp
      };

      // Save to localStorage for Admin drawer CRM
      let allRegistrations = JSON.parse(localStorage.getItem('yp_workshop_registrations') || '[]');
      allRegistrations.unshift(registrationRecord);
      localStorage.setItem('yp_workshop_registrations', JSON.stringify(allRegistrations));

      // Construct WhatsApp message URL for Coach Yogita Patil
      const siteData = JSON.parse(localStorage.getItem('yp_site_content') || '{}');
      const waNumber = (siteData.waPhone && siteData.waPhone.replace(/[^0-9]/g, '')) || '918999791550';
      const waMessage = 
`*📢 नवीन कार्यशाळा नोंदणी - योगिता पाटील भाषणकला कार्यशाळा*
---------------------------------------
*नोंदणी क्रमांक:* ${regId}
*नाव:* ${name}
*मोबाईल:* ${phone}
*वयोगट:* ${age}
*शहर:* ${city}
*निवडलेला अभ्यासक्रम:* ${course}
*मागील अनुभव:* ${experience}
*तारीख:* ${timestamp}
---------------------------------------
मला या बॅचची प्रवेश निश्चिती आणि फी भरण्याची पुढील प्रक्रिया कळवावी. बोला बिनधास्त!`;

      lastGeneratedWaUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

      // Update Modal content
      if (confirmDetailsBox) {
        confirmDetailsBox.innerHTML = `
          <div style="background: #f8fafc; border: 1.5px dashed #cbd5e1; border-radius: 12px; padding: 1.25rem; margin-top: 1rem; text-align: left;">
            <p><strong>नोंदणी आयडी (Reg ID):</strong> <span style="color:#d97706; font-weight:800;">${regId}</span></p>
            <p><strong>विद्यार्थ्याचे नाव:</strong> ${name}</p>
            <p><strong>मोबाईल:</strong> ${phone}</p>
            <p><strong>शहर:</strong> ${city}</p>
            <p><strong>अभ्यासक्रम:</strong> ${course}</p>
          </div>
        `;
      }

      // Open Confirmation Modal
      if (confirmModal) {
        confirmModal.classList.add('open');
      }

      // Reset form
      registrationForm.reset();
    });
  }

  if (confirmModalClose && confirmModal) {
    confirmModalClose.addEventListener('click', () => {
      confirmModal.classList.remove('open');
    });
  }

  if (confirmModalWaBtn) {
    confirmModalWaBtn.addEventListener('click', () => {
      if (lastGeneratedWaUrl) {
        window.open(lastGeneratedWaUrl, '_blank');
      }
    });
  }

  // 10. Call Back Modal Logic
  const callBackModal = document.getElementById('callBackModal');
  const callBackOpenBtns = document.querySelectorAll('.trigger-callback-modal');
  const callBackModalClose = document.getElementById('callBackModalClose');
  const callBackForm = document.getElementById('callBackForm');

  callBackOpenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (callBackModal) callBackModal.classList.add('open');
    });
  });

  if (callBackModalClose && callBackModal) {
    callBackModalClose.addEventListener('click', () => {
      callBackModal.classList.remove('open');
    });
  }

  if (callBackForm) {
    callBackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const cbName = document.getElementById('cbName').value.trim();
      const cbPhone = document.getElementById('cbPhone').value.trim();
      const cbCity = document.getElementById('cbCity').value.trim();

      const siteData = JSON.parse(localStorage.getItem('yp_site_content') || '{}');
      const waNumber = (siteData.waPhone && siteData.waPhone.replace(/[^0-9]/g, '')) || '918999791550';
      const msg = `*📞 कॉल बॅक विनंती - योगिता पाटील कार्यशाळा*\nनाव: ${cbName}\nफोन: ${cbPhone}\nशहर: ${cbCity}\nकृपया मला मार्गदर्शन देण्यासाठी कॉल करावा.`;
      
      const cbRecord = {
        regId: 'CB-' + Math.floor(1000 + Math.random() * 9000),
        name: cbName,
        phone: cbPhone,
        city: cbCity,
        course: 'कॉल बॅक विनंती (Call Back Request)',
        experience: '-',
        date: new Date().toLocaleString('mr-IN')
      };
      let allRegistrations = JSON.parse(localStorage.getItem('yp_workshop_registrations') || '[]');
      allRegistrations.unshift(cbRecord);
      localStorage.setItem('yp_workshop_registrations', JSON.stringify(allRegistrations));

      window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, '_blank');
      if (callBackModal) callBackModal.classList.remove('open');
      alert(currentLang === 'mr' ? 'तुमची कॉल बॅक विनंती प्राप्त झाली आहे! आम्ही लवकरच संपर्क करू.' : 'Call back request received! We will connect soon.');
      callBackForm.reset();
    });
  }

  // 11. Free Lead Magnet (E-Book) Trigger
  const ebookBtn = document.getElementById('leadMagnetWaBtn');
  if (ebookBtn) {
    ebookBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const siteData = JSON.parse(localStorage.getItem('yp_site_content') || '{}');
      const waNumber = (siteData.waPhone && siteData.waPhone.replace(/[^0-9]/g, '')) || '918999791550';
      const msg = `नमस्कार योगिता मॅडम, मला आपले मोफत ई-बुक "प्रभावी भाषणाचा ५-पायांचा आराखडा" (PDF Guide) WhatsApp वर पाठवावे. बोला बिनधास्त!`;
      window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }

  // Close modals on outside backdrop click
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        if (modal.id === 'mediaPreviewModal' && mediaPreviewContainer) {
          mediaPreviewContainer.innerHTML = '';
        }
      }
    });
  });

  // Initial Execution
  applyLanguage(currentLang);
  window.renderGalleryGrid();
  window.renderBlogGrid();
});
