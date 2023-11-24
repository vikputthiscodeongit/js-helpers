type PromiseResolveValue = Awaited<ReturnType<typeof Promise.resolve>>;
declare function wait(ms: number, promiseResolveValue?: PromiseResolveValue, abortController?: AbortController): Promise<unknown>;
export { wait as default };
//# sourceMappingURL=wait.d.ts.map