import { BaseApiService } from './base.service';
import { AuthResponse, LoginRequest } from '../../models/auth/auth.model';
import { setToken } from '../token.service';

class AuthService extends BaseApiService {
  constructor(baseUrl: string = '/api') {
    super(baseUrl);
  }

  async login(payload: LoginRequest): Promise<AuthResponse> {
    try {
      const data = await this.request<AuthResponse>('/v1/auth/login', {
        method: 'POST',
        body: JSON.stringify(payload),
      });


      if (!data.token) {
        throw new Error('AuthResponse should contain token');
      }

      setToken(data.token);
      return data;
    } catch (err: any) {
      console.error('Authorization was failed', err.message);
      return { message: err.message };
    }
  }
}

export const authService = new AuthService('/api');