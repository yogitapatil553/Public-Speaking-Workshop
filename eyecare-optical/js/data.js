/**
 * Eye Care Optical Shop - Central Data Store & Storage Utilities
 * Provides default data and handles localStorage persistence for the informational website and admin CMS.
 */

const DEFAULT_SHOP_INFO = {
  name: "Eye Care Optical Shop",
  tagline: "Precision Vision & Contemporary Eyewear",
  shortDesc: "Your trusted neighborhood optical store providing comprehensive eye testing, designer frames, branded sunglasses, blue light blockers, and premium prescription lenses with 15+ years of clinical optical expertise.",
  phone: "+91 98765 43210",
  phoneRaw: "919876543210",
  whatsapp: "+91 98765 43210",
  whatsappRaw: "919876543210",
  email: "contact@eyecareoptical.com",
  address: "Shop No. 12, Ground Floor, Vision Arcade, Opposite City Center, MG Road, Pune, Maharashtra 411001",
  landmark: "Opposite City Center Mall, Near MG Road Metro Station",
  workingHours: "Monday to Saturday: 10:00 AM – 9:00 PM | Sunday: 11:00 AM – 8:00 PM",
  timingsWeekdays: "10:00 AM – 9:00 PM (Mon - Sat)",
  timingsSunday: "11:00 AM – 8:00 PM (Sunday)",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.250529457788!2d73.8787!3d18.5173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c069b3628d09%3A0xb309088a7b973c52!2sMG%20Road%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  directionsUrl: "https://maps.google.com/?q=MG+Road+Pune+Maharashtra+Optical+Shop",
  socials: {
    facebook: "https://facebook.com/eyecareoptical",
    instagram: "https://instagram.com/eyecareoptical",
    whatsapp: "https://wa.me/919876543210",
    google: "https://maps.google.com/?q=MG+Road+Pune+Optical"
  },
  establishedYear: "2009",
  happyCustomers: "25,000+",
  framesInStock: "2,500+",
  brandsCount: "35+"
};

const DEFAULT_PRODUCTS = [
  // 1. Eyeglasses
  {
    id: "EC-EG-101",
    name: "Classic Acetate Square Eyeglasses",
    category: "eyeglasses",
    brand: "Titan Eye+",
    shape: "Square",
    material: "Handcrafted Acetate",
    colors: ["Matte Black", "Tortoise Brown", "Deep Navy"],
    size: "Medium (52-18-140 mm)",
    priceRange: "₹1,899 – ₹2,499",
    inStock: true,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80",
    description: "Refined square spectacle frame with hypoallergenic Italian acetate finish, reinforced barrel hinges, and comfortable ergonomic bridge.",
    features: ["Hypoallergenic Italian acetate", "Reinforced 5-barrel hinges", "Lightweight ergonomic bridge", "Suitable for all prescription powers"],
    specifications: { "Frame Width": "138 mm", "Lens Width": "52 mm", "Bridge": "18 mm", "Temple": "140 mm", "Weight": "24g" }
  },
  {
    id: "EC-EG-102",
    name: "Ultra-Lightweight Titanium Round Frame",
    category: "eyeglasses",
    brand: "Ray-Ban",
    shape: "Round",
    material: "Pure Titanium",
    colors: ["Rose Gold", "Brushed Silver", "Gunmetal"],
    size: "Medium (49-20-145 mm)",
    priceRange: "₹3,499 – ₹4,999",
    inStock: true,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=80",
    description: "Sleek, minimalist round spectacles forged from aero-grade titanium. Featherweight balance that sits comfortably for 14+ hours of daily wear.",
    features: ["Aerospace-grade Japanese titanium", "Corrosion resistant", "Ultra-soft air-cushioned nose pads", "Ideal for high index slim lenses"],
    specifications: { "Frame Width": "132 mm", "Lens Width": "49 mm", "Bridge": "20 mm", "Temple": "145 mm", "Weight": "14g" }
  },
  {
    id: "EC-EG-103",
    name: "Geometric Hexagonal Rimless Frame",
    category: "eyeglasses",
    brand: "Carrera",
    shape: "Hexagonal",
    material: "Beta Titanium & Stainless Steel",
    colors: ["Gold", "Silver", "Matte Black"],
    size: "Wide (53-19-142 mm)",
    priceRange: "₹2,799 – ₹3,899",
    inStock: true,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    description: "Distinguished three-piece rimless design with modern hexagonal lens shape. Unobstructed peripheral vision and refined executive styling.",
    features: ["Minimalist rimless silhouette", "Stress-resistant compression mounting", "Adjustable silicone nose guards", "Professional executive appeal"],
    specifications: { "Frame Width": "135 mm", "Lens Width": "53 mm", "Bridge": "19 mm", "Temple": "142 mm", "Weight": "16g" }
  },
  {
    id: "EC-EG-104",
    name: "Vintage Cat-Eye Browline Glasses",
    category: "eyeglasses",
    brand: "Vogue",
    shape: "Cat Eye",
    material: "Cellulose Acetate & Metal Accent",
    colors: ["Glossy Black & Gold", "Crystal Peach", "Burgundy"],
    size: "Medium (51-17-140 mm)",
    priceRange: "₹2,299 – ₹3,199",
    inStock: true,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
    description: "Flattering vintage cat-eye frames sculpted with soft curves, gold bridge accents, and comfortable contoured temples for women.",
    features: ["Subtle uplift cat-eye silhouette", "Metal inlay temple decor", "Non-slip ear hooks", "Accommodates progressive & bifocal lenses"],
    specifications: { "Frame Width": "136 mm", "Lens Width": "51 mm", "Bridge": "17 mm", "Temple": "140 mm", "Weight": "22g" }
  },

  // 2. Sunglasses
  {
    id: "EC-SG-201",
    name: "Polarized Aviator Sunglasses (UV400)",
    category: "sunglasses",
    brand: "Ray-Ban",
    shape: "Aviator",
    material: "Alloy Metal & Glass Lens",
    colors: ["Classic Gold / G-15 Green", "Gunmetal / Polarized Grey", "Matte Black"],
    size: "Standard (58-14-135 mm)",
    priceRange: "₹4,299 – ₹6,499",
    inStock: true,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    description: "Timeless teardrop aviator sunglasses with genuine polarized lenses delivering 100% UV400 protection and complete glare elimination.",
    features: ["100% UVA/UVB 400 protection", "Anti-reflective backside coating", "Sweat-resistant double bridge", "Includes hard case and microfiber cloth"],
    specifications: { "Polarization": "99.9% Glare Cut", "Lens Category": "Cat 3 Dark Tint", "Frame Width": "140 mm", "Weight": "31g" }
  },
  {
    id: "EC-SG-202",
    name: "Sport Wrap Polarized Sunglasses",
    category: "sunglasses",
    brand: "Oakley",
    shape: "Rectangle Wrap",
    material: "O-Matter High-Stress Composite",
    colors: ["Matte Stealth Black", "Cobalt Blue Mirror", "Fire Iridium"],
    size: "Large (62-16-130 mm)",
    priceRange: "₹4,999 – ₹7,299",
    inStock: true,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
    description: "Engineered for cycling, driving, and outdoor sports. 8-base wrap geometry prevents side-glare, wind, and airborne dust particles.",
    features: ["Impact-resistant Plutonite lenses", "Unobtainium hydrophilic grip earsocks", "Ventilated anti-fog bridge", "Prescription insert compatible"],
    specifications: { "Polarization": "HD Polarized", "Base Curve": "8-Base Sport Wrap", "Weight": "27g" }
  },
  {
    id: "EC-SG-203",
    name: "Chic Oversized Retro Sunglasses",
    category: "sunglasses",
    brand: "Polaroid",
    shape: "Oversized Square",
    material: "Eco Acetate & Gradient Lens",
    colors: ["Havana Amber", "Midnight Gloss Black", "Olive Gradient"],
    size: "Large (56-18-145 mm)",
    priceRange: "₹2,499 – ₹3,699",
    inStock: true,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=800&q=80",
    description: "Glamorous oversized sunglasses inspired by 70s Riviera fashion. High-definition gradient tint shields from overhead midday sun.",
    features: ["Thermotropic polarizing filter", "Gradient comfort tint", "Bold bevelled acetate temples", "Scratch-resistant hard coat"],
    specifications: { "UV Protection": "100% UV400", "Frame Width": "144 mm", "Weight": "33g" }
  },

  // 3. Contact Lenses
  {
    id: "EC-CL-301",
    name: "Acuvue Oasys Daily Disposable Contact Lenses",
    category: "contact-lenses",
    brand: "Acuvue",
    shape: "Spherical & Astigmatism (Toric)",
    material: "Senofilcon A (Silicone Hydrogel)",
    colors: ["Clear with Handling Tint"],
    size: "Base Curve 8.5 / Dia 14.3 mm",
    priceRange: "₹1,850 – ₹3,400 (Pack of 30)",
    inStock: true,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    description: "Premium daily disposable contact lenses with HydraLuxe technology that simulates your tear film to keep eyes refreshed in air-conditioned environments.",
    features: ["Class 1 UV Blocking (96% UVA / 99% UVB)", "HydraLuxe tear-infused moisture", "Zero maintenance daily fresh wear", "Ideal for dry or sensitive eyes"],
    specifications: { "Water Content": "38%", "Oxygen Transmissibility (Dk/t)": "121", "Wearing Schedule": "Daily Wear / Single Use" }
  },
  {
    id: "EC-CL-302",
    name: "Air Optix Plus HydraGlyde Monthly Lenses",
    category: "contact-lenses",
    brand: "Alcon",
    shape: "Spherical",
    material: "Lotrafilcon B (Silicone Hydrogel)",
    colors: ["Clear / Light Blue Handling Tint"],
    size: "Base Curve 8.6 / Dia 14.2 mm",
    priceRange: "₹1,200 – ₹2,100 (Pack of 6)",
    inStock: true,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    description: "Breathable monthly lenses shielded by SmartShield deposit protection against mascara, makeup, and lipid build-ups.",
    features: ["SmartShield deposit protection", "HydraGlyde moisture matrix for 16h comfort", "High oxygen breathability", "Cost-effective monthly regimen"],
    specifications: { "Water Content": "33%", "Oxygen Transmissibility (Dk/t)": "138", "Replacement": "Monthly" }
  },
  {
    id: "EC-CL-303",
    name: "FreshLook ColorBlends Cosmetic Lenses",
    category: "contact-lenses",
    brand: "FreshLook",
    shape: "Cosmetic Tinted (Zero & Powered)",
    material: "Phemfilcon A",
    colors: ["Pure Hazel", "Gemstone Green", "Brilliant Blue", "Sterling Gray", "Honey"],
    size: "Base Curve 8.6 / Dia 14.5 mm",
    priceRange: "₹999 – ₹1,699 (Pack of 2)",
    inStock: true,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
    description: "Patented 3-in-1 color technology blends 3 colors onto one lens for a completely natural and striking eye color transformation.",
    features: ["Natural 3-in-1 iris blend", "Available in both power and zero-power plano", "High comfort edge design", "Monthly replacement format"],
    specifications: { "Water Content": "55%", "Base Curve": "8.6 mm", "Diameter": "14.5 mm" }
  },

  // 4. Computer Glasses
  {
    id: "EC-CG-401",
    name: "Blue-Cut Zero Power Computer Glasses",
    category: "computer-glasses",
    brand: "Titan Eye+",
    shape: "Rectangle",
    material: "Flexible TR90 Swiss Polymer",
    colors: ["Matte Black", "Smoky Grey", "Transparent Crystal"],
    size: "Universal Fit (51-17-142 mm)",
    priceRange: "₹1,299 – ₹1,999",
    inStock: true,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80",
    description: "Specially coated anti-reflective lenses that block 98% of harmful 400-455nm blue light from laptops, monitors, and smartphones without yellow color distortion.",
    features: ["Reduces digital eye strain & headaches", "Blocks harmful high-energy blue rays", "Ultra-durable TR90 memory flex frame", "Anti-reflective & oleophobic smudge coat"],
    specifications: { "Blue Light Cut": "98% at 420nm", "Lens Coating": "Hydrophobic & Oleophobic", "Weight": "16g" }
  },
  {
    id: "EC-CG-402",
    name: "Executive Blue-Light Metal Eyewear",
    category: "computer-glasses",
    brand: "Scott",
    shape: "Square Half-Rim",
    material: "Monel Metal & Stainless Steel",
    colors: ["Brushed Gunmetal", "Matte Black", "Silver"],
    size: "Medium-Wide (54-18-142 mm)",
    priceRange: "₹1,999 – ₹2,799",
    inStock: true,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=800&q=80",
    description: "Sophisticated half-rim frame engineered with premium blue-filter lenses. Tailored for software engineers, designers, and office professionals.",
    features: ["Professional semi-rimless profile", "Spring hinges for pressure-free temple fit", "Eliminates screen reflection glares", "Zero power and prescription ready"],
    specifications: { "Frame Type": "Half-Rim", "Lens Material": "CR-39 Blue Filter", "Bridge": "18 mm" }
  },

  // 5. Reading Glasses
  {
    id: "EC-RG-501",
    name: "Foldable Pocket Reading Glasses with Slim Case",
    category: "reading-glasses",
    brand: "Eye Care Signature",
    shape: "Rectangle Compact",
    material: "Stainless Steel & Telescopic Temples",
    colors: ["Silver Metallic", "Black Satin", "Gold"],
    size: "Compact (48-18-135 mm)",
    priceRange: "₹799 – ₹1,299",
    inStock: true,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1516715094483-75da7dee9758?auto=format&fit=crop&w=800&q=80",
    description: "Innovative collapsible reading glasses that telescope into an ultra-slim aluminum flip case. Available in powers +1.00 to +3.50.",
    features: ["Telescopic folding bridge & temples", "Hard anodized aluminum protective case", "Crystal clear aspheric reading optics", "Powers: +1.00, +1.50, +2.00, +2.50, +3.00, +3.50"],
    specifications: { "Powers Available": "+1.00 to +3.50 Diopters", "Case Size": "Pen-sized 13cm", "Weight": "19g" }
  },
  {
    id: "EC-RG-502",
    name: "Anti-Fatigue Aspheric Readers",
    category: "reading-glasses",
    brand: "Titan Eye+",
    shape: "Oval Soft",
    material: "High Grade Polycarbonate",
    colors: ["Amber Demi", "Crystal Clear", "Dark Tortoise"],
    size: "Medium (50-18-140 mm)",
    priceRange: "₹999 – ₹1,599",
    inStock: true,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80",
    description: "Aspheric precision reading lenses that eliminate peripheral fishbowl distortion when reading books, newspapers, and mobile phones.",
    features: ["Distortion-free aspheric surface", "Lightweight hypoallergenic frame", "Integrated flexible spring temples", "Scratch-resistant hard coating"],
    specifications: { "Lens Type": "Single Vision Reading Aspheric", "Frame Width": "134 mm" }
  },

  // 6. Kids Eyewear
  {
    id: "EC-KD-601",
    name: "Bendable Unbreakable Kids Frames with Strap",
    category: "kids-eyewear",
    brand: "Titan Eye+ Kids",
    shape: "Round Oval",
    material: "Food-Grade Swiss TR90 Silicone",
    colors: ["Aqua Blue & Lime", "Candy Pink & Violet", "Cherry Red & Black"],
    size: "Kids 4-9 Years (44-16-125 mm)",
    priceRange: "₹1,299 – ₹1,899",
    inStock: true,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
    description: "100% screwless, bendable, unbreakable frames engineered for active children. Equipped with an adjustable silicone head strap to prevent slipping.",
    features: ["100% BPA-free food-grade silicone", "Screwless 360-degree bendable hinges", "Elastic head strap included", "Impact-resistant polycarbonate lenses"],
    specifications: { "Age Group": "4 – 9 Years", "Safety": "Zero Sharp Metal Screws", "Weight": "12g" }
  },
  {
    id: "EC-KD-602",
    name: "Junior Blue Light Protective Glasses",
    category: "kids-eyewear",
    brand: "Eye Care Signature",
    shape: "Wayfarer Junior",
    material: "Eco TR90 Polymer",
    colors: ["Bright Teal", "Royal Blue", "Pastel Lilac"],
    size: "Junior 8-14 Years (47-16-130 mm)",
    priceRange: "₹1,199 – ₹1,699",
    inStock: true,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80",
    description: "Designed for school children attending online tuition, study sessions, and screen activities. Filters blue rays without distorting colors.",
    features: ["Safeguards developing young retinas", "Durable spring-loaded temple joints", "Non-slip rubber temple tips", "Includes cartoon theme hardshell case"],
    specifications: { "Age Group": "8 – 14 Years", "Blue Ray Block": "95%", "Weight": "15g" }
  },

  // 7. Optical Lenses
  {
    id: "EC-OL-701",
    name: "Essilor Crizal Rock Anti-Glare & Scratch Lens",
    category: "optical-lenses",
    brand: "Essilor Crizal",
    shape: "Custom Lens Fitting",
    material: "High-Index 1.56 / 1.61 / 1.67 Resin",
    colors: ["Clear / Invisible Coat"],
    size: "Custom Cut to Your Frame",
    priceRange: "₹2,600 – ₹5,800 (Pair)",
    inStock: true,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    description: "The gold standard in optical lens durability. Resists scratches, smudges, dust, water drops, and reflections with high clarity.",
    features: ["3x more scratch-resistant than basic coatings", "Super-hydrophobic water repellent", "Anti-static dust repellence", "Comprehensive E-SPF 35 UV protection"],
    specifications: { "Indices Available": "1.56, 1.60, 1.67, 1.74", "Warranty": "1-Year Coating Warranty" }
  },
  {
    id: "EC-OL-702",
    name: "Zeiss SmartLife Individual Progressive Lenses",
    category: "optical-lenses",
    brand: "Zeiss",
    shape: "Custom Progressive Digital Surface",
    material: "High-Index Organic Polymer",
    colors: ["Clear / Photochromic Adaptive"],
    size: "Personalized Corridor",
    priceRange: "₹6,500 – ₹16,000 (Pair)",
    inStock: true,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    description: "World-renowned German progressive lens technology offering effortless transition between distance, computer, and near reading vision without head tilting.",
    features: ["Wide, distortion-free reading corridor", "Rapid adaptation within 2-4 days", "FreeForm digital point-by-point surfacing", "Certified Zeiss laser engraving"],
    specifications: { "Visual Zones": "Distance, Intermediate & Reading", "Technology": "Zeiss FreeForm Digital" }
  },
  {
    id: "EC-OL-703",
    name: "Photochromic Transition Lenses (Sun Adaptive)",
    category: "optical-lenses",
    brand: "Transitions Gen 8",
    shape: "Custom Lens",
    material: "Impact Resistant Polycarbonate",
    colors: ["Adaptive Grey", "Adaptive Brown", "Emerald Green"],
    size: "Custom Fit",
    priceRange: "₹3,200 – ₹6,900 (Pair)",
    inStock: true,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=80",
    description: "Fast-reacting light-adaptive lenses that remain crystal clear indoors and darken automatically to sunglasses shade under sunlight in 30 seconds.",
    features: ["Dual action clear indoors & dark outdoors", "Blocks 100% UVA and UVB rays", "Filters harmful indoor blue light", "Fast fade-back indoors in under 2 minutes"],
    specifications: { "Activation Speed": "Sub-30 seconds in UV", "Indoors": "Category 0 (98% Clear)" }
  },

  // 8. Accessories
  {
    id: "EC-AC-801",
    name: "Anti-Fog Lens Cleaning Spray & Microfiber Kit",
    category: "accessories",
    brand: "Eye Care Signature",
    shape: "Kit",
    material: "Alcohol-Free Bio Formula & High-Density Microfiber",
    colors: ["Transparent / Blue Cloth"],
    size: "60 ml Spray + 2 Large Cloths",
    priceRange: "₹249 – ₹399",
    inStock: true,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    description: "Professional alcohol-free lens cleaning formula safe for all AR, Crizal, and anti-glare coatings. Prevents fogging when wearing masks.",
    features: ["Safe for all multi-coated lenses", "Alcohol & ammonia free", "Includes 220 GSM washable microfiber cloth", "Pocket portable pump spray"],
    specifications: { "Volume": "60 ml", "Applications": "Over 450 Sprays" }
  }
];

const DEFAULT_BRANDS = [
  {
    id: "ray-ban",
    name: "Ray-Ban",
    origin: "Italy / Luxottica",
    tier: "Premium Heritage",
    logoText: "Ray-Ban",
    description: "The global icon of eyewear since 1937, famous for Aviator, Wayfarer, Clubmaster, and Round styles.",
    productsCount: "120+ Frames & Sunglasses in Store",
    authorizedBadge: "Authorized Retail Partner"
  },
  {
    id: "oakley",
    name: "Oakley",
    origin: "USA / Sport Performance",
    tier: "Premium Sport & Tech",
    logoText: "OAKLEY",
    description: "High-performance sports eyewear with patented Prizm lens technology and rugged O-Matter frames.",
    productsCount: "60+ Sports Frames",
    authorizedBadge: "Authorized Sports Eyewear Dealer"
  },
  {
    id: "titan-eyeplus",
    name: "Titan Eye+",
    origin: "India / Tata Group",
    tier: "Trusted Value & Innovation",
    logoText: "TITAN Eye+",
    description: "India's most trusted optical brand combining lightweight ergonomics, contemporary fashion, and reliable Tata quality.",
    productsCount: "250+ Spectacles & Sunglasses",
    authorizedBadge: "Official Stockist"
  },
  {
    id: "carrera",
    name: "Carrera",
    origin: "Austria / Safilo",
    tier: "Premium Urban Fashion",
    logoText: "CARRERA",
    description: "Bold, racing-inspired Italian frames crafted for individuals who follow their own rules with distinctive confidence.",
    productsCount: "45+ Statement Models",
    authorizedBadge: "Certified Dealer"
  },
  {
    id: "vogue",
    name: "Vogue Eyewear",
    origin: "Italy / Luxottica",
    tier: "Designer Glamour",
    logoText: "VOGUE",
    description: "Chic, trendy, and feminine optical designs reflecting international runway fashion at accessible pricing.",
    productsCount: "80+ Trendy Frames",
    authorizedBadge: "Authorized Boutique Retailer"
  },
  {
    id: "fastrack",
    name: "Fastrack",
    origin: "India / Youth Brand",
    tier: "Youth & Everyday Casual",
    logoText: "FASTRACK",
    description: "Vibrant, quirky, and budget-friendly sunglasses and spectacle frames tailored for college students and youth.",
    productsCount: "90+ Models",
    authorizedBadge: "Official Dealer"
  },
  {
    id: "zeiss",
    name: "Carl Zeiss Vision",
    origin: "Germany",
    tier: "Precision Lens Specialist",
    logoText: "ZEISS",
    description: "175+ years of German precision optics engineering world-leading SmartLife progressive and digital lenses.",
    productsCount: "Complete Prescription Range",
    authorizedBadge: "Zeiss Authorized Vision Expert"
  },
  {
    id: "essilor",
    name: "Essilor Crizal",
    origin: "France",
    tier: "Optical Lens World Leader",
    logoText: "Essilor | Crizal",
    description: "Pioneers of progressive lenses (Varilux) and world-renowned Crizal anti-reflective scratch coatings.",
    productsCount: "All Crizal & Varilux Series",
    authorizedBadge: "Essilor Certified Optical Lab Partner"
  }
];

const DEFAULT_SERVICES = [
  {
    id: "srv-eye-test",
    title: "Computerized Eye Testing & Vision Check",
    icon: "eye",
    summary: "Comprehensive 14-step automated refractive testing by certified optometrists using precision auto-refractometers.",
    description: "Our optical clinic is equipped with advanced Nidek digital auto-refractometers, phoropters, and digital visual acuity charts. We test distance vision, near vision, astigmatism power, and screen fatigue.",
    duration: "15 – 20 Minutes",
    fee: "Free with Frame Purchase / ₹150 standalone"
  },
  {
    id: "srv-consultation",
    title: "Spectacle & Prescription Consultation",
    icon: "glasses",
    summary: "One-on-one consultation with optical specialists to analyze your lifestyle, work habits, and prescription needs.",
    description: "Whether you work 10 hours on screens, drive at night, or need seamless multifocal reading, our certified dispensing opticians recommend the exact lens profile matched to your pupil distance.",
    duration: "10 Minutes",
    fee: "Complimentary"
  },
  {
    id: "srv-frame-selection",
    title: "Face-Shape Frame Selection Assistance",
    icon: "smile",
    summary: "Expert styling advice to select frames that balance your face shape (round, oval, square, heart) and skin undertones.",
    description: "Find frames that feel like a second skin. We measure your facial bridge width, temple length, and match frame shapes that elevate your facial aesthetics.",
    duration: "15 Minutes",
    fee: "Complimentary"
  },
  {
    id: "srv-lens-guidance",
    title: "Custom Lens Selection Guidance",
    icon: "disc",
    summary: "Unbiased technical advice on progressive vs. bifocal, high-index slimming, blue-cut filters, and anti-glare coatings.",
    description: "Navigate confusing lens options with clarity. We demonstrate live lens samples, UV testers, blue-light laser pens, and thickness comparators so you invest in what truly benefits your eyes.",
    duration: "10 Minutes",
    fee: "Complimentary"
  },
  {
    id: "srv-fitting",
    title: "Spectacle Fitting & Facial Alignment",
    icon: "check-circle",
    summary: "Precision digital pupilometer measurement and frame angle adjustment for zero slip, zero ear soreness.",
    description: "An optical frame must align with your visual axis. We fine-tune pantoscopic tilt, temple vertex distance, and ear curvature using heated air frame warmers for an exact custom fit.",
    duration: "10 Minutes",
    fee: "Complimentary for All Customers"
  },
  {
    id: "srv-lens-replacement",
    title: "Lens Replacement in Old Frames",
    icon: "repeat",
    summary: "Preserve your favorite frame while upgrading your expired prescription to high-definition modern lenses.",
    description: "Love your current sunglasses or spectacle frame? Bring it to our in-house lab. We trace your existing frame using computerized edging machines and install brand new lenses in 30 minutes.",
    duration: "Same-Day / 30 Minutes",
    fee: "Only Lens Cost Applies"
  },
  {
    id: "srv-repair",
    title: "Frame Repair & Precision Welding",
    icon: "tool",
    summary: "Fast repair of bent metal frames, misaligned joints, loose arms, and minor temple hinge breaks.",
    description: "Don't discard damaged glasses prematurely. Our technicians provide optical soldering, hinge realignment, and structural reinforcement to restore your eyewear.",
    duration: "15 – 30 Minutes",
    fee: "Nominal ₹50 – ₹200"
  },
  {
    id: "srv-screws",
    title: "Screw & Hinge Replacement",
    icon: "settings",
    summary: "Replacement of stripped, fallen, or rusted optical screws with lock-thread German screws.",
    description: "We stock micro-screws of every thread pitch for rimless, metal, and plastic frames. Replaced with thread-locking compound to prevent repeat loosening.",
    duration: "5 Minutes",
    fee: "Free / ₹30"
  },
  {
    id: "srv-nosepad",
    title: "Nose Pad Replacement (Hypoallergenic Silicone)",
    icon: "shield",
    summary: "Upgrade old, yellowed, or stiff nose pads with ultra-soft medical silicone or air-cushion nose pads.",
    description: "Hard or discolored nose pads cause red marks and skin irritation. We install soft air-chamber silicone pads that distribute frame weight evenly across your nose bridge.",
    duration: "5 Minutes",
    fee: "₹50 (Pair) / Free with Tune-Up"
  },
  {
    id: "srv-contact-lens",
    title: "Contact Lens Trial & Care Guidance",
    icon: "droplet",
    summary: "Hands-on insertion and removal coaching for first-time wearers, plus trial lens fitting.",
    description: "Never worn contacts before? Our optometrist gently trains you on hygienic insertion, removal, lens storage solutions, and corneal oxygen safety.",
    duration: "25 Minutes",
    fee: "Trial Fitting Available"
  },
  {
    id: "srv-progressive-consult",
    title: "Progressive Lens Adaptation Support",
    icon: "compass",
    summary: "Specialized fitting protocols to ensure smooth, distortion-free adaptation for 40+ presbyopia wearers.",
    description: "Getting used to progressive lenses requires correct corridor marking and head posture coaching. We offer 30-day adaptation guarantees on all Zeiss and Essilor progressive purchases.",
    duration: "20 Minutes",
    fee: "Complimentary with Purchase"
  },
  {
    id: "srv-cleaning-spa",
    title: "Ultrasonic Eyewear Deep Cleaning Spa",
    icon: "sparkles",
    summary: "Deep ultrasonic bath that eliminates oil, makeup, skin debris, and dust from hidden frame crevices.",
    description: "Bring your spectacles for a refreshing spa clean. High-frequency 42,000 Hz ultrasonic waves remove grime from rim grooves, hinges, and pad arms, followed by micro-buffing.",
    duration: "5 Minutes",
    fee: "100% Free Walk-in Service"
  }
];

const DEFAULT_OFFERS = [
  {
    id: "OFFER-01",
    title: "Buy 1 Get 1 on Selected Frames",
    badge: "Special Combo",
    discount: "Buy 1 Get 1 FREE",
    validTill: "31st December 2026",
    code: "EYECARE-BOGO",
    description: "Buy any branded spectacle frame and get a second frame of equal or lesser value completely free! Perfect for a spare pair or a family member.",
    terms: "Applicable on selected frame collections. Lenses charged separately. Cannot be combined with other festive coupons."
  },
  {
    id: "OFFER-02",
    title: "Free Computerized Eye Test with Frame Purchase",
    badge: "Clinic Special",
    discount: "100% OFF on Eye Exam",
    validTill: "Ongoing Offer",
    code: "FREE-EXAM",
    description: "Get a comprehensive 14-step automated vision test by certified optometrists totally free when you purchase any spectacle frame or prescription lenses.",
    terms: "Walk-in or book via WhatsApp. Valid 7 days a week."
  },
  {
    id: "OFFER-03",
    title: "20% Off on Progressive & Crizal Lenses",
    badge: "Lens Upgrade",
    discount: "Flat 20% OFF",
    validTill: "Valid This Month",
    code: "PROG-20",
    description: "Upgrade your reading and distance comfort with premium digital progressive or Crizal Rock multi-coated lenses at a flat 20% discount.",
    terms: "Valid on Essilor and Zeiss select digital progressive ranges."
  },
  {
    id: "OFFER-04",
    title: "Student & Senior Citizen Privilege Discount",
    badge: "Community Care",
    discount: "15% Extra Off",
    validTill: "Year-Round",
    code: "COMMUNITY-15",
    description: "Special privilege pricing for school/college students with valid ID cards, and senior citizens aged 60+. Includes free lifetime adjustment service.",
    terms: "Please present a valid student ID or age proof at the billing counter."
  }
];

const DEFAULT_GALLERY = [
  {
    id: "gal-1",
    title: "Modern Optical Showroom Interior",
    category: "interior",
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80",
    caption: "Spacious, well-illuminated retail display counter showcasing over 2,000+ designer spectacles."
  },
  {
    id: "gal-2",
    title: "Designer Eyewear Display Lounge",
    category: "interior",
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
    caption: "Comfortable trial mirrors and dedicated consultation seating for family frame trials."
  },
  {
    id: "gal-3",
    title: "Premium Sunglass Showcase Wall",
    category: "eyewear",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    caption: "Polarized UV400 sunglasses collection from international brands including Ray-Ban, Carrera & Oakley."
  },
  {
    id: "gal-4",
    title: "Digital Auto-Refractometer Vision Testing Clinic",
    category: "lab",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    caption: "State-of-the-art Japanese computerized refractive testing suite with computerized visual charts."
  },
  {
    id: "gal-5",
    title: "Precision Lens Edging & Fitting Laboratory",
    category: "lab",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    caption: "In-house CNC optical lens tracer and edger for accurate, quick same-day spectacle delivery."
  },
  {
    id: "gal-6",
    title: "Titanium & Lightweight Frame Collection",
    category: "eyewear",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=80",
    caption: "Featherweight Japanese titanium frames engineered for executive everyday wear."
  },
  {
    id: "gal-7",
    title: "Storefront & Vision Arcade Entrance",
    category: "exterior",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    caption: "Prominent ground floor location at Vision Arcade, MG Road with dedicated customer parking."
  },
  {
    id: "gal-8",
    title: "Kids Colorful Eyewear Counter",
    category: "eyewear",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
    caption: "Fun, bendable, shatter-proof frames designed specifically for children and toddlers."
  }
];

const DEFAULT_FAQS = [
  {
    q: "How often should I get my eyes tested?",
    a: "Optometrists recommend getting a comprehensive eye test once every 12 months for adults and school-age children, or every 6 months if you experience headaches, blurred screens, or have diabetes."
  },
  {
    q: "Can I choose frames and get lenses fitted with my existing doctor's prescription?",
    a: "Absolutely! You can bring any valid prescription from an ophthalmologist or eye hospital. Our optometrists will also verify your pupillary distance (PD) for exact optical centering."
  },
  {
    q: "What is the difference between Progressive lenses and Bifocal lenses?",
    a: "Bifocals have a visible line separating distance and reading powers with a sharp jump. Progressive lenses offer a smooth, seamless graduation between distance, intermediate (computer/dashboard), and reading without any visible lines."
  },
  {
    q: "Do you provide same-day lens fitting and spectacle delivery?",
    a: "Yes! For standard single vision powers (spherical and mild cylindrical) and blue-cut stock lenses, we offer same-day fitting within 30 to 60 minutes in our in-house optical workshop."
  },
  {
    q: "Are blue light blocking glasses beneficial if I do not have a vision power?",
    a: "Yes. Zero-power blue light glasses filter high-energy blue-violet rays emitted by laptops, smartphones, and LED screens, significantly reducing dry eyes, eye strain, and sleep-disrupting melatonin suppression."
  },
  {
    q: "Can I replace the lenses in my own favorite old frame?",
    a: "Yes. As long as your existing frame has structural integrity, we can trace its shape and fit new single vision, progressive, or polarized lenses without requiring you to buy a new frame."
  },
  {
    q: "What warranty do you provide on spectacle frames and lenses?",
    a: "All branded frames carry a 6 to 12 months manufacturer warranty against manufacturing defects. Premium lenses like Essilor Crizal and Zeiss come with an official 1 to 2-year anti-scratch coating warranty card."
  },
  {
    q: "How can I enquire or check product availability before visiting?",
    a: "You can click any 'Enquire on WhatsApp' button across our website or call us at +91 98765 43210. Our staff will confirm live in-store stock, reserve frames for you, or send photos."
  }
];

const DEFAULT_TESTIMONIALS = [
  {
    name: "Dr. Arvind Kulkarni",
    role: "Senior Consultant Physician",
    rating: 5,
    date: "1 month ago",
    comment: "I have been purchasing my progressive glasses from Eye Care Optical for over 8 years. Their lens measurement accuracy and Zeiss progressive fitting are unmatched in the city."
  },
  {
    name: "Pooja Deshmukh",
    role: "Software Architect, Hinjewadi",
    rating: 5,
    date: "2 weeks ago",
    comment: "Working 11 hours on screens gave me severe headaches. The optometrist recommended personalized blue-cut lenses. Within 3 days my eye strain vanished! Extremely courteous staff."
  },
  {
    name: "Rajesh & Snehal Mehta",
    role: "Parents of 7-year-old Aarav",
    rating: 5,
    date: "3 weeks ago",
    comment: "Our son kept breaking his spectacles in school. Eye Care Optical suggested their flexible TR90 kids frame with a strap. It has survived football games without a scratch. Highly recommended!"
  },
  {
    name: "Vikram Singhania",
    role: "Business Owner",
    rating: 5,
    date: "Just yesterday",
    comment: "Top notch collection of Ray-Ban and Oakley sunglasses. Authentic product with bill, warranty card, and polarized demonstration. Plus the free ultrasonic frame cleaning was a great touch."
  }
];

// LocalStorage Storage Keys
const STORAGE_KEYS = {
  SHOP_INFO: "eyecare_shop_info",
  PRODUCTS: "eyecare_products",
  BRANDS: "eyecare_brands",
  SERVICES: "eyecare_services",
  OFFERS: "eyecare_offers",
  GALLERY: "eyecare_gallery",
  FAQS: "eyecare_faqs",
  ENQUIRIES: "eyecare_enquiries",
  ADMIN_AUTH: "eyecare_admin_auth"
};

// Data Store Accessors
const DataStore = {
  getShopInfo: function() {
    const raw = localStorage.getItem(STORAGE_KEYS.SHOP_INFO);
    return raw ? JSON.parse(raw) : DEFAULT_SHOP_INFO;
  },
  saveShopInfo: function(data) {
    localStorage.setItem(STORAGE_KEYS.SHOP_INFO, JSON.stringify(data));
  },

  getProducts: function() {
    const raw = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    return raw ? JSON.parse(raw) : DEFAULT_PRODUCTS;
  },
  saveProducts: function(data) {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(data));
  },

  getBrands: function() {
    const raw = localStorage.getItem(STORAGE_KEYS.BRANDS);
    return raw ? JSON.parse(raw) : DEFAULT_BRANDS;
  },
  saveBrands: function(data) {
    localStorage.setItem(STORAGE_KEYS.BRANDS, JSON.stringify(data));
  },

  getServices: function() {
    const raw = localStorage.getItem(STORAGE_KEYS.SERVICES);
    return raw ? JSON.parse(raw) : DEFAULT_SERVICES;
  },
  saveServices: function(data) {
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(data));
  },

  getOffers: function() {
    const raw = localStorage.getItem(STORAGE_KEYS.OFFERS);
    return raw ? JSON.parse(raw) : DEFAULT_OFFERS;
  },
  saveOffers: function(data) {
    localStorage.setItem(STORAGE_KEYS.OFFERS, JSON.stringify(data));
  },

  getGallery: function() {
    const raw = localStorage.getItem(STORAGE_KEYS.GALLERY);
    return raw ? JSON.parse(raw) : DEFAULT_GALLERY;
  },
  saveGallery: function(data) {
    localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(data));
  },

  getFaqs: function() {
    const raw = localStorage.getItem(STORAGE_KEYS.FAQS);
    return raw ? JSON.parse(raw) : DEFAULT_FAQS;
  },
  saveFaqs: function(data) {
    localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(data));
  },

  getEnquiries: function() {
    const raw = localStorage.getItem(STORAGE_KEYS.ENQUIRIES);
    return raw ? JSON.parse(raw) : [];
  },
  saveEnquiries: function(data) {
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(data));
  },
  addEnquiry: function(enquiry) {
    const list = this.getEnquiries();
    const newEntry = {
      id: "ENQ-" + Date.now(),
      date: new Date().toLocaleString(),
      status: "New",
      ...enquiry
    };
    list.unshift(newEntry);
    this.saveEnquiries(list);
    return newEntry;
  },

  resetToDefault: function() {
    localStorage.setItem(STORAGE_KEYS.SHOP_INFO, JSON.stringify(DEFAULT_SHOP_INFO));
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(DEFAULT_PRODUCTS));
    localStorage.setItem(STORAGE_KEYS.BRANDS, JSON.stringify(DEFAULT_BRANDS));
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(DEFAULT_SERVICES));
    localStorage.setItem(STORAGE_KEYS.OFFERS, JSON.stringify(DEFAULT_OFFERS));
    localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(DEFAULT_GALLERY));
    localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(DEFAULT_FAQS));
  }
};

// Export to window
window.DataStore = DataStore;
window.DEFAULT_SHOP_INFO = DEFAULT_SHOP_INFO;
window.DEFAULT_PRODUCTS = DEFAULT_PRODUCTS;
window.DEFAULT_BRANDS = DEFAULT_BRANDS;
window.DEFAULT_SERVICES = DEFAULT_SERVICES;
window.DEFAULT_OFFERS = DEFAULT_OFFERS;
window.DEFAULT_GALLERY = DEFAULT_GALLERY;
window.DEFAULT_FAQS = DEFAULT_FAQS;
window.DEFAULT_TESTIMONIALS = DEFAULT_TESTIMONIALS;
