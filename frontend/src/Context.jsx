import { createContext, useReducer, useCallback } from "react";

export const AuthContext = createContext({
    authState: {},
    login: () => { },
    logout: () => { },
});


const authReducer = (prevState, action) => {
    if (action.type === "LOGIN") {
        let newState = { ...prevState };
        newState.isLogged = true;
        return newState;
    }
    if (action.type === "LOGOUT") {
        let newState = { ...prevState };
        newState.isLogged = false;
        return newState;
    }
};

const AuthContextProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, { isLogged: false });

    const login = useCallback(function login() {
        dispatch({ type: "LOGIN" });
    }, []);
    const logout = useCallback(function logout() {
        dispatch({ type: "LOGOUT" });
    }, []);
    let ctx = { authState, login, logout };

    return <AuthContext value={ctx}>{children}</AuthContext>;
};

export default AuthContextProvider