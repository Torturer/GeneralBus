import React from "react";
import { Col, Row, Spacer } from "@nextui-org/react";
import { FaFacebookSquare, FaInstagram, FaTelegram, FaViber } from "react-icons/fa";

import styles from "../styles/Layaout/Footer/Footter.module.css"



const Footter = (): JSX.Element => {
    // const soc = {
    //     instagram: "https://instagram",
    //     facebook: "https://facebook",
    //     telegram: "https://telegram",
    //     viber: "https://viber"
    // }

    return (
        <footer className={styles.footter_box}>

            <Col css={{ flexDirection: "column", alignItems: "center", display: "flex" }}>
                <a href="tel:+380680980077">+380680980077</a>
                <a href="tel:+380680980077">+380680980077</a>
            </Col>
            <Spacer y={1} />
            <Row css={{ display: "flex", justifyContent: "center" }}>

                <a className={styles.item_soc} color="inherit" href=""><FaFacebookSquare size={25} color="#1877f2" /></a>
                <a className={styles.item_soc} color="inherit" href=""><FaInstagram size={25} color="#c13584" /></a>
                <a className={styles.item_soc} color="inherit" href=""><FaTelegram size={25} color="#0088cc" /></a>
                <a className={styles.item_soc} color="inherit" href=""><FaViber size={25} color="#7360f2" /></a>



            </Row>

        </footer>
    );
}

export default Footter;