import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = ({ allowedRoles }) => {
    const { pathname } = useLocation();
    const { auth } = useAuth();

    return (
        allowedRoles.includes(auth?.user?.role)
            ? <Outlet />
            : auth?.user
                ? <Navigate to='/unauthorized' state={{ from: pathname }} replace={true} />
                : <Navigate to='/login' state={{ from: pathname }} replace={true} />
    );
}

export default RequireAuth;