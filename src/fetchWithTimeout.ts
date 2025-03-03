async function fetchWithTimeout(
    resource: RequestInfo | URL,
    fetchOptions?: RequestInit,
    timeoutDuration?: number,
) {
    if (timeoutDuration && typeof timeoutDuration !== "number")
        throw new Error("`timeoutDuration` must be a `number`.");

    const options = fetchOptions || {};

    const ac = new AbortController();
    options.signal = ac.signal;
    const timeoutId = setTimeout(
        () => ac.abort(),
        timeoutDuration === undefined ? 8000 : timeoutDuration < 0 ? 0 : timeoutDuration,
    );

    const response = await fetch(resource, options);
    clearTimeout(timeoutId);

    return response;
}

export { fetchWithTimeout as default };
