import LoadingSpinner from "@shared/components/loading-spinner";
import { useAuth } from "@shared/hooks/use-auth";
import { useEffect, useState } from "react";

export default function LogoutPage() {
    const [confirmed, setConfirmed] = useState(false);
    const { logout } = useAuth();

    useEffect(() => {
        if (!confirmed) {
            return;
        }

        const timeoutId = setTimeout(() => {
            logout();
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [confirmed, logout]);

    function confirmLogout() {
        setConfirmed(true);
    }

    if (confirmed) {
        return (<div>
            <LoadingSpinner message="Logging out" />
        </div>);
    }

    return (<div>
        <h2>Are you sure you want to logout?</h2>
        <button onClick={confirmLogout}>Yes, Logout</button>
    </div>);
}