
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from './pages/login';
import PasswordReset from './pages/passwordReset';
import RegisterForm from './pages/register';


const AppRoutes = () => {

   return (
      <BrowserRouter>

         <Routes>
            <Route path='/register' element={<RegisterForm />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/password-reset/:id/:token' element={<PasswordReset />} />
            <Route path='*' element={<RegisterForm />} />

         </Routes>
      </BrowserRouter>
   )
}


export default AppRoutes
