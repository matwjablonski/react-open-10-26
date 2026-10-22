import type { ReactNode } from "react";
import styled from "styled-components";

export type HeaderProps = {
    name?: string;
    children: ReactNode;
}

const Title = styled.h1`
    color: red;
    text-transform: uppercase;
`;

const Header = ({ name, children }: HeaderProps) => {
    return <div>
        <Title className="text-center">Witaj w mojej aplikacji {name ?? 'czytelniku'}</Title>
        {children}
    </div>
}

export default Header;