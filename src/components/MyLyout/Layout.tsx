import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Down from "./components/Down";
import DrawerAppBar from "./components/DrawerAppBar";
import HideAppBar from "./components/HideAppBar";

export default function Layout() {
    return (
        <>  
            <DrawerAppBar>
                <></>
            </DrawerAppBar>
            <Outlet />
            <Down/>
        </>
    );
}
