import type { PropsWithChildren } from "react"
import { Navigate } from "react-router"
// import { HomePage } from "../../pages/HomePage"

type ProtectedRouteProps = PropsWithChildren<{
    isAuthenticated: boolean;
}>;

export const ProtectedRoute = (props: ProtectedRouteProps) => {
    if (props.isAuthenticated === false) {
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