import { FC, useMemo } from "react"
import { IDataRaise, IRegular } from "./data/data";
import { useEffect, useState } from "react";
import { Button, Checkbox, Container, Grid, Input, Loading, Modal, Row, Spacer, Text, useInput } from "@nextui-org/react";

import styled from "../../styles/FligtTable/FligrModal.module.css"
import SelectWeek from "../component/SelectWeek";
import { AnimatePresence, motion } from "framer-motion";


type IFligrModal = {
    setRaise: (result: IDataRaise, edit: boolean) => void
    switchFun: () => void;
    active: boolean;
    data?: IDataRaise;
}

type IStatus = "default" | "success" | "error" | "primary" | "currentColor"

const FligrModal: FC<IFligrModal> = (props): JSX.Element => {

    const { data, active, switchFun, setRaise } = props;

    const [showLoader, setShowLoader] = useState(false)
    const [statusLoader, setStatusLoader] = useState<IStatus>("currentColor")


    const [nameBus, setNameBus] = useState(data?.busName ?? ""),
        [urlImg, setUrlImg] = useState(data?.busImg ?? ""),
        [numberBus, setNumberBus] = useState(data?.busNumber ?? ""),
        [cityStart, setCityStart] = useState(data?.city ?? ""),
        [cityGoGo, setCityGoGo] = useState(data?.cityTarget.goGoCity ?? ""),
        [cityStop, setCityStop] = useState(data?.cityTarget.stopCity ?? ""),
        [time, setTime] = useState(data?.landingTime ?? ""),
        [date, setDate] = useState(data?.dataOfLanding ?? ""),
        [timeFinish, setTimeFinish] = useState(data?.finishTime ?? ""),
        [dateFinish, setDateFinish] = useState(data?.finishDate ?? ""),
        [price, setPrice] = useState(data?.price ?? ""),
        [isRegular, setIsRegular] = useState(data?.isRegular ?? true),
        [regularData, setRegularData] = useState(data?.regular ?? undefined)

    const [actButtonSend, setActButtonSend] = useState(false)




    const editRegularDataFun = (data: IRegular) => { setRegularData({ ...data }) }




    const sendData = async () => {
        try {
            let api = data ? `/api/updateRaise?id=${data._id}` : `/api/addRaise`
            let url = process.env.NEXT_PUBLIC_API_URL + api
            let raise = {
                busName: nameBus,
                busImg: urlImg,
                busNumber: numberBus,
                city: cityStart,
                cityTarget: {
                    goGoCity: cityGoGo,
                    stopCity: cityStop
                },
                landingTime: time,
                dataOfLanding: date,
                price: price,
                finishDate: dateFinish,
                finishTime: timeFinish,
                isRegular,
                regular: regularData
            } as IDataRaise

            setShowLoader(true)



            let respons = await fetch(url, {
                method: "POST",
                body: JSON.stringify(raise),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
            });

            let result = await respons.json()

            if (!data) {

                const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/getRaise?id=${result.insertedId}`);
                result = await res.json()

                setRaise(result.value, true)
            } else { setRaise(result.value, false)}

            setStatusLoader("success")
            setTimeout(() => {
                setShowLoader(false);
                setStatusLoader("primary");
                switchFun();
                if (data) { setRaise(result.value, true) } else { setRaise(result, false) }

            }, 750)

        } catch (error) {
            setStatusLoader("error")
            setTimeout(() => setShowLoader(false), 750)
            console.log(error)
        }
    }

    useEffect(() => {
        if (cityStart && price && time && timeFinish && cityStop && numberBus && urlImg && nameBus && cityGoGo) {
            if (!isRegular) {
                if (data || dateFinish) {
                    setActButtonSend(false)
                } else { setActButtonSend(true) }
            } else { setActButtonSend(false) }
        } else {
            setActButtonSend(true)
        }

    }, [price, date, dateFinish, timeFinish, isRegular, time, cityStop, cityStart, numberBus, urlImg, nameBus, cityGoGo])



    return (<>

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
                        <div>
                            <Grid>
                                <Input
                                    width="290px"
                                    label="Час відправлення"
                                    type="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                />
                            </Grid>
                            <Grid>
                                <Input
                                    width="290px"
                                    label="Час прибуття"
                                    type="time"
                                    value={timeFinish}
                                    onChange={(e) => setTimeFinish(e.target.value)}
                                />
                            </Grid>





                            {isRegular ?
                                <motion.div
                                    key="motion2"

                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}

                                >
                                    <SelectWeek regular={regularData} changeFun={editRegularDataFun} />
                                </motion.div>
                                :
                                <motion.div

                                    key="motion2"

                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <Grid>
                                        <Input
                                            width="290px"
                                            label="Дата відправлення"
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid>
                                        <Input
                                            width="290px"
                                            label="Дата прибуття"
                                            type="date"
                                            value={dateFinish}
                                            onChange={(e) => setDateFinish(e.target.value)}
                                        />
                                    </Grid>
                                </motion.div>

                            }



                        </div>
                    </Grid.Container>
                    <Spacer />
                    <Checkbox
                        isSelected={isRegular}
                        color="success"
                        onChange={setIsRegular}
                        size="xs"
                        css={{ width: "100%", justifyContent: "center" }}
                    >
                        Це регулярний рейс?
                    </Checkbox>

                    <Spacer y={1} />
                    <Row gap={3} justify="space-evenly" css={{ marginLeft: "0px" }} >
                        <Button auto flat color="error" onPress={switchFun}>
                            Відміна
                        </Button>
                        <Button auto onPress={sendData} disabled={actButtonSend} color={statusLoader === "success" ? "success" : statusLoader === "error" ? "error" : "default"}>
                            {showLoader ? statusLoader === "success" ? "Успіх" : <Loading color={statusLoader} size="sm" /> : data ? "Редагувати" : "Додати"}
                        </Button>
                    </Row>
                    <Spacer y={3} />
                </Container>
            </Modal.Body>
            <Modal.Footer />
        </Modal>
    </>
    );
}

export default FligrModal;