import { Button, Checkbox, Input, Loading, Modal, Row, Text } from "@nextui-org/react";
import { Mail } from "../component/icon/Mail";
import { Password } from "../component/icon/Password";
import { useState } from "react";
import Loader from "../component/Loader";

const FligrModal = (props) => {

    const [showLoader, setShowLoader] = useState(false)
    const [statusLoader, setStatusLoader] = useState("primary")



    const sendData = async () => {
        try {
            setShowLoader(true)
            setTimeout(() => setStatusLoader("success"), 2000)
            setTimeout(() => {
                setShowLoader(false)
                setStatusLoader("primary")
                props.switch()
            }, 4000)

        } catch (error) {
            setStatusLoader("error")
            setTimeout(() => setShowLoader(false), 2000)
            console.log(error)
        }
    }






    return (<>

        {showLoader ?
            <Loader status={statusLoader} />
            :
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={props.active}
                onClose={props.switch}
            >
                <Modal.Header>
                    {props.data ?
                        <Text id="modal-title" size={18}>Редагування рейсу</Text>
                        :
                        <Text id="modal-title" size={18}>Додавання рейсу</Text>
                    }
                </Modal.Header>
                <Modal.Body>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Email"
                        contentLeft={<Mail fill="currentColor" />}
                    />
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Password"
                        contentLeft={<Password fill="currentColor" />}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={props.switch}>
                        Відміна
                    </Button>
                    <Button auto onPress={sendData} >
                        Додати
                    </Button>
                </Modal.Footer>
            </Modal>
        } </>
    );
}

export default FligrModal;