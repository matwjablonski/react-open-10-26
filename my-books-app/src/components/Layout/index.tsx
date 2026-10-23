import { Outlet } from "react-router";
import Header from "../Header";
import { UserInfo } from "../UserInfo";
import Footer from "../Footer";
import { Nav } from "../Nav";

type LayoutProps = {
    loginAction: () => void;
    isAuthenticated: boolean;
}

const Layout = ({ loginAction, isAuthenticated }: LayoutProps) => {
    return (
        <>
            <Header name="Romku">
                <UserInfo />
            </Header>
            <Nav isAuthenticated={isAuthenticated} loginAction={loginAction} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout;