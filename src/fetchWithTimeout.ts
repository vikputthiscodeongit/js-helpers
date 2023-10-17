interface FetchWithTimeoutOptions {
    resource: RequestInfo | URL;
    fetchOptions?: RequestInit;
    timeout?: number;
}

async function fetchWithTimeout({
    resource,
    fetchOptions,
    timeout = 8000,
}: FetchWithTimeoutOptions) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(resource, {
        ...(fetchOptions || {}),
        signal: controller.signal,
    });
    clearTimeout(timeoutId);

    return response;
}

export { fetchWithTimeout as default };
