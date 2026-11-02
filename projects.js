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
      "Next.js",
      "Real-Time WebSockets"
    ],
    "thumb": "images/illustrations/project-autoflow.jpg",
    "cover": "images/illustrations/project-autoflow.jpg",
    "excerpt": "Full-stack automotive dealership operating system unifying lead routing, conflict-free test drives, live showroom inventory, and service workshop bays.",
    "featured": false,
    "layout": "saas-os",
    "statusBadge": "Live in Production · Enterprise Tier",
    "highlightBadge": "Automotive Dealership OS",
    "liveDemoUrl": "https://crm-autoflow.netlify.app/",
    "dashboardUrl": "https://crm-autoflow.netlify.app/dashboard",
    "gallery": [
      {
        "src": "images/illustrations/project-autoflow.jpg",
        "label": "Showroom Lead Matrix"
      },
      {
        "src": "images/illustrations/autoflow-workshop.jpg",
        "label": "Service Bay Workshop"
      },
      {
        "src": "images/illustrations/autoflow-mobile.jpg",
        "label": "Mobile Sales Handset"
      }
    ],
    "results": [
      {
        "value": "3.2x",
        "label": "Faster Enquiry Response",
        "delta": "Sub-60s SLA",
        "sub": "From 4.5 hrs down to 58 secs"
      },
      {
        "value": "100%",
        "label": "Clash-Free Test Drives",
        "delta": "Zero Overlaps",
        "sub": "Enforced via DB transactional locks"
      },
      {
        "value": "+42%",
        "label": "Service Bay Retention",
        "delta": "Automated Reminders",
        "sub": "WhatsApp & SMS service cadence"
      },
      {
        "value": "12",
        "label": "Branches Unified",
        "delta": "Multi-Tenant RLS",
        "sub": "Strict branch data isolation"
      }
    ],
    "specs": [
      {
        "title": "PostgreSQL Row-Level Security (RLS)",
        "desc": "Multi-tenant isolation enforced directly at the database engine level, ensuring branch salespeople never see unauthorized dealership records or confidential pricing margins."
      },
      {
        "title": "Atomic Concurrency Slot Locking",
        "desc": "Atomic PostgreSQL transactions prevent test-drive double-bookings with sub-millisecond vehicle reservation locks across showroom tablet terminals."
      },
      {
        "title": "Dynamic Workshop Bay Scheduler",
        "desc": "Interactive Gantt-style workshop floor view allocating job cards to certified mechanics with live parts requisition and automated time tracking."
      },
      {
        "title": "Omnichannel Lead Ingestion & SLA Clock",
        "desc": "Auto-ingests walk-ins, digital ads, and marketplace enquiries with instant automated round-robin sales executive assignment and 5-minute escalation timers."
      },
      {
        "title": "Automated RTO & Finance Paperwork",
        "desc": "Digital document repository tracking vehicle registration, hypothecation NOCs, and insurance delivery milestones with automated customer SMS updates."
      },
      {
        "title": "PWA Mobile Sales Handset App",
        "desc": "Offline-capable mobile PWA for on-the-floor showroom reps to configure vehicle options, calculate loan EMIs, and collect digital booking deposits."
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
        "text": "Automobile dealership groups managing high-volume showrooms frequently lose walk-in and online prospects due to delayed sales follow-ups and spreadsheet-based tracking. Test-drive demo vehicles were constantly double-booked between competing sales executives on busy weekends, creating severe customer friction. Furthermore, after-sales service workshops operated in a complete silo from vehicle sales, resulting in over 40% customer churn after the initial factory warranty period expired."
      },
      {
        "type": "callout",
        "title": "The Operational Bottleneck",
        "text": "Before AutoFlow, customer data was scattered across three separate vendor tools: an antiquated desktop DMS, WhatsApp groups, and physical whiteboards in the workshop. A lead from a Saturday morning campaign took an average of 4.5 hours to be assigned to a showroom consultant."
      },
      {
        "type": "image",
        "src": "images/illustrations/inline-autoflow.jpg",
        "alt": "AutoFlow CRM Dealership Workspace and Connected Operations",
        "caption": "Figure 1.1: Unified AutoFlow Dealership Command Center showing multi-branch lead ingestion and inventory status."
      },
      {
        "type": "heading",
        "id": "architecture",
        "text": "System Architecture & Engineering Strategy"
      },
      {
        "type": "paragraph",
        "text": "We engineered AutoFlow CRM from the ground up as a cloud-native dealership operating system. The frontend was built with Next.js (App Router) to deliver sub-second screen transitions and server-side rendering for dealer catalogs. The backend utilizes Node.js microservices with PostgreSQL, leveraging Row-Level Security (RLS) deep within the database kernel to enforce multi-tenant security across branch networks without code-level permission vulnerabilities."
      },
      {
        "type": "tech-stack",
        "items": [
          {
            "category": "Frontend",
            "name": "Next.js & TypeScript",
            "detail": "Server Components, Tailwind CSS, Responsive PWA"
          },
          {
            "category": "Backend API",
            "name": "Node.js & Fastify",
            "detail": "High-throughput REST & WebSocket event gateway"
          },
          {
            "category": "Database",
            "name": "PostgreSQL with RLS",
            "detail": "Row-Level Security, JSONB queries, ACID locking"
          },
          {
            "category": "Real-Time",
            "name": "Socket.io & Redis Pub/Sub",
            "detail": "Live slot reservation, instant lead notifications"
          },
          {
            "category": "Cloud & DevOps",
            "name": "AWS ECS & Cloudflare",
            "detail": "Dockerized containers, edge caching, automated CI/CD"
          },
          {
            "category": "Integrations",
            "name": "WhatsApp Cloud API",
            "detail": "Automated brochure drops, service reminders & OTPs"
          }
        ]
      },
      {
        "type": "heading",
        "id": "features",
        "text": "Core Modules & Operational Workflows"
      },
      {
        "type": "list",
        "items": [
          "Automated Lead Ingestion Engine: Connects to Meta Ads, Google Ads, CarDekho, CarWale, and showroom walk-in kiosks, executing automated phone deduplication and round-robin sales consultant assignment within 58 seconds.",
          "Conflict-Free Test Drive Scheduler: Built on PostgreSQL row-level pessimistic locking, ensuring two sales executives cannot reserve the same demo vehicle for overlapping time slots, eliminating 100% of showroom scheduling clashes.",
          "Showroom Digital Quotation & Finance Calculator: Generates customized PDF on-road price breakups with loan EMI amortization schedules, insurance add-ons, and accessory packages in one click.",
          "Service Bay Workshop Floor Gantt: Real-time visual scheduling board tracking vehicle intake, mechanic bay allocation, parts requisition, washing, quality checks, and customer billing handovers.",
          "After-Sales Service Retention Drip: Automatically calculates vehicle service intervals based on past mileage and triggers WhatsApp appointment reminders with one-click slot booking links."
        ]
      },
      {
        "type": "image",
        "src": "images/illustrations/autoflow-workshop.jpg",
        "alt": "AutoFlow CRM Service Workshop Bay Scheduling & Job Cards",
        "caption": "Figure 1.2: Interactive Workshop Bay Scheduler with live technician allocation and parts inventory status."
      },
      {
        "type": "quote",
        "text": "AutoFlow eliminated our test-drive clashes entirely. The sales floor and service bays now work off a single synchronized ledger."
      },
      {
        "type": "heading",
        "id": "technical-deep-dive",
        "text": "Solving the Concurrency & Tenancy Challenge"
      },
      {
        "type": "paragraph",
        "text": "Dealership groups often own multiple branded showrooms (e.g. Luxury, EV, Commercial). Using traditional application-level tenant filters (`WHERE dealership_id = X`) is notoriously error-prone. We designed a hardened tenancy model where every database connection is initialized with a session variable `SET LOCAL app.current_tenant_id = $1`. PostgreSQL Row-Level Security policies automatically filter every `SELECT`, `UPDATE`, and `DELETE` at the kernel level, ensuring impossible tenant data bleeding."
      },
      {
        "type": "callout",
        "title": "Atomic Test-Drive Locking",
        "text": "To prevent double-bookings during peak promotional events, we implemented advisory locks (`pg_try_advisory_xact_lock`) combined with time-range overlap constraints (`tstzrange`). If two sales reps tap 'Confirm Test Drive' at the exact same millisecond, the second transaction is immediately gracefully notified of the clash and offered the next nearest vehicle or slot."
      },
      {
        "type": "heading",
        "id": "timeline",
        "text": "Implementation Journey & Milestones"
      },
      {
        "type": "timeline",
        "steps": [
          {
            "phase": "Phase 1: Discovery",
            "title": "Dealership Floor Audits & Workflow Mapping",
            "desc": "Spent two weeks shadowing showroom sales managers and service bay technicians across 4 locations to map all manual handoff bottlenecks."
          },
          {
            "phase": "Phase 2: Core Engine",
            "title": "PostgreSQL RLS Schema & Next.js Architecture",
            "desc": "Designed the multi-tenant relational schema, advisory lock mechanisms, and high-speed responsive UI components for desktop and tablet."
          },
          {
            "phase": "Phase 3: Integration",
            "title": "WhatsApp API & DMS Data Migration",
            "desc": "Connected WhatsApp Cloud API for automated notifications and migrated 85,000 legacy customer records with automated phone deduplication."
          },
          {
            "phase": "Phase 4: Rollout",
            "title": "Pilot Launch & 12-Branch Multi-Site Deployment",
            "desc": "Deployed pilot across two flagship showrooms, validated 100% clash-free operations, and expanded network-wide with zero downtime."
          }
        ]
      },
      {
        "type": "heading",
        "id": "results",
        "text": "Measurable Business Impact & ROI"
      },
      {
        "type": "paragraph",
        "text": "Within 90 days of deploying AutoFlow CRM across all 12 dealership branches, the client experienced unprecedented improvements in sales throughput and after-sales customer retention:"
      },
      {
        "type": "table",
        "headers": [
          "Operational Benchmark",
          "Legacy Workflow",
          "AutoFlow Platform",
          "Net Business Impact"
        ],
        "rows": [
          [
            "New Lead First Contact Time",
            "4.5 Hours",
            "58 Seconds",
            "3.2x Faster Response"
          ],
          [
            "Weekend Test-Drive Clashes",
            "12-18 Clashes / Month",
            "0 (Zero)",
            "100% Conflict-Free"
          ],
          [
            "Repeat Service Bay Retention",
            "31% Retention",
            "73% Retention",
            "+42% Revenue Lift"
          ],
          [
            "Quotation Preparation Time",
            "25 Minutes (Manual Excel)",
            "45 Seconds (1-Click PDF)",
            "97% Time Reduction"
          ],
          [
            "Customer CSAT Score",
            "3.4 / 5.0",
            "4.8 / 5.0",
            "+41% Satisfaction"
          ]
        ]
      },
      {
        "type": "image",
        "src": "images/illustrations/autoflow-mobile.jpg",
        "alt": "AutoFlow Mobile Sales Representative App & Showroom Inventory Catalog",
        "caption": "Figure 1.3: Mobile Sales Handset PWA enabling on-the-spot vehicle configuration and token deposit collection."
      },
      {
        "type": "heading",
        "id": "roadmap",
        "text": "Future Roadmap & Multi-Brand Expansion"
      },
      {
        "type": "paragraph",
        "text": "Following the successful deployment, the client has commissioned Zyanix for Phase 2: integrating computer-vision automated vehicle inspection cameras at service bay entry gates and an AI-powered WhatsApp voice assistant to handle inbound test-drive bookings 24/7."
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
      "Headless Shopify",
      "Algolia Search"
    ],
    "thumb": "images/illustrations/project-ecommerce-store.jpg",
    "cover": "images/illustrations/project-ecommerce-store.jpg",
    "excerpt": "High-converting headless e-commerce store with sub-second page loads, personalized AI recommendations, and 2-step instant checkout.",
    "featured": false,
    "layout": "ecommerce-store",
    "statusBadge": "Sub-Second Global Edge",
    "highlightBadge": "Headless Luxury Commerce",
    "results": [
      {
        "value": "+42%",
        "label": "Checkout Conversion",
        "delta": "+61% Mobile Lift",
        "sub": "Direct 2-step Apple Pay & Stripe"
      },
      {
        "value": "1.2s",
        "label": "Page Load Speed",
        "delta": "85% Faster FCP",
        "sub": "Global Edge CDN caching"
      },
      {
        "value": "6 wks",
        "label": "To Production Launch",
        "delta": "Modular Architecture",
        "sub": "Headless commerce MVP"
      },
      {
        "value": "99/100",
        "label": "Core Web Vitals",
        "delta": "Grade A Score",
        "sub": "Mobile Lighthouse benchmark"
      }
    ],
    "comparison": [
      {
        "metric": "First Contentful Paint (FCP)",
        "before": "2.8s",
        "after": "0.4s",
        "improvement": "85% Faster"
      },
      {
        "metric": "Time to Interactive (TTI)",
        "before": "4.5s",
        "after": "1.2s",
        "improvement": "73% Faster"
      },
      {
        "metric": "Mobile Checkout Conversion",
        "before": "1.8%",
        "after": "2.9%",
        "improvement": "+61% Lift"
      },
      {
        "metric": "Cart Abandonment Rate",
        "before": "68%",
        "after": "41%",
        "improvement": "27% Reduction"
      },
      {
        "metric": "Google Core Web Vitals",
        "before": "42 / 100",
        "after": "99 / 100",
        "improvement": "Grade A Perfect"
      }
    ],
    "specs": [
      {
        "title": "Edge SSR & Incremental Static Regeneration",
        "desc": "Catalog pages revalidate in the background on Cloudflare Edge nodes, delivering sub-second TTFB globally even during 10x flash sale traffic spikes."
      },
      {
        "title": "Frictionless 2-Step Instant Checkout",
        "desc": "Native Apple Pay, Google Pay, and Stripe 1-Click Elements integrated directly on product pages, skipping traditional 5-step form barriers."
      },
      {
        "title": "Algolia Neural Instant Search & Facets",
        "desc": "Type-ahead sub-50ms search with typo-tolerance, real-time filtering by color, size, material, and live warehouse inventory status."
      },
      {
        "title": "Omnichannel Real-Time Inventory Sync",
        "desc": "Event-driven webhook bridge connecting Shopify Plus, warehouse ERP, and 14 physical flagship boutiques with sub-second stock accuracy."
      }
    ],
    "testimonial": {
      "quote": "Moving to our custom headless store built by Zyanix increased our mobile conversion immediately. Our customers constantly praise how smooth and fast checkout is, especially during our Black Friday drop.",
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
        "text": "LuxeLiving Apparel had outgrown their legacy monolithic Shopify theme. During seasonal collection drops and flash sales, page load speeds climbed above 4.5 seconds on mobile networks, leading to a disastrous 68% cart abandonment rate. Their luxury clientele expected a boutique, instant digital experience, but were instead met with layout shifts, unresponsive filters, and an arduous multi-step checkout form."
      },
      {
        "type": "callout",
        "title": "The Performance Bottleneck",
        "text": "A 1-second delay in mobile page load was costing LuxeLiving an estimated $45,000 in lost revenue every weekend. Third-party apps and bloated tracking scripts had degraded mobile Core Web Vitals to 42/100, penalizing their organic Google Search rankings."
      },
      {
        "type": "image",
        "src": "images/illustrations/inline-ecommerce-store.jpg",
        "alt": "LuxeStore e-commerce checkout and analytics interface",
        "caption": "Figure 2.1: Modernized headless catalog architecture with instant facet filtering and live inventory badges."
      },
      {
        "type": "heading",
        "id": "architecture",
        "text": "Headless Commerce Architecture at the Edge"
      },
      {
        "type": "paragraph",
        "text": "We completely decoupled the frontend presentation layer from the e-commerce backend. We built a custom Next.js storefront deployed across Cloudflare Edge CDN locations, connecting to Shopify Plus exclusively via high-throughput GraphQL APIs. Media assets were migrated to Cloudinary for automated WebP/AVIF compression with responsive breakpoints."
      },
      {
        "type": "tech-stack",
        "items": [
          {
            "category": "Frontend",
            "name": "Next.js 14 & React",
            "detail": "Server Components, App Router, Edge Middleware"
          },
          {
            "category": "Backend Engine",
            "name": "Shopify Plus GraphQL",
            "detail": "Headless Storefront API, Custom Webhooks"
          },
          {
            "category": "Search & Discovery",
            "name": "Algolia Neural Search",
            "detail": "Sub-50ms instant faceting, AI typo tolerance"
          },
          {
            "category": "Payment Rails",
            "name": "Stripe & Apple Pay",
            "detail": "Custom Stripe Elements, Google Pay, Klarna"
          },
          {
            "category": "Edge Infrastructure",
            "name": "Cloudflare Workers & Vercel",
            "detail": "Global edge CDN caching, image optimization"
          },
          {
            "category": "Analytics & CDP",
            "name": "Klaviyo & Segment",
            "detail": "Real-time browse abandonment triggers"
          }
        ]
      },
      {
        "type": "heading",
        "id": "features",
        "text": "Conversion-Focused Engineering & Features"
      },
      {
        "type": "list",
        "items": [
          "Sub-Second Dynamic Catalog Navigation: Incremental Static Regeneration (ISR) serves pre-rendered static HTML to 99% of visitors while refreshing stock counts in the background without layout shifts.",
          "Frictionless 2-Step Mobile Checkout: Streamlined purchasing experience with biometric 1-touch Apple Pay and Google Pay, cutting average checkout time from 160 seconds down to 24 seconds.",
          "Omnichannel Store Inventory Lookup: Real-time geolocated stock check allowing shoppers to view which local boutique has their size in stock with 1-click reserve-in-store capability.",
          "Curated Editorial Lookbooks: High-resolution shoppable video and image galleries allowing users to 'Shop the Look' by adding multiple ensemble items directly to cart from a single frame."
        ]
      },
      {
        "type": "image",
        "src": "images/illustrations/ecommerce-checkout.jpg",
        "alt": "LuxeStore high-converting mobile-responsive checkout flow and cart analytics",
        "caption": "Figure 2.2: Streamlined 2-step checkout flow optimized for Apple Pay, Google Pay, and Stripe Elements."
      },
      {
        "type": "quote",
        "text": "Mobile bounce rates dropped by 35% within 48 hours of switching to the headless architecture."
      },
      {
        "type": "heading",
        "id": "technical-deep-dive",
        "text": "Real-Time Omnichannel Inventory Synchronization"
      },
      {
        "type": "paragraph",
        "text": "High-value luxury apparel items frequently suffer from overselling when simultaneous online flash sales collide with in-store point-of-sale transactions. To solve this, we architected an event-driven inventory bridge using Redis queues and AWS Lambda. Every POS purchase in any of their 14 physical boutiques broadcasts a webhook that updates edge cache tags within 350 milliseconds, immediately reflecting sold-out status online."
      },
      {
        "type": "heading",
        "id": "timeline",
        "text": "Implementation Journey & Delivery Milestones"
      },
      {
        "type": "timeline",
        "steps": [
          {
            "phase": "Week 1-2: Scoping",
            "title": "UX Wireframing & Headless API Audit",
            "desc": "Analyzed past customer drop-off data, mapped luxury design tokens, and designed the headless GraphQL data architecture."
          },
          {
            "phase": "Week 3-4: Build",
            "title": "Next.js Edge Storefront & Algolia Integration",
            "desc": "Engineered responsive product display pages, sticky mobile add-to-cart, and sub-50ms faceted search filters."
          },
          {
            "phase": "Week 5: Payments",
            "title": "Custom Stripe & Apple Pay Checkout Integration",
            "desc": "Built compliant, frictionless checkout flow with automated tax calculation and international currency switching."
          },
          {
            "phase": "Week 6: Launch",
            "title": "Load Testing, CDN Warmup & Production Cutover",
            "desc": "Simulated 15,000 concurrent shoppers with k6 load testing, achieving 1.2s TTFB under peak load, followed by seamless zero-downtime DNS cutover."
          }
        ]
      },
      {
        "type": "heading",
        "id": "results",
        "text": "Measurable Business Impact & Conversion Surge"
      },
      {
        "type": "paragraph",
        "text": "The transition from a monolithic architecture to a custom headless Next.js edge storefront delivered immediate, measurable revenue growth:"
      },
      {
        "type": "image",
        "src": "images/illustrations/ecommerce-catalog.jpg",
        "alt": "LuxeStore high-speed product catalog with dynamic facets and 1.2s TTFB",
        "caption": "Figure 2.3: Global Edge-rendered catalog achieving 99/100 Core Web Vitals on mobile devices."
      },
      {
        "type": "heading",
        "id": "roadmap",
        "text": "Scalability Roadmap & Global Expansion"
      },
      {
        "type": "paragraph",
        "text": "Building on this foundation, Zyanix is currently expanding the platform with multi-currency localized storefronts for Europe, the Middle East, and Asia, alongside an AI-driven personalized sizing recommendation engine."
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
      "PostgreSQL",
      "WhatsApp Cloud API"
    ],
    "thumb": "images/illustrations/project-edu-lead.jpg",
    "cover": "images/illustrations/project-edu-lead.jpg",
    "excerpt": "Comprehensive student lead capture, admissions tracking, and counselor allocation platform designed for modern higher-education providers.",
    "featured": false,
    "layout": "edtech-funnel",
    "statusBadge": "<5 Min First-Touch SLA",
    "highlightBadge": "Omnichannel Admissions OS",
    "results": [
      {
        "value": "2.8x",
        "label": "Inquiry Conversion",
        "delta": "Enrollment Surge",
        "sub": "From web lead to paid seat"
      },
      {
        "value": "50k+",
        "label": "Leads Processed",
        "delta": "Zero Loss",
        "sub": "Across 12 regional campuses"
      },
      {
        "value": "8 wks",
        "label": "To Production Launch",
        "delta": "Rapid Delivery",
        "sub": "Complete admissions pipeline"
      },
      {
        "value": "4m 12s",
        "label": "Avg Counselor Response",
        "delta": "60% Faster",
        "sub": "Automated round-robin distribution"
      }
    ],
    "funnelSteps": [
      {
        "step": "01",
        "name": "Lead Ingestion",
        "metric": "100% Captured",
        "desc": "Web forms, WhatsApp QR, and Facebook lead ads auto-deduped in real-time."
      },
      {
        "step": "02",
        "name": "Scoring & Enriched",
        "metric": "AI Intent Score",
        "desc": "Evaluates GPA, target intake, budget, and program preference."
      },
      {
        "step": "03",
        "name": "Round-Robin Route",
        "metric": "4m 12s SLA",
        "desc": "Routes leads directly to available admissions counselors by language & program."
      },
      {
        "step": "04",
        "name": "WhatsApp Nurture",
        "metric": "84% Open Rate",
        "desc": "Automated brochure delivery, campus tour booking, and fee structure walkthroughs."
      },
      {
        "step": "05",
        "name": "Enrollment Deposit",
        "metric": "2.8x Conversion",
        "desc": "Digital application fee payment, document verification, and seat allocation."
      }
    ],
    "specs": [
      {
        "title": "Automated Phone Deduplication & Scrubbing",
        "desc": "Cleanses national and international dial codes, flags duplicate student applications across campuses, and prevents counselor territory disputes."
      },
      {
        "title": "Integrated WhatsApp Cloud API Hub",
        "desc": "Direct two-way messaging inside the CRM interface with pre-approved template drips, verified campus badges, and automated counselor handoff."
      },
      {
        "title": "Live Admission Target & Intake Forecasts",
        "desc": "Executive cohort tracking showing seat occupancy per program, scholarship payouts, and intake projections updated every 15 minutes."
      },
      {
        "title": "Multi-Campus Role-Based Access Isolation",
        "desc": "Strict role-based permissions separating regional campus directors, admissions officers, and finance verifiers with audit logs."
      }
    ],
    "testimonial": {
      "quote": "EduLead gave our admission counselors instant access to qualified student leads with automated follow-ups. Our inquiry conversion rates have reached an all-time high across all 12 campuses.",
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
        "text": "EduSphere Academies operates 12 university and vocational training campuses. During admission intake cycles, they received over 1,500 daily student enquiries across website portals, educational fairs, Meta ads, and WhatsApp. Due to manual Excel-based routing, student inquiries took over 24 hours to reach counselors. In competitive degree programs, prospective students had already enrolled elsewhere by the time counselors called."
      },
      {
        "type": "callout",
        "title": "The Lead Leakage Problem",
        "text": "Over 35% of incoming enquiries were duplicates or contained incomplete phone numbers. Counselors wasted 3 hours every morning manually sorting through spreadsheets rather than speaking with prospective students."
      },
      {
        "type": "image",
        "src": "images/illustrations/inline-edu-lead.jpg",
        "alt": "EduLead student inquiry dashboard and lead scoring interface",
        "caption": "Figure 3.1: Centralized student inquiry dashboard with real-time lead scoring and counselor allocation status."
      },
      {
        "type": "heading",
        "id": "architecture",
        "text": "Omnichannel Funnel Architecture & Routing"
      },
      {
        "type": "paragraph",
        "text": "We engineered EduLead as an omnichannel admissions command center. Incoming leads are immediately parsed through a normalization worker that verifies phone formats, checks for existing campus applications, calculates an intent score based on program interest, and pushes the lead to an active counselor via WebSockets within seconds."
      },
      {
        "type": "tech-stack",
        "items": [
          {
            "category": "Web Application",
            "name": "React 18 & TypeScript",
            "detail": "Fast admissions workstation with keyboard shortcuts"
          },
          {
            "category": "Backend Engine",
            "name": "Node.js & Express API",
            "detail": "Event-driven lead distribution with BullMQ queues"
          },
          {
            "category": "Database & Cache",
            "name": "PostgreSQL & Redis",
            "detail": "ACID compliance for student records, in-memory queues"
          },
          {
            "category": "Telephony & Chat",
            "name": "WhatsApp Cloud API & Twilio",
            "detail": "Click-to-call, automated SMS drips, call recordings"
          },
          {
            "category": "Security & Role",
            "name": "OAuth2 & RBAC",
            "detail": "Campus-level data partitioning, FERPA compliant"
          }
        ]
      },
      {
        "type": "heading",
        "id": "features",
        "text": "Admissions Automation & Counselor Workspace"
      },
      {
        "type": "list",
        "items": [
          "Smart Round-Robin Counselor Routing: Dynamically allocates student inquiries to active counselors based on language preference, campus location, program specialty, and real-time counselor call availability.",
          "Integrated WhatsApp & Cloud Calling Hub: Counselors initiate verified WhatsApp conversations and voice calls directly from the student profile, with automated conversation logging and voice recording storage.",
          "Document Verification & Eligibility Tracker: Prospective students upload transcripts, ID proofs, and scholarship certificates directly via a secure mobile link, enabling counselors to verify eligibility in minutes.",
          "Automated Drip Sequences: Unresponsive leads receive automated multi-channel follow-ups (WhatsApp message on day 1, SMS reminder on day 3, program brochure email on day 5) without manual counselor intervention."
        ]
      },
      {
        "type": "image",
        "src": "images/illustrations/edulead-admissions.jpg",
        "alt": "EduLead admissions pipeline, counselor allocation, and conversion tracking",
        "caption": "Figure 3.2: 5-Stage visual admissions pipeline tracking student progress from inquiry to enrollment deposit."
      },
      {
        "type": "quote",
        "text": "Counselors now reach out to new student applicants within 5 minutes instead of 24 hours. The difference in student receptiveness is extraordinary."
      },
      {
        "type": "heading",
        "id": "timeline",
        "text": "Implementation Journey & Delivery Milestones"
      },
      {
        "type": "timeline",
        "steps": [
          {
            "phase": "Week 1-2: Discovery",
            "title": "Admissions Workflow Audit & Lead Source Mapping",
            "desc": "Documented the admissions pipeline across all 12 campuses, mapped counselor shifts, and analyzed past funnel drop-offs."
          },
          {
            "phase": "Week 3-5: Engine Build",
            "title": "PostgreSQL Lead Database & Ingestion Pipelines",
            "desc": "Built the multi-channel webhook listeners, automated deduplication engine, and real-time counselor queue."
          },
          {
            "phase": "Week 6-7: Integrations",
            "title": "WhatsApp Cloud API & Cloud Telephony Setup",
            "desc": "Integrated official WhatsApp templates and Twilio click-to-call with automated CRM conversation logging."
          },
          {
            "phase": "Week 8: Campus Rollout",
            "title": "Counselor Training & 12-Campus Live Cutover",
            "desc": "Conducted hands-on training for 60+ admissions officers and switched lead routing live with zero lost inquiries."
          }
        ]
      },
      {
        "type": "heading",
        "id": "results",
        "text": "Measurable Admissions Impact & Institutional ROI"
      },
      {
        "type": "paragraph",
        "text": "EduLead delivered a transformative impact on EduSphere's enrollment performance. In the first complete academic intake cycle, the platform achieved a 2.8x increase in inquiry-to-enrollment conversion while cutting counselor administrative time by over 60%."
      },
      {
        "type": "image",
        "src": "images/illustrations/edulead-counselor.jpg",
        "alt": "EduLead counselor workstation, real-time round-robin queue, and WhatsApp follow-up",
        "caption": "Figure 3.3: Counselor workstation with integrated WhatsApp communication and automated follow-up calendar."
      },
      {
        "type": "heading",
        "id": "roadmap",
        "text": "Scalability Roadmap & AI Admissions Assistant"
      },
      {
        "type": "paragraph",
        "text": "EduSphere is expanding EduLead with an automated AI conversational agent that answers student queries regarding program syllabus, fee schedules, and hostel accommodations during late-night hours."
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
      "Next.js",
      "Node.js API",
      "Elasticsearch"
    ],
    "thumb": "images/illustrations/project-auto-marketplace.jpg",
    "cover": "images/illustrations/project-auto-marketplace.jpg",
    "excerpt": "High-volume two-sided automotive marketplace connecting car buyers and verified dealerships with real-time inventory and sub-200ms search.",
    "featured": true,
    "layout": "marketplace",
    "statusBadge": "Sub-200ms Search Speed",
    "highlightBadge": "Two-Sided Automotive Market",
    "results": [
      {
        "value": "3.2x",
        "label": "Lead Growth",
        "delta": "+220% Inquiries",
        "sub": "High-intent buyer leads delivered"
      },
      {
        "value": "10 wks",
        "label": "To Production Launch",
        "delta": "Full MVP Rollout",
        "sub": "Buyer & dealer platform unified"
      },
      {
        "value": "99.9%",
        "label": "Platform Uptime",
        "delta": "Zero Outages",
        "sub": "AWS auto-scaling container mesh"
      },
      {
        "value": "300+",
        "label": "Active Dealerships",
        "delta": "15,000+ Vehicles",
        "sub": "Multi-branch catalog synchronized"
      }
    ],
    "twoSided": {
      "buyerSide": [
        "Sub-200ms faceted car search with 40+ instant filters (make, model, trim, mileage, price, fuel, transmission, body type)",
        "Interactive 360-degree vehicle interior & exterior virtual inspection viewer with high-resolution zoom",
        "Certified pre-owned inspection report viewer with verified accident history and service records",
        "Instant loan EMI & financing calculator with multi-bank pre-qualification credit checks",
        "1-click test-drive booking with real-time dealership confirmation and calendar sync"
      ],
      "dealerSide": [
        "Bulk inventory CSV & DMS automated feed sync updating 300+ dealer lots every 15 minutes",
        "Unified dealer inbox with buyer intent scores, trade-in valuations, and instant WhatsApp chat",
        "Pricing intelligence engine comparing live competitor listings within a 50-mile radius",
        "Custom dealer microsite generator with branded inventory showcase and custom domain support",
        "Digital deal closer with online token deposit collection and electronic purchase agreement signature"
      ]
    },
    "testimonial": {
      "quote": "Zyanix didn't just build what we asked for — they challenged our assumptions and helped us ship a much better product. The marketplace has been rock solid since day one, handling over 100,000 monthly car shoppers.",
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
        "text": "NextGen Motors aimed to disrupt regional automotive retail with a modern digital marketplace. However, their legacy WordPress-based listing site buckled under heavy traffic, taking over 6 seconds to filter through inventory. Dealers were frustrated by tedious manual listing uploads, while car shoppers frequently submitted enquiries for vehicles that had already been sold days earlier."
      },
      {
        "type": "callout",
        "title": "The Scale Problem",
        "text": "With over 300 dealer accounts and 15,000 live vehicle listings, inventory sync conflicts caused 22% of customer enquiries to bounce due to stale vehicle data."
      },
      {
        "type": "image",
        "src": "images/illustrations/inline-auto-marketplace.jpg",
        "alt": "Auto marketplace dashboard interface",
        "caption": "Figure 4.1: NextGen Motors marketplace search interface with sub-200ms filtering across 15,000 vehicles."
      },
      {
        "type": "heading",
        "id": "architecture",
        "text": "High-Performance Platform Architecture"
      },
      {
        "type": "paragraph",
        "text": "We designed a full-stack distributed platform using Next.js on the frontend and an event-driven Node.js API backed by PostgreSQL and Elasticsearch. The system ingests automated inventory feeds from dealer DMS providers, normalizes vehicle attributes against standard automotive databases, and indexes listings into Elasticsearch for instant search response times."
      },
      {
        "type": "tech-stack",
        "items": [
          {
            "category": "Frontend",
            "name": "Next.js & React",
            "detail": "App Router, SSR, Tailwind CSS, 360-Viewer"
          },
          {
            "category": "Search Engine",
            "name": "Elasticsearch 8",
            "detail": "Geo-distance queries, sub-200ms faceted filters"
          },
          {
            "category": "Primary DB",
            "name": "PostgreSQL with PostGIS",
            "detail": "Relational vehicle data, dealer accounts, spatial search"
          },
          {
            "category": "Cloud & Queue",
            "name": "AWS ECS & SQS",
            "detail": "Containerized microservices, background feed workers"
          },
          {
            "category": "Media CDN",
            "name": "AWS S3 & CloudFront",
            "detail": "Automated image watermarking and WebP conversion"
          }
        ]
      },
      {
        "type": "heading",
        "id": "features",
        "text": "Dual-Engine Features for Buyers & Dealerships"
      },
      {
        "type": "list",
        "items": [
          "Faceted Automotive Search: Instant filtering across price brackets, body styles, fuel types, transmission, and verified dealer warranties, returning results in under 200 milliseconds.",
          "Virtual 360° Showroom Viewer: Interactive high-resolution 360-degree exterior walkaround and panoramic interior cabin inspector optimized for mobile touch gestures.",
          "Dealer Inventory Feed Bridge: Automated hourly sync with CDK, DealerTrack, and Reynolds & Reynolds DMS systems, automatically removing sold vehicles from the marketplace.",
          "Lead Management Portal: Dealers track lead volume, buyer trade-in details, financing pre-approvals, and scheduled showroom visits in one clean dashboard."
        ]
      },
      {
        "type": "image",
        "src": "images/illustrations/auto-marketplace-dealer.jpg",
        "alt": "NextGen Motors dealer inventory management and multi-branch allocation grid",
        "caption": "Figure 4.2: Dealer portal showing inventory health, competitive pricing insights, and incoming buyer leads."
      },
      {
        "type": "quote",
        "text": "The marketplace went live in 10 weeks and hasn't had a major outage since. Qualified buyer leads grew 3.2x in the first quarter."
      },
      {
        "type": "heading",
        "id": "technical-deep-dive",
        "text": "Sub-200ms Faceted Search & 360° Media Rendering"
      },
      {
        "type": "paragraph",
        "text": "Searching across 15,000 cars with 40 distinct filter combinations requires specialized indexing. We implemented Elasticsearch index aliasing with custom edge n-gram tokenizers. When a user types 'Civic' or selects 'Automatic Hybrid under $25,000', Elasticsearch computes aggregations across all remaining filter counts in parallel, ensuring instant interactive filtering without page refreshes."
      },
      {
        "type": "heading",
        "id": "timeline",
        "text": "Implementation Journey & Delivery Milestones"
      },
      {
        "type": "timeline",
        "steps": [
          {
            "phase": "Week 1-3: Architecture",
            "title": "Data Model Design & DMS Feed Protocol",
            "desc": "Designed the vehicle relational schema, normalized taxonomy for 2,000+ car models, and built the DMS feed ingestion worker."
          },
          {
            "phase": "Week 4-6: Buyer Experience",
            "title": "Next.js Storefront & 360° Viewer",
            "desc": "Built the responsive buyer catalog, sub-200ms faceted filters, and financing pre-qualification calculator."
          },
          {
            "phase": "Week 7-8: Dealer Portal",
            "title": "Self-Serve Dealer Dashboard & Lead Inbox",
            "desc": "Engineered dealer inventory management, bulk image uploader, and real-time WhatsApp inquiry alerts."
          },
          {
            "phase": "Week 9-10: Launch",
            "title": "Load Testing, Dealer Onboarding & Cutover",
            "desc": "Onboarded 300 dealerships, ingested 15,000 vehicles, stress-tested with 10,000 concurrent sessions, and launched."
          }
        ]
      },
      {
        "type": "heading",
        "id": "results",
        "text": "Measurable Market Growth & Dealership Retention"
      },
      {
        "type": "paragraph",
        "text": "NextGen Motors became the fastest-growing automotive marketplace in their region within 6 months of rollout, driving over 3.2x growth in qualified dealer leads and maintaining 99.9% platform uptime."
      },
      {
        "type": "image",
        "src": "images/illustrations/auto-marketplace-search.jpg",
        "alt": "Sub-200ms faceted car search with 360-degree vehicle inspection viewer",
        "caption": "Figure 4.3: High-speed faceted search delivering verified dealer listings with instant location filtering."
      },
      {
        "type": "heading",
        "id": "roadmap",
        "text": "Roadmap: Direct Online Vehicle Checkout & Trade-Ins"
      },
      {
        "type": "paragraph",
        "text": "NextGen Motors is preparing to launch Phase 2: allowing buyers to complete the entire car purchase online, including automated trade-in vehicle appraisal, digital financing approval, and home delivery booking."
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
      "React Native",
      "SQLite",
      "HealthKit"
    ],
    "thumb": "images/illustrations/project-fitness-app.jpg",
    "cover": "images/illustrations/project-fitness-app.jpg",
    "excerpt": "Workout tracking and remote coaching application with offline-first SQLite synchronization, haptic rest timers, and biometric Apple HealthKit integration.",
    "featured": false,
    "layout": "mobile-app",
    "statusBadge": "4.8★ App Store Rating",
    "highlightBadge": "Offline-First Native App",
    "results": [
      {
        "value": "4.8★",
        "label": "App Store Rating",
        "delta": "4,500+ Reviews",
        "sub": "Across iOS and Android"
      },
      {
        "value": "60k+",
        "label": "First-Year Downloads",
        "delta": "Organic Viral Growth",
        "sub": "Zero ad spend reliance"
      },
      {
        "value": "8 wks",
        "label": "To Launch",
        "delta": "React Native MVP",
        "sub": "Single codebase iOS & Android"
      },
      {
        "value": "+55%",
        "label": "Client Retention",
        "delta": "Coach Engagement",
        "sub": "Automated habit & check-in loops"
      }
    ],
    "mobileHighlights": [
      {
        "title": "Offline-First SQLite Architecture",
        "desc": "Workout sessions, set reps, and weight logs are saved instantly to local SQLite and synced to the cloud seamlessly when connection returns."
      },
      {
        "title": "Rest Interval Haptic Audio Timers",
        "desc": "Precision background timers keep athletes on track between sets with subtle haptic vibrations even when the screen is locked."
      },
      {
        "title": "Wearable & HealthKit Biometric Sync",
        "desc": "Real-time integration with Apple HealthKit and Google Fit syncing heart rate zones, active calories, and recovery sleep scores."
      },
      {
        "title": "Coach Video Form Analysis Console",
        "desc": "Athletes record lifting sets directly in the app; coaches annotate video frames with voice notes and angle overlays."
      }
    ],
    "testimonial": {
      "quote": "Zyanix understood exactly what our coaches and athletes needed — the app feels like it was built by people who actually train. The offline logging in basement gyms is bulletproof.",
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
        "text": "PulseFit’s 80+ certified personal trainers were struggling to track client workouts across messy WhatsApp threads, Notes apps, and spreadsheets. Athletes training in underground gyms or concrete facilities frequently lost mobile connectivity, causing web-based logging apps to crash and discard workout data. Without consistent data, coaches could not make reliable programming adjustments."
      },
      {
        "type": "callout",
        "title": "The Gym Connectivity Dilemma",
        "text": "Over 70% of fitness logging happens in low-connectivity gym environments. When an app spins a loading indicator between sets, athletes abandon digital tracking entirely."
      },
      {
        "type": "image",
        "src": "images/illustrations/inline-fitness-app.jpg",
        "alt": "Fitness app workout tracking screen",
        "caption": "Figure 5.1: PulseFit native workout logging interface with instant offline set recording."
      },
      {
        "type": "heading",
        "id": "architecture",
        "text": "Offline-First React Native Architecture"
      },
      {
        "type": "paragraph",
        "text": "We architected PulseFit as a 100% offline-first application using React Native with an embedded SQLite database (WatermelonDB). Every button tap, set logged, or weight adjustment commits to local storage in under 5 milliseconds. A background synchronization worker detects network availability and performs bi-directional conflict resolution using Lamport timestamps."
      },
      {
        "type": "tech-stack",
        "items": [
          {
            "category": "Mobile Framework",
            "name": "React Native 0.73",
            "detail": "TypeScript, New Architecture (Fabric & TurboModules)"
          },
          {
            "category": "Local Database",
            "name": "WatermelonDB & SQLite",
            "detail": "Zero-latency local reads/writes, reactive UI bindings"
          },
          {
            "category": "Cloud Backend",
            "name": "Node.js & GraphQL",
            "detail": "Apollo Server, bi-directional delta synchronization"
          },
          {
            "category": "Health Integrations",
            "name": "Apple HealthKit & Google Fit",
            "detail": "Background step, heart rate, and calorie telemetry"
          },
          {
            "category": "Push Notifications",
            "name": "Firebase Cloud Messaging",
            "detail": "Smart workout reminders based on local timezone"
          }
        ]
      },
      {
        "type": "heading",
        "id": "features",
        "text": "Athlete Workstation & Remote Coach Portal"
      },
      {
        "type": "list",
        "items": [
          "Zero-Latency Set Logging: Single-tap repetition logging with intelligent weight pre-filling based on past personal bests and RPE (Rate of Perceived Exertion) calculations.",
          "Haptic Audio Rest Timers: Background audio and precision haptic pulses that vibrate through smartwatches and headphones when rest intervals expire, even with phone locked.",
          "Remote Coach Programming Web Suite: Coaches design multi-week periodized training blocks in a desktop web app that instantly synchronizes to the athlete's handset.",
          "Video Form Check Review: Athletes record their heavy sets in-app; coaches draw angle lines and attach voice notes directly to the video timeline."
        ]
      },
      {
        "type": "image",
        "src": "images/illustrations/fitness-app-workout.jpg",
        "alt": "PulseFit active workout logging, offline-first SQLite sync, and rest countdown timer",
        "caption": "Figure 5.2: Active workout screen showing rest interval timer and progressive overload calculations."
      },
      {
        "type": "quote",
        "text": "Client retention jumped 55% once our coaches could actually see workout data in real time between sessions."
      },
      {
        "type": "heading",
        "id": "timeline",
        "text": "Implementation Journey & Delivery Milestones"
      },
      {
        "type": "timeline",
        "steps": [
          {
            "phase": "Week 1-2: UX Design",
            "title": "Athlete Testing & Mobile Interface Wireframing",
            "desc": "Designed single-thumb workout logging UI tested with 25 athletes during high-intensity training sessions."
          },
          {
            "phase": "Week 3-4: Local DB",
            "title": "WatermelonDB Offline Sync Engine",
            "desc": "Implemented local SQLite storage, delta sync protocols, and conflict resolution rules for multi-device users."
          },
          {
            "phase": "Week 5-6: Features",
            "title": "HealthKit Integration & Coach Web Portal",
            "desc": "Built biometric telemetry ingest and the coach desktop portal for multi-athlete program management."
          },
          {
            "phase": "Week 7-8: Launch",
            "title": "App Store & Google Play Production Release",
            "desc": "Passed Apple HealthKit and Google Play privacy reviews; launched pilot to 5,000 beta athletes."
          }
        ]
      },
      {
        "type": "heading",
        "id": "results",
        "text": "Measurable Athletic Impact & Community Growth"
      },
      {
        "type": "paragraph",
        "text": "Within its first year on the iOS App Store and Google Play, PulseFit achieved over 60,000 downloads with a sustained 4.8-star average rating across more than 4,500 user reviews."
      },
      {
        "type": "image",
        "src": "images/illustrations/fitness-app-analytics.jpg",
        "alt": "Continuous biometric heart rate monitoring and calorie progression trends",
        "caption": "Figure 5.3: Biometric analytics tracking heart rate zones and weekly recovery sleep trends."
      },
      {
        "type": "heading",
        "id": "roadmap",
        "text": "Roadmap: On-Device Computer Vision Rep Counter"
      },
      {
        "type": "paragraph",
        "text": "Zyanix is currently engineering Phase 2: integrating on-device Apple Neural Engine (CoreML) pose estimation to automatically count repetitions and evaluate squat depth in real-time."
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
      "React",
      "ClickHouse",
      "Data Pipelines"
    ],
    "thumb": "images/illustrations/project-analytics-dashboard.jpg",
    "cover": "images/illustrations/project-analytics-dashboard.jpg",
    "excerpt": "Unified executive business intelligence reporting dashboard consolidating 12 disparate enterprise data pipelines into real-time sub-100ms insights.",
    "featured": false,
    "layout": "data-dashboard",
    "statusBadge": "<85ms OLAP Query Speed",
    "highlightBadge": "Executive BI Command Center",
    "results": [
      {
        "value": "70%",
        "label": "Less Manual Reporting",
        "delta": "24 hrs Saved/Mo",
        "sub": "Automated nightly data ingestion"
      },
      {
        "value": "12",
        "label": "Data Sources Unified",
        "delta": "Zero Data Silos",
        "sub": "CRM, ERP, Billing & Marketing"
      },
      {
        "value": "6 wks",
        "label": "To Launch",
        "delta": "Rapid Turnkey BI",
        "sub": "Modern React & ClickHouse stack"
      },
      {
        "value": "100%",
        "label": "Audit Accuracy",
        "delta": "Zero Errors",
        "sub": "Direct warehouse reconciliation"
      }
    ],
    "dataMatrix": [
      {
        "name": "Salesforce CRM",
        "status": "Active",
        "tools": "Webhooks & REST API",
        "cadence": "Real-time events"
      },
      {
        "name": "Stripe Billing",
        "status": "Active",
        "tools": "Stripe Webhooks & Sigma",
        "cadence": "Instant streaming"
      },
      {
        "name": "Google Ads & Meta",
        "status": "Active",
        "tools": "Marketing API Connectors",
        "cadence": "Hourly sync"
      },
      {
        "name": "Shopify Storefront",
        "status": "Active",
        "tools": "GraphQL Admin API",
        "cadence": "15-min cadence"
      },
      {
        "name": "Zendesk Support",
        "status": "Active",
        "tools": "Incremental Ticket API",
        "cadence": "30-min cadence"
      },
      {
        "name": "NetSuite ERP",
        "status": "Active",
        "tools": "SuiteTalk REST Web Services",
        "cadence": "Daily ledger sync"
      },
      {
        "name": "HubSpot Marketing",
        "status": "Active",
        "tools": "Events & Contact API",
        "cadence": "Hourly sync"
      },
      {
        "name": "PostgreSQL DB",
        "status": "Active",
        "tools": "Logical CDC Debezium",
        "cadence": "Sub-second stream"
      },
      {
        "name": "Google Analytics 4",
        "status": "Active",
        "tools": "BigQuery Export",
        "cadence": "Daily partitioned"
      }
    ],
    "testimonial": {
      "quote": "The team understood our reporting chaos perfectly. What used to take our analysts three full days every month now updates automatically overnight. We make decisions in minutes instead of weeks.",
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
        "text": "BrightPath Solutions’ leadership team was spending days each month manually pulling numbers from 12 distinct tools — including Salesforce, Stripe, NetSuite, and Google Ads — into fragile spreadsheets. Discrepancies between billing data and marketing metrics caused contentious executive meetings and delayed key capital allocation decisions."
      },
      {
        "type": "callout",
        "title": "The Excel Nightmare",
        "text": "A single formula error in an unversioned Excel workbook miscalculated customer lifetime value (LTV) by 18%, risking significant budget misallocation across acquisition channels."
      },
      {
        "type": "image",
        "src": "images/illustrations/inline-analytics.jpg",
        "alt": "Business analytics dashboard with charts",
        "caption": "Figure 6.1: Unified Executive BI Command Center showing company-wide ARR, CAC, and cash runway."
      },
      {
        "type": "heading",
        "id": "architecture",
        "text": "Modern ELT Data Pipeline Architecture"
      },
      {
        "type": "paragraph",
        "text": "We engineered an end-to-end modern ELT (Extract, Load, Transform) data pipeline. Automated ingestion workers pull raw data from all 12 APIs into an Amazon S3 data lake, transform the models using dbt (data build tool), and load materialized analytical views into ClickHouse, an ultra-fast columnar OLAP database delivering queries across 20M+ rows in under 85ms."
      },
      {
        "type": "tech-stack",
        "items": [
          {
            "category": "Frontend Interface",
            "name": "React 18 & Apache ECharts",
            "detail": "Interactive visualizations, custom date comparators"
          },
          {
            "category": "OLAP Database",
            "name": "ClickHouse Columnar DB",
            "detail": "Sub-100ms analytical queries on multi-million row sets"
          },
          {
            "category": "Transformation",
            "name": "dbt (data build tool)",
            "detail": "Version-controlled SQL models, automated data testing"
          },
          {
            "category": "Orchestration",
            "name": "Apache Airflow",
            "detail": "Automated DAGs for incremental pipeline extraction"
          },
          {
            "category": "Data Storage",
            "name": "Amazon S3 & Iceberg",
            "detail": "Parquet formatted storage with immutable change logs"
          }
        ]
      },
      {
        "type": "heading",
        "id": "features",
        "text": "Interactive Executive Features & Departmental Views"
      },
      {
        "type": "list",
        "items": [
          "Cross-Functional Executive Pulse: Real-time ARR, MRR, Net Retention Rate (NRR), and cash runway metrics refreshed every 15 minutes.",
          "Cohort Retention Heatmaps: Interactive visual matrix analyzing customer cohort churn patterns over 12-month periods segmented by plan and acquisition channel.",
          "Role-Based Departmental Dashboards: Tailored views for Marketing (CAC and ROAS), Sales (pipeline velocity and win rates), and Finance (gross margin and receivables aging).",
          "One-Click Automated Board Packs: Generates pixel-perfect, branded PDF executive summaries ready for monthly investor and board presentations in seconds."
        ]
      },
      {
        "type": "image",
        "src": "images/illustrations/analytics-sync-engine.jpg",
        "alt": "BrightPath 12-source automated data pipeline and ETL health monitor",
        "caption": "Figure 6.2: Real-time data pipeline health monitor displaying active sync status across all 12 SaaS connectors."
      },
      {
        "type": "quote",
        "text": "What used to take three days every month now updates automatically overnight with zero manual data entry."
      },
      {
        "type": "heading",
        "id": "timeline",
        "text": "Implementation Journey & Delivery Milestones"
      },
      {
        "type": "timeline",
        "steps": [
          {
            "phase": "Week 1-2: Ingestion",
            "title": "API Connector Setup & Raw Ingestion",
            "desc": "Configured secure API webhooks and ETL extractors for all 12 tools into Amazon S3 storage."
          },
          {
            "phase": "Week 3-4: Modeling",
            "title": "dbt Transformation Models & ClickHouse Setup",
            "desc": "Built standardized dimensional models (star schema) resolving conflicting customer identifiers."
          },
          {
            "phase": "Week 5: UI Build",
            "title": "React BI Interface & Interactive Charting",
            "desc": "Engineered responsive dashboard with Apache ECharts, drill-downs, and custom date range filters."
          },
          {
            "phase": "Week 6: Auditing",
            "title": "Data Reconciliation & Executive Handover",
            "desc": "Audited dashboard outputs against NetSuite financial records, achieving 100% precision, and trained team."
          }
        ]
      },
      {
        "type": "heading",
        "id": "results",
        "text": "Measurable Operational Impact & Cost Savings"
      },
      {
        "type": "paragraph",
        "text": "BrightPath eliminated approximately 70% of manual reporting hours across their operations and finance departments, freeing their lead analysts to focus on high-impact strategic growth initiatives."
      },
      {
        "type": "image",
        "src": "images/illustrations/analytics-executive-report.jpg",
        "alt": "Executive performance board pack and 1-click automated report export",
        "caption": "Figure 6.3: 1-click executive board pack export module with automated variance analysis."
      },
      {
        "type": "heading",
        "id": "roadmap",
        "text": "Roadmap: Predictive Forecasting & Natural Language BI"
      },
      {
        "type": "paragraph",
        "text": "Phase 2 will introduce AI-powered predictive revenue forecasting using Prophet time-series models and a natural language text-to-SQL interface allowing executives to ask questions in plain English."
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
      "Flutter",
      "Zero-Trust",
      "PCI-DSS Level 1"
    ],
    "thumb": "images/illustrations/project-fintech-app.jpg",
    "cover": "images/illustrations/project-fintech-app.jpg",
    "excerpt": "Bank-grade peer-to-peer payments application with sub-second transaction settlement, real-time ML fraud prevention, and biometric passkey authentication.",
    "featured": false,
    "layout": "fintech-security",
    "statusBadge": "PCI-DSS Level 1 Compliant",
    "highlightBadge": "Bank-Grade Financial Protocol",
    "results": [
      {
        "value": "$2M+",
        "label": "Monthly Volume Processed",
        "delta": "+180% MoM Growth",
        "sub": "Sub-second peer-to-peer transfers"
      },
      {
        "value": "0.02%",
        "label": "Fraud Rate",
        "delta": "Industry Lowest",
        "sub": "Real-time behavioral scoring"
      },
      {
        "value": "12 wks",
        "label": "To Launch",
        "delta": "Full Security Audit",
        "sub": "Cross-platform Flutter build"
      },
      {
        "value": "<450ms",
        "label": "Settlement Latency",
        "delta": "Instant Availability",
        "sub": "Real-time ledger reconciliation"
      }
    ],
    "securityArchitecture": [
      {
        "tier": "Tier 1: Perimeter & Edge",
        "tech": "Cloudflare Magic Transit & WAF",
        "desc": "DDoS mitigation, TLS 1.3 encryption, and IP reputation filtering terminating at edge nodes before reaching internal VPC."
      },
      {
        "tier": "Tier 2: Identity & Auth",
        "tech": "WebAuthn Biometrics & RS256 JWT",
        "desc": "Hardware-backed biometric passkeys (Face ID / Touch ID) required for transfers exceeding $250 with short-lived cryptographic tokens."
      },
      {
        "tier": "Tier 3: Fraud Engine",
        "tech": "Real-Time Machine Learning Scoring",
        "desc": "Sub-20ms anomaly detection scoring velocity, device fingerprint, IP reputation, and behavioral heuristics before transaction commit."
      },
      {
        "tier": "Tier 4: Data & Vault Ledger",
        "tech": "AES-256 Vault & Double-Entry Ledger",
        "desc": "PII tokenization with hardware security modules (HSM) and tamper-proof immutable append-only ledger."
      }
    ],
    "testimonial": {
      "quote": "Security was non-negotiable for us, and Zyanix took that as seriously as we did — every architecture review caught edge cases before they became vulnerabilities. Our PCI compliance auditor gave us a clean pass on first review.",
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
        "text": "PayLoop needed to launch a modern peer-to-peer financial app catering to digital natives. However, existing market solutions felt either too clunky with invasive authentication or lacked serious fraud protection, leading to high chargeback rates. PayLoop required instant-feeling payments under 500 milliseconds while meeting rigorous PCI-DSS Level 1 regulatory and anti-money laundering (AML) standards from day one."
      },
      {
        "type": "callout",
        "title": "The Security vs UX Trade-Off",
        "text": "Traditional fraud verification typically adds 2 to 5 seconds of latency, causing 30% of users to abandon mobile checkouts. PayLoop needed sub-second payments without lowering their security posture."
      },
      {
        "type": "image",
        "src": "images/illustrations/inline-fintech.jpg",
        "alt": "Mobile payments app transaction screen",
        "caption": "Figure 7.1: PayLoop instant peer-to-peer transfer interface with biometric confirmation."
      },
      {
        "type": "heading",
        "id": "architecture",
        "text": "Zero-Trust Security & Payment Architecture"
      },
      {
        "type": "paragraph",
        "text": "We built PayLoop using Flutter for pixel-perfect performance across iOS and Android, backed by a Golang microservices backend designed around double-entry accounting principles. Every ledger transaction is atomic, idempotent, and backed by cryptographically signed audit logs stored in an immutable append-only database."
      },
      {
        "type": "tech-stack",
        "items": [
          {
            "category": "Mobile App",
            "name": "Flutter 3.19 & Dart",
            "detail": "Hardware biometric integration, obfuscated binary"
          },
          {
            "category": "Core Backend",
            "name": "Go (Golang) Microservices",
            "detail": "High-concurrency payment engine with gRPC"
          },
          {
            "category": "Ledger Storage",
            "name": "PostgreSQL & TigerBeetle",
            "detail": "Financial accounting ledger with strict double-entry"
          },
          {
            "category": "Fraud Detection",
            "name": "Python ML & Redis",
            "detail": "Sub-20ms heuristic anomaly scoring on streaming data"
          },
          {
            "category": "Compliance",
            "name": "AWS Nitro Enclaves & KMS",
            "detail": "Isolated memory processing for cardholder PAN data"
          }
        ]
      },
      {
        "type": "heading",
        "id": "features",
        "text": "Frictionless Peer-to-Peer Financial Features"
      },
      {
        "type": "list",
        "items": [
          "Instant P2P Money Transfers: Send money using phone numbers, email handles, or QR codes with settlement completed in under 450 milliseconds.",
          "Smart Group Bill Splitting: Real-time collaborative tab splitting with customizable tip allocations and automatic WhatsApp payment reminder links.",
          "Biometric Step-Up Authentication: Low-risk everyday transfers process instantly; high-value or unusual transfers require immediate Face ID/Touch ID verification.",
          "Virtual Debit Cards: Instant single-use and merchant-locked virtual cards for safe online shopping with user-configurable spending limits."
        ]
      },
      {
        "type": "image",
        "src": "images/illustrations/fintech-transfer-flow.jpg",
        "alt": "PayLoop instant peer-to-peer transfer, split bill modal, and real-time ledger",
        "caption": "Figure 7.2: Group bill splitting flow with automated contact matching and instant payment notifications."
      },
      {
        "type": "quote",
        "text": "Instant-feeling transfers, without cutting corners on the fraud checks running behind the scenes."
      },
      {
        "type": "heading",
        "id": "timeline",
        "text": "Implementation Journey & Delivery Milestones"
      },
      {
        "type": "timeline",
        "steps": [
          {
            "phase": "Week 1-3: Security",
            "title": "Compliance Architecture & Threat Modeling",
            "desc": "Mapped PCI-DSS Level 1 controls, defined zero-trust network topology, and established double-entry ledger data models."
          },
          {
            "phase": "Week 4-7: Ledger Core",
            "title": "Golang Microservices & Double-Entry Accounting",
            "desc": "Engineered idempotent transaction engine with gRPC, automated rollbacks, and distributed locks."
          },
          {
            "phase": "Week 8-10: Mobile App",
            "title": "Flutter Cross-Platform Build & Biometrics",
            "desc": "Built native Flutter screens, integrated WebAuthn biometrics, and connected virtual card provisioning."
          },
          {
            "phase": "Week 11-12: Audit",
            "title": "Penetration Testing & Production Launch",
            "desc": "Completed independent third-party penetration testing with zero critical findings and launched live on app stores."
          }
        ]
      },
      {
        "type": "heading",
        "id": "results",
        "text": "Measurable Financial Impact & Security Record"
      },
      {
        "type": "paragraph",
        "text": "PayLoop scaled to over $2,000,000 in monthly transaction volume within 90 days of launch, sustaining an industry-leading fraud rate of only 0.02% (compared to the 0.15% industry benchmark)."
      },
      {
        "type": "image",
        "src": "images/illustrations/fintech-security-vault.jpg",
        "alt": "Multi-currency bank vaults, SEPA instant rails, and biometric encryption",
        "caption": "Figure 7.3: Security vault management module showing encrypted cardholder data tokenization."
      },
      {
        "type": "heading",
        "id": "roadmap",
        "text": "Roadmap: Cross-Border Remittances & Corporate Sub-Accounts"
      },
      {
        "type": "paragraph",
        "text": "Phase 2 will integrate international cross-border corridors with automated FX conversion and small-business sub-accounts with multi-signatory approval rules."
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
      "Cloud",
      "AWS IoT Core",
      "Geofencing"
    ],
    "thumb": "images/illustrations/project-logistics.jpg",
    "cover": "images/illustrations/project-logistics.jpg",
    "excerpt": "Enterprise fleet telematics and shipment tracking system processing live GPS feeds from 500+ commercial vehicles with automated geofence alerts.",
    "featured": false,
    "layout": "logistics-fleet",
    "statusBadge": "500+ Active GPS Units",
    "highlightBadge": "Real-Time Telematics Fleet",
    "results": [
      {
        "value": "40%",
        "label": "Fewer Support Calls",
        "delta": "Self-Serve Tracking",
        "sub": "Live ETA & milestone SMS links"
      },
      {
        "value": "500+",
        "label": "Vehicles Tracked",
        "delta": "Simultaneous Streams",
        "sub": "Ingesting telemetry every 3 seconds"
      },
      {
        "value": "99.95%",
        "label": "Platform Uptime",
        "delta": "Two Peak Seasons",
        "sub": "AWS IoT Core & Kinesis streaming"
      },
      {
        "value": "14%",
        "label": "Fleet Fuel Savings",
        "delta": "Route Efficiency",
        "sub": "Idle reduction & geofence alerts"
      }
    ],
    "telematicsPipeline": [
      {
        "step": "01",
        "phase": "IoT Sensor Ping",
        "detail": "On-board telematics GPS hardware sends telemetry packets (lat, lon, speed, fuel, OBD-II error codes) every 3 seconds via MQTT."
      },
      {
        "step": "02",
        "phase": "AWS IoT Core Stream",
        "detail": "High-throughput broker ingests 20,000+ msgs/sec with TLS mutual authentication and routes to AWS Kinesis data firehose."
      },
      {
        "step": "03",
        "phase": "Geofence Event Eval",
        "detail": "In-memory spatial engine checks polyline boundary crossings to detect warehouse arrivals, departures, and unauthorized stops."
      },
      {
        "step": "04",
        "phase": "WebSocket Map Broadcast",
        "detail": "Live dispatch console updates truck positions smoothly on map without page reloads using binary delta updates."
      },
      {
        "step": "05",
        "phase": "Customer ETA Dispatch",
        "detail": "Dynamic ETA recalculation feeds live SMS customer tracking link with millimeter-accurate delivery countdown."
      }
    ],
    "testimonial": {
      "quote": "We finally have one place to see the entire fleet live. It has completely changed how our dispatch team works, and our customer 'Where is my order?' phone calls dropped by 40% immediately.",
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
        "text": "RouteWise Logistics operates a commercial fleet of 500+ freight trucks across regional distribution networks. Their dispatchers were reliant on manual telephone check-ins with drivers to verify delivery progress. When trucks were delayed by traffic or weather, dispatchers had no real-time visibility, resulting in hundreds of angry customer phone calls daily asking 'Where is my delivery?'."
      },
      {
        "type": "callout",
        "title": "The Visibility Blindspot",
        "text": "Customer support spent over 45% of their working hours answering delivery status calls because neither dispatchers nor clients could see live truck locations."
      },
      {
        "type": "image",
        "src": "images/illustrations/inline-logistics.jpg",
        "alt": "Fleet tracking dashboard with live map",
        "caption": "Figure 8.1: Centralized fleet operations map displaying live vehicle locations, speed alerts, and route health."
      },
      {
        "type": "heading",
        "id": "architecture",
        "text": "Cloud-Native IoT Telematics Architecture"
      },
      {
        "type": "paragraph",
        "text": "We engineered a serverless telematics streaming platform built on AWS IoT Core and Apache Kafka. Vehicle GPS transponders stream encrypted binary telemetry packets every 3 seconds via MQTT. Incoming streams pass through an in-memory spatial geofencing worker, storing historical coordinates in Amazon Timestream while broadcasting real-time location updates to dispatch consoles via WebSockets."
      },
      {
        "type": "tech-stack",
        "items": [
          {
            "category": "IoT Ingestion",
            "name": "AWS IoT Core & MQTT",
            "detail": "Mutual TLS authentication, 20,000 msgs/sec throughput"
          },
          {
            "category": "Streaming Engine",
            "name": "AWS Kinesis & Kafka",
            "detail": "Real-time telemetry event stream processing"
          },
          {
            "category": "Time-Series DB",
            "name": "Amazon Timestream",
            "detail": "Optimized storage for billions of vehicle GPS points"
          },
          {
            "category": "Geospatial Engine",
            "name": "PostGIS & Mapbox GL",
            "detail": "Polygon geofencing, real-time map vector rendering"
          },
          {
            "category": "Mobile App",
            "name": "Flutter Driver Handset",
            "detail": "Offline electronic proof of delivery (e-POD) & barcodes"
          }
        ]
      },
      {
        "type": "heading",
        "id": "features",
        "text": "Fleet Dispatch Console & Driver Companion App"
      },
      {
        "type": "list",
        "items": [
          "Live Interactive Mapbox Operations Board: Visualizes 500+ active trucks simultaneously with color-coded speed, fuel status, engine diagnostics, and delay indicators.",
          "Automated Polygonal Geofence Triggers: Automatically detects when a vehicle enters or exits warehouse perimeter boundaries, triggering arrival timestamps without driver intervention.",
          "Customer Self-Serve Live Tracking Link: Customers receive an SMS with a real-time animated map showing their delivery vehicle approaching with dynamically updating ETAs.",
          "Driver Electronic Proof of Delivery (e-POD): Mobile app allowing drivers to scan shipment barcodes, capture recipient digital signatures, and upload delivery photos."
        ]
      },
      {
        "type": "image",
        "src": "images/illustrations/logistics-fleet-map.jpg",
        "alt": "FreightFlow interactive fleet routing planner with automated geofence triggers",
        "caption": "Figure 8.2: Dynamic route planner showing optimized highway itineraries and automated delivery time estimates."
      },
      {
        "type": "quote",
        "text": "Customers stopped calling to ask where their delivery was — they simply clicked their live tracking link."
      },
      {
        "type": "heading",
        "id": "timeline",
        "text": "Implementation Journey & Delivery Milestones"
      },
      {
        "type": "timeline",
        "steps": [
          {
            "phase": "Week 1-2: IoT Protocol",
            "title": "Hardware Transponder Protocol & IoT Pipeline",
            "desc": "Configured OBD-II telematics parsing, MQTT broker rules, and AWS IoT Core certificates."
          },
          {
            "phase": "Week 3-5: Streaming",
            "title": "Kinesis Event Pipeline & Spatial Geofencing",
            "desc": "Engineered in-memory spatial algorithms evaluating polygon entry/exit events in under 50ms."
          },
          {
            "phase": "Week 6-7: Console",
            "title": "Mapbox Web Dispatcher & Driver Mobile App",
            "desc": "Built smooth vector map rendering for 500+ vehicles and the Flutter driver delivery app."
          },
          {
            "phase": "Week 8-9: Rollout",
            "title": "Fleet-Wide Calibration & Production Go-Live",
            "desc": "Calibrated 500 hardware units across 4 regional hubs and executed zero-downtime cutover."
          }
        ]
      },
      {
        "type": "heading",
        "id": "results",
        "text": "Measurable Operational ROI & Efficiency Gains"
      },
      {
        "type": "paragraph",
        "text": "RouteWise reduced delivery status inquiries by roughly 40% within the first 60 days of deployment while improving fleet fuel efficiency by 14% through reduced idle time and route optimization."
      },
      {
        "type": "image",
        "src": "images/illustrations/logistics-driver-mobile.jpg",
        "alt": "Driver companion app with offline contactless electronic proof of delivery",
        "caption": "Figure 8.3: Driver mobile application with barcode scanning and digital recipient signature capture."
      },
      {
        "type": "heading",
        "id": "roadmap",
        "text": "Roadmap: AI Dynamic Route Optimization & Predictive Maintenance"
      },
      {
        "type": "paragraph",
        "text": "Phase 2 will introduce machine-learning predictive maintenance models that flag transmission and engine anomalies from OBD-II sensor streams days before breakdowns occur."
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
      "UI/UX",
      "WebRTC",
      "HIPAA Compliant"
    ],
    "thumb": "images/illustrations/project-telehealth.jpg",
    "cover": "images/illustrations/project-telehealth.jpg",
    "excerpt": "HIPAA-compliant virtual telehealth consultation and appointment booking application with 1-click encrypted WebRTC video and digital prescriptions.",
    "featured": false,
    "layout": "healthtech",
    "statusBadge": "HIPAA Compliant · SOC2 Type II",
    "highlightBadge": "Virtual Clinical Telehealth Suite",
    "results": [
      {
        "value": "45%",
        "label": "Fewer Patient No-Shows",
        "delta": "Frictionless Booking",
        "sub": "Automated SMS reminders & 1-tap reschedule"
      },
      {
        "value": "4.7★",
        "label": "Patient Rating",
        "delta": "Top 5% Healthcare",
        "sub": "Across 3,200+ patient reviews"
      },
      {
        "value": "9 wks",
        "label": "To Production Launch",
        "delta": "HIPAA Audit Ready",
        "sub": "WebRTC peer video consultation"
      },
      {
        "value": "<20s",
        "label": "Video Connection Time",
        "delta": "Zero App Download",
        "sub": "Direct browser WebRTC room"
      }
    ],
    "patientJourney": [
      {
        "step": "01",
        "stage": "Symptom Triage & Slot Booking",
        "desc": "Patient selects symptoms through an intelligent visual wizard; system matches appropriate board-certified specialists with next available appointment slot."
      },
      {
        "step": "02",
        "stage": "1-Click WebRTC Consultation",
        "desc": "Zero-download encrypted video room with adaptive bandwidth fallback, crystal-clear audio, and screen sharing for lab results."
      },
      {
        "step": "03",
        "stage": "Digital Rx & Care Follow-Up",
        "desc": "Doctor generates electronic prescription routed directly to patient-preferred local pharmacy, with automated dosage reminders via SMS."
      }
    ],
    "testimonial": {
      "quote": "Patients kept telling us the booking flow was the easiest they'd used for any healthcare service — that was our exact goal. Elderly patients especially love the zero-download video link.",
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
        "text": "CareConnect Health’s outpatient clinics were grappling with an alarming 32% appointment no-show rate. Patients struggled through a clunky 7-step legacy web form requiring tedious insurance scans before even seeing physician availability. When appointments did occur, patients were forced to download proprietary video software, resulting in frequent technical delays and frustrated clinicians."
      },
      {
        "type": "callout",
        "title": "The Patient Abandonment Problem",
        "text": "Nearly 40% of patients abandoned booking when asked to create a portal password before checking doctor availability. Furthermore, elderly patients struggled with third-party video app installs."
      },
      {
        "type": "image",
        "src": "images/illustrations/inline-telehealth.jpg",
        "alt": "Telehealth appointment booking app interface",
        "caption": "Figure 9.1: Frictionless 3-step patient appointment booking flow with live specialist availability."
      },
      {
        "type": "heading",
        "id": "architecture",
        "text": "Patient-First HIPAA Clinical Architecture"
      },
      {
        "type": "paragraph",
        "text": "We redesigned the telehealth patient journey from the ground up, prioritizing simplicity and strict HIPAA compliance. The application runs on React and Node.js with end-to-end encrypted WebRTC video rooms powered by Twilio and LiveKit. Video streams are peer-to-peer and never touch recording servers unless explicitly consented to for clinical documentation."
      },
      {
        "type": "tech-stack",
        "items": [
          {
            "category": "Web Interface",
            "name": "React 18 & Next.js",
            "detail": "Accessible WCAG AAA UI, responsive mobile web"
          },
          {
            "category": "Video Engine",
            "name": "WebRTC & LiveKit Media Server",
            "detail": "Adaptive bitrate fallback, end-to-end encrypted"
          },
          {
            "category": "Backend API",
            "name": "Node.js & Express (HIPAA compliant)",
            "detail": "Audit trail logging, automated session expiry"
          },
          {
            "category": "Database",
            "name": "Encrypted PostgreSQL (AWS RDS)",
            "detail": "AES-256 field-level encryption for patient PHI"
          },
          {
            "category": "Messaging",
            "name": "Twilio Programmable SMS",
            "detail": "Automated appointment reminders and 1-tap reschedule"
          }
        ]
      },
      {
        "type": "heading",
        "id": "features",
        "text": "Clinical Workstation & Telehealth Consultation Suite"
      },
      {
        "type": "list",
        "items": [
          "3-Step Intuitive Patient Booking: Patients select their symptoms, choose an available specialist, and verify their phone number via SMS OTP in under 60 seconds.",
          "Zero-Download WebRTC Video Room: Patients click an SMS link to enter their encrypted consultation directly in Safari, Chrome, or Edge without downloading an app.",
          "Doctor Clinical Workstation: Doctors review patient intake history, view uploaded lab PDFs, write clinical SOAP notes, and submit electronic prescriptions on one split screen.",
          "Automated Nudge & 1-Tap Rescheduling: Patients receive gentle SMS reminders at 24 hours and 2 hours before the appointment, with a 1-tap button to reschedule without penalty."
        ]
      },
      {
        "type": "image",
        "src": "images/illustrations/telehealth-patient-portal.jpg",
        "alt": "CarePulse clinical symptom triage and instant teleconsultation slot selection",
        "caption": "Figure 9.2: Patient clinical symptom triage screen matching patients to relevant medical specialists."
      },
      {
        "type": "quote",
        "text": "We designed for the patient who is anxious and unwell — every extra form field is an obstacle to care."
      },
      {
        "type": "heading",
        "id": "timeline",
        "text": "Implementation Journey & Delivery Milestones"
      },
      {
        "type": "timeline",
        "steps": [
          {
            "phase": "Week 1-2: Research",
            "title": "Patient User Testing & Clinical Protocol Review",
            "desc": "Conducted usability interviews with 30 diverse patients, including elderly individuals and chronic care patients."
          },
          {
            "phase": "Week 3-5: Engine Build",
            "title": "HIPAA Compliant Data Layer & WebRTC Setup",
            "desc": "Built field-level encrypted database, audit trail logging, and low-latency WebRTC video media gateway."
          },
          {
            "phase": "Week 6-7: Clinician UI",
            "title": "Doctor Electronic Health Record (EHR) Console",
            "desc": "Designed the split-screen doctor consultation workstation with digital e-prescription capabilities."
          },
          {
            "phase": "Week 8-9: Compliance",
            "title": "Third-Party HIPAA & SOC2 Security Audit",
            "desc": "Completed independent HIPAA risk assessment, security penetration testing, and launched across 6 clinics."
          }
        ]
      },
      {
        "type": "heading",
        "id": "results",
        "text": "Measurable Clinical Impact & Patient Satisfaction"
      },
      {
        "type": "paragraph",
        "text": "Within 90 days of rollout, appointment no-shows dropped by 45%, and the platform sustained a 4.7-star rating across more than 3,200 patient reviews."
      },
      {
        "type": "image",
        "src": "images/illustrations/telehealth-doctor-console.jpg",
        "alt": "Specialist clinical workstation with live vitals telemetry and instant e-prescription",
        "caption": "Figure 9.3: Specialist clinical workstation with live patient vitals and electronic prescription routing."
      },
      {
        "type": "heading",
        "id": "roadmap",
        "text": "Roadmap: Remote Vitals Device Integration & AI Clinical Dictation"
      },
      {
        "type": "paragraph",
        "text": "Phase 2 will integrate Bluetooth-enabled blood pressure monitors and pulse oximeters that stream telemetry directly into the video room, alongside an ambient AI medical scribe to automate SOAP note drafting."
      }
    ]
  }
];
