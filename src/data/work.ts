export type WorkMetric = {
  label: string;
  value: string;
  description?: string;
};

export type WorkEntry = {
  slug: string;
  title: string;
  role: string;
  period: string;
  summary: string;
  problem: string;
  approach: string[];
  outcome: string;
  metrics?: WorkMetric[];
  relatedBlogSlugs?: string[];
  relatedProjectSlugs?: string[];
  metaDescription: string;
  ogImage?: string;
};

export const workEntries: WorkEntry[] = [
  {
    slug: 'order',
    title: 'Order',
    role: 'Founding Product Engineer',
    period: '2023 — Present',
    summary:
      'Stood up the orchestration platform that gives fulfillment teams a calm command center with guardrails and visibility.',
    problem:
      'Operations teams juggled spreadsheets, email, and ad-hoc calls to track shipments. Signal was delayed, escalations were risky, and leadership lacked trustworthy insight.',
    approach: [
      'Shadowed ops leads across three regions to map the true workflow graph, highlighting human checkpoints worth protecting.',
      'Built an event-driven workflow engine with declarative guardrails so automations remained auditable and reversible.',
      'Co-created a composable design system and feedback rituals so discovery and delivery stayed within a 48-hour loop.',
    ],
    outcome:
      'Order now orchestrates thousands of weekly shipments with live health dashboards, contextual alerts, and dependable playbooks for edge cases.',
    metrics: [
      { label: 'Fulfillment latency', value: '↓ 32%', description: 'Time from order intake to shipment handoff' },
      { label: 'Manual escalations', value: '↓ 45%', description: 'Urgent interventions per week after launch' },
      { label: 'Ops adoption', value: '94%', description: 'Operations teams active every week' },
    ],
    relatedBlogSlugs: ['2024-08-patterns', '2024-07-feedback'],
    relatedProjectSlugs: ['order'],
    metaDescription:
      'How Yashodhan built Order—the dependable fulfillment orchestration platform that keeps operations teams aligned and calm.',
    ogImage: '/images/about-journey.svg',
  },
  {
    slug: 'legal-chronicles',
    title: 'The Legal Chronicles',
    role: 'Product & Storytelling Lead',
    period: '2022 — 2023',
    summary:
      'Translated dense legal research into an interactive publication with tooling that kept experts, editors, and readers aligned.',
    problem:
      'Experts produced rich insight, but distribution was trapped in PDFs and email threads. Teams needed a publishing system that preserved nuance while engaging a broader audience.',
    approach: [
      'Mapped the editorial supply chain—from interviews to legal review—to uncover bottlenecks and consent requirements.',
      'Shipped a modular CMS with opinionated components for analysis, interviews, and timelines so contributors stayed on brand.',
      'Built insight loops that paired qualitative reader feedback with cohort analytics to steer commissioning decisions.',
    ],
    outcome:
      'The Legal Chronicles evolved into a trusted hub for legal teams and operators, with stories that invite exploration without sacrificing rigor.',
    metrics: [
      { label: 'Publishing cadence', value: '2x', description: 'Increase in weekly narrative releases' },
      { label: 'Reader completion', value: '68%', description: 'Average scroll depth across long-form explainers' },
      { label: 'Expert satisfaction', value: '9.1 / 10', description: 'Post-publication ratings from subject matter experts' },
    ],
    relatedBlogSlugs: ['2024-05-legal-chronicles'],
    relatedProjectSlugs: ['legal-chronicles'],
    metaDescription:
      'How Yashodhan turned dense legal insight into The Legal Chronicles—a narrative system with modular tooling and measurable engagement.',
    ogImage: '/images/about-journey.svg',
  },
  {
    slug: 'studio-sprints',
    title: 'Studio Sprints',
    role: 'Fractional Product Partner',
    period: '2019 — 2022',
    summary:
      'Embedded with early-stage teams to move from discovery to MVP through focused rituals, rapid prototyping, and crisp storytelling.',
    problem:
      'Founders needed traction but lacked a shared rhythm between design, engineering, and go-to-market. Decisions stalled and learning loops broke down.',
    approach: [
      'Instated a lightweight discovery cadence with structured field notes so teams re-learned alongside their customers every week.',
      'Ran shipping sprints anchored in narrative briefs that aligned product, GTM, and leadership on the problem and proof points.',
      'Mentored emerging designers and engineers on accessibility, documentation, and experiment design to compound future velocity.',
    ],
    outcome:
      'Across fintech, health, and marketplace launches, teams moved from idea to production in under eight weeks with clearer rituals and reusable systems.',
    metrics: [
      { label: 'Time to MVP', value: '≈ 6 weeks', description: 'Average discovery-to-launch timeline across teams' },
      { label: 'Stakeholder confidence', value: '+38%', description: 'Increase in alignment scores from kickoff to launch' },
    ],
    relatedBlogSlugs: ['2024-07-feedback'],
    relatedProjectSlugs: ['signal-kit'],
    metaDescription:
      'Inside Studio Sprints: how Yashodhan partners with founders to build MVPs quickly while raising the bar on craft and alignment.',
    ogImage: '/images/about-journey.svg',
  },
];

export const getWorkEntry = (slug: string) => workEntries.find((entry) => entry.slug === slug);
