import Select_City from "./Select_City";
import Table from "./Table_Service";
import data from "./data/data"
import { useState } from "react";

function Table_Fligts(props) {

    const [selectRaises, setSelectRaises] = useState([]);

    const dataFilterChange = (dataRaise) => {
        const selectDat = data.filter((raise => dataRaise.includes(raise.city)))

        setSelectRaises(selectDat)
    }

    return (
        <>
            <Select_City
                data={data}
                changeFun={dataFilterChange}
            />
            <Table selectData={selectRaises.length ? selectRaises : data}/>
        </>
    );
}

export default Table_Fligts;