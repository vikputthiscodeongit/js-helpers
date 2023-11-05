type Resource = RequestInfo | URL;
type FetchOptions = RequestInit;
type Timeout = number;

async function fetchWithTimeout(
    resource: Resource,
    fetchOptions?: FetchOptions | undefined,
    timeout?: Timeout | undefined,
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
