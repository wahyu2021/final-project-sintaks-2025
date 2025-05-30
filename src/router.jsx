import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LogoDescPage from "./pages/AboutUsPage/LogoDescPage.jsX";
import PerawatanPage from "./pages/PerawatanPage/PerawatanPage";
import FAQPage from "./pages/FAQ/FAQPage";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/products" element={<ProductPage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/about/logo-desc" element={<LogoDescPage />} />
                    <Route path="/cleaning" element={<PerawatanPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRouter;
