# 🎙️ योगिता पाटील भाषणकला कार्यशाळा — "बोला बिनधास्त!"
### *Official Website, Admin CMS Portal & Student Leads CRM*

[![Website Status](https://img.shields.io/badge/Status-Active%20%26%20Production%20Ready-brightgreen.svg)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Format](https://img.shields.io/badge/Format-Online%20%26%20Offline%20Combined-orange.svg)](#)
[![Language](https://img.shields.io/badge/Language-Marathi%20%7C%20English-red.svg)](#)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages%20Ready-blueviolet.svg)](#)

---

## 📌 प्रकल्प परिचय (Project Overview)

**योगिता पाटील भाषणकला कार्यशाळा ("बोला बिनधास्त!")** ही वक्तृत्व, संभाषणकला आणि व्यक्तिमत्त्व विकासासाठी समर्पित अधिकृत वेबसाइट आहे. ही कार्यशाळा **ऑनलाइन (Zoom द्वारे) आणि ऑफलाइन (सांगली व कोल्हापूर केंद्रावर) अशी दोन्ही कम्बाईन (हायब्रिड)** पद्धतीने चालवली जाते.

या वेबसाइटमध्ये आधुनिक **नो-कोड ॲडमिन CMS आणि विद्यार्थी CRM पोर्टल** समाविष्ट आहे, ज्याद्वारे कोणत्याही कोडिंगशिवाय वेबसाइटचा मजकूर, मुख्य बॅनर, फोटो/व्हिडिओ गॅलरी, ब्लॉग लेख आणि आलेल्या विद्यार्थ्यांच्या नोंदी थेट व्यवस्थापित करता येतात.

---

## 🌟 प्रमुख वैशिष्ट्ये (Key Features)

### १. 🌐 आधुनिक व रिस्पॉन्सिव्ह डिझाइन (Modern UI/UX)
- **हायब्रिड कार्यशाळा मॉडेल:** सांगली, कोल्हापूर ऑफलाइन आणि लाइव्ह ऑनलाइन Zoom बॅचेसची सर्वसमावेशक माहिती.
- **द्विभाषिक इंजिन (Bilingual Engine):** डीफॉल्ट **मराठी (mr)** सह एका क्लिकवर **English (en)** मध्ये स्विच करण्याची सोय (`js/translations.js`).
- **मोबाईल-फ्रेंडली स्टिकी बॉटम बार:** स्मार्टफोन युजर्ससाठी होम, बॅचेस, नोंदणी, WhatsApp आणि थेट कॉलचे क्विक ॲक्सेस बटन्स.
- **SEO व सोशल शेअरिंग:** OpenGraph मेटा टॅग्ज, Schema.org संरचित डेटा, sitemap.xml आणि robots.txt समाविष्ट.

### २. 🔐 ॲडमिन CMS पोर्टल (Admin Content Management System)
- **सोपा ॲक्सेस:** वेबसाइटच्या फुटरमधील *"प्रशासक लॉगिन (Admin Portal)"* लिंक किंवा कीबोर्ड शॉर्टकट **`Ctrl + Shift + A`**.
- **४-अंकी सुरक्षा पिन:** अनधिकृत बदल रोखण्यासाठी पिन व्हेरिफिकेशन स्क्रीन (डीफॉल्ट पिन: **`1234`**).
- **५-इन-१ डॅशबोर्ड टॅब्स:**
  1. **हिरो विभाग (Hero CMS):** मुख्य बॅज, शीर्षक, उपशीर्षक, वर्णन, ६ वैशिष्ट्ये, रेटिंग पट्टी आणि स्पीकर फोटो अपलोड (ऑटोमॅटिक कॅनव्हास इमेज कॉम्प्रेशनसह).
  2. **साइट मजकूर (Content CMS):** योगिता पाटील परिचय, सुविचार, अनुभव आकडेवारी (`१२+`), पोर्ट्रेट फोटो, फोन, WhatsApp आणि हेल्पलाइन संपादन.
  3. **फोटो व व्हिडिओ गॅलरी (Media Manager):** फोटो (📷) आणि व्हिडिओ (🎬 - YouTube किंवा थेट फाइल) अपलोड, कॅटेगरी निवड, फुलस्क्रीन लाइटबॉक्स व प्लेअर.
  4. **ब्लॉग संपादन (Blog CMS):** नवीन अभ्यासपूर्ण लेख लिहिणे, विद्यमान लेख संपादित करणे, लेख हटवणे आणि थेट पॉपअपमध्ये वाचून पाहणे.
  5. **विद्यार्थी नोंदणी CRM (Leads CRM):** सर्व नोंदणी व कॉल बॅक विनंत्यांचे रिअल-टाइम सर्च, थेट WhatsApp चॅट आणि **Excel / CSV (मराठी Devanagari UTF-8 BOM)** एक्सपोर्ट.

---

## 📁 डिरेक्टरी रचना (Directory Structure)

```text
yogita-patil-bhashankala/
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages ऑटोमॅटिक डिप्लॉयमेंट वर्कफ्लो
│
├── assets/
│   └── images/                 # सर्व मूळ व वेक्टर आर्टवर्क इमेजेस
│       ├── about-yogita.svg    # योगिता पाटील पोर्ट्रेट
│       ├── speaker-hero.svg    # मुख्य हिरो स्टेज आर्टवर्क
│       ├── gallery-1.svg       # सांगली बॅच सराव
│       ├── gallery-2.svg       # स्टेज सादरीकरण
│       └── gallery-3 to 6.svg  # कार्यशाळा क्षणचित्रे
│
├── css/
│   └── style.css               # सर्व आधुनिक स्टाइल्स, CMS ड्रॉवर, मॉडेल्स, टोस्ट
│
├── js/
│   ├── app.js                  # मुख्य ॲप्लिकेशन, डायनॅमिक गॅलरी, ब्लॉग आणि मॉडेल इंजिन
│   ├── admin.js                # ॲडमिन ऑथेंटिकेशन, हिरो संपादन, मीडिया अपलोड, ब्लॉग व CRM
│   └── translations.js         # मराठी ↔ इंग्रजी ट्रान्सलेशन डिक्शनरी
│
├── .gitattributes              # Git लाइन एंडिंग नॉर्मलायझेशन (LF)
├── .gitignore                  # Git दुर्लक्षित फाइल्स
├── .nojekyll                   # GitHub Pages जेकिल बायपास फाइल
├── index.html                  # मुख्य लँडिंग पेज
├── privacy.html                # गोपनीयता धोरण व अटी
├── robots.txt                  # सर्च इंजिन क्रॉलिंग नियम
├── sitemap.xml                 # XML साइटमॅप
├── package.json                # प्रोजेक्ट मेटाडेटा व रन स्क्रिप्ट्स
├── LICENSE                     # MIT मुक्त परवाना
└── README.md                   # संपूर्ण डॉक्युमेंटेशन (ही फाइल)
```

---

## 🚀 स्थानिक पातळीवर कसे चालवावे? (How to Run Locally)

कोणत्याही अतिरिक्त लायब्ररी किंवा डेटाबेस इन्स्टॉलेशनची गरज नाही (Zero Dependencies):

### पर्याय १: थेट ब्राउझरमध्ये उघडा
- `index.html` फाइलवर डबल-क्लिक करा किंवा ती Google Chrome, Edge अथवा Firefox मध्ये ड्रॅग करा.

### पर्याय २: VS Code Live Server द्वारे
- VS Code मध्ये फोल्डर उघडा.
- `index.html` वर राइट-क्लिक करून **"Open with Live Server"** निवडा.

### पर्याय ३: Node.js / NPX द्वारे
```bash
npx serve .
```

---

## 🔑 ॲडमिन पोर्टल कसे वापरावे? (How to Use Admin Portal)

1. ब्राउझरमध्ये वेबसाइट उघडा.
2. कीबोर्डवर **`Ctrl + Shift + A`** दाबा (किंवा पानाच्या शेवटी फुटरमधील **"प्रशासक लॉगिन"** वर क्लिक करा).
3. सुरक्षा पिन टाका: **`1234`** (Default PIN).
4. **'पोर्टल अनलॉक करा'** वर क्लिक करा.
5. हवे असलेले बदल करा:
   - **हिरो संपादन:** नवीन फोटो निवडा किंवा मजकूर बदलून *"बदल सेव्ह करा"* दाबा.
   - **गॅलरी:** फोटो किंवा YouTube व्हिडिओ लिंक टाका आणि *"गॅलरीमध्ये जोडा"* दाबा.
   - **ब्लॉग:** नवीन लेख लिहा किंवा जुन्या लेखासमोरील *"संपादित करा"* वर क्लिक करा.
   - **लीड्स:** *"Excel (CSV) डाउनलोड"* वर क्लिक करून विद्यार्थ्यांची यादी मिळवा.

---

## 📤 GitHub वर कोड कसा पुश करावा? (How to Push to GitHub)

आपल्या कॉम्प्युटरवरून हा संपूर्ण कोड GitHub रिपॉझिटरीमध्ये अपलोड करण्यासाठी खालील पायऱ्या वापरा:

### पायरी १: GitHub वर नवीन रिपॉझिटरी तयार करा
1. [github.com](https://github.com) वर लॉगिन करा.
2. उजव्या कोपऱ्यातील **`+`** चिन्हावर क्लिक करून **"New repository"** निवडा.
3. नाव द्या: `yogita-patil-bhashankala` (किंवा आवडीचे नाव).
4. **Public** किंवा **Private** निवडा.
5. *"Initialize this repository with a README"* अनचेक ठेवा (आपल्याकडे आधीच सर्व फाइल्स तयार आहेत).
6. **"Create repository"** वर क्लिक करा आणि मिळालेली रिपॉझिटरी URL कॉपी करा (उदा. `https://github.com/<your-username>/yogita-patil-bhashankala.git`).

### पायरी २: Git कमांड्स चालवा (Terminal / PowerShell)
जर आपल्या कॉम्प्युटरवर Git स्थापित असेल, तर या फोल्डरमध्ये खालील कमांड्स रन करा:

```bash
# १. Git रिपॉझिटरी सुरू करा
git init

# २. सर्व फाइल्स स्टेज करा
git add .

# ३. पहिली कमिट करा
git commit -m "feat: complete website with Admin CMS, Gallery upload, Blog and CRM"

# ४. मुख्य ब्रँचचे नाव 'main' ठेवा
git branch -M main

# ५. तुमची रिमोट GitHub लिंक जोडा (खाली तुमची खरी URL टाका)
git remote add origin https://github.com/<your-username>/yogita-patil-bhashankala.git

# ६. GitHub वर कोड पुश करा
git push -u origin main
```

> **टीप (Note):** जर आपल्या कॉम्प्युटरवर `git` कमांड उपलब्ध नसेल, तर तुम्ही **[GitHub Desktop](https://desktop.github.com/)** ॲप डाउनलोड करून त्यात *"Add Existing Repository"* करून एका क्लिकवर कोड GitHub वर पब्लिश करू शकता.

---

## 🌐 GitHub Pages वर मोफत लाइव्ह होस्टिंग (Free Hosting on GitHub Pages)

या प्रोजेक्टमध्ये `.github/workflows/deploy.yml` आणि `.nojekyll` फाइल्स आधीच जोडल्या आहेत:

1. कोड GitHub वर पुश केल्यानंतर रिपॉझिटरीच्या **Settings** मध्ये जा.
2. डाव्या मेनूमधील **Pages** वर क्लिक करा.
3. **Build and deployment -> Source** मध्ये **"GitHub Actions"** निवडा.
4. तुमची वेबसाइट २ मिनिटांत खालील लिंकवर मोफत थेट लाइव्ह सुरू होईल:
   `https://<your-username>.github.io/yogita-patil-bhashankala/`

---

## 📜 परवाना (License)

हा प्रकल्प [MIT License](LICENSE) अंतर्गत उपलब्ध आहे.
सर्व हक्क राखीव © २०२६ **योगिता पाटील भाषणकला कार्यशाळा — "बोला बिनधास्त!"**
#   P u b l i c - S p e a k i n g - W o r k s h o p  
 