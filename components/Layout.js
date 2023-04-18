import { Container } from "@nextui-org/react";
import NavBar from "./NavBar/NavBar";
import Footter from "./Footter";
import styled from "./Layout.module.css"

const Layout = ({ children }) => {
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