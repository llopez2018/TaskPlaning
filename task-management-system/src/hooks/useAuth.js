import { useState, useEffect } from 'react';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Logic to check if user is authenticated
    }, []);

    return isAuthenticated;
};

export default useAuth;
