import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import HomePage from "./pages/HomePage/HomePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function AppRouter() {
    return (
        <Router>
            <Routes>
                {/* Halaman Beranda (Home Page) */}
                <Route index element={<HomePage />} />
                <Route path="/products" element={<ProductPage />} />
                {/* Halaman Tentang Kami */}
                <Route path="/about" element={<AboutUsPage />} />
                {/* Halaman Kontak */}
                <Route path="/contact" element={<ContactPage />} />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
