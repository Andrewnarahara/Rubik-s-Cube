# `getbuiltinmodule-ponyfill`

Call an async function with the semantics `globalThis.process.getBuiltinModule(…)` but with backwards compat for `bun` and old `node`.

The implementation will be aliased to `globalThis.process.getBuiltinModule` once the ecosystem has sufficient compatibility.

## Usage

### Example

```ts
import { getBuiltinModule } from "getbuiltinmodule-ponyfill";

const { Worker: NodeWorker } = await getBuiltinModule("node:worker_threads");
```
