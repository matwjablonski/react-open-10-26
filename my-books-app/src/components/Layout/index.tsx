import { Outlet } from "react-router";
import Header from "../Header";
import { UserInfo } from "../UserInfo";
import Footer from "../Footer";
import { Nav } from "../Nav";

const Layout = () => {
    return (
        <>
            <Header name="Romku">
                <UserInfo />
            </Header>
            <Nav />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout;