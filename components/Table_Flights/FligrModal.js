import { Button, Container, Grid, Input, Modal, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Loader from "../component/Loader";
import styled from "./FligrModal.module.css"

const FligrModal = (props) => {

    const [showLoader, setShowLoader] = useState(false)
    const [statusLoader, setStatusLoader] = useState("primary")


    const [nameBus, setNameBus] = useState(props.nameBus),
        [urlImg, setUrlImg] = useState(props.urlImg),
        [numberBus, setNumberBus] = useState(props.numberBus),
        [phoneNumber, setPhoneNumber] = useState(props.phoneNumber),
        [cityStart, setCityStart] = useState(props.cityStart),
        [cityGoGo, setCityGoGo] = useState(props.cityGoGo),
        [cityStop, setCityStop] = useState(props.cityStop),
        [time, setTime] = useState(props.time),
        [date, setDate] = useState(props.date),
        [price, setPrice] = useState(props.price)

    const [actButtonSend, setActButtonSend] = useState(false)


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

    useEffect(() => {
        if (price && date && time && cityStop && cityGoGo && phoneNumber && numberBus && urlImg && nameBus) {
            setActButtonSend(false)
        } else { setActButtonSend(true) }

    }, [price, date, time, cityStop, cityGoGo, cityStart, phoneNumber, numberBus, urlImg, nameBus])





    return (<>

        {showLoader ?
            <Loader status={statusLoader} />
            :
            <Modal
                closeButton
                blur
                fullScreen
                justify="center"
                aria-labelledby="modal-title"
                open={props.active}
                onClose={props.switch}
                className={styled.modal_fligt}
            >
                <Modal.Header>
                    {props.data ?
                        <Text id="modal-title" size={18}>Редагування рейсу</Text>
                        :
                        <Text id="modal-title" size={18}>Додавання рейсу</Text>
                    }
                </Modal.Header>
                <Modal.Body justify="center">
                    <Container sm alignContent="space-around" justify="center">
                        <Grid.Container gap={1} justify="center">
                            <Grid>
                                <Input
                                    placeholder="Мерседес"
                                    label="Назва автобусу"
                                    type="text"
                                    width="290px"
                                    value={nameBus}
                                    onChange={(e) => setNameBus(e.target.value)}
                                />
                            </Grid>
                            <Grid>
                                <Input
                                    placeholder="https:/url"
                                    label="Посилання на картинку"
                                    type="text"
                                    width="290px"
                                    value={urlImg}
                                    onChange={(e) => setUrlImg(e.target.value)}
                                />
                            </Grid>

                            <Grid>
                                <Input
                                    placeholder="BH0007HK"
                                    label="Номер автобусу"
                                    type="text"
                                    width="290px"
                                    value={numberBus}
                                    onChange={(e) => setNumberBus(e.target.value)}
                                />
                            </Grid>
                            <Grid>
                                <Input
                                    placeholder="+380808000090"
                                    label="Номер телефону"
                                    type="text"
                                    width="290px"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </Grid>
                            <Grid>
                                <Input
                                    placeholder="Київ"
                                    label="Місто відправлення"
                                    type="text"
                                    width="290px"
                                    value={cityStart}
                                    onChange={(e) => setCityStart(e.target.value)}
                                />
                            </Grid>
                            <Grid>
                                <Input
                                    placeholder="Варшава"
                                    label="Попутне місто якщо є"
                                    type="text"
                                    width="290px"
                                    value={cityGoGo}
                                    onChange={(e) => setCityGoGo(e.target.value)}
                                />
                            </Grid>
                            <Grid>
                                <Input
                                    placeholder="Берлін"
                                    label="Місто прибуття"
                                    type="text"
                                    width="290px"
                                    value={cityStop}
                                    onChange={(e) => setCityStop(e.target.value)}
                                />
                            </Grid>
                            <Grid>
                                <Input
                                    width="290px"
                                    label="Ціна одного місця"
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </Grid>
                            <Grid>
                                <Input
                                    width="290px"
                                    label="Час"
                                    type="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                />
                            </Grid>
                            <Grid>
                                <Input
                                    width="290px"
                                    label="Дата"
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </Grid>
                        </Grid.Container>
                    </Container>
                </Modal.Body>
                <Modal.Footer className={styled.modal_footter} >
                    <Button auto flat color="error" onPress={props.switch}>
                        Відміна
                    </Button>
                    <Button auto onPress={sendData} disabled={actButtonSend} >
                        Додати
                    </Button>
                </Modal.Footer>
            </Modal>
        } </>
    );
}

export default FligrModal;