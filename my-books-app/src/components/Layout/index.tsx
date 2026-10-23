import { Outlet } from "react-router";
import Header from "../Header";
import { UserInfoMemoized } from "../UserInfo";
import Footer from "../Footer";
import { Nav } from "../Nav";

const Layout = () => {
    return (
        <>
            <Header name="Romku">
                <UserInfoMemoized />
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