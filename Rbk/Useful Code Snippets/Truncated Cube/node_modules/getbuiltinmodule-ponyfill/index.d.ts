// There seems to be an issue where TypeScript's built-in types for `@types/node`(?) are outdated and override the installed ones some (but not all?) of the time. So we vendor a full copy of the `node:` modules.
export interface BuiltInModuleNode22_5_1 {
	"node:assert": typeof import("node:assert");
	"node:assert/strict": typeof import("node:assert/strict");
	"node:async_hooks": typeof import("node:async_hooks");
	"node:buffer": typeof import("node:buffer");
	"node:child_process": typeof import("node:child_process");
	"node:cluster": typeof import("node:cluster");
	"node:console": typeof import("node:console");
	"node:constants": typeof import("node:constants");
	"node:crypto": typeof import("node:crypto");
	"node:dgram": typeof import("node:dgram");
	"node:diagnostics_channel": typeof import("node:diagnostics_channel");
	"node:dns": typeof import("node:dns");
	"node:dns/promises": typeof import("node:dns/promises");
	"node:domain": typeof import("node:domain");
	"node:events": typeof import("node:events");
	"node:fs": typeof import("node:fs");
	"node:fs/promises": typeof import("node:fs/promises");
	"node:http": typeof import("node:http");
	"node:http2": typeof import("node:http2");
	"node:https": typeof import("node:https");
	"node:inspector": typeof import("node:inspector");
	"node:inspector/promises": typeof import("node:inspector/promises");
	"node:module": typeof import("node:module");
	"node:net": typeof import("node:net");
	"node:os": typeof import("node:os");
	"node:path": typeof import("node:path");
	"node:path/posix": typeof import("node:path/posix");
	"node:path/win32": typeof import("node:path/win32");
	"node:perf_hooks": typeof import("node:perf_hooks");
	"node:process": typeof import("node:process");
	"node:punycode": typeof import("node:punycode");
	"node:querystring": typeof import("node:querystring");
	"node:readline": typeof import("node:readline");
	"node:readline/promises": typeof import("node:readline/promises");
	"node:repl": typeof import("node:repl");
	"node:sea": typeof import("node:sea");
	"node:sqlite": typeof import("node:sqlite");
	"node:stream": typeof import("node:stream");
	"node:stream/consumers": typeof import("node:stream/consumers");
	"node:stream/promises": typeof import("node:stream/promises");
	"node:stream/web": typeof import("node:stream/web");
	"node:string_decoder": typeof import("node:string_decoder");
	"node:test": typeof import("node:test");
	"node:test/reporters": typeof import("node:test/reporters");
	"node:timers": typeof import("node:timers");
	"node:timers/promises": typeof import("node:timers/promises");
	"node:tls": typeof import("node:tls");
	"node:trace_events": typeof import("node:trace_events");
	"node:tty": typeof import("node:tty");
	"node:url": typeof import("node:url");
	"node:util": typeof import("node:util");
	"node:sys": typeof import("node:util");
	"node:util/types": typeof import("node:util/types");
	"node:v8": typeof import("node:v8");
	"node:vm": typeof import("node:vm");
	"node:wasi": typeof import("node:wasi");
	"node:worker_threads": typeof import("node:worker_threads");
	"node:zlib": typeof import("node:zlib");
}

declare const getBuiltinModule: <ID extends keyof BuiltInModuleNode22_5_1>(
	moduleSpecifier: ID,
) => Promise<BuiltInModuleNode22_5_1[ID]>;
