import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRoute } from './DashboardRoute'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>
                } />
                <Route path="/*" element={
                    <PrivateRoute>
                        <DashboardRoute />
                    </PrivateRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
}
