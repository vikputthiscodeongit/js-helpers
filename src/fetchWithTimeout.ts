async function fetchWithTimeout(
    resource: RequestInfo | URL,
    fetchOptions?: RequestInit,
    timeoutDuration?: number,
) {
    const ac = new AbortController();
    const options = fetchOptions ? Object.assign({}, fetchOptions) : {};
    options.signal = ac.signal;
    const timeoutId = setTimeout(() => ac.abort(), timeoutDuration || 8000);

    const response = await fetch(resource, options);
    clearTimeout(timeoutId);

    return response;
}

export { fetchWithTimeout as default };
