import Image from 'next/image';
import logoImg from "@/public/logo.png"
import { Navbar, Button, Text } from "@nextui-org/react";
import { useState } from 'react';
import Modal_SignUp from './Modal_SignUp';
import Modal_Regestration from './Modal_Regestration';
import Link from 'next/link';

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
                    <Image src={logoImg} width={36} height={36} alt="logo" quality={100} />
                    <Text css={{ marginLeft: "15px" }} b color="inherit" hideIn="xs" >
                        GeneralBus
                    </Text>
                </Navbar.Brand>
                <Navbar.Content hideIn="xs" activeColor="secondary" variant="default">
                    <Navbar.Link isActive >
                        Головна
                    </Navbar.Link>
                    <Navbar.Link >Послуги</Navbar.Link>
                    <Navbar.Link >Звязок</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>

                    <Navbar.Link color="inherit" onClick={openSignUpModal}>
                        Увійти
                    </Navbar.Link>
                    <Navbar.Item>
                        <Button auto flat color="primary" onClick={openRegestration}>
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