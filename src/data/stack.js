// cv: false keeps an item on the site but out of the CV. core: true highlights the item on the site.
// Group titles are { es, en } pairs; item names are the same in both languages unless given as a pair.
// Icons: "si:" are Simple Icons brand slugs, "tabler:" are Tabler Icons names. See docs/STYLEGUIDE.md.
export const stack = [
  {
    title: { es: 'Backend y datos', en: 'Backend and data' },
    items: [
      { name: 'Node.js', icon: 'si:nodedotjs', core: true },
      { name: 'TypeScript', icon: 'si:typescript', core: true },
      { name: 'Express', icon: 'si:express' },
      { name: 'MongoDB', icon: 'si:mongodb' },
      { name: 'MySQL', icon: 'si:mysql' },
      { name: { es: 'AWS S3 y SQS', en: 'AWS S3 and SQS' }, icon: 'si:amazonwebservices' },
      { name: 'Google Cloud Storage', icon: 'si:googlecloudstorage' },
      { name: 'Zod', icon: 'si:zod' },
      { name: 'OpenTelemetry', icon: 'si:opentelemetry' }
    ]
  },
  {
    title: { es: 'Frontend', en: 'Frontend' },
    items: [
      { name: 'React', icon: 'si:react', core: true },
      { name: 'TanStack', icon: 'si:tanstack' },
      { name: 'Vite', icon: 'si:vite' },
      { name: 'Storybook', icon: 'si:storybook' },
      { name: 'Astro', icon: 'si:astro', core: true },
      { name: 'Tailwind CSS', icon: 'si:tailwindcss' }
    ]
  },
  {
    title: { es: 'Inteligencia artificial', en: 'Artificial intelligence' },
    items: [
      { name: 'OpenAI API', icon: 'si:openai' },
      { name: 'Claude', icon: 'si:claude' },
      { name: 'Claude Code', icon: 'si:claudecode' },
      { name: 'MCP', icon: 'si:modelcontextprotocol' }
    ]
  },
  {
    title: { es: 'Testing', en: 'Testing' },
    items: [
      { name: 'Vitest', icon: 'si:vitest', core: true },
      { name: 'Testing Library', icon: 'si:testinglibrary' },
      { name: 'Playwright', icon: 'si:playwright', core: true },
      { name: 'MSW', icon: 'si:mockserviceworker' }
    ]
  },
  {
    title: { es: 'Herramientas', en: 'Tools' },
    items: [
      { name: 'Git', icon: 'si:git' },
      { name: 'GitHub Actions', icon: 'si:githubactions' },
      { name: 'Docker', icon: 'si:docker' },
      { name: 'Biome', icon: 'si:biome' },
      { name: 'Turborepo', icon: 'si:turborepo' },
      { name: 'PostHog', icon: 'si:posthog' },
      { name: 'WebStorm', icon: 'si:webstorm', cv: false },
      { name: 'Warp', icon: 'si:warp', cv: false }
    ]
  },
  {
    title: { es: 'Metodologías', en: 'Methodologies' },
    items: [
      { name: 'Agile', icon: 'tabler:refresh' },
      { name: 'Scrum', icon: 'tabler:layout-board' },
      { name: 'Kanban', icon: 'tabler:layout-kanban' },
      { name: 'XP', icon: 'tabler:bolt' },
      { name: 'CI/CD', icon: 'tabler:infinity' },
      { name: 'TDD', icon: 'tabler:test-pipe' },
      { name: 'Pair Programming', icon: 'tabler:users' }
    ]
  }
]
