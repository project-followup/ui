import { createBrowserRouter } from "react-router-dom";
import AppLayoutComponent from './AppLayout'
import App from "./App";
import LogoutPage from "./pages/logout/logout-page";
import { ProtectedRoute } from "@shared/components/protected-route";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayoutComponent />,
    children: [
      {
        index: true,
        element: <ProtectedRoute>
          <App />
        </ProtectedRoute>
      },
      {
        path: 'logout',
        element: <ProtectedRoute>
          <LogoutPage />
        </ProtectedRoute>
      },
      {
        path: '*',
        element: <div>Page Not Found</div>
      }
    ]
  }
]);