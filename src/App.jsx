import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Layout from './components/Layout';

import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import AboutPage from './pages/AboutPage';
import CategoryPage from './pages/CategoryPage';
import RecipePage from './pages/RecipePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: '',
      children: [
        { index: true, element: <HomePage /> },
        { path: '/contacts', element: <ContactsPage /> },
        { path: '/about', element: <AboutPage /> },
        { path: '/category/:name', element: <CategoryPage /> },
        { path: '/meal/:id', element: <RecipePage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
