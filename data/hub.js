/* Hub data. The teacher updates this file after every lesson; index.html renders it.
   Keep it free of personal data: the site is public. */
window.HUB = {
  updated: "2026-09-27",
  tracks: [
    {
      id: "it", name: "IT and certs", folder: "it", cls: "track-it", status: "active",
      mission: "Get stronger as an IT specialist and earn CompTIA A+ → Network+ → Security+.",
      goal: { label: "A+ Core 1 (220-1201)", target: "2027-02", total: 63, unit: "Core 1 video topics" },
      glossary: "it/reference/glossary.html"
    },
    {
      id: "app", name: "App building", folder: "app-building", cls: "track-app", status: "active",
      mission: "Understand the React + TypeScript apps I vibe-code well enough to debug them myself.",
      glossary: "app-building/reference/glossary.html"
    },
    {
      id: "data", name: "Data analysis", folder: "data-analysis", cls: "track-data", status: "soon",
      mission: "Upgrade and automate recurring reports; sanity-check analysis. Coming soon."
    },
    {
      id: "side", name: "Side quests", folder: "side-quests", cls: "track-side", status: "active",
      mission: "Whatever catches my interest, kept apart from the main tracks.",
      glossary: null
    }
  ],
  /* Newest last. `covers` counts toward the track goal (e.g. Core 1 topics covered). */
  lessons: [
    {
      track: "it", num: "0001", date: "2026-09-26", covers: 1,
      title: "The four settings every device needs",
      path: "it/lessons/0001-four-ip-settings.html"
    },
    {
      track: "it", num: "0002", date: "2026-09-27", covers: 1,
      title: "TCP, UDP and the ports they deliver to",
      path: "it/lessons/0002-tcp-udp-ports.html"
    }
  ]
};
