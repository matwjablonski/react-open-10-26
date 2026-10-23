import { Link } from "react-router"

type NavProps = {
    loginAction: () => void;
    isAuthenticated: boolean;
}

export const Nav = ({ isAuthenticated, loginAction }: NavProps) => {
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
                <button onClick={loginAction}>{isAuthenticated ? 'Wyloguj' : 'Zaloguj'}</button>
            </li>
        </ul>
    </nav>
}