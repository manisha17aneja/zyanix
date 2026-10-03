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
    "slug": "auto-marketplace-platform",
    "name": "Auto Marketplace Platform",
    "client": "NextGen Motors",
    "category": "Web Apps",
    "tags": ["Web App", "Next.js"],
    "thumb": "images/illustrations/project-auto-marketplace.png",
    "cover": "images/illustrations/project-auto-marketplace.png",
    "excerpt": "A full-featured marketplace connecting buyers and dealers with real-time listings.",
    "featured": true,
    "results": [
      { "value": "3.2x", "label": "Lead Growth" },
      { "value": "10 wks", "label": "To Launch" },
      { "value": "99.9%", "label": "Uptime" }
    ],
    "testimonial": {
      "quote": "Zyanix didn't just build what we asked for — they challenged our assumptions and helped us ship a much better product. The marketplace has been rock solid since day one.",
      "name": "Michael Anderson",
      "role": "Founder & CEO, NextGen Motors",
      "avatar": "images/avatars/michael-anderson.png"
    },
    "content": [
      { "type": "heading", "id": "challenge", "text": "The Challenge" },
      { "type": "paragraph", "text": "NextGen Motors needed a scalable auto marketplace to compete with established players, but their existing systems couldn't handle real-time inventory across hundreds of dealers." },
      { "type": "image", "src": "images/illustrations/project-auto-marketplace.png", "alt": "Auto marketplace dashboard interface" },
      { "type": "heading", "id": "approach", "text": "Our Approach" },
      { "type": "paragraph", "text": "We designed and built a full-stack platform — from search and listings to dealer dashboards — using Next.js on the frontend and a Node.js API backed by PostgreSQL, deployed on AWS with auto-scaling from the start." },
      { "type": "list", "items": [
        "Real-time inventory sync across 300+ dealer accounts",
        "Faceted search with sub-200ms response times",
        "A self-serve dealer dashboard replacing manual spreadsheet uploads"
      ]},
      { "type": "quote", "text": "The marketplace went live in 10 weeks and hasn't had a major outage since." },
      { "type": "heading", "id": "results", "text": "The Results" },
      { "type": "paragraph", "text": "Within the first quarter post-launch, qualified leads grew 3.2x, and the platform has maintained 99.9% uptime while scaling to handle seasonal traffic spikes." }
    ]
  },
  {
    "slug": "fitness-mobile-app",
    "name": "Fitness Mobile App",
    "client": "PulseFit",
    "category": "Mobile Apps",
    "tags": ["Mobile App", "React Native"],
    "thumb": "images/illustrations/project-fitness-app.png",
    "cover": "images/illustrations/project-fitness-app.png",
    "excerpt": "Workout tracking and coaching app with live progress syncing across devices.",
    "featured": false,
    "results": [
      { "value": "4.8★", "label": "App Store Rating" },
      { "value": "60k+", "label": "Downloads Year 1" },
      { "value": "8 wks", "label": "To Launch" }
    ],
    "testimonial": {
      "quote": "Zyanix understood exactly what our coaches needed — the app feels like it was built by people who actually train.",
      "name": "Isabella Clark",
      "role": "Co-Founder, PulseFit",
      "avatar": "images/avatars/isabella-clark.png"
    },
    "content": [
      { "type": "heading", "id": "challenge", "text": "The Challenge" },
      { "type": "paragraph", "text": "PulseFit's coaches were tracking client workouts across spreadsheets and messaging apps, making it impossible to give consistent, data-backed feedback." },
      { "type": "image", "src": "images/illustrations/project-fitness-app.png", "alt": "Fitness app workout tracking screen" },
      { "type": "heading", "id": "approach", "text": "Our Approach" },
      { "type": "paragraph", "text": "We built a React Native app with offline-first workout logging that syncs the moment a connection is available, plus a coach dashboard to review client progress in one place." },
      { "type": "list", "items": [
        "Offline workout logging with automatic background sync",
        "Live progress charts coaches can review remotely",
        "Push-notification-based check-ins to boost adherence"
      ]},
      { "type": "quote", "text": "Client retention jumped once coaches could actually see what was happening between sessions." },
      { "type": "heading", "id": "results", "text": "The Results" },
      { "type": "paragraph", "text": "The app crossed 60,000 downloads in its first year with a 4.8-star average rating, and PulseFit's coach-reported client retention improved noticeably within the first two months." }
    ]
  },
  {
    "slug": "business-analytics-dashboard",
    "name": "Business Analytics Dashboard",
    "client": "BrightPath Solutions",
    "category": "Web Apps",
    "tags": ["Web App", "React"],
    "thumb": "images/illustrations/project-analytics-dashboard.png",
    "cover": "images/illustrations/project-analytics-dashboard.png",
    "excerpt": "A unified reporting dashboard turning raw business data into clear insights.",
    "featured": false,
    "results": [
      { "value": "70%", "label": "Less Manual Reporting" },
      { "value": "12", "label": "Data Sources Unified" },
      { "value": "6 wks", "label": "To Launch" }
    ],
    "testimonial": {
      "quote": "The team understood our requirements perfectly and built a solution that exceeded our expectations.",
      "name": "Emma Richardson",
      "role": "CEO, BrightPath Solutions",
      "avatar": "images/avatars/emma-richardson.png"
    },
    "content": [
      { "type": "heading", "id": "challenge", "text": "The Challenge" },
      { "type": "paragraph", "text": "BrightPath's team was spending days each month manually pulling numbers from 12 different tools into spreadsheets just to get a company-wide view of performance." },
      { "type": "image", "src": "images/illustrations/project-analytics-dashboard.png", "alt": "Business analytics dashboard with charts" },
      { "type": "heading", "id": "approach", "text": "Our Approach" },
      { "type": "paragraph", "text": "We built a single React dashboard that pulls from all 12 sources via scheduled API syncs, with role-based views so each team only sees what's relevant to them." },
      { "type": "list", "items": [
        "Automated nightly syncs from 12 separate tools and spreadsheets",
        "Role-based dashboards for sales, marketing and finance",
        "One-click exports replacing the old manual reporting process"
      ]},
      { "type": "quote", "text": "What used to take three days every month now updates automatically overnight." },
      { "type": "heading", "id": "results", "text": "The Results" },
      { "type": "paragraph", "text": "Manual reporting time dropped by roughly 70%, freeing the operations team to spend that time on analysis instead of data entry." }
    ]
  },
  {
    "slug": "fintech-payments-app",
    "name": "Fintech Payments App",
    "client": "PayLoop",
    "category": "Mobile Apps",
    "tags": ["Mobile App", "Flutter"],
    "thumb": "images/illustrations/project-fintech-app.png",
    "cover": "images/illustrations/project-fintech-app.png",
    "excerpt": "Secure peer-to-peer payments app with instant transfers and fraud checks.",
    "featured": false,
    "results": [
      { "value": "$2M+", "label": "Processed Monthly" },
      { "value": "0.02%", "label": "Fraud Rate" },
      { "value": "12 wks", "label": "To Launch" }
    ],
    "testimonial": {
      "quote": "Security was non-negotiable for us, and Zyanix took that as seriously as we did — every review caught something before it became a problem.",
      "name": "Nathan Brooks",
      "role": "CTO, PayLoop",
      "avatar": "images/avatars/nathan-brooks.png"
    },
    "content": [
      { "type": "heading", "id": "challenge", "text": "The Challenge" },
      { "type": "paragraph", "text": "PayLoop needed a peer-to-peer payments app that felt instant to users while meeting strict fraud-prevention and compliance requirements from day one." },
      { "type": "image", "src": "images/illustrations/project-fintech-app.png", "alt": "Mobile payments app transaction screen" },
      { "type": "heading", "id": "approach", "text": "Our Approach" },
      { "type": "paragraph", "text": "We built the app in Flutter for a consistent experience across iOS and Android, backed by a fraud-detection layer that scores every transaction in real time before it settles." },
      { "type": "list", "items": [
        "Real-time fraud scoring on every transaction",
        "Biometric authentication for high-value transfers",
        "Full audit logging to support compliance reviews"
      ]},
      { "type": "quote", "text": "Instant-feeling transfers, without cutting corners on the fraud checks running behind the scenes." },
      { "type": "heading", "id": "results", "text": "The Results" },
      { "type": "paragraph", "text": "The app now processes over $2M in monthly transaction volume with a fraud rate of just 0.02%, well under industry benchmarks." }
    ]
  },
  {
    "slug": "logistics-tracking-platform",
    "name": "Logistics Tracking Platform",
    "client": "RouteWise Logistics",
    "category": "Cloud & DevOps",
    "tags": ["Web App", "Cloud"],
    "thumb": "images/illustrations/project-logistics.png",
    "cover": "images/illustrations/project-logistics.png",
    "excerpt": "Fleet and shipment tracking system with live maps and delivery alerts.",
    "featured": false,
    "results": [
      { "value": "40%", "label": "Fewer Support Calls" },
      { "value": "500+", "label": "Vehicles Tracked" },
      { "value": "99.95%", "label": "Platform Uptime" }
    ],
    "testimonial": {
      "quote": "We finally have one place to see the whole fleet, live. It's changed how our dispatch team works.",
      "name": "Thomas Walker",
      "role": "Operations Director, RouteWise Logistics",
      "avatar": "images/avatars/thomas-walker.png"
    },
    "content": [
      { "type": "heading", "id": "challenge", "text": "The Challenge" },
      { "type": "paragraph", "text": "RouteWise's dispatch team relied on phone calls to track shipment status across a fleet of 500+ vehicles, leading to a high volume of customer support calls asking \"where is my delivery.\"" },
      { "type": "image", "src": "images/illustrations/project-logistics.png", "alt": "Fleet tracking dashboard with live map" },
      { "type": "heading", "id": "approach", "text": "Our Approach" },
      { "type": "paragraph", "text": "We built a cloud-native tracking platform on AWS with live GPS ingestion, automated customer notifications, and a dispatch dashboard showing the entire fleet on one map." },
      { "type": "list", "items": [
        "Live GPS ingestion pipeline handling 500+ vehicles simultaneously",
        "Automated SMS/email alerts at each delivery milestone",
        "Auto-scaling infrastructure to handle peak shipping seasons"
      ]},
      { "type": "quote", "text": "Customers stopped calling to ask where their delivery was — they could just check the tracking link." },
      { "type": "heading", "id": "results", "text": "The Results" },
      { "type": "paragraph", "text": "Delivery-status support calls dropped by roughly 40% within the first two months, and the platform has held 99.95% uptime through two peak shipping seasons." }
    ]
  },
  {
    "slug": "telehealth-booking-app",
    "name": "Telehealth Booking App",
    "client": "CareConnect Health",
    "category": "UI/UX",
    "tags": ["Mobile App", "UI/UX"],
    "thumb": "images/illustrations/project-telehealth.png",
    "cover": "images/illustrations/project-telehealth.png",
    "excerpt": "Appointment booking and video consultation app for a healthcare network.",
    "featured": false,
    "results": [
      { "value": "45%", "label": "Fewer No-Shows" },
      { "value": "4.7★", "label": "Patient Rating" },
      { "value": "9 wks", "label": "To Launch" }
    ],
    "testimonial": {
      "quote": "Patients kept telling us the booking flow was the easiest they'd used for any healthcare app — that was the whole goal.",
      "name": "Dr. Rachel Foster",
      "role": "Medical Director, CareConnect Health",
      "avatar": "images/avatars/rachel-foster.png"
    },
    "content": [
      { "type": "heading", "id": "challenge", "text": "The Challenge" },
      { "type": "paragraph", "text": "CareConnect's booking process involved phone calls and a confusing web form, leading to a high no-show rate and frustrated patients who gave up before completing a booking." },
      { "type": "image", "src": "images/illustrations/project-telehealth.png", "alt": "Telehealth appointment booking app interface" },
      { "type": "heading", "id": "approach", "text": "Our Approach" },
      { "type": "paragraph", "text": "We led with UX research — shadowing patients as they tried to book — then designed a simplified three-step booking flow with automated reminders and easy rescheduling built in." },
      { "type": "list", "items": [
        "A three-step booking flow validated through usability testing",
        "Automated appointment reminders via SMS and push notification",
        "One-tap rescheduling to reduce cancellations turning into no-shows"
      ]},
      { "type": "quote", "text": "We designed for the patient who's anxious and in a hurry — not the ideal case." },
      { "type": "heading", "id": "results", "text": "The Results" },
      { "type": "paragraph", "text": "No-shows dropped by 45% within the first quarter, and the app maintains a 4.7-star average rating from patients across both app stores." }
    ]
  }
];
