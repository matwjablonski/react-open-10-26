export type HeaderProps = {
    name?: string;
}

const Header = ({ name }: HeaderProps) => {
    return <div>
        <h1>Witaj w mojej aplikacji {name ?? 'czytelniku'}</h1>
    </div>
}

export default Header;