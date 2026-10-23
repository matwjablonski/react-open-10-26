import type { ReactNode } from "react"
import { Navigate } from "react-router"
import { useAuth } from "../../hooks/useAuth";
// import { HomePage } from "../../pages/HomePage"

type ProtectedRouteProps = {
    children: ReactNode;
};

export const ProtectedRoute = (props: ProtectedRouteProps) => {
    const { isAuthenticated } = useAuth();
    
    if (isAuthenticated === false) {
        return <Navigate to="/" replace />
    }

    return (
        <>{props.children}</>
    )
}

// const withAuthentication = (Component) => {
//     return ({ isAuthenticated, ...rest }) => {

//         if (!isAuthenticated) {
//             return <Navigate to="/" replace />
//         }

//         return <Component {...rest} />

//     }
// }

// const ProtectedHome = withAuthentication(HomePage);