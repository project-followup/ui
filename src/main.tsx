import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './main.scss'
import App from './App.tsx'
import AppLayoutComponent from './AppLayout.tsx'
import ThemeSwitcher from './theme-switcher.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayoutComponent />,
    children: [
      {
        path: '/',
        element: <App />
      }],
  }
]);

async function bootstrapApp() {
  // await loadConfiguration();

  const rootEl = document.getElementById('root');
  if (rootEl) {
    const root = createRoot(rootEl);
    root.render(
      <StrictMode>
        <ThemeSwitcher />
        <RouterProvider router={router} />
      </StrictMode>,
    );
  }
}

bootstrapApp();