/* Hub data. The teacher updates this file after every lesson; index.html renders it.
   Keep it free of personal data: the site is public. */
window.HUB = {
  updated: "2026-10-23",
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
      track: "it", num: "0011", date: "2026-10-06", covers: 1,
      title: "Middleboxes and things you can't patch",
      path: "it/lessons/0011-appliances-scada-iot.html"
    },
    {
      track: "it", num: "0012", date: "2026-10-07", covers: 0,
      title: "DNS records: what a name can answer",
      path: "it/lessons/0012-dns-records.html"
    },
    {
      track: "it", num: "0013", date: "2026-10-08", covers: 1,
      title: "SPF, DKIM and DMARC: proving mail is really yours",
      path: "it/lessons/0013-spf-dkim-dmarc.html"
    },
    {
      track: "it", num: "0014", date: "2026-10-09", covers: 1,
      title: "DHCP scopes and leases: who gets which address",
      path: "it/lessons/0014-dhcp-scopes-leases.html"
    },
    {
      track: "it", num: "0015", date: "2026-10-10", covers: 0,
      title: "Weekly quiz: Oct 4 – Oct 9",
      path: "it/lessons/0015-week-quiz-2026-10-10.html"
    },
    {
      track: "it", num: "0016", date: "2026-10-11", covers: 1,
      title: "VLANs and VPNs: splitting one network, joining distant ones",
      path: "it/lessons/0016-vlans-vpns.html"
    },
    {
      track: "it", num: "0017", date: "2026-10-12", covers: 1,
      title: "Network types: from your desk to the other side of the world",
      path: "it/lessons/0017-network-types.html"
    },
    {
      track: "it", num: "0018", date: "2026-10-13", covers: 1,
      title: "Internet connections: six ways to reach the WAN",
      path: "it/lessons/0018-internet-connection-types.html"
    },
    {
      track: "it", num: "0019", date: "2026-10-14", covers: 1,
      title: "Network tools: what's in the technician's bag",
      path: "it/lessons/0019-network-tools.html"
    },
    {
      track: "it", num: "0020", date: "2026-10-15", covers: 0,
      title: "Network devices: who forwards what, and how",
      path: "it/lessons/0020-network-devices-switch-router-ap.html"
    },
    {
      track: "it", num: "0021", date: "2026-10-16", covers: 1,
      title: "Power, modems and the NIC: the ends of the cable",
      path: "it/lessons/0021-poe-modems-ont-nic.html"
    },
    {
      track: "it", num: "0022", date: "2026-10-17", covers: 0,
      title: "Weekly quiz: Oct 11 – Oct 16",
      path: "it/lessons/0022-week-quiz-2026-10-17.html"
    },
    {
      track: "it", num: "0023", date: "2026-10-18", covers: 0,
      title: "Laptop batteries, keyboards and SSDs: the parts you'll actually swap",
      path: "it/lessons/0023-laptop-batteries-keyboards-ssd.html"
    },
    {
      track: "it", num: "0024", date: "2026-10-19", covers: 1,
      title: "NFC, cameras and microphones: the laptop's senses",
      path: "it/lessons/0024-laptop-nfc-cameras-microphones.html"
    },
    {
      track: "it", num: "0025", date: "2026-10-20", covers: 1,
      title: "Tethers, hotspots and plugs: connecting a phone",
      path: "it/lessons/0025-connecting-mobile-devices.html"
    },
    {
      track: "it", num: "0026", date: "2026-10-21", covers: 1,
      title: "Pens, headsets and docks: what plugs into a mobile device",
      path: "it/lessons/0026-mobile-device-accessories.html"
    },
    {
      track: "it", num: "0027", date: "2026-10-22", covers: 1,
      title: "Cells, SIMs and satellites: the networks a phone lives on",
      path: "it/lessons/0027-mobile-device-networks.html"
    },
    {
      track: "it", num: "0028", date: "2026-10-23", covers: 1,
      title: "Whose phone, whose data: mobile device management",
      path: "it/lessons/0028-mobile-device-management.html"
    },
    {
      track: "app", num: "0001", date: "2026-09-28", covers: 0,
      title: "Build review: types are a promise, not a check",
      path: "app-building/lessons/0001-build-review-2026-09-28.html"
    },
    {
      track: "app", num: "0002", date: "2026-10-05", covers: 0,
      title: "Build review: filtering like LINQ (filter, some, every)",
      path: "app-building/lessons/0002-build-review-2026-10-05.html"
    },
    {
      track: "app", num: "0003", date: "2026-10-12", covers: 0,
      title: "Build review: copy, don't change (how the filter panel holds its state)",
      path: "app-building/lessons/0003-build-review-2026-10-12.html"
    },
    {
      track: "app", num: "0004", date: "2026-10-19", covers: 0,
      title: "Build review: components are functions (props and children in the Info popover)",
      path: "app-building/lessons/0004-build-review-2026-10-19.html"
    }
  ]
};
