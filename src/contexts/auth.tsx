import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ILoginBody, IUser} from '../types/user';
import { authApi } from '../apis/auth';



interface IAuthContext {
    user: IUser | null;
    login: (data: ILoginBody) => Promise<void>;
    logout: () => void;
    loading: boolean
}

const AuthContext = createContext<IAuthContext>({
    user: null,
    login: () => new Promise((resolve ) => resolve()),
    logout: () => {},
    loading: true
});

export const AuthProvider = ({ children }: PropsWithChildren)  => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<IUser | null>(null);
    const navigate = useNavigate();

    // call this function when you want to authenticate the user
    const login = async (data: ILoginBody) => {
      
          const response = await authApi.login(data)
          localStorage.setItem("token", response.token)
          await getMe()
          navigate("/"); 
     
    };

    const getMe = async () => {
        setLoading(true);
        const token = localStorage.getItem("token");

        if(!token) {
            setLoading(false);
            setUser(null);
            localStorage.removeItem("token");
            return;
        }


        try {
            const user = await authApi.getMe()
            setUser(user);
        } catch (error) {
            console.log(error)
            setUser(null);
            localStorage.removeItem("token");
        } finally{
            setLoading(false)
        }
    }

    // call this function to sign out logged in user
    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
        navigate("/", { replace: true });
    };

    useEffect(() => {
        getMe();
    }, [])

    
    return <AuthContext.Provider value={{
        user,
        login,
        logout,
        loading
    } }> { children } </AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
