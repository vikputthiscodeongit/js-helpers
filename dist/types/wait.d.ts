type PromiseResolveValue = Awaited<ReturnType<typeof Promise.resolve>>;
declare function wait(ms: number, resolveValue?: PromiseResolveValue, abortSignal?: AbortSignal): Promise<unknown>;
export { wait as default };
//# sourceMappingURL=wait.d.ts.map