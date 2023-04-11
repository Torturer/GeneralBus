import Image from 'next/image';
import logoImg from "@/public/logo.png"
import { Navbar, Button, Text } from "@nextui-org/react";
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Modal_SignUp from './Modal_SignUp';
import Modal_Regestration from './Modal_Regestration';

// const Modal_SignUp = dynamic(() => import(`./Modal_SignUp`))
// const Modal_Regestration = dynamic(() => import(`./Modal_Regestration`))


export default function NavBar() {

    const [VisibleModalSignUp, setVisibleModalSignUp] = useState(false);
    const openSignUpModal = () => setVisibleModalSignUp(true);
    const closeSignUpModal = () => setVisibleModalSignUp(false);

    const [actRegectration, setActRegestration] = useState(false)
    const openRegestration = () => setActRegestration(true)
    const closeRegestration = () => setActRegestration(false)


    return (
        <>
            <Navbar isBordered variant="sticky" shouldHideOnScroll >
                <Navbar.Brand>
                    <Image src={logoImg} width={36} height={36} alt="logo" />
                    <Text css={{ marginLeft: "15px" }} b color="inherit" hideIn="xs" >
                        GeneralBus
                    </Text>
                </Navbar.Brand>
                <Navbar.Content hideIn="xs">
                    <Navbar.Link href="#">Про нас</Navbar.Link>
                    <Navbar.Link href="#">Послуги</Navbar.Link>
                    <Navbar.Link href="#">Звязок</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>

                    <Navbar.Link color="inherit" onClick={openSignUpModal}>
                        Увійти
                    </Navbar.Link>
                    <Navbar.Item>
                        <Button auto flat onClick={openRegestration}>
                            Реєстрація
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>




            {VisibleModalSignUp ? <Modal_SignUp
                open={VisibleModalSignUp}
                closeFun={closeSignUpModal}
            />
                : null}

            {actRegectration ? <Modal_Regestration
                open={actRegectration}
                closeFun={closeRegestration}
            />
                : null}
        </>
    )
}