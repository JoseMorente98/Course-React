import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';
import { NotPageFound } from './NotPageFound';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <NavBar />

                <div className='container'>
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="about" element={<AboutScreen />} />
                        <Route path="login" element={<LoginScreen />} />
                        <Route path="*" element={<NotPageFound />} />
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    )
}
