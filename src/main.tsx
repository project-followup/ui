import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './main.scss'
import App from './App.tsx'
import AppLayoutComponent from './AppLayout.tsx'
import ThemeSwitcher from '@shared/components/theme-switcher.tsx'
import { AuthProvider } from '@shared/components/auth-provider.tsx'
import { ConfigProvider } from '@shared/components/config-provider.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayoutComponent />,
    children: [
      {
        index: true,
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
  const rootEl = document.getElementById('root');
  if (rootEl) {
    const root = createRoot(rootEl);
    root.render(
      <ConfigProvider>
        <AuthProvider>
          <StrictMode>
            <ThemeSwitcher />
            <RouterProvider router={router} />
          </StrictMode>
        </AuthProvider>
      </ConfigProvider>,
    );
  }
}

bootstrapApp();