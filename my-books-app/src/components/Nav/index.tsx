import { Link } from "react-router"
import { useAuth } from "../../hooks/useAuth";

export const Nav = () => {
    const { isAuthenticated, toggleAuthencation } = useAuth();
    return <nav>
        <ul>
            <li>
                <Link to="/">Strona główna</Link>
            </li>
            <li>
                <Link to="books">Książki</Link>
            </li>
            <li>
                <Link to="readers">Czytelnicy</Link>
            </li>
            <li>
                <Link to="contact-us">Kontakt</Link>
            </li>
            <li>
                <button onClick={toggleAuthencation}>{isAuthenticated ? 'Wyloguj' : 'Zaloguj'}</button>
            </li>
        </ul>
    </nav>
}