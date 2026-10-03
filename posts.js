window.ZYANIX_POSTS = [
  {
    "slug": "onboarding-process",
    "title": "How We Cut Our Client Onboarding Time by 60% With a Better Discovery Process",
    "excerpt": "A behind-the-scenes look at the discovery framework we built after years of scope creep, missed timelines and mismatched expectations \u2014 and how it changed the way we kick off every project.",
    "category": "Engineering",
    "tags": [
      "Engineering",
      "Featured"
    ],
    "cover": "images/illustrations/blog-onboarding.png",
    "thumb": "images/illustrations/blog-onboarding.png",
    "featured": true,
    "date": "2026-09-12",
    "readTime": "7 min read",
    "author": {
      "name": "James Whitfield",
      "role": "Founder & CEO",
      "avatar": "images/avatars/james-whitfield.png",
      "bio": "Founder & CEO at Zyanix. Spends most days thinking about how to make software teams ship faster without breaking things \u2014 and occasionally writes it down."
    },
    "content": [
      {
        "type": "heading",
        "id": "problem",
        "text": "The Problem With Our Old Process"
      },
      {
        "type": "paragraph",
        "text": "For years, every new project started the same way: a kickoff call, a rough brief, and a lot of assumptions we'd only discover were wrong three weeks in. Scope conversations kept happening mid-build instead of before it, which meant timelines slipped and trust eroded before the first milestone even shipped."
      },
      {
        "type": "paragraph",
        "text": "We tracked it for two quarters and found the pattern: projects that skipped a structured discovery phase took, on average, 40% longer to reach their first release than ones that didn't."
      },
      {
        "type": "image",
        "src": "images/illustrations/blog-onboarding.png",
        "alt": "Team whiteboarding a project timeline"
      },
      {
        "type": "heading",
        "id": "framework",
        "text": "The New Discovery Framework"
      },
      {
        "type": "paragraph",
        "text": "So we rebuilt discovery from scratch around three non-negotiable steps before any code gets written:"
      },
      {
        "type": "list",
        "items": [
          "A structured stakeholder interview covering goals, constraints, and \u2014 critically \u2014 what \"done\" looks like",
          "A written scope document both sides sign off on, including what's explicitly out of scope",
          "A clickable low-fidelity prototype reviewed before any engineering work starts"
        ]
      },
      {
        "type": "quote",
        "text": "The biggest source of delay was never bad code \u2014 it was decisions we hadn't actually made yet."
      },
      {
        "type": "heading",
        "id": "results",
        "text": "What Changed After Rollout"
      },
      {
        "type": "paragraph",
        "text": "Within two quarters of rolling this out across every new engagement, average time-to-first-release dropped by 60%, and client-requested scope changes mid-build fell by more than half. Just as important, clients reported feeling far more confident about what they were getting \u2014 and when."
      },
      {
        "type": "heading",
        "id": "takeaways",
        "text": "Key Takeaways"
      },
      {
        "type": "paragraph",
        "text": "If there's one thing worth stealing from this process, it's this: the time you \"save\" by skipping discovery almost always shows up later, at a higher cost. A week of structured discovery consistently paid for itself many times over across every project we tracked."
      }
    ]
  },
  {
    "slug": "choosing-database",
    "title": "Choosing the Right Database for Your Next Project",
    "excerpt": "SQL vs NoSQL isn't the real question \u2014 here's the framework we actually use.",
    "category": "Engineering",
    "tags": [
      "Engineering"
    ],
    "cover": "images/illustrations/blog-database.png",
    "thumb": "images/illustrations/blog-database.png",
    "featured": false,
    "date": "2026-08-28",
    "readTime": "6 min read",
    "author": {
      "name": "Daniel Cooper",
      "role": "Lead Engineer",
      "avatar": "images/avatars/daniel-cooper.png",
      "bio": "Lead Engineer at Zyanix, obsessed with boring, reliable infrastructure and hates being paged at 3am."
    },
    "content": [
      {
        "type": "heading",
        "id": "question",
        "text": "It's Not Really SQL vs NoSQL"
      },
      {
        "type": "paragraph",
        "text": "Most database debates get framed as a technology choice, when really it's a question about your data's shape and how it will grow. Relational databases like PostgreSQL still win for most business applications simply because most business data is, in fact, relational."
      },
      {
        "type": "paragraph",
        "text": "We reach for a document store like MongoDB only when the data genuinely doesn't fit neat tables \u2014 deeply nested, schema-flexible content being the clearest case."
      },
      {
        "type": "image",
        "src": "images/illustrations/blog-database.png",
        "alt": "Database schema diagram on a whiteboard"
      },
      {
        "type": "heading",
        "id": "checklist",
        "text": "Our Actual Checklist"
      },
      {
        "type": "list",
        "items": [
          "How relational is the core data model, honestly?",
          "Do we need strong consistency or is eventual consistency fine?",
          "What's the team's existing operational experience?",
          "What does the scaling curve actually look like in year one vs year three?"
        ]
      },
      {
        "type": "quote",
        "text": "Pick the database your team can operate confidently at 2am, not the one that's trending on Hacker News."
      },
      {
        "type": "paragraph",
        "text": "In practice, that checklist points most teams back to PostgreSQL \u2014 and that's fine. Boring technology, chosen deliberately, is a feature."
      }
    ]
  },
  {
    "slug": "design-systems-scale",
    "title": "Building Design Systems That Actually Scale",
    "excerpt": "Why most design systems fail after six months, and how to build one that doesn't.",
    "category": "Design",
    "tags": [
      "Design"
    ],
    "cover": "images/illustrations/blog-design-systems.png",
    "thumb": "images/illustrations/blog-design-systems.png",
    "featured": false,
    "date": "2026-08-15",
    "readTime": "5 min read",
    "author": {
      "name": "Olivia Bennett",
      "role": "Head of Design",
      "avatar": "images/avatars/olivia-bennett.png",
      "bio": "Head of Design at Zyanix, building interfaces and design systems that hold up under real product pressure."
    },
    "content": [
      {
        "type": "heading",
        "id": "why-fail",
        "text": "Why Design Systems Quietly Die"
      },
      {
        "type": "paragraph",
        "text": "Most design systems don't fail because of bad components \u2014 they fail because nobody owns the maintenance. Six months in, three teams have quietly forked the button component and nobody notices until a rebrand."
      },
      {
        "type": "image",
        "src": "images/illustrations/blog-design-systems.png",
        "alt": "Design system component library on a screen"
      },
      {
        "type": "heading",
        "id": "what-works",
        "text": "What Actually Keeps One Alive"
      },
      {
        "type": "list",
        "items": [
          "A named owner, not a shared responsibility that belongs to everyone and no one",
          "Versioned releases so teams can upgrade deliberately",
          "A contribution process that's easier than forking"
        ]
      },
      {
        "type": "quote",
        "text": "A design system is a product with users \u2014 treat it like one, or watch it rot."
      },
      {
        "type": "paragraph",
        "text": "The systems that last are the ones treated as an internal product, with a roadmap, a backlog and a real feedback loop with the teams using it."
      }
    ]
  },
  {
    "slug": "mvp-scoping-guide",
    "title": "How to Scope an MVP Without Cutting the Wrong Corners",
    "excerpt": "A practical checklist for deciding what makes v1 and what waits for v2.",
    "category": "Product",
    "tags": [
      "Product"
    ],
    "cover": "images/illustrations/blog-mvp-scoping.png",
    "thumb": "images/illustrations/blog-mvp-scoping.png",
    "featured": false,
    "date": "2026-08-02",
    "readTime": "8 min read",
    "author": {
      "name": "Sophie Turner",
      "role": "Project Manager",
      "avatar": "images/avatars/sophie-turner.png",
      "bio": "Project Manager at Zyanix, keeping timelines honest and scope conversations happening early, not late."
    },
    "content": [
      {
        "type": "heading",
        "id": "wrong-cuts",
        "text": "The Corners Teams Cut Wrong"
      },
      {
        "type": "paragraph",
        "text": "The instinct with an MVP is to cut features. The better instinct is to cut depth, not breadth \u2014 ship the whole user journey, just with less polish at each step, rather than a beautifully polished feature that only covers a third of the flow."
      },
      {
        "type": "image",
        "src": "images/illustrations/blog-mvp-scoping.png",
        "alt": "Team planning MVP scope on sticky notes"
      },
      {
        "type": "heading",
        "id": "our-checklist",
        "text": "The Questions We Ask"
      },
      {
        "type": "list",
        "items": [
          "Does this feature let us test the core hypothesis, or is it just nice-to-have polish?",
          "Can we validate this with a manual process before building automation?",
          "What breaks if we ship without this?"
        ]
      },
      {
        "type": "quote",
        "text": "An MVP isn't a smaller product \u2014 it's the smallest complete product."
      },
      {
        "type": "paragraph",
        "text": "Getting this right is less about a rigid framework and more about constantly asking whether a feature earns its place in v1, or whether it's just familiar."
      }
    ]
  },
  {
    "slug": "cicd-pipeline-setup",
    "title": "Setting Up a CI/CD Pipeline That Your Team Will Actually Use",
    "excerpt": "The automation habits that separate fast-moving teams from stuck ones.",
    "category": "Engineering",
    "tags": [
      "Engineering"
    ],
    "cover": "images/illustrations/blog-cicd.png",
    "thumb": "images/illustrations/blog-cicd.png",
    "featured": false,
    "date": "2026-07-19",
    "readTime": "7 min read",
    "author": {
      "name": "Daniel Cooper",
      "role": "Lead Engineer",
      "avatar": "images/avatars/daniel-cooper.png",
      "bio": "Lead Engineer at Zyanix, obsessed with boring, reliable infrastructure and hates being paged at 3am."
    },
    "content": [
      {
        "type": "heading",
        "id": "adoption",
        "text": "Pipelines Fail on Adoption, Not Tooling"
      },
      {
        "type": "paragraph",
        "text": "Most teams already have a CI/CD tool. The problem is almost never the tool \u2014 it's a pipeline so slow or flaky that developers route around it, merging straight to production on a Friday afternoon."
      },
      {
        "type": "image",
        "src": "images/illustrations/blog-cicd.png",
        "alt": "CI/CD pipeline dashboard on a monitor"
      },
      {
        "type": "heading",
        "id": "habits",
        "text": "The Habits That Make It Stick"
      },
      {
        "type": "list",
        "items": [
          "Keep the full pipeline under 10 minutes, or developers will stop trusting it",
          "Fail fast \u2014 lint and unit tests before anything expensive runs",
          "Make rollbacks a one-click action, not a Slack thread"
        ]
      },
      {
        "type": "quote",
        "text": "A pipeline nobody trusts is worse than no pipeline at all."
      },
      {
        "type": "paragraph",
        "text": "Once a team trusts the pipeline to catch real problems quickly, deploys stop being scary \u2014 and that's when velocity actually goes up."
      }
    ]
  },
  {
    "slug": "client-trust-8-years",
    "title": "What 8 Years of Client Work Taught Us About Trust",
    "excerpt": "The unglamorous habits that keep long-term clients coming back.",
    "category": "Company",
    "tags": [
      "Company"
    ],
    "cover": "images/illustrations/blog-client-trust.png",
    "thumb": "images/illustrations/blog-client-trust.png",
    "featured": false,
    "date": "2026-07-03",
    "readTime": "4 min read",
    "author": {
      "name": "James Whitfield",
      "role": "Founder & CEO",
      "avatar": "images/avatars/james-whitfield.png",
      "bio": "Founder & CEO at Zyanix. Spends most days thinking about how to make software teams ship faster without breaking things \u2014 and occasionally writes it down."
    },
    "content": [
      {
        "type": "heading",
        "id": "unglamorous",
        "text": "It's the Unglamorous Stuff"
      },
      {
        "type": "paragraph",
        "text": "None of the habits that kept our oldest clients around for years are exciting. They're things like replying within a day even when the update is \"no progress yet,\" and flagging a risk before it becomes a crisis instead of after."
      },
      {
        "type": "image",
        "src": "images/illustrations/blog-client-trust.png",
        "alt": "Team meeting with a long-term client"
      },
      {
        "type": "heading",
        "id": "what-lasts",
        "text": "What Actually Builds Trust"
      },
      {
        "type": "list",
        "items": [
          "Saying \"we don't know yet\" instead of guessing confidently",
          "Sharing bad news early, with a plan attached",
          "Never letting a client find out about a delay from a missed deadline"
        ]
      },
      {
        "type": "quote",
        "text": "Clients don't expect perfection. They expect to never be surprised."
      },
      {
        "type": "paragraph",
        "text": "Eight years in, that's still the whole playbook \u2014 just applied consistently, project after project."
      }
    ]
  },
  {
    "slug": "accessibility-guide",
    "title": "Accessibility Isn't Optional: A Practical Starting Guide",
    "excerpt": "Small changes that make a real difference for real users.",
    "category": "Design",
    "tags": [
      "Design"
    ],
    "cover": "images/illustrations/blog-accessibility.png",
    "thumb": "images/illustrations/blog-accessibility.png",
    "featured": false,
    "date": "2026-06-21",
    "readTime": "6 min read",
    "author": {
      "name": "Olivia Bennett",
      "role": "Head of Design",
      "avatar": "images/avatars/olivia-bennett.png",
      "bio": "Head of Design at Zyanix, building interfaces and design systems that hold up under real product pressure."
    },
    "content": [
      {
        "type": "heading",
        "id": "starting-point",
        "text": "Where Most Teams Actually Start"
      },
      {
        "type": "paragraph",
        "text": "Accessibility work doesn't need to start with a full audit. It starts with a handful of fixes that cost almost nothing and immediately help real users: proper color contrast, keyboard navigation, and meaningful alt text."
      },
      {
        "type": "image",
        "src": "images/illustrations/blog-accessibility.png",
        "alt": "Designer reviewing color contrast on a screen"
      },
      {
        "type": "heading",
        "id": "quick-wins",
        "text": "Five Quick Wins"
      },
      {
        "type": "list",
        "items": [
          "Check color contrast ratios against WCAG AA before shipping any new UI",
          "Make sure every interactive element is reachable and usable by keyboard alone",
          "Write alt text that describes function, not just appearance",
          "Never rely on color alone to convey status or errors",
          "Test with a screen reader at least once per major release"
        ]
      },
      {
        "type": "quote",
        "text": "Accessible design isn't a separate feature \u2014 it's just design that actually works for everyone."
      },
      {
        "type": "paragraph",
        "text": "None of this requires a specialist team to start. It requires making these checks part of the normal review process, the same way you'd check for browser compatibility."
      }
    ]
  }
];
