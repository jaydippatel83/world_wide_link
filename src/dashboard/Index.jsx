import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled("div")({
    display: "flex",
    minHeight: "100%",
    overflow: "hidden",
    backgroundColor: "rgb(238,238,238)",
    background:
        "linear-gradient(90deg, rgba(238,238,238,0.7441570378151261) 0%, rgba(193,193,249,0.22314863445378152) 100%)",
});

const MainStyle = styled("div")(({ theme }) => ({
    flexGrow: 1,
    overflow: "auto",
    minHeight: "100%",
    paddingTop: APP_BAR_MOBILE + 8,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up("lg")]: {
        paddingTop: APP_BAR_DESKTOP + 8,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
}));

export default function DashboardLayout() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // let user = localStorage.getItem("address");
        // if (!user) {
        //     window.location.replace("/");
        // }
    }, []);

    return (
        <RootStyle>
            <Navbar onOpenSidebar={() => setOpen(true)} />
            <Sidebar
                isOpenSidebar={open}
                onCloseSidebar={() => setOpen(false)}
            />
            <MainStyle>
                <Outlet />
            </MainStyle>
        </RootStyle>
    );
}
