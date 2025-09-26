export type ProjectReleaseNote = {
  date: string;
  note: string;
};

export type ProjectEntry = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  problem: string;
  build: string[];
  outcome: string;
  releaseNotes?: ProjectReleaseNote[];
  relatedBlogSlugs?: string[];
  relatedWorkSlugs?: string[];
  metaDescription: string;
  ogImage?: string;
};

export const projectEntries: ProjectEntry[] = [
  {
    slug: 'order',
    title: 'Order',
    tagline: 'Fulfillment orchestration for calm, accountable operations teams.',
    summary:
      'Order brings live shipment health, automation guardrails, and human-in-the-loop workflows into one dependable console.',
    problem:
      'Fragmented tools caused blind spots between sales, operations, and customer support. Teams needed a shared source of truth without losing nuanced controls.',
    build: [
      'Designed a workflow composer with reusable intents so operations managers could codify playbooks without code.',
      'Implemented simulation tooling that stress-tested automations before go-live, keeping escalation risk low.',
      'Shape a health dashboard that paired real-time metrics with narrative insights so leaders could coach proactively.',
    ],
    outcome:
      'With Order, fulfillment teams collaborate around the same live view, automations stay explainable, and executives trust the data driving decisions.',
    releaseNotes: [
      { date: '2024-08-05', note: 'Launched scenario simulations with audit trails for every automation recipe.' },
      { date: '2024-06-12', note: 'Shipped live fulfillment health including risk scoring and recovery guidance.' },
      { date: '2024-04-30', note: 'Rolled out shared annotations, keeping ops, CX, and partners aligned in context.' },
    ],
    relatedBlogSlugs: ['2024-08-patterns', '2024-07-feedback'],
    relatedWorkSlugs: ['order'],
    metaDescription:
      'Order by Yashodhan: a fulfillment orchestration product with automation guardrails, simulation tooling, and shared context for operators.',
    ogImage: '/images/about-journey.svg',
  },
  {
    slug: 'legal-chronicles',
    title: 'The Legal Chronicles',
    tagline: 'Narrative-driven legal insights with a modular publishing stack.',
    summary:
      'An editorial engine that turns dense legal analysis into approachable stories, backed by collaborative tooling and analytics.',
    problem:
      'Subject matter experts lacked a format to share nuanced insight quickly. Publishing friction slowed the cadence and left readers overwhelmed.',
    build: [
      'Crafted a component library—interviews, explainers, story maps—that kept voices consistent while respecting legal review.',
      'Automated hand-offs between researchers, writers, and legal reviewers with contextual checklists and approvals.',
      'Instrumented qualitative and quantitative feedback loops that informed commissioning and iteration every sprint.',
    ],
    outcome:
      'The Legal Chronicles now publishes twice as fast, surfaces rich context for in-house teams, and gives experts a trusted stage.',
    releaseNotes: [
      { date: '2023-11-02', note: 'Introduced interactive story maps with embedded citations for legal teams.' },
      { date: '2023-07-18', note: 'Expanded CMS workflow to include reviewer insights and automated fact-check reminders.' },
    ],
    relatedBlogSlugs: ['2024-05-legal-chronicles'],
    relatedWorkSlugs: ['legal-chronicles'],
    metaDescription:
      'The Legal Chronicles project: how Yashodhan built a modular storytelling platform that doubled publishing cadence and delighted legal experts.',
    ogImage: '/images/about-journey.svg',
  },
  {
    slug: 'signal-kit',
    title: 'Signal Kit',
    tagline: 'Field research capture that keeps product teams learning together.',
    summary:
      'A lightweight research toolkit for capturing, tagging, and sharing insights across distributed teams in under 10 minutes.',
    problem:
      'Discovery work lived in siloed documents. Teams struggled to connect conversations to product decisions without weeks of synthesis.',
    build: [
      'Built a mobile-first note-taking flow with automatic transcription hooks and consent-first prompts.',
      'Implemented tagging automation that grouped highlights by opportunity spaces and surfaced gaps in understanding.',
      'Shipped weekly digest emails that linked raw signal with roadmap discussions, tightening the feedback loop.',
    ],
    outcome:
      'Signal Kit helps teams keep discovery continuous, with actionable digests that translate field notes into product bets.',
    releaseNotes: [
      { date: '2024-03-14', note: 'Added AI-assisted tagging suggestions with audit controls.' },
      { date: '2023-12-01', note: 'Launched weekly digest generator that syncs with Notion and Linear.' },
    ],
    relatedBlogSlugs: ['2024-07-feedback'],
    relatedWorkSlugs: ['studio-sprints'],
    metaDescription:
      'Signal Kit: Yashodhan’s side project for capturing customer conversations, structuring insights, and closing the discovery-to-delivery gap.',
    ogImage: '/images/about-journey.svg',
  },
];

export const getProjectEntry = (slug: string) => projectEntries.find((entry) => entry.slug === slug);
