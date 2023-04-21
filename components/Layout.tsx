import { Container } from "@nextui-org/react";
import NavBar from "./NavBar/NavBar";
import Footter from "./Footter";
import styled from "../styles/Layout.module.css"
import React from "react";

const Layout = ({ children }) :JSX.Element => {
    return (
        <div className={styled.container_root}>
            <NavBar />
            <Container lg direction="column" className={styled.container_root_main}>
                {children}
            </Container>
            <Footter />

        </div>
    );
}

export default Layout;