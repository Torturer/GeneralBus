import { Col, Row, Spacer } from "@nextui-org/react";
import styles from "./Footter.module.css"
import Link from "next/link";
import Image from "next/image";
import { FaFacebookSquare,FaInstagram, FaTelegram, FaViber } from "react-icons/fa";


const Footter = (props) => {
    const soc = {
        instagram: "https://instagram",
        facebook: "https://facebook",
        telegram: "https://telegram",
        viber: "https://viber"
    }

    console.log(FaFacebookSquare)

    return (
        <footer className={styles.footter_box}>

            <Col css={{flexDirection: "column", alignItems: "center", display: "flex"}}>
                <a href="tel:+380680980077">+380680980077</a>
                <a href="tel:+380680980077">+380680980077</a>
            </Col>
            <Spacer y={1}/>
            <Row css={{display: "flex", justifyContent: "center"}}>

                <Link className={styles.item_soc} color="inherit" href=""><FaFacebookSquare size={25} color="#1877f2"/></Link>
                <Link className={styles.item_soc} color="inherit" href=""><FaInstagram size={25} color="#c13584"/></Link>
                <Link className={styles.item_soc} color="inherit" href=""><FaTelegram size={25} color="#0088cc"/></Link>
                <Link className={styles.item_soc} color="inherit" href=""><FaViber size={25} color="#7360f2"/></Link>



            </Row>

        </footer>
    );
}

export default Footter;