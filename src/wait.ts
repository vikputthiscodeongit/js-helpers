/* eslint-disable @typescript-eslint/prefer-promise-reject-errors */

// Slightly modified version of https://stackoverflow.com/a/25345746.
function wait(
    ms: number,
    resolveValue?: Awaited<ReturnType<typeof Promise.resolve>>,
    abortSignal?: AbortSignal,
) {
    return new Promise((resolve, reject) => {
        const listener = () => {
            clearTimeout(timer);
            reject(abortSignal?.reason);
        };

        abortSignal?.throwIfAborted();

        const timer = setTimeout(
            () => {
                abortSignal?.removeEventListener("abort", listener);
                resolve(resolveValue);
            },
            ms >= 0 ? ms : 0,
        );

        abortSignal?.addEventListener("abort", listener);
    });
}

export { wait as default };
