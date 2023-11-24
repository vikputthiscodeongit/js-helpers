// Slightly modified version of https://stackoverflow.com/a/25345746.
type PromiseResolveValue = Awaited<ReturnType<typeof Promise.resolve>>;

function wait(
    ms: number,
    promiseResolveValue?: PromiseResolveValue,
    abortController?: AbortController
) {
    const signal = abortController?.signal;

    return new Promise((resolve, reject) => {
        const listener = () => {
            clearTimeout(timer);
            reject(signal?.reason);
        };

        signal?.throwIfAborted();

        const timer = setTimeout(() => {
            signal?.removeEventListener("abort", listener);
            resolve(promiseResolveValue);
        }, ms);

        signal?.addEventListener("abort", listener);
    });
}

export { wait as default };
