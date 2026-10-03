/* ============================================================
   industries.js — single source of data for the Industries
   mega-menu (layout.js) AND the Industry Detail page
   (zyanix-industry-detail-page.html?industry=<slug>).

   Add, edit, or remove an industry by editing the array below
   — the header updates automatically on every page, no HTML
   editing needed. Same pattern as posts.js / projects.js.
   ============================================================ */
window.ZYANIX_INDUSTRIES = [
  {
    slug: "fintech",
    overview: "We build secure, compliant financial platforms — payment apps, lending workflows, digital banking and reporting tools — with the reliability and audit trails regulators and customers expect.",
    challenges: ["Strict security and compliance requirements", "Real-time transactions that must never fail", "Legacy banking systems that are hard to integrate"],
    solutions: ["PCI-aware payment flows and wallets", "KYC / onboarding automation", "Fraud monitoring and risk dashboards", "Open-banking and core-system API integrations"],
    stats: [["99.99%", "Payment uptime"], ["< 200ms", "API response"], ["3x", "Faster onboarding"]],
    tech: ["Node.js", "PostgreSQL", "Kafka", "AWS", "React Native"],
    projects: ["fintech-payments-app", "business-analytics-dashboard"],
    name: "FinTech & Banking",
    blurb: "Secure payments, lending and banking platforms.",
    href: "zyanix-industry-detail-page.html?industry=fintech",
    icon: '<path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'
  },
  {
    slug: "healthcare",
    overview: "From telehealth and appointment booking to patient portals and records, we build healthcare software that is easy for patients to use and built with privacy and data protection at its core.",
    challenges: ["Protecting sensitive patient data", "Disconnected clinic and hospital systems", "Making digital care simple for every age group"],
    solutions: ["Telehealth video consultations", "Appointment booking and reminders", "Secure patient records and e-prescriptions", "EHR / HL7 / FHIR integrations"],
    stats: [["40%", "Fewer no-shows"], ["24/7", "Online booking"], ["100%", "Encrypted data"]],
    tech: ["React", "Node.js", "WebRTC", "PostgreSQL", "AWS"],
    projects: ["telehealth-booking-app", "business-analytics-dashboard"],
    name: "Healthcare",
    blurb: "Telehealth, booking and patient-record systems.",
    href: "zyanix-industry-detail-page.html?industry=healthcare",
    icon: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/><path d="M12 8v6M9 11h6"/>'
  },
  {
    slug: "ecommerce-retail",
    overview: "We create storefronts, marketplaces and inventory systems that turn visitors into customers — with fast checkout, smart search and back-office tools that keep operations running smoothly.",
    challenges: ["Cart abandonment and slow pages", "Inventory spread across channels", "Scaling for seasonal traffic spikes"],
    solutions: ["Custom storefronts and marketplaces", "Unified inventory and order management", "Personalised recommendations and search", "Payment, shipping and ERP integrations"],
    stats: [["3.2x", "Lead growth"], ["+28%", "Checkout conversion"], ["99.9%", "Uptime"]],
    tech: ["Next.js", "Node.js", "Stripe", "Algolia", "AWS"],
    projects: ["auto-marketplace-platform", "business-analytics-dashboard"],
    name: "E-commerce & Retail",
    blurb: "Storefronts, marketplaces and inventory systems.",
    href: "zyanix-industry-detail-page.html?industry=ecommerce-retail",
    icon: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>'
  },
  {
    slug: "logistics",
    overview: "We build fleet tracking, route optimisation and warehouse platforms that give logistics teams real-time visibility and help them deliver faster at lower cost.",
    challenges: ["Limited real-time visibility of shipments", "Manual dispatch and paperwork", "Rising fuel and delivery costs"],
    solutions: ["Live GPS fleet tracking", "Route optimisation and dispatch", "Warehouse and inventory management", "Driver apps with proof of delivery"],
    stats: [["22%", "Lower delivery cost"], ["Real-time", "Shipment tracking"], ["50%", "Less paperwork"]],
    tech: ["React", "Node.js", "MQTT", "PostgreSQL", "Google Maps"],
    projects: ["logistics-tracking-platform", "business-analytics-dashboard"],
    name: "Logistics & Supply Chain",
    blurb: "Fleet tracking, routing and warehouse platforms.",
    href: "zyanix-industry-detail-page.html?industry=logistics",
    icon: '<rect x="1" y="7" width="15" height="13" rx="1"/><path d="M16 11h4l3 3v6h-7z"/><circle cx="6.5" cy="20.5" r="1.5"/><circle cx="18.5" cy="20.5" r="1.5"/>'
  },
  {
    slug: "real-estate",
    overview: "We build property portals, virtual-tour experiences and management tools that help agencies and developers showcase listings, manage leads and run properties more efficiently.",
    challenges: ["Leads lost across multiple channels", "Listings that are hard to browse and compare", "Manual tenant and property management"],
    solutions: ["Searchable listings with map views", "Virtual tours and media galleries", "CRM and lead-routing automation", "Tenant, rent and maintenance portals"],
    stats: [["2x", "More qualified leads"], ["60%", "Faster listing updates"], ["360°", "Virtual tours"]],
    tech: ["Next.js", "Node.js", "Mapbox", "PostgreSQL", "AWS"],
    projects: ["auto-marketplace-platform", "business-analytics-dashboard"],
    name: "Real Estate",
    blurb: "Listings, virtual tours and property management.",
    href: "zyanix-industry-detail-page.html?industry=real-estate",
    icon: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/>'
  },
  {
    slug: "edtech",
    overview: "We build learning platforms, course marketplaces and student portals that keep learners engaged — with live classes, progress tracking and tools that make teaching easier.",
    challenges: ["Keeping learners engaged online", "Managing content, cohorts and assessments", "Scaling live classes reliably"],
    solutions: ["Course and cohort management", "Live classes and recorded lessons", "Quizzes, assessments and certificates", "Student and parent progress dashboards"],
    stats: [["85%", "Course completion"], ["10k+", "Concurrent learners"], ["4.8/5", "Learner rating"]],
    tech: ["React", "Node.js", "WebRTC", "PostgreSQL", "Firebase"],
    projects: ["fitness-mobile-app", "business-analytics-dashboard"],
    name: "Education & EdTech",
    blurb: "Learning platforms, courses and student portals.",
    href: "zyanix-industry-detail-page.html?industry=edtech",
    icon: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>'
  },
  {
    slug: "automotive",
    overview: "We build vehicle marketplaces, dealer management tools and fleet dashboards that help automotive businesses reach buyers, manage inventory and understand performance.",
    challenges: ["Real-time inventory across many dealers", "Connecting buyers with the right vehicles", "Fleet data scattered across systems"],
    solutions: ["Vehicle marketplaces and listing engines", "Dealer dashboards and inventory sync", "Lead management and test-drive booking", "Fleet and telematics analytics"],
    stats: [["3.2x", "Lead growth"], ["300+", "Dealers onboarded"], ["< 200ms", "Search speed"]],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Elasticsearch", "AWS"],
    projects: ["auto-marketplace-platform", "logistics-tracking-platform"],
    name: "Automotive",
    blurb: "Marketplaces, dealer tools and fleet dashboards.",
    href: "zyanix-industry-detail-page.html?industry=automotive",
    icon: '<path d="M5 17h14M5 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM19 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"/><path d="M3 17V10l2-5h12l3 5v7"/>'
  },
  {
    slug: "travel-hospitality",
    overview: "We build booking engines, itinerary planners and guest apps that make travel and hospitality experiences seamless — from search and booking to on-trip support.",
    challenges: ["Complex availability and pricing rules", "Fragmented booking channels", "Delivering great guest experiences on mobile"],
    solutions: ["Booking engines with real-time availability", "Itinerary and trip-planning apps", "Guest apps for check-in and services", "Channel-manager and payment integrations"],
    stats: [["+35%", "Direct bookings"], ["4.7/5", "Guest app rating"], ["24/7", "Booking support"]],
    tech: ["React Native", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    projects: ["fitness-mobile-app", "auto-marketplace-platform"],
    name: "Travel & Hospitality",
    blurb: "Booking engines, itineraries and guest apps.",
    href: "zyanix-industry-detail-page.html?industry=travel-hospitality",
    icon: '<path d="M2 16l20-7-7 20-3-8-8-3Z"/>'
  }
];
