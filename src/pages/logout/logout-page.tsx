import LoadingSpinner from "@shared/components/loading-spinner";
import { useAuth } from "@shared/hooks/use-auth";
import { useState } from "react";

export default function LogoutPage() {
    const [confirmed, setConfirmed] = useState(false);
    const { logout } = useAuth();

    function confirmLogout() {
        setConfirmed(true);
    }

    if (confirmed) {
        setTimeout(() => {
            logout();
        }, 1000);

        return (<div>
            <LoadingSpinner message="Logging out" />
        </div>);
    }

    return (<div>
        <h2>Are you sure you want to logout?</h2>
        <button onClick={confirmLogout}>Yes, Logout</button>
    </div>);
}