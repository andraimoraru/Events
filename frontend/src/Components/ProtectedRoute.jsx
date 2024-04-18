import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(UserContext); 

    if (!user || !user.isStaff) { 
        return <Navigate to="/" replace />;  
    }

    return children; 
};
export default ProtectedRoute;