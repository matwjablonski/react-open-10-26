import { createContext } from "react";

type UserContextValue = {
    isAuthenticated: boolean;
    toggleAuthencation: () => void;
}

export const UserContext = createContext<UserContextValue>({
    isAuthenticated: false,
    toggleAuthencation: () => {},
});
