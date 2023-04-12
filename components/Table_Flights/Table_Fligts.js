import { Button, Spacer } from "@nextui-org/react";
import Select_City from "./Select_City";
import Table from "./Table_Service";
import data from "./data/data"
import { useState } from "react";
import FligrModal from "./FligrModal";

function Table_Fligts(props) {

    const [selectRaises, setSelectRaises] = useState([]);
    const [activeModalFligt, setActiveModalFligt] = useState(false)
    const [activeRedaction, setActiveRedaction] = useState(false)


    const [dataPushToForm, setDataPushToForm] = useState()

    const dataFilterChange = (dataRaise) => {
        const selectDat = data.filter((raise => dataRaise.includes(raise.city)))

        setSelectRaises(selectDat)
    }

    const switchActiveRedaction = () => setActiveRedaction(false)
    const switchModalFligt = () => setActiveModalFligt(false)


    const pushToForm = async (id) => {
        const x = data.filter((raise) => raise._id === id);
        setDataPushToForm(x[0])
        setActiveRedaction(true)
        console.log(x[0])
    }

    return (
        <>
            <Select_City
                data={data}
                changeFun={dataFilterChange}
            />
            <Table selectData={selectRaises.length ? selectRaises : data} pushToForm={pushToForm} />
            <Spacer y={1} />
            <Button
                size="sm"
                onPress={() => setActiveModalFligt(true)}
                css={{ margin: "0px auto" }}
            >Додати рейс
            </Button>
            <Spacer y={1} />

            {
                activeModalFligt ?
                    <FligrModal
                        active={activeModalFligt}
                        switch={switchModalFligt}
                        fullScreen={true}
                    /> : null
            }
            {
                activeRedaction ?
                    <FligrModal
                        switch={switchActiveRedaction}
                        active={activeRedaction}
                        nameBus={dataPushToForm.busName}
                        urlImg={dataPushToForm.busImg}
                        numberBus={dataPushToForm.busNumber}
                        phoneNumber={dataPushToForm.phone}
                        cityStart={dataPushToForm.city}
                        cityGoGo={dataPushToForm.cityTarget.goGoCity}
                        cityStop={dataPushToForm.cityTarget.stopCity}
                        time={dataPushToForm.landingTime}
                        date={dataPushToForm.dataOfLanding}
                        price={dataPushToForm.price}

                    /> : null
            }
        </>
        // city: "Одеса",
        // busNumber: "BH7080BI",
        // busName: "Toyota",
        // busImg: "https://sc04.alicdn.com/kf/H706a0317bd284863bc4f36b4417eb8eea.jpg",
        // price: 1800,
        // phone: "+380984323434",
        // map: {},
        // landingTime: "8:00",
        // dataOfLanding: "13 Жовтня",
        // status: "active",
        // cityTrget: ["Кишинів", "Бухарест"],


        // [urlImg, setUrlImg] = useState(props.urlImg),
        // [numberBus, setNumberBus] = useState(props.numberBus),
        // [phoneNumber, setPhoneNumber] = useState(props.phoneNumber),
        // [cityStart, setCityStart] = useState(props.cityStart),
        // [cityGoGo, setCityGoGo] = useState(props.cityGoGo),
        // [cityStop, setCityStop] = useState(props.cityStop),
        // [time, setTime] = useState(props.time),
        // [date, setDate] = useState(props.date)

    );
}

export default Table_Fligts;