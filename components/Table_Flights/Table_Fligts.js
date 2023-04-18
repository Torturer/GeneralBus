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
                color="warning"
            >Додати рейс
            </Button>

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
    );
}

export default Table_Fligts;