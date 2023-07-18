import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';

import NotFound from '@/pages/NotFound';
import Products from '@/pages/books/Books';
// import Checkout from '@/pages/Checkout';
import ProductDetails from '@/pages/books/BookDetails';
import PrivateRoute from './PrivateRoute';
import Books from '@/pages/books/Books';
import BookDetails from '@/pages/books/BookDetails';
import Login from '@/pages/Login';

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
        path: '/books',
        element: <Books />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/book-details/:id',
        element: <BookDetails />,
      },

      {
        path: '/checkout',
        element: (
          <PrivateRoute>
            {/* <Checkout />, */}
            <BookDetails />
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
