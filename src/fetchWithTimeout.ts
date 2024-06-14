async function fetchWithTimeout(
    resource: RequestInfo | URL,
    fetchOptions?: RequestInit | undefined,
    timeoutDuration?: number | undefined,
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
