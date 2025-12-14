import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductModel } from '../../models/products/product.model';
import { productService } from '../../services/api/product.service';
import { API_AUTH_ERRORS } from '../../services/api/base.service';
import Layout from '../layout/layout.component';
import Container from '../common/container/container.component';

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const list = await productService.getProducts();
        setProducts(list);
      } catch (err: any) {
        if (err instanceof Error && err.message === API_AUTH_ERRORS.UNAUTHORIZED) {
          navigate('/login');
          return;
        }

        setError('Product list fetching getting failed');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [navigate]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Layout>
      <Container variant="info">
        {products?.map((product) => (
          <div key={product.id} className="flex flex-row gap-2">
                        <span className="text-preset-5-medium">
                            {product.name}
                        </span>

            <span className="text-preset-5-medium">
                            {product.price}
                        </span>

          </div>
        ))}
      </Container>
    </Layout>
  );
};

export default ProductList;