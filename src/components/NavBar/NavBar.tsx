import Image from 'next/image';
import logoImg from "../../../public/logo.png"
import { Navbar, Button, Text } from "@nextui-org/react";
import { useState } from 'react';
// import Modal_SignUp from './Modal_SignUp';
// import Modal_Regestration from './Modal_Regestration';

import styles from "../../styles/Layaout/Header/NavBar.module.css"

export default function NavBar() {

    // const [VisibleModalSignUp, setVisibleModalSignUp] = useState(false);
    // const openSignUpModal = () => setVisibleModalSignUp(true);
    // const closeSignUpModal = () => setVisibleModalSignUp(false);

    // const [actRegectration, setActRegestration] = useState(false)
    // const openRegestration = () => setActRegestration(true)
    // const closeRegestration = () => setActRegestration(false)

    return (

        // <div className={styles.box}>
            <div className={styles.container}>
                <Image src={logoImg} width={36} height={36} alt="logo" quality={100} />
                <Text css={{ marginLeft: "15px" }} b color="inherit" hideIn="xs" >
                    GeneralBus
                </Text>

            </div>

        // </div>



        // <>
        //     <Navbar isBordered variant="static" >
        //         <Navbar.Brand>
        //         </Navbar.Brand>
        //         <Navbar.Content hideIn="xs" activeColor="secondary" variant="default">
        //             <Image src={logoImg} width={36} height={36} alt="logo" quality={100} />
        //             <Text css={{ marginLeft: "15px" }} b color="inherit" hideIn="xs" >
        //                 GeneralBus
        //             </Text>

        //             <Navbar.Link isActive >
        //                 Головна
        //             </Navbar.Link>
        //             <Navbar.Link >Послуги</Navbar.Link>
        //             <Navbar.Link >Звязок</Navbar.Link>
        //         </Navbar.Content>
        //         <Navbar.Content>
        //             ч

        //             <Navbar.Link color="inherit" onClick={openSignUpModal}>
        //                 Увійти
        //             </Navbar.Link>
        //             <Navbar.Item>
        //                 <Button auto flat color="primary" onClick={openRegestration}>
        //                     Реєстрація
        //                 </Button>
        //             </Navbar.Item>
        //         </Navbar.Content>
        //     </Navbar>

        //     {VisibleModalSignUp ? <Modal_SignUp
        //         open={VisibleModalSignUp}
        //         closeFun={closeSignUpModal}
        //     />
        //         : null}

        //     {actRegectration ? <Modal_Regestration
        //         open={actRegectration}
        //         closeFun={closeRegestration}
        //     />
        //         : null}
        // </>
    )
}