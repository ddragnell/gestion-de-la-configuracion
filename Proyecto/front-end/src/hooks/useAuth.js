import { useState, createContext, useContext } from "react";
import * as userService from '../Services/user.Service';
import { toast } from "react-toastify";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(userService.getUser());

    const login = async (email, password) => {
        try {
            const user = await userService.login(email, password);
            setUser(user);
            toast.success('Sesión iniciada correctamente');
        } catch (err) {
            toast.error(err.response.data)
        }  
    };

    const register = async data => {
        try {
            const user = await userService.register(data);
            setUser(user);
            toast.success('Registro exitoso');
        } catch (err) {
            toast.error(err.response.data);
        }
    };
        
    const logout = () => {
        userService.logout();
        setUser(null);
        toast.success('Sesión cerrada correctamente');
    };

    return (
        <AuthContext.Provider value = {{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => useContext(AuthContext);