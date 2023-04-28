import { useState } from "react";
import { Button, Spacer } from "@nextui-org/react";
import Select_City from "@/components/Table_Flights/Select_City";
import Table_Service from "@/components/Table_Flights/Table_Service";
import FligrModal from "@/components/Table_Flights/FligrModal";
import { GetStaticProps, NextPage, NextPageContext } from "next";
import { IDataRaise } from "@/components/Table_Flights/data/data";

import API from "@/pages/api/raises"



interface IProps {
    raises: IDataRaise[];
}

const Table_Flights: NextPage<IProps> = ({ raises }) => {
    const [selectRaises, setSelectRaises] = useState(raises); // List of selected flights
    const [activeModalFlight, setActiveModalFlight] = useState(false); // Activates adding a new flight
    const [activeRedaction, setActiveRedaction] = useState(false); // Activates editing a flight
    const [dataPushToForm, setDataPushToForm] = useState<IDataRaise>();

    const dataFilterChange = (target: string[]) => {
        target ? setSelectRaises(raises.filter((raise => target.includes(raise.city)))) : setSelectRaises(raises)
    }; // Filter data fun

    const switchActiveRedaction = (): void => {
        setActiveRedaction(false);
    }; // Fun deactivate editing

    const switchModalFlight = (): void => {
        setActiveModalFlight(false);
    }; // Fun deactivate modal

    // Fun target editing data and activate modal
    const pushToForm = (id: string): void => {
        const foundRaise = raises.find((raise) => raise.id === id);
        if (foundRaise !== undefined) {
            setDataPushToForm(foundRaise);
            setActiveRedaction(true);
        }
    };

    console.log(raises)

    return (
        <>
            <Select_City data={raises} changeFun={dataFilterChange} />
            <Table_Service selectData={selectRaises.length ? selectRaises : raises} pushToForm={pushToForm} />
            <Spacer y={1} />
            <Button size="sm" onPress={() => setActiveModalFlight(true)} css={{ margin: "0px auto" }} color="warning">
                Додати рейс
            </Button>
            {activeModalFlight ? (
                <FligrModal active={activeModalFlight} switchFun={switchModalFlight} />
            ) : null}
            {activeRedaction ? (
                <FligrModal switchFun={switchActiveRedaction} active={activeRedaction} data={dataPushToForm} />
            ) : null}
        </>
    );
};

export default Table_Flights;

Table_Flights.getInitialProps = async (context: NextPageContext) => {

    try {
        // Making an API request to get the data
        const res = await fetch(`http://localhost:3000/api/raises`);
        // Parsing the JSON data received from the API
        const data = await res.json();

        return { raises: JSON.parse(JSON.stringify(data)) };

    } catch (error) {
        console.log(error)
    }

    return {
        raises: undefined
    }

}

// export const getStaticProps: GetStaticProps = async (context) => {

//     try {
//         // Making an API request to get the data
//         const res = await fetch("http://localhost:3000/api/raises");
//         // Parsing the JSON data received from the API
//         const data = await res.json();

//         return {
//             props: {
//                 raises: data,
//             },
//         };
//     } catch (error) {
//         console.error(error);
//         // In case of error, returning an empty array as the raises data
//         return {
//             props: {
//                 raise: [],
//             },
//         };
//     }
// };
