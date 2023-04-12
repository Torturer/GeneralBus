import { Button, Spacer } from "@nextui-org/react";
import Select_City from "./Select_City";
import Table from "./Table_Service";
import data from "./data/data"
import { useState } from "react";
import FligrModal from "./FligrModal";

function Table_Fligts(props) {

    const [selectRaises, setSelectRaises] = useState([]);
    const [activeModalFligt, setActiveModalFligt] = useState(false)

    const dataFilterChange = (dataRaise) => {
        const selectDat = data.filter((raise => dataRaise.includes(raise.city)))

        setSelectRaises(selectDat)
    }

    const switchModalFligt = () => setActiveModalFligt(false)

    return (
        <>
            <Select_City
                data={data}
                changeFun={dataFilterChange}
            />
            <Table selectData={selectRaises.length ? selectRaises : data} />
            <Spacer y={1} />
            <Button
                size="sm"
                onPress={() => setActiveModalFligt(true)}
                css={{ margin: "0px auto" }}
            >Додати рейс
            </Button>
            <Spacer y={1} />

            {
                activeModalFligt ? <FligrModal active={activeModalFligt} switch={switchModalFligt}/> : null
            }
        </>
    );
}

export default Table_Fligts;