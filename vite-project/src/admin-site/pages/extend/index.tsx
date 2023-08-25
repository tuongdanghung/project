import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../../components";
const ExtendAdmin = () => {
    return (
        <div className="flex w-full">
            <div className="w-1/6">
                <Nav />
            </div>
            <div className="w-5/6">
                <Outlet />
            </div>
        </div>
    );
};

export default ExtendAdmin;
