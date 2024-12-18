
import { Outlet } from 'react-router';
import Navbar from './../components/Navbar';

const AuthPage = () => {
    return (
        <div>
            <nav className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </nav>
            
            <Outlet></Outlet>
        </div>
    );
};

export default AuthPage;