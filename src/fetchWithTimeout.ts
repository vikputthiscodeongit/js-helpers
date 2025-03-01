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
    const timeoutId = setTimeout(() => ac.abort(), timeoutDuration || 8000);

    const response = await fetch(resource, options);
    clearTimeout(timeoutId);

    return response;
}

export { fetchWithTimeout as default };
