import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/login/login.component';
import ProductList from '../components/product-list/product-list.component';
import PublicRoute from '../components/routes/public-route/public-route.component';
import ProtectedRoute from '../components/routes/protected-route/protected-route.component';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>),
  },
  {
    path: '/products',
    element: (
      <ProtectedRoute>
        <ProductList />
      </ProtectedRoute>
    ),
  },
]);