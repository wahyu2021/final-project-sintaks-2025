import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function AppLayout() {
    return (
        <>
            <Navbar />
            <main className="bg-gradient-to-b from-amber-50 to-orange-100" >
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default AppLayout;
