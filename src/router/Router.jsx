// route.jsx

import { Routes, Route } from "react-router";

import App from './../App';
import CartItemPage from './../components/CartItemPage';
import Layout from './../Layout/Layout';
import ContactUs from './../components/ContactUs';
import ContactUsAdmin from './../components/ContactUsAdmin';
import AuthPage from './../Pages/AuthPage';
import LoginPage from "../components/LoginPage";
import Register from './../components/Register';
import AddVegetableProduct from "../componentsAdmin/AddVegetableProduct";
import Products from './../componentsAdmin/Products';
import AdminDashboard from './../componentsAdmin/AdminDashboard';
import AboutUs from "../components/AboutUs";
import ComboSelector from "../components/ComboSelector";
import UserProfilePage from "../components/UserProfilePage";



const Router = () => {
  return (
    <Routes>
      {/* Main layout with nested routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="cartPage" element={<CartItemPage />} />
        <Route path="contactUs" element={<ContactUs />} /> 
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="userProfilePage" element={<UserProfilePage />} />
        <Route path="comboSelector " element={<ComboSelector />} />
        <Route path="*" element={<h2>Error: Page Not Found</h2>} />
        
      </Route>

      <Route  element={<AuthPage />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<Register />} />
        <Route path="contactUsAdmin" element={<ContactUsAdmin />} />
        <Route path="addVegetableProduct" element={<AddVegetableProduct />} />
        <Route path="products" element={<Products />} />
        <Route path="adminDashboard" element={<AdminDashboard />} />
        
      </Route>
    </Routes>
  );
};

export default Router;
