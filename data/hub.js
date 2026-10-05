/* Hub data. The teacher updates this file after every lesson; index.html renders it.
   Keep it free of personal data: the site is public. */
window.HUB = {
  updated: "2026-10-05",
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
    },
    {
      track: "it", num: "0003", date: "2026-09-28", covers: 0,
      title: "Web and remote access ports",
      path: "it/lessons/0003-web-remote-ports.html"
    },
    {
      track: "it", num: "0004", date: "2026-09-29", covers: 0,
      title: "Email, DNS and DHCP ports",
      path: "it/lessons/0004-email-dns-dhcp-ports.html"
    },
    {
      track: "it", num: "0005", date: "2026-09-30", covers: 1,
      title: "File sharing and directory ports",
      path: "it/lessons/0005-file-sharing-directory-ports.html"
    },
    {
      track: "it", num: "0006", date: "2026-10-01", covers: 0,
      title: "Wi-Fi bands and channels",
      path: "it/lessons/0006-wifi-bands-channels.html"
    },
    {
      track: "it", num: "0007", date: "2026-10-02", covers: 0,
      title: "802.11 Wi-Fi standards",
      path: "it/lessons/0007-wifi-standards.html"
    },
    {
      track: "it", num: "0008", date: "2026-10-03", covers: 0,
      title: "Weekly quiz: Sep 26 – Oct 2",
      path: "it/lessons/0008-week-quiz-2026-10-03.html"
    },
    {
      track: "it", num: "0009", date: "2026-10-04", covers: 1,
      title: "Bluetooth, NFC, RFID and fixed wireless",
      path: "it/lessons/0009-bluetooth-nfc-rfid-fixed-wireless.html"
    },
    {
      track: "it", num: "0010", date: "2026-10-05", covers: 0,
      title: "Server roles: who hands out what",
      path: "it/lessons/0010-server-roles.html"
    },
    {
      track: "app", num: "0001", date: "2026-09-28", covers: 0,
      title: "Build review: types are a promise, not a check",
      path: "app-building/lessons/0001-build-review-2026-09-28.html"
    }
  ]
};
