import { Navigate } from "react-router-dom";
import { PropsWithChildren } from 'react';
import { useAuth } from '../contexts/auth';

export const ProtectedRoute = ({ children }:PropsWithChildren) => {
    const { user } = useAuth();
    // if(loading) {
    //     return <div>Loading...</div>
    // }

    if (!user) {
        // user is not authenticated
        return <Navigate to="/login" />;
    }
    return children;
};


