import type { ReactNode } from "react";

export type HeaderProps = {
    name?: string;
    children: ReactNode;
}

const Header = ({ name, children }: HeaderProps) => {
    return <div>
        <h1>Witaj w mojej aplikacji {name ?? 'czytelniku'}</h1>
        {children}
    </div>
}

export default Header;