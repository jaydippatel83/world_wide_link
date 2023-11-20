/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Link as RouterLink, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
    Box,
    Link,
    Drawer
} from "@mui/material";
import sidebarConfig from "../utils/SidebarConfig";
import useResponsive from "../utils/useResponsive";
import Scrollbar from "../utils/Scrollbar";
import Logo from "../utils/Logo";
import Section from "./Sections";
const DRAWER_WIDTH = 280;

const RootStyle = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("lg")]: {
        flexShrink: 0,
        width: DRAWER_WIDTH,
    },
}));


Sidebar.propTypes = {
    isOpenSidebar: PropTypes.bool,
    onCloseSidebar: PropTypes.func,
};

export default function Sidebar({ isOpenSidebar, onCloseSidebar }) {
    const { pathname } = useLocation();

    const isDesktop = useResponsive("up", "lg");

    useEffect(() => {
        if (isOpenSidebar) {
            onCloseSidebar();
        }
    }, [pathname]);

    const renderContent = (
        <Scrollbar
            sx={{
                height: 1,
                "& .simplebar-content": {
                    height: 1,
                    display: "flex",
                    flexDirection: "column",
                },
            }}
        >
            <Box>
                <Logo />
            </Box>

            <Box >
                <Link underline="none" component={RouterLink} to="#">
                </Link>
            </Box>

            <Section navConfig={sidebarConfig} />
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
            </Box>
        </Scrollbar>
    );

    return (
        <RootStyle>
            {!isDesktop && (
                <Drawer
                    open={isOpenSidebar}
                    onClose={onCloseSidebar}
                    PaperProps={{
                        sx: { width: DRAWER_WIDTH },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}

            {isDesktop && (
                <Drawer
                    open
                    variant="persistent"
                    PaperProps={{
                        sx: {
                            width: DRAWER_WIDTH,
                            bgcolor: "background.default",
                            borderRightStyle: "dashed",
                        },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}
        </RootStyle>
    );
}
