import { useState } from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import Layout from './components/Layout';
import PageNotFound from './components/PageNotFound';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Editor from './pages/Editor';
import Lounge from './pages/Lounge';
import LinkPage from './pages/LinkPage';
import Unauthorized from './pages/Unauthorized';
import RequireAuth from './components/RequireAuth';
import { createBrowserRouter, createRoutesFromChildren, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromChildren(
    <Route path='/' element={<Layout />}>
        <Route index element={<LinkPage />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='unauthorized' element={<Unauthorized />} />

        {/* Protected routes */}
        <Route element={<RequireAuth allowedRoles={['admin', 'editor', 'user']} />}>
            <Route path='home' element={<Home />} />
            <Route path='lounge' element={<Lounge />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={['admin']} />}>
            <Route path='admin' element={<Admin />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={['editor']} />}>
            <Route path='editor' element={<Editor />} />
        </Route>

        {/* Catch all routes */}
        <Route path='*' element={<PageNotFound />} />
    </Route>
))

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App;
