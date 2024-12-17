import React from 'react';
import LoginPage from '../components/LoginPage';
import { Outlet } from 'react-router';

const AuthPage = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthPage;