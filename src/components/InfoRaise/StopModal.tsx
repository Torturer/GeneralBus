import { FC } from "react"
import { IDataRaise, IListOFStops } from "../Table_Flights/data/data";
import { useEffect, useState } from "react";
import { Button, Container, Grid, Input, Loading, Modal, Row, Spacer, Text } from "@nextui-org/react";

import styled from "../../styles/FligtTable/FligrModal.module.css"
import { nanoid } from "nanoid";


type IFligrModal = {
    setRaise: (updatedRaise: IDataRaise) => void
    switchFun: (clear: boolean) => void;
    active: boolean;
    raise: IDataRaise;
    id?: string
}

type IStatus = "default" | "success" | "error" | "primary" | "currentColor"

const StopModal: FC<IFligrModal> = (props): JSX.Element => {


    const filterFun = (id: string) => raise.listOfStops.find((value) => value.id === id);
    const confirmedStops = () => {


        let newArr = raise.listOfStops ?? [];
        if (targetStop) newArr = raise.listOfStops.filter((value) => value.id !== targetStop.id)
        newArr.push({
            id: id ?? nanoid(20),
            nameStop: adress,
            map: mapUrl,
            time,
            date
        })

        return newArr


    }





    const { raise, active, switchFun, setRaise, id } = props;

    const [targetStop, setTargetStop] = useState<IListOFStops | undefined>(id ? filterFun(id) : undefined)
    const [showLoader, setShowLoader] = useState(false)
    const [statusLoader, setStatusLoader] = useState<IStatus>("currentColor")
    const [actButtonSend, setActButtonSend] = useState(false)
    const [adress, setAdress] = useState(targetStop?.nameStop ?? ''),
        [mapUrl, setMapUrl] = useState(targetStop?.map ?? ''),
        [time, setTime] = useState(targetStop?.time ?? ''),
        [date, setDate] = useState(targetStop?.date ?? '')


    const sendData = async () => {
        try {
            let api = `/api/updateRaise?id=${raise._id}`
            let url = process.env.NEXT_PUBLIC_API_URL + api
            let newRaiseInfo = {
                ...raise,
                listOfStops: confirmedStops()
            }
            setShowLoader(true)

            let respons = await fetch(url, {
                method: "POST",
                body: JSON.stringify(newRaiseInfo),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
            });

            let result = await respons.json()

            setStatusLoader("success")
            setTimeout(() => {
                setShowLoader(false);
                setStatusLoader("primary");
                switchFun(true);
                setRaise(newRaiseInfo)
            }, 750)

        } catch (error) {
            setStatusLoader("error")
            setTimeout(() => setShowLoader(false), 750)
            console.log(error)
        }
    }



    useEffect(() => {
        if (adress && date && time && mapUrl) {
            setActButtonSend(false)
        } else { setActButtonSend(true) }

    }, [adress, date, time, mapUrl])



    return (<>

        <Modal
            fullScreen
            closeButton
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            blur
            open={active}
            onClose={() => switchFun(true)}
            className={styled.modal_fligt}
        >
            <Modal.Header>
                {targetStop ?
                    <Text id="modal-title" size={18}>Редагування зупинки</Text>
                    :
                    <Text id="modal-title" size={18}>Додавання зупинки</Text>
                }
            </Modal.Header>
            <Modal.Body>
                <Container sm alignContent="space-around" justify="center">
                    <Grid.Container gap={1} justify="center">
                        <Grid>
                            <Input
                                placeholder="Глушко 13б Одеса"
                                label="Адреса"
                                type="text"
                                width="290px"
                                value={adress}
                                onChange={(e) => setAdress(e.target.value)}
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
                        <Grid>
                            <Input
                                placeholder="https://goo.gl/maps/Bqnthj5m9AR7sgeY6"
                                label="Посилання на GoogleMaps"
                                type="text"
                                width="290px"
                                value={mapUrl}
                                onChange={(e) => setMapUrl(e.target.value)}
                            />
                        </Grid>

                    </Grid.Container>
                    <Spacer y={1} />
                    <Row gap={3} justify="space-evenly" css={{ marginLeft: "0px" }} >
                        <Button auto flat color="error" onPress={() => switchFun(true)}>
                            Відміна
                        </Button>
                        <Button auto onPress={sendData} disabled={actButtonSend} color={statusLoader === "success" ? "success" : statusLoader === "error" ? "error" : "default"}>
                            {showLoader ? statusLoader === "success" ? "Успіх" : <Loading color={statusLoader} size="sm" /> : targetStop ? "Редагувати" : "Додати"}
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

export default StopModal;