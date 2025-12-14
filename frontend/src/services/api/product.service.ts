import { BaseApiService } from './base.service';
import { clearToken, getToken } from '../token.service';
import { ProductModel } from '../../models/products/product.model';

class ProductService extends BaseApiService {
  constructor(baseUrl: string = '/api') {
    super(baseUrl, getToken, clearToken);
  }

  async getProducts(): Promise<ProductModel[]> {
    return this.request<ProductModel[]>('/v1/products', {}, { auth: true });
  }
}

export const productService = new ProductService('/api');