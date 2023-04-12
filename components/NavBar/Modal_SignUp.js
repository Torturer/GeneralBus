import { Button, Input, Modal, Row, Checkbox, Text} from '@nextui-org/react';
import { Mail } from '../component/icon/Mail';
import { Password } from '../component/icon/Password';

function Modal_SignUp(props) {

    const {open , closeFun} = props
    return (
        <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={open}
                onClose={closeFun}
                
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Ласкаво просимо до
                        <Text b size={18} css={{marginLeft: "5px"}}>
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
                        placeholder="Пошта"
                        contentLeft={<Mail fill="currentColor" />}
                    />
                    <Input.Password
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Пароль"
                        contentLeft={<Password fill="currentColor" />}
                    />
                    <Row justify="space-between">
                        <Checkbox>
                            <Text size={14}>Запамятай мене</Text>
                        </Checkbox>
                        <Text size={14}>Забув пароль?</Text>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={closeFun}>
                        Закрити
                    </Button>
                    <Button auto onPress={closeFun}>
                        Увійти
                    </Button>
                </Modal.Footer>
            </Modal>
    );
}

export default Modal_SignUp;