import { useAuth } from "@shared/hooks/use-auth";
import { NavLink } from "react-router-dom";

export default function NavigationComponent() {
    const { logout } = useAuth();

    return (<nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <a href="#" onClick={logout}>Logout</a>
    </nav>);
}