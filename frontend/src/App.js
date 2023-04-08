import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";

import HomePage from "./routes/homePage";

import RouteTransition from "./utils/routeTransition";
import hideLoader from "./utils/hideLoader";
import NavBar from "./components/navBar";

export default function App() {
    useEffect(hideLoader, []);

    const documentHeight = () => {
        const doc = document.documentElement;
        doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
    }
    documentHeight()

    return (
        <>
            <NavBar />
            <Routes>
                <Route element={<RouteTransition />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </>
    );
}