import { Container } from "@nextui-org/react";
import NavBar from "./NavBar/NavBar";
import Footter from "./Footter";

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <Container lg direction="column">
                {children}
            </Container>
            <Footter />
        </>
    );
}

export default Layout;