async function fetchWithTimeout(
    resource: RequestInfo | URL,
    fetchOptions?: RequestInit | undefined,
    timeout?: number | undefined
) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout || 8000);

    const response = await fetch(resource, {
        ...(fetchOptions || {}),
        signal: controller.signal,
    });
    clearTimeout(timeoutId);

    return response;
}

export { fetchWithTimeout as default };
