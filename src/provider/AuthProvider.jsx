import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)
    console.log('user', user)
    const name = 'mehedi'
    const authInfo = {
        user,
        loading,
        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;