import assert from "node:assert";
import { getBuiltinModule } from "../index.js";

// Fails in `node` but not `bun`?
// const assert1 = await getBuiltinModule("node:assert");
// const assert2 = await import("node:assert");
// assert1.equal(assert1, assert2);
// assert2.equal(assert1, assert2);

// 😅
// assert.equal(
//   (await getBuiltinModule("node:process")).getBuiltinModule("node:process"),
//   await import("node:process")
// );

// 😳
// assert.equal(
//   globalThis.process.getBuiltinModule("node:process"),
//   await import("node:process")
// );

// TODO: enable this once `bun` has support
// assert(
//   "getBuiltinModule" in (await getBuiltinModule("node:process")),
// );

const { Worker: NodeWorker } = await getBuiltinModule("node:worker_threads");
assert.notEqual(typeof NodeWorker, "undefined");

(await getBuiltinModule("node:console")).log("OK");
