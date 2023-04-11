import { Container } from "@nextui-org/react";
import NavBar from "../NavBar";
import Table_Fligts from "../Table_Flights/Table_Fligts";

const Home = (props) => {
    return (
        <>
            <NavBar />

            <Container lg>
                <Table_Fligts />


             
            </Container>

            {/* <iframe style={{ width: "100%", height: "600px", marginTop: "50px" }} class="contact-map" src="https://maps.google.com/maps?q=%D0%9E%D0%B4%D0%B5%D1%81%D0%B0,%20%D0%90%D0%B4%D0%BC%D1%96%D1%80%D0%B0%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80.,%203&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe> */}


            {/* <Footer /> */}
        </>
    );
}

export default Home;