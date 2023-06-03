import { Button, Input, Modal, Text } from '@nextui-org/react';
import { FC } from 'react';
import { useRouter } from 'next/router';
import { MdPassword } from 'react-icons/md';
import { BiLogIn } from 'react-icons/bi';

const Modal_SignUp: FC = () => {

    const route = useRouter()

    return (
        <Modal
            closeButton
            blur
            aria-labelledby="modal-title"
            open={true}
        >
            <Modal.Header>
                <Text id="modal-title" size={18}>
                    Авторизація в системі
                    <Text b size={18} css={{ marginLeft: "5px" }}>
                        GeneralBus
                    </Text>
                </Text>
            </Modal.Header>
            <Modal.Body>
                <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Логін"
                    contentLeft={<BiLogIn fill="currentColor" />}
                />
                <Input.Password
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Пароль"
                    contentLeft={<MdPassword fill="currentColor" />}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button auto flat color="error" onPress={() => route.push("/")}>
                    На головну
                </Button>
                <Button auto >
                    Увійти
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Modal_SignUp;