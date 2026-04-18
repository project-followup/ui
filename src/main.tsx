import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './main.scss'
import { AuthProvider } from '@shared/components/auth-provider.tsx'
import { ConfigProvider } from '@shared/components/config-provider.tsx'
import { router } from './routes'

async function bootstrapApp() {
  const rootEl = document.getElementById('root');
  if (rootEl) {
    const root = createRoot(rootEl);
    root.render(
      <ConfigProvider>
        <AuthProvider>
          <StrictMode>
            <RouterProvider router={router} />
          </StrictMode>
        </AuthProvider>
      </ConfigProvider>,
    );
  }
}

bootstrapApp();