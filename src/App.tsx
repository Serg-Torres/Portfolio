import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import React from 'react';

function App() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default App