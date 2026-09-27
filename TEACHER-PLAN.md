# Teacher Plan

Design decisions from a grilling session on 2026-09-26. Hand this file to a fresh Claude session to build the teaching system. Nothing here has been built yet.

## What this is

A personal learning system built on the `mattpocock-skills:teach` skill. You learn while vibe coding, bring in topics as they come up, and the teacher also creates lessons on its own. Everything lives in one GitHub repo, runs on cloud schedules, and is readable from anywhere through a shared website (the **hub**).

## Core architecture

- **One `teach` skill, many workspaces.** `teach` enforces *one mission per workspace*: every lesson, glossary and learning record traces back to a single `MISSION.md`. Separate learning goals get separate folders, not separate skills.
- **Root `CLAUDE.md` routes requests.** Open Claude at the repo root and ask anything:
  - Clear topic → pick the track and say which in one line.
  - Ambiguous topic → ask the user with a short choice.
  - Fits no mission → `side-quests/`.
  - `teach` normally treats the current directory as the workspace; `CLAUDE.md` must tell it to use `<track>/` instead.
- **Cross-track topics.** The teacher decides if a topic belongs in one or several tracks. When unsure, it lists the candidate tracks, says "both is an option" (and encourages it), and lets the user choose. When a topic goes in more than one track, each track gets a **complete standalone lesson** with its own examples (for example, SQL for an app vs. SQL for a Power BI report). Lessons may link across tracks but never depend on each other.

## Tracks

| Priority | Track | Folder | Mission (draft, confirm when creating) |
|---|---|---|---|
| Primary | IT and certs | `it/` | Get stronger in my IT specialist role and earn CompTIA **A+ → Network+ → Security+**. Tie lessons to real Entra/Intune work where possible. Long-term payoff: help secure company data as we grow. Microsoft certs: undecided. |
| Primary | App building | `app-building/` *(name pending, see Open items)* | Understand the apps I vibe-code well enough to debug them without leaning fully on AI. Practice on non-commercial apps now, build commercial apps later. Focus stack: **React + TypeScript** web apps. |
| Secondary | Data analysis | `data-analysis/` | Upgrade and automate my recurring reports (Excel, Power Query, Power BI, Power Automate, Zapier) and be able to sanity-check AI- and boss-produced analysis. SQL is picked up as needed. Not aiming to take over analysis. |
| Ad hoc | Side quests | `side-quests/` | Explore whatever catches my interest (politics, game design, etc.), kept separate from the main tracks. |

**Side-quest graduation:** `side-quests/TOPICS.md` holds the graduation rule and a list of topics with lesson counts. When a topic reaches **about 3 lessons *or* the user states a concrete goal for it**, the teacher *suggests* (doesn't force) giving it its own workspace. The root `CLAUDE.md` only points at this file, to stay short.

## Learner profile (seed first learning records)

- Comfortable in **C++, C#, Python**.
- Can read code slowly. Weak on web/JavaScript/JSON/TypeScript and wants to learn TypeScript.
- **Excel: strong.** **SQL: beginner.**
- Job: IT specialist with recurring report and data-support duties. The company domain is managed by corporate. The local team manages some Entra/Intune and a few internal programs. Day-to-day work is mostly account and access support.

## Lesson generation

- The teacher **creates lessons on its own** (following the cert syllabus and the learner's current level) **and** takes in topics the user brings.
- Topics the user raises: if urgent or needed for work right now, teach now; otherwise add to the track's `QUEUE.md`, and daily lessons pull from it when related.
- **Project-based learning (app track):** registered repos are the study material. Lessons explain what the AI built, how it works and why.

## Schedules (cloud routines, Central Time, America/Chicago)

| When | Track | What |
|---|---|---|
| Daily, 6:00 AM | IT | One **short** new lesson plus 2–3 retrieval questions from earlier material |
| Saturday *(time TBD, default 6:00 AM)* | IT | In-depth quiz that mixes the week's topics **plus some items from earlier weeks** |
| Monday *(time TBD, default 6:00 AM)* | App building | Build review: read the past week's commits in registered repos and write a lesson on what was built and why |

- Each run sends a **push notification that links straight to the new lesson**. (Verify at build time how cloud routines can push notifications.)
- Monday review covers **registered repos only**. If a new repo shows activity, the teacher **asks** before adding it.

## Repos to register

- `2 player boardgames project` → `github.com/ACUNA211/two-player-bg-finder` (React 19, TypeScript, Vite, Vitest; non-commercial)
- `SalesPro Clone` → **not a git repo yet**; must be pushed to GitHub before the Monday review can see it

## Hub website

- `index.html` at the repo root: the hub. Shows tracks, progress, recent lessons and what's due for review. The teacher updates it after every lesson.
- **One shared stylesheet** at the root (and shared components like quiz widgets). Every lesson links to it, so the whole library looks consistent and design changes happen in one place. This deliberately departs from `teach`'s per-workspace `assets/`.
- Every lesson links back to the hub, its track's glossary and neighboring lessons.
- Hosted on **GitHub Pages** (public site).

## Privacy rule (goes in root `CLAUDE.md`)

The site is public. **No personal or sensitive data is ever committed.** That means no tenant or domain names, IP addresses, internal system names, credentials, coworker names, or specific security weaknesses. If the user shares something personal or work-specific, the teacher **says so out loud**, something like *"This is specific. I'll turn it into a general topic, since we don't save personal data,"* and uses generic stand-ins such as "a small-business Entra tenant."

## Git

The whole teacher system is one GitHub repo. Commit after each lesson.

## Open items (decide when building)

1. **Final location and folder names.** Where the teacher repo lives on disk, and whether the app track is named `app-building/` or `software-engineering/` (on hold as of 2026-09-26).
2. **Which folders to create on day one.** Earlier recommendation: create `it/`, `app-building/` and `side-quests/` with missions now, and list `data-analysis/` in the hub as "coming soon."
3. **Exact times** for the Saturday and Monday runs.
4. **A+ Core 1 target exam date**, to pace the daily lessons.
5. **Tooling:** install the `gh` CLI (not installed as of 2026-09-26) and connect GitHub for cloud routines.
