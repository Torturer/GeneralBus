import { FC, PropsWithChildren } from "react";

import { Container } from "@nextui-org/react";
import NavBar from "./NavBar/NavBar";
import Footter from "./Footter";

import { Inter } from 'next/font/google'

import styled from "../styles/Layaout/Layout.module.css"

const inter = Inter({ subsets: ['cyrillic'] })

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <div className={`${styled.container_root} ${inter.className}`}>
            <NavBar />
            <Container lg direction="column" className={styled.container_root_main}>
                {children}
            </Container>
            <Footter />

        </div>
    );
}

export default Layout;