import { FC, PropsWithChildren } from "react";
import Head from "next/head";

import { Container } from "@nextui-org/react";
import NavBar from "./NavBar/NavBar";
import Footter from "./Footter";


import styled from "../styles/Layaout/Layout.module.css"


const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <>
            <Head>
                <title>GeneralBus</title>
            </Head>
            <div className={styled.container_root}>
                <NavBar />
                <Container lg direction="column" className={styled.container_root_main}>
                    {children}
                </Container>
                <Footter />

            </div>
        </>

    );
}

export default Layout;