async function fetchWithTimeout(
    resource: RequestInfo | URL,
    fetchOptions?: RequestInit,
    timeoutDuration?: number,
) {
    const ac = new AbortController();
    const timeoutId = setTimeout(() => ac.abort(), timeoutDuration || 8000);

    const response = await fetch(resource, {
        ...(fetchOptions || {}),
        signal: ac.signal,
    });
    clearTimeout(timeoutId);

    return response;
}

export { fetchWithTimeout as default };
