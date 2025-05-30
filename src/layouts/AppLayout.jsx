import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ScrollToTopButton from "../components/common/ScrollTopButton";

function AppLayout() {
    return (
        <>
            <Navbar />
            <main className="bg-gradient-to-b from-amber-50 to-orange-100" >
                <Outlet />
                <ScrollToTopButton />
            </main>
            <Footer />
        </>
    );
}

export default AppLayout;
