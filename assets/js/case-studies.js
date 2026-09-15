/* Case study content — grounded only in the designer's actual resume and
   the real project assets shipped in /Assets. No invented clients, research
   findings or metrics. Where a detail isn't publicly known (e.g. confidential
   enterprise research artifacts), the copy says so plainly instead of
   fabricating specifics. */

window.CASE_STUDIES = {

  "mo-hub": {
    title: "Engineering & Quality Applications",
    company: "Mercedes-Benz R&D India",
    tagline: "Turning fragmented engineering workflows — battery tracking, defect detection, quality audits — into one consistent, WCAG-aligned application family.",
    heroImage: "assets/img/posters/productplanning-poster.jpg",
    meta: [
      { label:"Project", value:"Engineering &amp; analytics SaaS applications" },
      { label:"Role", value:"Senior Product Designer" },
      { label:"Duration", value:"Sept 2021 — Present" },
      { label:"Team", value:"Engineering, QA &amp; Design System COE" },
      { label:"Tools", value:"Figma, Adobe XD" }
    ],
    challenge: [
      "Mercedes-Benz R&D India's engineering teams relied on a patchwork of internal tools for battery tracking, defect detection and quality audits — each built at a different time, by a different team, with its own visual language and interaction patterns.",
      "The people using these tools every day are engineers and quality auditors on the shop floor, not software specialists. Inconsistent UI meant every new tool came with a re-learning cost, and accessibility was inconsistent across the suite."
    ],
    research: {
      intro: "Some of the research and workflow artifacts from this engagement are confidential to Mercedes-Benz R&D and aren't shown publicly. What can be shared is the approach:",
      list: [
        "Mapped existing engineering workflows across battery tracking, defect detection and quality-audit teams to find shared patterns and shared pain points.",
        "Worked directly with engineering and QA stakeholders to validate assumptions before committing to UI direction.",
        "Audited the existing tool suite against WCAG (POUR) principles to establish an accessibility baseline."
      ]
    },
    define: [
      "The opportunity wasn't to design one more standalone tool — it was to design a shared design system that every future engineering application could be built from, so consistency and accessibility became the default rather than an afterthought."
    ],
    explore: {
      intro: "Exploration centered on component-level thinking rather than screen-level thinking: data-dense tables, status and severity indicators, audit trails and form patterns that needed to work identically whether they appeared in a battery-tracking dashboard or a defect-detection queue.",
      images: []
    },
    design: {
      intro: "The resulting interfaces bring battery tracking, defect detection and quality-audit workflows into a shared visual and interaction language — consistent navigation, status colour semantics, data tables and form controls — while meeting WCAG accessibility principles.",
      images: [
        { src:"assets/img/posters/productplanning-poster.jpg", caption:"Engineering application UI — shared task and project navigation patterns used across the tool family." }
      ]
    },
    prototype: "High-fidelity prototypes were built in Figma and reviewed directly with engineering and QA stakeholders before build, so interaction details — states, edge cases, error handling — were resolved before a single line of production code was written.",
    validation: [
      "As part of the Mercedes-Benz Design System Centre of Excellence, this work fed back into a shared component library used across multiple platforms — so improvements validated on one application raised the baseline for every application built after it."
    ],
    impact: {
      stats: [
        { value:"80%", desc:"increase in user engagement after high-fidelity prototypes replaced the previous tools" },
        { value:"3", desc:"application areas unified — battery tracking, defect detection, quality audits" }
      ],
      note: "Outcome as reported in the designer's own performance record; detailed analytics are internal to Mercedes-Benz R&D and not publicly disclosable."
    },
    reflection: [
      "Designing for a shop floor audience made it clear how much accessibility and consistency compound over time — a pattern fixed once in the design system paid off across every application built afterward.",
      "The next iteration this work points toward is formalising more of the component library's governance, so contributions from other designers stay consistent without needing a review on every screen."
    ]
  },

  "g-class-infotainment": {
    title: "G-Class Electric — In-Vehicle Infotainment",
    company: "Self-directed concept project",
    tagline: "A calm, glanceable infotainment concept for an electric G-Wagen — designed end-to-end from sketch to interactive prototype.",
    heroImage: "Assets/G-wagen01.png",
    meta: [
      { label:"Project", value:"Automotive infotainment concept" },
      { label:"Role", value:"Product &amp; Interaction Designer (self-directed)" },
      { label:"Duration", value:"Personal project" },
      { label:"Team", value:"Solo" },
      { label:"Tools", value:"Figma" }
    ],
    challenge: [
      "In-vehicle infotainment systems ask a driver to absorb a lot of information — charge level, range, navigation, media, vehicle status — without pulling focus from the road. This is a self-directed concept exploring that problem for an electric G-Class: how much can be communicated at a glance, and how little does the driver need to touch?"
    ],
    research: {
      intro: "As a personal concept project, this wasn't backed by formal user interviews. The starting point was closer observation and reference-based research instead:",
      list: [
        "Reviewed how existing Mercedes-Benz infotainment systems structure the home screen — status, navigation and media as co-equal, glanceable zones.",
        "Identified the vehicle-status information a driver actually needs while driving versus while parked: charge %, estimated distance, door and tyre-condition alerts.",
        "Sketched the constraint that mattered most: nothing on the home screen should require more than a glance to read."
      ]
    },
    define: [
      "Design goal: a home screen that surfaces charge, distance, location and live vehicle alerts (like an open door or a tyre-condition warning) without ever feeling like a dashboard of gauges — then lets media and climate controls sit one tap away, not zero."
    ],
    explore: {
      intro: "Exploration started on paper — rough thumbnails for the welcome screen and home layout — before moving into a flowchart of the states the screen needed to support (charging, driving, alert states).",
      images: [
        { src:"Assets/G-Wagen Wireframming.png", caption:"Early sketches: welcome screen, charge/distance readout, and the vehicle-alert layout." }
      ]
    },
    design: {
      intro: "The high-fidelity direction kept the vehicle itself as the visual anchor of the home screen, with charge, distance and live status call-outs (front-left door open, tyre condition) arranged around it, and navigation and media treated as equally-glanceable side modules.",
      images: [
        { src:"Assets/G-wagen0.png", caption:"Home screen — charge, distance, climate and media as glanceable modules." },
        { src:"Assets/G-wagen02.png", caption:"In-dashboard context — status call-outs for door and tyre condition." }
      ]
    },
    prototype: "The welcome-to-home transition and live status states were built as an interactive Figma prototype (shown below as a captured animation) to test the pacing of the entry sequence and whether the status call-outs read clearly against a moving background.",
    validation: [
      "This was validated informally — through self-review and design-peer feedback — rather than a structured usability study, and the iterations above reflect that: simplifying the call-out treatment and tightening the welcome-sequence timing."
    ],
    impact: {
      stats: [],
      note: "As a concept project, there's no production usage data to report. The honest outcome is a complete, presentable end-to-end process — sketch, wireframe, high-fidelity UI, interactive prototype — for an automotive interface with real time-pressure constraints."
    },
    reflection: [
      "Automotive UI has a much stricter glance-time budget than most product design work, and designing for it changed how I think about information density everywhere else.",
      "Next step: test the current layout with an actual eye-tracking or time-boxed glance study rather than relying on self-review."
    ],
    gif: "Assets/G-wagen.gif"
  },

  "nextlogix": {
    title: "Nextlogix — Logistics & Inventory Dashboard",
    company: "Self-directed concept project",
    tagline: "Simplifying multi-warehouse order and inventory tracking into one clear operational view.",
    heroImage: "assets/img/posters/nextlogix-poster.jpg",
    meta: [
      { label:"Project", value:"SaaS logistics dashboard" },
      { label:"Role", value:"Product Designer (self-directed)" },
      { label:"Duration", value:"Personal project" },
      { label:"Team", value:"Solo" },
      { label:"Tools", value:"Figma" }
    ],
    challenge: [
      "Logistics teams juggle orders, inventory and exceptions (cancellations, returns, damage) across a day, usually across more than one warehouse. This concept explores a single dashboard that keeps all three visible at once, instead of splitting them across separate views that need to be cross-referenced manually."
    ],
    research: {
      intro: "As a personal project without a live client or user base, the process leaned on domain reference material rather than direct interviews:",
      list: [
        "Looked at how existing order-management and logistics SaaS tools structure dashboards, and where they force extra navigation to see related numbers.",
        "Worked from a hypothesis: order volume, order status and exception rates (cancelled, returned, damaged) belong on the same screen, at the same glance, because a spike in one usually explains a dip in another."
      ]
    },
    define: [
      "Design goal: an at-a-glance operations dashboard where order summary, status breakdown and exception tracking share one view, with drill-down available but never required for the first read."
    ],
    explore: {
      intro: "Exploration focused on information architecture — grouping orders (all / pending / completed) against exceptions (cancelled / returned / damaged) as a matched pair, so a manager reading the screen sees cause and effect side by side.",
      images: []
    },
    design: {
      intro: "The dashboard pairs order and exception summaries in matching card layouts, backs them with a simple order-volume chart for trend context, and keeps navigation (Dashboard, Orders, Inventory, Conversation) to a single top bar.",
      images: [
        { src:"assets/img/posters/nextlogix-poster.jpg", caption:"Nextlogix dashboard — order and exception summaries paired for at-a-glance reading." }
      ]
    },
    prototype: "Key interactions — switching the summary period (weekly/monthly) and moving between Orders, Inventory and Conversation — were prototyped in Figma to check that the core dashboard read stayed intact as data changed.",
    validation: [
      "Reviewed through self-critique and iteration rather than live usability testing — there's no real user base for a personal concept project, and the case study doesn't claim otherwise."
    ],
    impact: {
      stats: [],
      note: "No production metrics exist for a concept project. The value shown here is the design thinking: pairing volume with exceptions as one readable view, rather than a fabricated outcome."
    },
    reflection: [
      "Pairing 'what happened' (orders) with 'what went wrong' (exceptions) turned out to be a more useful mental model than the status-only dashboards I referenced.",
      "Next step: design the drill-down states (a single order, a single SKU) so the dashboard's promise of 'no navigation required for the first read' extends to the second and third read too."
    ],
    gif: "Assets/Nextlogix.gif"
  }
};

window.CASE_STUDY_ORDER = ["mo-hub", "g-class-infotainment", "nextlogix"];
