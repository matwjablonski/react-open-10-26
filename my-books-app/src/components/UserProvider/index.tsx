import { useMemo, useState, type ReactNode } from "react";
import { UserContext } from "../../context/UserContext";

type UserProviderType = {
    children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderType) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const value = useMemo(() => {
        return {
            isAuthenticated,
            toggleAuthencation: () => {
                setIsAuthenticated(v => !v);
            }
        }
    }, [isAuthenticated]);

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}