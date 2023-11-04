type Resource = RequestInfo | URL;
type FetchOptions = RequestInit;
type Timeout = number;
declare function fetchWithTimeout(resource: Resource, fetchOptions?: FetchOptions | undefined, timeout?: Timeout | undefined): Promise<Response>;
export { fetchWithTimeout as default };
//# sourceMappingURL=fetchWithTimeout.d.ts.map