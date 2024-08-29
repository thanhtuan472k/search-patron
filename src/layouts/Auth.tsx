
import { Navigate } from "react-router-dom";
import { PropsWithChildren } from 'react';
import { useAuth } from '../contexts/auth';

export const AuthRoute = ({ children }: PropsWithChildren) => {
    const { user, loading } = useAuth();

    // if(loading) {
    //     return <div>Loading...</div>
    // }

    if (user) {
        return <Navigate to="/" />;
    }
    return children;
};
