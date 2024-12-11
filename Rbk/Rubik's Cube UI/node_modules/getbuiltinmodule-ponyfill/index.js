export async function getBuiltinModule(moduleSpecifier) {
	const getBuiltinModule = globalThis.process?.getBuiltinModule;
	if (!getBuiltinModule) {
		return import(moduleSpecifier);
	}
	return getBuiltinModule(moduleSpecifier);
}
