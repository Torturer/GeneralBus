import React, { FC } from "react";

import { Button, Spacer } from "@nextui-org/react";
import Select_City from "./Select_City";
import Table_Service from "./Table_Service";
import data from "./data/data"
import { useState } from "react";
import FligrModal from "./FligrModal";

const Table_Fligts: FC = (): JSX.Element => {

    const [selectRaises, setSelectRaises] = useState(data); // List of selected flights
    const [activeModalFligt, setActiveModalFligt] = useState(false) // Activates adding a new flight
    const [activeRedaction, setActiveRedaction] = useState(false) // Activates editing a flight

    const [dataPushToForm, setDataPushToForm] = useState(data[0])

    const dataFilterChange = (dataRaise: [key: string]) => { setSelectRaises(data.filter((raise => dataRaise.includes(raise.city)))) } // Filter data fun
    const switchActiveRedaction = (): void => { setActiveRedaction(false) } // Fun deactivate editing
    const switchModalFligt = (): void => { setActiveModalFligt(false) } // Fun deactivate modal

    // Fun target editing data and activate modal
    const pushToForm = (id: number): void => { 
        setDataPushToForm(data.find((raise) => raise._id === id))
        setActiveRedaction(true)
    }

    return (
        <>
            <Select_City
                data={data}
                changeFun={dataFilterChange}
            />
            <Table_Service selectData={selectRaises.length ? selectRaises : data} pushToForm={pushToForm} />
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
                        switchFun={switchModalFligt}
                    /> : null
            }
            {
                activeRedaction ?
                    <FligrModal
                        switchFun={switchActiveRedaction}
                        active={activeRedaction}
                        data={dataPushToForm}
                    /> : null
            }
        </>
    );
}

export default Table_Fligts;