import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from "react-router";
import Layout from './Layout/Layout';
import CartItemPage from './components/CartItemPage';
import App from './App';
import LoginPage from './components/LoginPage';
import AuthPage from './Pages/AuthPage';
import Register from './components/Register';
import ContactUs from './components/ContactUs';
import ContactUsAdmin from './components/ContactUsAdmin';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
          <Route path="cartPage" element={<CartItemPage />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="contactUsAdmin" element={<ContactUsAdmin />} />
          <Route path="*" element={<><h2>error</h2></>} />
        </Route>

      <Route element={<AuthPage />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<Register  />} />
      </Route>
      </Routes>
  </BrowserRouter>
  </StrictMode>,
)
