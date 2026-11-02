/* ============================================================
   projects.js — single source of data for the Case Studies
   listing page and the Project Detail page.

   Add, edit, or remove a project by editing the array below —
   both pages update automatically, no HTML editing needed.

   Loaded as a plain <script> variable (window.ZYANIX_PROJECTS),
   same pattern as posts.js — works even when you open the HTML
   file directly by double-clicking it, no local server needed.
   ============================================================ */
window.ZYANIX_PROJECTS = [
  {
    "slug": "autoflow-automation-platform",
    "name": "AutoFlow CRM — Automotive Operating System",
    "client": "AutoFlow Systems",
    "category": "Cloud & DevOps",
    "tags": [
      "Automotive CRM",
      "PostgreSQL RLS",
      "Next.js"
    ],
    "thumb": "images/illustrations/project-autoflow.jpg",
    "cover": "images/illustrations/project-autoflow.jpg",
    "excerpt": "Full-stack automotive dealership operating system unifying lead routing, conflict-free test drives, live inventory, and service workshop bays.",
    "featured": false,
    "results": [
      {
        "value": "3.2x",
        "label": "Faster Enquiry Response"
      },
      {
        "value": "100%",
        "label": "Clash-Free Test Drives"
      },
      {
        "value": "42%",
        "label": "Repeat Service Retention"
      }
    ],
    "testimonial": {
      "quote": "AutoFlow solved our single biggest operational headache — test-drive booking clashes and lead leakages across our multi-brand showrooms. Our sales team response times dropped by over 60% in the first week.",
      "name": "Daniel Cooper",
      "role": "VP of Operations, AutoFlow Dealerships",
      "avatar": "images/avatars/daniel-cooper.jpg"
    },
    "content": [
      {
        "type": "heading",
        "id": "challenge",
        "text": "The Challenge"
      },
      {
        "type": "paragraph",
        "text": "Automobile dealership groups managing high-volume showrooms frequently lose walk-in and online prospects due to delayed sales follow-ups and spreadsheet-based tracking. Test-drive vehicles were constantly double-booked between sales executives, and service workshop job cards had zero digital connection to vehicle sales records, creating a 40%+ leak in after-sales service retention."
      },
      {
        "type": "image",
        "src": "images/illustrations/inline-autoflow.jpg",
        "alt": "AutoFlow CRM Dealership Workspace and Connected Operations"
      },
      {
        "type": "heading",
        "id": "approach",
        "text": "Our Approach"
      },
      {
        "type": "paragraph",
        "text": "We designed and engineered AutoFlow CRM — an enterprise automotive dealership operating system built with a high-performance Next.js interface and a resilient backend protected by PostgreSQL Row-Level Security (RLS) deep in the database kernel. The platform connects 12 critical showroom and workshop workflows in real time."
      },
      {
        "type": "list",
        "items": [
          "Automated Lead Routing: Captures enquiries from walk-ins, website portals, and digital ads with sub-second sales rep allocation",
          "Conflict-Free Test Drive Engine: Enforced at database level with real-time vehicle locking to eliminate overlapping bookings",
          "Visual Sales Pipeline & Handover: Tracks deals through token deposits, RTO documentation, and customer delivery handovers",
          "Service Workshop Job Cards: Live bay scheduling, technician tracking, and automated SMS/WhatsApp service reminder triggers",
          "Multi-Branch Row-Level Security (RLS): Strict tenant isolation and role-based permissions across branch dealership groups"
        ]
      },
      {
        "type": "image",
        "src": "images/illustrations/autoflow-workshop.jpg",
        "alt": "AutoFlow CRM Service Workshop Bay Scheduling & Job Cards"
      },
      {
        "type": "quote",
        "text": "Dealership staff now operate from one real-time workspace with zero double-booked test drives and automated service retention."
      },
      {
        "type": "heading",
        "id": "results",
        "text": "The Results"
      },
      {
        "type": "paragraph",
        "text": "Deployed live across active automotive dealership networks, AutoFlow achieved 3.2x faster lead response times, completely eliminated test-drive scheduling conflicts (100% clash-free rate), and boosted repeat after-sales service retention by 42% within the first quarter."
      },
      {
        "type": "image",
        "src": "images/illustrations/autoflow-mobile.jpg",
        "alt": "AutoFlow Mobile Sales Representative App & Showroom Inventory Catalog"
      }
    ]
  },
  {
    "slug": "ecommerce-store-platform",
    "name": "LuxeStore E-Commerce Store",
    "client": "LuxeLiving Apparel",
    "category": "Web Apps",
    "tags": [
      "E-Commerce",
      "Next.js",
      "Shopify"
    ],
    "thumb": "images/illustrations/project-ecommerce-store.jpg",
    "cover": "images/illustrations/project-ecommerce-store.jpg",
    "excerpt": "High-converting headless e-commerce store with sub-second page loads, personalized recommendations, and instant checkout.",
    "featured": false,
    "results": [
      {
        "value": "+42%",
        "label": "Checkout Conversion"
      },
      {
        "value": "1.2s",
        "label": "Page Load Speed"
      },
      {
        "value": "6 wks",
        "label": "To Launch"
      }
    ],
    "testimonial": {
      "quote": "Moving to our custom headless store built by Zyanix increased our mobile conversion immediately. Our customers constantly praise how smooth and fast checkout is.",
      "name": "Sophie Turner",
      "role": "VP of Digital, LuxeLiving",
      "avatar": "images/avatars/sophie-turner.jpg"
    },
    "content": [
      {
        "type": "heading",
        "id": "challenge",
        "text": "The Challenge"
      },
      {
        "type": "paragraph",
        "text": "LuxeLiving suffered from slow page loads (4.5s) on their legacy monolithic storefront, resulting in high bounce rates and 68% cart abandonment on mobile devices during seasonal flash sales."
      },
      {
        "type": "image",
        "src": "images/illustrations/inline-ecommerce-store.jpg",
        "alt": "LuxeStore e-commerce checkout and analytics interface"
      },
      {
        "type": "heading",
        "id": "approach",
        "text": "Our Approach"
      },
      {
        "type": "paragraph",
        "text": "We rebuilt the storefront from the ground up as a headless Next.js application running on Edge CDN nodes, integrated with a Shopify Plus backend, Algolia instant search, and a frictionless 2-step checkout."
      },
      {
        "type": "list",
        "items": [
          "Sub-second server-side rendered catalog pages with dynamic stock and delivery badges",
          "Streamlined 2-step checkout flow optimized for Apple Pay, Google Pay, and Stripe 1-Click",
          "Real-time omnichannel inventory synchronization across warehouse and retail outlets",
          "AI-driven product recommendations tailored to browsing history and cart contents"
        ]
      },
      {
        "type": "quote",
        "text": "Mobile bounce rates dropped by 35% within 48 hours of switching to the headless architecture."
      },
      {
        "type": "image",
        "src": "images/illustrations/ecommerce-checkout.jpg",
        "alt": "LuxeStore high-converting mobile-responsive checkout flow and cart analytics"
      },
      {
        "type": "heading",
        "id": "results",
        "text": "The Results"
      },
      {
        "type": "paragraph",
        "text": "Page load times dropped from 4.5s to 1.2s, checkout conversion jumped by +42%, and mobile sales exceeded desktop for the first time in brand history within the first quarter."
      },
      {
        "type": "image",
        "src": "images/illustrations/ecommerce-catalog.jpg",
        "alt": "LuxeStore high-speed product catalog with dynamic facets and 1.2s TTFB"
      }
    ]
  },
  {
    "slug": "edulead-crm-platform",
    "name": "EduLead Student CRM",
    "client": "EduSphere Academies",
    "category": "Web Apps",
    "tags": [
      "EdTech",
      "Web App",
      "PostgreSQL"
    ],
    "thumb": "images/illustrations/project-edu-lead.jpg",
    "cover": "images/illustrations/project-edu-lead.jpg",
    "excerpt": "Comprehensive lead capture, admission tracking, and counselor allocation platform designed for education providers.",
    "featured": false,
    "results": [
      {
        "value": "2.8x",
        "label": "Inquiry Conversion"
      },
      {
        "value": "50k+",
        "label": "Leads Processed"
      },
      {
        "value": "8 wks",
        "label": "To Launch"
      }
    ],
    "testimonial": {
      "quote": "EduLead gave our admission counselors instant access to qualified student leads with automated follow-ups. Our conversion rates have reached an all-time high.",
      "name": "Olivia Bennett",
      "role": "Admissions Director, EduSphere",
      "avatar": "images/avatars/olivia-bennett.jpg"
    },
    "content": [
      {
        "type": "heading",
        "id": "challenge",
        "text": "The Challenge"
      },
      {
        "type": "paragraph",
        "text": "EduSphere was losing high-intent student inquiries due to manual lead distribution across multiple campuses, slow counselor response times (>24 hours), and zero visibility into follow-up status."
      },
      {
        "type": "image",
        "src": "images/illustrations/inline-edu-lead.jpg",
        "alt": "EduLead student inquiry dashboard and lead scoring interface"
      },
      {
        "type": "heading",
        "id": "approach",
        "text": "Our Approach"
      },
      {
        "type": "paragraph",
        "text": "We designed and engineered a specialized EdTech lead management platform featuring multi-channel lead ingestion (web, WhatsApp, social ads), smart counselor round-robin assignment, and automated nurturing drip campaigns."
      },
      {
        "type": "list",
        "items": [
          "Multi-channel lead ingestion with automated deduplication and phone verification",
          "Smart round-robin assignment allocating student inquiries to active counselors in real time",
          "Integrated WhatsApp, SMS, and email communication hub with templated follow-up sequences",
          "Executive admissions pipeline dashboard with stage-wise conversion analytics across campuses"
        ]
      },
      {
        "type": "quote",
        "text": "Counselors now reach out to new student applicants within 5 minutes instead of 24 hours."
      },
      {
        "type": "image",
        "src": "images/illustrations/edulead-admissions.jpg",
        "alt": "EduLead admissions pipeline, counselor allocation, and conversion tracking"
      },
      {
        "type": "heading",
        "id": "results",
        "text": "The Results"
      },
      {
        "type": "paragraph",
        "text": "Inquiry-to-enrollment conversion grew 2.8x, counselor follow-up efficiency increased by 60%, and over 50,000 student leads were successfully processed across 12 campus locations."
      },
      {
        "type": "image",
        "src": "images/illustrations/edulead-counselor.jpg",
        "alt": "EduLead counselor workstation, real-time round-robin queue, and WhatsApp follow-up"
      }
    ]
  },
  {
    "slug": "auto-marketplace-platform",
    "name": "Auto Marketplace Platform",
    "client": "NextGen Motors",
    "category": "Web Apps",
    "tags": [
      "Web App",
      "Next.js"
    ],
    "thumb": "images/illustrations/project-auto-marketplace.jpg",
    "cover": "images/illustrations/project-auto-marketplace.jpg",
    "excerpt": "A full-featured marketplace connecting buyers and dealers with real-time listings.",
    "featured": true,
    "results": [
      {
        "value": "3.2x",
        "label": "Lead Growth"
      },
      {
        "value": "10 wks",
        "label": "To Launch"
      },
      {
        "value": "99.9%",
        "label": "Uptime"
      }
    ],
    "testimonial": {
      "quote": "Zyanix didn't just build what we asked for — they challenged our assumptions and helped us ship a much better product. The marketplace has been rock solid since day one.",
      "name": "Michael Anderson",
      "role": "Founder & CEO, NextGen Motors",
      "avatar": "images/avatars/michael-anderson.jpg"
    },
    "content": [
      {
        "type": "heading",
        "id": "challenge",
        "text": "The Challenge"
      },
      {
        "type": "paragraph",
        "text": "NextGen Motors needed a scalable auto marketplace to compete with established players, but their existing systems couldn't handle real-time inventory across hundreds of dealers."
      },
      {
        "type": "image",
        "src": "images/illustrations/inline-auto-marketplace.jpg",
        "alt": "Auto marketplace dashboard interface"
      },
      {
        "type": "heading",
        "id": "approach",
        "text": "Our Approach"
      },
      {
        "type": "paragraph",
        "text": "We designed and built a full-stack platform — from search and listings to dealer dashboards — using Next.js on the frontend and a Node.js API backed by PostgreSQL, deployed on AWS with auto-scaling from the start."
      },
      {
        "type": "list",
        "items": [
          "Real-time inventory sync across 300+ dealer accounts",
          "Faceted search with sub-200ms response times",
          "A self-serve dealer dashboard replacing manual spreadsheet uploads"
        ]
      },
      {
        "type": "quote",
        "text": "The marketplace went live in 10 weeks and hasn't had a major outage since."
      },
      {
        "type": "image",
        "src": "images/illustrations/auto-marketplace-dealer.jpg",
        "alt": "NextGen Motors dealer inventory management and multi-branch allocation grid"
      },
      {
        "type": "heading",
        "id": "results",
        "text": "The Results"
      },
      {
        "type": "paragraph",
        "text": "Within the first quarter post-launch, qualified leads grew 3.2x, and the platform has maintained 99.9% uptime while scaling to handle seasonal traffic spikes."
      },
      {
        "type": "image",
        "src": "images/illustrations/auto-marketplace-search.jpg",
        "alt": "Sub-200ms faceted car search with 360-degree vehicle inspection viewer"
      }
    ]
  },
  {
    "slug": "fitness-mobile-app",
    "name": "Fitness Mobile App",
    "client": "PulseFit",
    "category": "Mobile Apps",
    "tags": [
      "Mobile App",
      "React Native"
    ],
    "thumb": "images/illustrations/project-fitness-app.jpg",
    "cover": "images/illustrations/project-fitness-app.jpg",
    "excerpt": "Workout tracking and coaching app with live progress syncing across devices.",
    "featured": false,
    "results": [
      {
        "value": "4.8★",
        "label": "App Store Rating"
      },
      {
        "value": "60k+",
        "label": "Downloads Year 1"
      },
      {
        "value": "8 wks",
        "label": "To Launch"
      }
    ],
    "testimonial": {
      "quote": "Zyanix understood exactly what our coaches needed — the app feels like it was built by people who actually train.",
      "name": "Isabella Clark",
      "role": "Co-Founder, PulseFit",
      "avatar": "images/avatars/isabella-clark.jpg"
    },
    "content": [
      {
        "type": "heading",
        "id": "challenge",
        "text": "The Challenge"
      },
      {
        "type": "paragraph",
        "text": "PulseFit's coaches were tracking client workouts across spreadsheets and messaging apps, making it impossible to give consistent, data-backed feedback."
      },
      {
        "type": "image",
        "src": "images/illustrations/inline-fitness-app.jpg",
        "alt": "Fitness app workout tracking screen"
      },
      {
        "type": "heading",
        "id": "approach",
        "text": "Our Approach"
      },
      {
        "type": "paragraph",
        "text": "We built a React Native app with offline-first workout logging that syncs the moment a connection is available, plus a coach dashboard to review client progress in one place."
      },
      {
        "type": "list",
        "items": [
          "Offline workout logging with automatic background sync",
          "Live progress charts coaches can review remotely",
          "Push-notification-based check-ins to boost adherence"
        ]
      },
      {
        "type": "quote",
        "text": "Client retention jumped once coaches could actually see what was happening between sessions."
      },
      {
        "type": "image",
        "src": "images/illustrations/fitness-app-workout.jpg",
        "alt": "PulseFit active workout logging, offline-first SQLite sync, and rest countdown timer"
      },
      {
        "type": "heading",
        "id": "results",
        "text": "The Results"
      },
      {
        "type": "paragraph",
        "text": "The app crossed 60,000 downloads in its first year with a 4.8-star average rating, and PulseFit's coach-reported client retention improved noticeably within the first two months."
      },
      {
        "type": "image",
        "src": "images/illustrations/fitness-app-analytics.jpg",
        "alt": "Continuous biometric heart rate monitoring and calorie progression trends"
      }
    ]
  },
  {
    "slug": "business-analytics-dashboard",
    "name": "Business Analytics Dashboard",
    "client": "BrightPath Solutions",
    "category": "Web Apps",
    "tags": [
      "Web App",
      "React"
    ],
    "thumb": "images/illustrations/project-analytics-dashboard.jpg",
    "cover": "images/illustrations/project-analytics-dashboard.jpg",
    "excerpt": "A unified reporting dashboard turning raw business data into clear insights.",
    "featured": false,
    "results": [
      {
        "value": "70%",
        "label": "Less Manual Reporting"
      },
      {
        "value": "12",
        "label": "Data Sources Unified"
      },
      {
        "value": "6 wks",
        "label": "To Launch"
      }
    ],
    "testimonial": {
      "quote": "The team understood our requirements perfectly and built a solution that exceeded our expectations.",
      "name": "Emma Richardson",
      "role": "CEO, BrightPath Solutions",
      "avatar": "images/avatars/emma-richardson.jpg"
    },
    "content": [
      {
        "type": "heading",
        "id": "challenge",
        "text": "The Challenge"
      },
      {
        "type": "paragraph",
        "text": "BrightPath's team was spending days each month manually pulling numbers from 12 different tools into spreadsheets just to get a company-wide view of performance."
      },
      {
        "type": "image",
        "src": "images/illustrations/inline-analytics.jpg",
        "alt": "Business analytics dashboard with charts"
      },
      {
        "type": "heading",
        "id": "approach",
        "text": "Our Approach"
      },
      {
        "type": "paragraph",
        "text": "We built a single React dashboard that pulls from all 12 sources via scheduled API syncs, with role-based views so each team only sees what's relevant to them."
      },
      {
        "type": "list",
        "items": [
          "Automated nightly syncs from 12 separate tools and spreadsheets",
          "Role-based dashboards for sales, marketing and finance",
          "One-click exports replacing the old manual reporting process"
        ]
      },
      {
        "type": "quote",
        "text": "What used to take three days every month now updates automatically overnight."
      },
      {
        "type": "image",
        "src": "images/illustrations/analytics-sync-engine.jpg",
        "alt": "BrightPath 12-source automated data pipeline and ETL health monitor"
      },
      {
        "type": "heading",
        "id": "results",
        "text": "The Results"
      },
      {
        "type": "paragraph",
        "text": "Manual reporting time dropped by roughly 70%, freeing the operations team to spend that time on analysis instead of data entry."
      },
      {
        "type": "image",
        "src": "images/illustrations/analytics-executive-report.jpg",
        "alt": "Executive performance board pack and 1-click automated report export"
      }
    ]
  },
  {
    "slug": "fintech-payments-app",
    "name": "Fintech Payments App",
    "client": "PayLoop",
    "category": "Mobile Apps",
    "tags": [
      "Mobile App",
      "Flutter"
    ],
    "thumb": "images/illustrations/project-fintech-app.jpg",
    "cover": "images/illustrations/project-fintech-app.jpg",
    "excerpt": "Secure peer-to-peer payments app with instant transfers and fraud checks.",
    "featured": false,
    "results": [
      {
        "value": "$2M+",
        "label": "Processed Monthly"
      },
      {
        "value": "0.02%",
        "label": "Fraud Rate"
      },
      {
        "value": "12 wks",
        "label": "To Launch"
      }
    ],
    "testimonial": {
      "quote": "Security was non-negotiable for us, and Zyanix took that as seriously as we did — every review caught something before it became a problem.",
      "name": "Nathan Brooks",
      "role": "CTO, PayLoop",
      "avatar": "images/avatars/nathan-brooks.jpg"
    },
    "content": [
      {
        "type": "heading",
        "id": "challenge",
        "text": "The Challenge"
      },
      {
        "type": "paragraph",
        "text": "PayLoop needed a peer-to-peer payments app that felt instant to users while meeting strict fraud-prevention and compliance requirements from day one."
      },
      {
        "type": "image",
        "src": "images/illustrations/inline-fintech.jpg",
        "alt": "Mobile payments app transaction screen"
      },
      {
        "type": "heading",
        "id": "approach",
        "text": "Our Approach"
      },
      {
        "type": "paragraph",
        "text": "We built the app in Flutter for a consistent experience across iOS and Android, backed by a fraud-detection layer that scores every transaction in real time before it settles."
      },
      {
        "type": "list",
        "items": [
          "Real-time fraud scoring on every transaction",
          "Biometric authentication for high-value transfers",
          "Full audit logging to support compliance reviews"
        ]
      },
      {
        "type": "quote",
        "text": "Instant-feeling transfers, without cutting corners on the fraud checks running behind the scenes."
      },
      {
        "type": "image",
        "src": "images/illustrations/fintech-transfer-flow.jpg",
        "alt": "PayLoop instant peer-to-peer transfer, split bill modal, and real-time ledger"
      },
      {
        "type": "heading",
        "id": "results",
        "text": "The Results"
      },
      {
        "type": "paragraph",
        "text": "The app now processes over $2M in monthly transaction volume with a fraud rate of just 0.02%, well under industry benchmarks."
      },
      {
        "type": "image",
        "src": "images/illustrations/fintech-security-vault.jpg",
        "alt": "Multi-currency bank vaults, SEPA instant rails, and biometric encryption"
      }
    ]
  },
  {
    "slug": "logistics-tracking-platform",
    "name": "Logistics Tracking Platform",
    "client": "RouteWise Logistics",
    "category": "Cloud & DevOps",
    "tags": [
      "Web App",
      "Cloud"
    ],
    "thumb": "images/illustrations/project-logistics.jpg",
    "cover": "images/illustrations/project-logistics.jpg",
    "excerpt": "Fleet and shipment tracking system with live maps and delivery alerts.",
    "featured": false,
    "results": [
      {
        "value": "40%",
        "label": "Fewer Support Calls"
      },
      {
        "value": "500+",
        "label": "Vehicles Tracked"
      },
      {
        "value": "99.95%",
        "label": "Platform Uptime"
      }
    ],
    "testimonial": {
      "quote": "We finally have one place to see the whole fleet, live. It's changed how our dispatch team works.",
      "name": "Thomas Walker",
      "role": "Operations Director, RouteWise Logistics",
      "avatar": "images/avatars/thomas-walker.jpg"
    },
    "content": [
      {
        "type": "heading",
        "id": "challenge",
        "text": "The Challenge"
      },
      {
        "type": "paragraph",
        "text": "RouteWise's dispatch team relied on phone calls to track shipment status across a fleet of 500+ vehicles, leading to a high volume of customer support calls asking \"where is my delivery.\""
      },
      {
        "type": "image",
        "src": "images/illustrations/inline-logistics.jpg",
        "alt": "Fleet tracking dashboard with live map"
      },
      {
        "type": "heading",
        "id": "approach",
        "text": "Our Approach"
      },
      {
        "type": "paragraph",
        "text": "We built a cloud-native tracking platform on AWS with live GPS ingestion, automated customer notifications, and a dispatch dashboard showing the entire fleet on one map."
      },
      {
        "type": "list",
        "items": [
          "Live GPS ingestion pipeline handling 500+ vehicles simultaneously",
          "Automated SMS/email alerts at each delivery milestone",
          "Auto-scaling infrastructure to handle peak shipping seasons"
        ]
      },
      {
        "type": "quote",
        "text": "Customers stopped calling to ask where their delivery was — they could just check the tracking link."
      },
      {
        "type": "image",
        "src": "images/illustrations/logistics-fleet-map.jpg",
        "alt": "FreightFlow interactive fleet routing planner with automated geofence triggers"
      },
      {
        "type": "heading",
        "id": "results",
        "text": "The Results"
      },
      {
        "type": "paragraph",
        "text": "Delivery-status support calls dropped by roughly 40% within the first two months, and the platform has held 99.95% uptime through two peak shipping seasons."
      },
      {
        "type": "image",
        "src": "images/illustrations/logistics-driver-mobile.jpg",
        "alt": "Driver companion app with offline contactless electronic proof of delivery"
      }
    ]
  },
  {
    "slug": "telehealth-booking-app",
    "name": "Telehealth Booking App",
    "client": "CareConnect Health",
    "category": "UI/UX",
    "tags": [
      "Mobile App",
      "UI/UX"
    ],
    "thumb": "images/illustrations/project-telehealth.jpg",
    "cover": "images/illustrations/project-telehealth.jpg",
    "excerpt": "Appointment booking and video consultation app for a healthcare network.",
    "featured": false,
    "results": [
      {
        "value": "45%",
        "label": "Fewer No-Shows"
      },
      {
        "value": "4.7★",
        "label": "Patient Rating"
      },
      {
        "value": "9 wks",
        "label": "To Launch"
      }
    ],
    "testimonial": {
      "quote": "Patients kept telling us the booking flow was the easiest they'd used for any healthcare app — that was the whole goal.",
      "name": "Dr. Rachel Foster",
      "role": "Medical Director, CareConnect Health",
      "avatar": "images/avatars/rachel-foster.jpg"
    },
    "content": [
      {
        "type": "heading",
        "id": "challenge",
        "text": "The Challenge"
      },
      {
        "type": "paragraph",
        "text": "CareConnect's booking process involved phone calls and a confusing web form, leading to a high no-show rate and frustrated patients who gave up before completing a booking."
      },
      {
        "type": "image",
        "src": "images/illustrations/inline-telehealth.jpg",
        "alt": "Telehealth appointment booking app interface"
      },
      {
        "type": "heading",
        "id": "approach",
        "text": "Our Approach"
      },
      {
        "type": "paragraph",
        "text": "We led with UX research — shadowing patients as they tried to book — then designed a simplified three-step booking flow with automated reminders and easy rescheduling built in."
      },
      {
        "type": "list",
        "items": [
          "A three-step booking flow validated through usability testing",
          "Automated appointment reminders via SMS and push notification",
          "One-tap rescheduling to reduce cancellations turning into no-shows"
        ]
      },
      {
        "type": "quote",
        "text": "We designed for the patient who's anxious and in a hurry — not the ideal case."
      },
      {
        "type": "image",
        "src": "images/illustrations/telehealth-patient-portal.jpg",
        "alt": "CarePulse clinical symptom triage and instant teleconsultation slot selection"
      },
      {
        "type": "heading",
        "id": "results",
        "text": "The Results"
      },
      {
        "type": "paragraph",
        "text": "No-shows dropped by 45% within the first quarter, and the app maintains a 4.7-star average rating from patients across both app stores."
      },
      {
        "type": "image",
        "src": "images/illustrations/telehealth-doctor-console.jpg",
        "alt": "Specialist clinical workstation with live vitals telemetry and instant e-prescription"
      }
    ]
  }
];
