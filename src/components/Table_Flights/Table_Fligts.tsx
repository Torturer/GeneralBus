import { FC, useState } from "react";
import { IDataRaise, dataRaises } from "./data/data";

import { Button, Spacer } from "@nextui-org/react";
import Select_City from "./Select_City";
import Table_Service from "./Table_Service";

import FligrModal from "./FligrModal";


const Table_Fligts: FC = (): JSX.Element => {

    const [selectRaises, setSelectRaises] = useState(dataRaises); // List of selected flights
    const [activeModalFligt, setActiveModalFligt] = useState(false) // Activates adding a new flight
    const [activeRedaction, setActiveRedaction] = useState(false) // Activates editing a flight

    const [dataPushToForm, setDataPushToForm] = useState(dataRaises[0])

    const dataFilterChange = (target: string[]) => { 
        target ? setSelectRaises(dataRaises.filter((raise => target.includes(raise.city)))) : setSelectRaises(dataRaises) 
    } // Filter data fun
    const switchActiveRedaction = (): void => { setActiveRedaction(false) } // Fun deactivate editing
    const switchModalFligt = (): void => { setActiveModalFligt(false) } // Fun deactivate modal

    // Fun target editing data and activate modal
    const pushToForm = (id: number): void => {
        const foundRaise = (dataRaises).find((raise) => raise._id === id);
        if (foundRaise !== undefined) {
            setDataPushToForm(foundRaise);
            setActiveRedaction(true);
        }
    };
    return (
        <>
            <Select_City
                data={dataRaises}
                changeFun={dataFilterChange}
            />
            <Table_Service selectData={selectRaises.length ? selectRaises : dataRaises} pushToForm={pushToForm} />
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

