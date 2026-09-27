# How to teach in this repo

A condensed version of the `teach` skill's rules, so scheduled cloud runs (which don't have the skill installed) teach the same way. Read `CLAUDE.md` first: its privacy rule and repo layout come before everything here.

## Before writing a lesson

1. Read the track's `MISSION.md`. Every lesson must serve it.
2. Read the track's `learning-records/`, `NOTES.md`, `QUEUE.md` (and `SYLLABUS.md` for IT) to find the **zone of proximal development**: the next thing that is just hard enough.
3. Read the track's `RESOURCES.md`. Base the knowledge on those sources, **not memory**. If you need a new source, find a high-trust one (official docs, recognized experts), check it, and add it with a one-line note on what it covers and when to use it.
4. Read the newest lesson in the track and copy its structure: head, header/footer nav, shared `../../assets/course.css`, `../../assets/quiz.js`.

## What a lesson is

- One self-contained HTML file: `<track>/lessons/NNNN-dash-case-title.html`, numbered per track.
- **Short**: about 10 minutes, one tightly scoped idea, one tangible win. Working memory is small.
- **Knowledge first, then skill**: teach only the knowledge the skill needs, then practice it with immediate feedback (quiz widget, a small hands-on step, a recall prompt).
- **Beautiful and calm** (think Tufte): clean typography, no clutter. Reuse the components in `assets/`. If a lesson needs something reusable, add it to `assets/`, never inline code another lesson would copy.
- **Cited**: link claims to sources (`<sup class="cite">`).
- Ends with **one primary source** to read or watch next (the best, most trusted one), and a reminder that the learner can **ask their teacher follow-up questions** by opening Claude in the Teacher repo.
- Links to the hub, the track glossary, related reference pages, and the previous lesson. Update the previous lesson's footer "next" link to point at the new lesson.

## Quizzes

- Use `<section class="quiz">` (see the comment at the top of `assets/quiz.js`).
- **Every answer choice has the same number of words and about the same length.** Formatting must give no clue. Vary which position is correct.
- Every question gets an explanation of why the right answer is right.
- Prefer scenario questions ("a user reports X, what's the cause?") over definition recall.

## Memory: fluency is not storage

Build long-term retention, not in-the-moment fluency:
- **Retrieval**: make the learner recall from memory before revealing (`<details class="recall">`, quizzes).
- **Spacing**: bring back material from earlier lessons (the daily lesson's review questions, the Saturday quiz).
- **Interleaving**: mix related topics in practice sets (the Saturday quiz).

## Reference pages

`<track>/reference/*.html`: compressed cheat sheets people return to (tables, commands, syntax, flowcharts). Create or extend one when a lesson introduces something worth looking up later. They must print well.

**Glossary** (`<track>/reference/glossary.html`): add a term only once the learner has shown they can use it correctly, not when it's first introduced. Pick one preferred term and list aliases to avoid. Definitions are one or two sentences. Once a term is in the glossary, use it consistently in every lesson.

## Learning records

`<track>/learning-records/NNNN-slug.md`, a few sentences each. Write one **only** with evidence: the learner showed real understanding, stated prior knowledge, had a misconception corrected, or the mission changed. **Covering material is not learning.** A scheduled run that never talked with the learner normally writes **no** learning records.

## Hub and commit

1. Append the lesson to `data/hub.js` (`lessons` array: track, num, date, title, path, `covers`), and set `updated`.
2. `git add -A && git commit -m "<track>: lesson NNNN <title>"`, then push to `main`. On a push conflict, `git pull --rebase`, resolve (keep both entries in `hub.js`), and push again.
