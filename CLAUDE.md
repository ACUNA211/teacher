# Teacher

A personal learning system built on the `teach` skill (`mattpocock-skills:teach`). One repo, several **track** workspaces, one public hub website (GitHub Pages). Design history: `TEACHER-PLAN.md`.

## Privacy rule (non-negotiable)

The site is **public**. Never commit personal or sensitive data: no tenant or domain names, IP addresses from real networks, internal system names, credentials, coworker names, or specific security weaknesses.

If the user shares something personal or work-specific, **say so out loud** before using it, e.g. *"This is specific. I'll turn it into a general topic, since we don't save personal data."* Then use generic stand-ins ("a small-business Entra tenant", "an internal line-of-business app", documentation IP ranges like `192.0.2.0/24`).

## Routing: which track?

Open Claude at the repo root and ask anything. Route it:

| Track | Folder | Covers |
|---|---|---|
| IT and certs (primary) | `it/` | CompTIA A+ → Network+ → Security+, Entra/Intune, day-to-day IT work |
| App building (primary) | `app-building/` | React + TypeScript web apps the user vibe-codes; registered repos |
| Data analysis (coming soon) | — | Reports, Excel, Power Query, Power BI, Power Automate, Zapier, SQL for reports. Not created yet: if a topic lands here, offer to create `data-analysis/` (interview for its `MISSION.md` first), else park it in `side-quests/` |
| Side quests | `side-quests/` | Anything that fits no mission. Graduation rule: `side-quests/TOPICS.md` |

- **Clear topic** → pick the track and say which in one line.
- **Ambiguous** → ask with a short choice.
- **Cross-track** (e.g. SQL for an app vs. SQL for a report) → list the candidate tracks, say "both is an option" and encourage it; let the user choose. When a topic goes in several tracks, each gets a **complete standalone lesson** with its own examples. Lessons may link across tracks but never depend on each other.
- **Fits no mission** → `side-quests/`.

## Running `teach` in this repo

`teach` normally treats the current directory as the workspace. **Here, the workspace is `<track>/`** — read and write `MISSION.md`, `RESOURCES.md`, `NOTES.md`, `QUEUE.md`, `learning-records/`, `lessons/`, `reference/` (the glossary lives at `reference/glossary.html`, following teach's GLOSSARY-FORMAT rules) inside the chosen track folder.

Deliberate departures from `teach`:

- **Shared assets at the root, not per-workspace `assets/`.** Every lesson and reference page links `/assets/course.css` (and `/assets/quiz.js` for quizzes) using a relative path (`../../assets/...`). Build new reusable components in root `assets/` so all tracks share them.
- **Every lesson links** back to the hub (`../../index.html`), its track's glossary (`../reference/glossary.html`), and the previous/next lesson. Copy the header/footer pattern from an existing lesson.
- **Lesson numbering is per track** (`it/lessons/0001-...html`).
- **Topics the user raises:** urgent or needed for work now → teach now. Otherwise add to `<track>/QUEUE.md`; daily lessons pull from the queue when related.

## After every lesson

1. Add the lesson to the hub: edit `data/hub.js` (lesson list, progress, review items). Don't hand-edit the HTML in `index.html` for lesson lists.
2. Write learning records only when `teach`'s rules say so (evidence, not coverage).
3. Commit: `git add -A && git commit -m "<track>: lesson NNNN <title>"` then push.

## Schedules (cloud routines, America/Chicago)

| When | Track | What |
|---|---|---|
| Daily 6:00 AM | IT | One short new lesson + 2–3 retrieval questions from earlier lessons |
| Saturday 6:00 AM | IT | In-depth quiz: this week's topics plus some from earlier weeks |
| Monday 6:00 AM | App building | Build review of last week's commits in **registered repos only** (`app-building/REPOS.md`). New repo with activity → ask before adding |

Each run ends with a push notification linking straight to the new lesson on the Pages site.
