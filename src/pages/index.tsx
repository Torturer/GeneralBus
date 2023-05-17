import { useState } from "react";
import { Button, Spacer } from "@nextui-org/react";
import Select_City from "@/components/Table_Flights/Select_City";
import Table_Service from "@/components/Table_Flights/Table_Service";
import FligrModal from "@/components/Table_Flights/FligrModal";
import { GetStaticProps, NextPage } from "next";
import { IDataRaise } from "@/components/Table_Flights/data/data";

interface IProps {
    raises: IDataRaise[];
}

const Table_Flights: NextPage<IProps> = ({ raises }) => {
    const [globalData, setGlobalData] = useState(raises)
    const [raisesData, setRaisesData] = useState(raises)
    const [activeModalFlight, setActiveModalFlight] = useState(false); // Activates adding a new flight
    const [activeRedaction, setActiveRedaction] = useState(false); // Activates editing a flight
    const [dataPushToForm, setDataPushToForm] = useState<IDataRaise>();

    const dataFilterChange = (data: IDataRaise[]) => { setRaisesData(data) } // Filter data fun
    const switchActiveRedaction = () => { setActiveRedaction(false) } // Fun deactivate editing
    const switchModalFlight = () => { setActiveModalFlight(false) } // Fun deactivate modal

    // Fun target editing data and activate modal
    const pushToForm = (id: string): void => {
        const foundRaise = raisesData.find((raise) => raise._id === id);
        if (foundRaise) {
            setDataPushToForm(foundRaise);
            setActiveRedaction(true);
        }
    };

    const raiseDelete = (id: string) => { setRaisesData((prev) => prev.filter((targ) => targ._id !== id)) }

    const raiseChange = (result: IDataRaise, edit: boolean) => {

        if (edit) {
            setRaisesData((prev) => [...prev.filter((tar) => tar._id !== result._id), result])
        } else setRaisesData((prev) => [...prev, result])
    }



    if (raises.length) {
        return (
            <>
                <Select_City data={raises} changeFun={dataFilterChange} />
                <Table_Service data={raisesData} pushToForm={pushToForm} setRaise={raiseDelete} />
                {/* <Spacer y={1} />
                <Table_Service data={raisesData} pushToForm={pushToForm} setRaise={raiseDelete} /> */}
                <Spacer y={1} />
                <Button size="sm" onPress={() => setActiveModalFlight(true)} css={{ margin: "0px auto" }} color="warning">
                    Додати рейс
                </Button>
                {activeModalFlight ? (
                    <FligrModal active={activeModalFlight} switchFun={switchModalFlight} setRaise={raiseChange} />
                ) : null}
                {activeRedaction ? (
                    <FligrModal switchFun={switchActiveRedaction} active={activeRedaction} data={dataPushToForm} setRaise={raiseChange} />
                ) : null}
            </>
        );
    } else {
        return <div>Готую данні</div>
    }
};

export default Table_Flights;

export const getStaticProps: GetStaticProps = async () => {

    try {
        const res = await fetch(process.env.HOST + `/api/getRaises`);
        // Parsing the JSON data received from the API
        const data = await res.json();
        return { props: { raises: data }, revalidate: 10 }
    } catch (error) {
        return {
            props: { raises: [] },
            revalidate: 4
            

        }
    }
}

