import { useState } from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import { createBrowserRouter, createRoutesFromChildren, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromChildren(
    <Route path='/' element={<Layout />}>
        <Route index element={<Login />} />
        <Route path='register' element={<Register />} />
    </Route>
))

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App;
