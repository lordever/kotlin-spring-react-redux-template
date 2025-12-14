export enum API_AUTH_ERRORS {
  UNAUTHORIZED = 'UNAUTHORIZED',
  AUTH_NOT_CONFIGURED = 'AUTH_NOT_CONFIGURED',
  NOT_AUTHENTICATED = 'NOT_AUTHENTICATED'
}

export abstract class BaseApiService {
  protected readonly baseUrl: string;


  constructor(baseUrl: string = '/api',
              private readonly getToken?: () => string | null,
              private readonly onUnauthorized?: () => void) {
    this.baseUrl = baseUrl;
  }

  protected async request<T>(
    input: string,
    init: RequestInit = {},
    options?: { auth?: boolean },
  ): Promise<T> {
    const headers: HeadersInit = {
      ...(init.headers || {}),
      'Content-Type': init.body ? 'application/json' : (init.headers as any)?.['Content-Type'] ?? 'application/json',
    };

    if (options?.auth) {

      if (!this.getToken) {
        throw new Error(API_AUTH_ERRORS.AUTH_NOT_CONFIGURED);
      }

      const token = this.getToken();
      if (!token) {
        throw new Error(API_AUTH_ERRORS.NOT_AUTHENTICATED);
      }
      (headers as any).Authorization = `Bearer ${token}`;
    }

    const res = await fetch(`${this.baseUrl}${input}`, { ...init, headers });

    if (res.status === 401) {

      if (this.onUnauthorized) {
        this.onUnauthorized();
      }

      throw new Error(API_AUTH_ERRORS.UNAUTHORIZED);
    }

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.log('API ERROR', res.status, text);
      throw new Error(`API_ERROR_${res.status}`);
    }

    if (res.status === 204) {
      return undefined as T;
    }

    return res.json();
  }

}