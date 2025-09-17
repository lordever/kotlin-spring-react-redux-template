import axios, { AxiosError } from 'axios';

// Simple RFC4122-ish generator (ok for request correlation)
const generateRequestId = (): string =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

// Prefer environment variable if CRA supports it; fallback to same-origin proxy
const baseURL = process.env.REACT_APP_API_BASE_URL || '/api/v1';

export const httpClient = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use(config => {
  const requestId = generateRequestId();
  config.headers = config.headers || {};
  (config.headers as Record<string, string>)['X-Request-Id'] = requestId;
  return config;
});

httpClient.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    // Centralized error logging: include method, url, status, request id if echoed back
    const method = error.config?.method?.toUpperCase();
    const url = error.config?.url;
    const status = error.response?.status;
    const backendRequestId = (error.response?.headers?.['x-request-id'] as string) || undefined;
    // eslint-disable-next-line no-console
    console.error('[HTTP ERROR]', {
      method,
      url,
      status,
      backendRequestId,
      message: error.message,
      data: error.response?.data,
    });
    return Promise.reject(error);
  }
);

export default httpClient;


