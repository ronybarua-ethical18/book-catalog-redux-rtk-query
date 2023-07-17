import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';

import NotFound from '@/pages/NotFound';
import Products from '@/pages/books/Books';
// import Checkout from '@/pages/Checkout';
import ProductDetails from '@/pages/books/BookDetails';
import PrivateRoute from './PrivateRoute';
import Books from '@/pages/books/Books';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Books />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product-details/:id',
        element: <ProductDetails />,
      },
      {
        path: '/checkout',
        element: (
          <PrivateRoute>
            {/* <Checkout />, */}
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
