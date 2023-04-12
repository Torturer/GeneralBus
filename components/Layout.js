import { Container } from "@nextui-org/react";
import NavBar from "./NavBar/NavBar";

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <Container lg direction="column">
                {children}
            </Container>
            {/* <Footer /> */}
        </>
    );
}

export default Layout;