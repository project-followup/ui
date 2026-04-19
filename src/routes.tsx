import { createBrowserRouter } from "react-router-dom";
import AppLayoutComponent from './AppLayout';
import LogoutPage from "@pages/logout/logout-page";
import { ProtectedRoute } from "@shared/components/protected-route";
import Home from "@pages/home/home";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayoutComponent />,
    children: [
      {
        index: true,
        element: <ProtectedRoute>
          <Home />
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