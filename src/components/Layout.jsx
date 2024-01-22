import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <main className='min-h-screen w-screen bg-blue-400'>
            <Outlet />
        </main>
    )
}

export default Layout;