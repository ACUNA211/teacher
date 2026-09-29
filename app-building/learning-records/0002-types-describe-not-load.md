# types.ts describes data, it doesn't load it

After lesson 0001, the learner found the "two copies of the same shape" paragraph unclear. On a check question (a component uses a field that exists in games.json but not in types.ts: does the build pass?) they answered "pass", thinking types.ts "pulls the data it requests". Corrected: types.ts is only a description, fetch in App.tsx loads the data, and tsc checks code against types.ts only, so the build fails. They did understand that other files refer to types.ts. On the follow-up (types.ts still has a field the JSON dropped) they answered correctly: the build passes and the error only shows at run time. Understanding looks fresh, not yet stable: bring it back in spaced review.

**Evidence**: two check questions in conversation, 2026-09-29 (first wrong, second right).
