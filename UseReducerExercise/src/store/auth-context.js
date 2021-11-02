import React, { useState, useEffect } from "react";

 const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});


export const AuthContextProvider = props => {

    const [isLoggedIn, setIsLogged] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    
        if (storedUserLoggedInInformation === '1') {
            setIsLogged(true);
        }
      }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLogged(false);
    };

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLogged(true);
    };

    return  (
                <AuthContextProvider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler}}>
                    {props.children}
                </AuthContextProvider>
            )
};

export default AuthContext;