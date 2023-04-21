import React, {FC} from "react";

import { Button, Container, Grid, Input, Modal, Row, Spacer, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Loader from "../component/Loader";

import styled from "../../styles/FligtTable/FligrModal.module.css"
import { IDataRaise } from "./data/data";

type IFligrModal = {
    switchFun: () => void;
    active: boolean;
    data?: IDataRaise;
}

type IStatus = "default" | "success" | "error" | "primary"

const FligrModal: FC<IFligrModal> = (props): JSX.Element => {


    const defaultStatus:IStatus = "primary"

    const {data, active, switchFun} = props;

    const [showLoader, setShowLoader] = useState(false)
    const [statusLoader, setStatusLoader] = useState<IStatus>("primary")


    const [nameBus, setNameBus] = useState(data && data.busName),
        [urlImg, setUrlImg] = useState(data && data.busImg),
        [numberBus, setNumberBus] = useState(data && data.busName),
        [phoneNumber, setPhoneNumber] = useState(data && data.phone),
        [cityStart, setCityStart] = useState(data && data.phone),
        [cityGoGo, setCityGoGo] = useState(data && data.cityTarget.goGoCity),
        [cityStop, setCityStop] = useState(data && data.cityTarget.stopCity),
        [time, setTime] = useState(data && data.landingTime),
        [date, setDate] = useState(data && data.dataOfLanding),
        [price, setPrice] = useState(data && data.price)

    const [actButtonSend, setActButtonSend] = useState(false)


    const sendData = async () => {
        try {
            setShowLoader(true)
            setTimeout(() => setStatusLoader("success"), 2000)
            setTimeout(() => {
                setShowLoader(false);
                setStatusLoader("primary");
                switchFun();
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
                fullScreen
                closeButton
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                blur
                open={active}
                onClose={switchFun}
                className={styled.modal_fligt}
            >
                <Modal.Header>
                    {data ?
                        <Text id="modal-title" size={18}>Редагування рейсу</Text>
                        :
                        <Text id="modal-title" size={18}>Додавання рейсу</Text>
                    }
                </Modal.Header>
                <Modal.Body>
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
                                    onChange={(e) => setPrice(parseInt(e.target.value))}
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
                        <Spacer y={1} />
                        <Row gap={3} justify="space-evenly" css={{ marginLeft: "0px" }} >
                            <Button auto flat color="error" onPress={switchFun}>
                                Відміна
                            </Button>
                            <Button auto onPress={sendData} disabled={actButtonSend} >
                                {nameBus ? "Редагувати" : "Додати"}
                            </Button>
                        </Row>
                        <Spacer y={3} />
                    </Container>
                </Modal.Body>
                <Modal.Footer />
            </Modal>
        } </>
    );
}

export default FligrModal;