/* eslint-disable @typescript-eslint/prefer-promise-reject-errors */

// Slightly modified version of https://stackoverflow.com/a/25345746.
function wait(
    duration: number,
    resolveValue?: Awaited<ReturnType<typeof Promise.resolve>>,
    abortSignal?: AbortSignal,
) {
    if (typeof duration !== "number") throw new Error("`time` must be a `Number`.");

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
            duration >= 0 ? duration : 0,
        );

        abortSignal?.addEventListener("abort", listener);
    });
}

export { wait as default };
