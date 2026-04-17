import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './main.scss'
import App from './App.tsx'
import AppLayoutComponent from './AppLayout.tsx'
import ThemeSwitcher from './theme-switcher.tsx'
import { loadConfiguration } from '@shared/services/configuration.ts'
import { initializeKeycloak } from '@shared/services/auth.ts'
import { AuthProvider } from '@shared/components/auth-provider.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayoutComponent />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '*',
        element: <div>Page Not Found</div>
      }
    ]
  }
]);

async function bootstrapApp() {
  const config = await loadConfiguration();
  initializeKeycloak(config);
  const rootEl = document.getElementById('root');
  if (rootEl) {
    const root = createRoot(rootEl);
    root.render(
      <AuthProvider>
        <StrictMode>
          <ThemeSwitcher />
          <RouterProvider router={router} />
        </StrictMode>
      </AuthProvider>,
    );
  }
}

bootstrapApp();