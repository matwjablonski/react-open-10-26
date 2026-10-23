import { useTheme } from "../../hooks/useTheme";

const Footer = function() {
    const { theme } = useTheme();

    return (
        <footer>
            Aplikacja przygotowana przez Mateusz Jabłoński
            <small>Uzywasz aktualnie wersji: {theme}</small>
        </footer>
    )
}

export default Footer;