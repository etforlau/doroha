import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { MFEs } from './mfeRegister';
import MfeApp from './app/MfeApp';

const routes = MFEs.map((mfe) => ({
  path: mfe.route,
  element: <MfeApp mfe={mfe} />,
}));

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  ...routes,
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
