import { Container } from "@nextui-org/react";
import NavBar from "./NavBar";

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