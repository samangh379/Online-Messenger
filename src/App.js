import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </div>
    );
};

export default App;
