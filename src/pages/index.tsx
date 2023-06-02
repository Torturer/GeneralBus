import { useState, useEffect } from "react";
import { Button, Spacer, Text } from "@nextui-org/react";
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
    const [raisesDataRegular, setRaisesDataRegular] = useState(raisesData.filter((value) => value.isRegular))
    const [raisesDataNoRegular, setRaisesDataNoRegular] = useState(raisesData.filter((value) => !value.isRegular))

    const [activeModalFlight, setActiveModalFlight] = useState(false); // Activates adding a new flight
    const [editingRaise, setEditingRaise] = useState(raises[0]);
    const [activeEditingModal, setActiveEditingModal] = useState(false)

    const dataFilterChange = (data: IDataRaise[]) => { setRaisesData([...data]) } // Filter data fun
    const switchModalFlight = () => { setActiveModalFlight(false) } // Fun deactivate modal
    const switchEditingModal = () => { setActiveEditingModal((pre) => !pre) }


    const editFun = (value: IDataRaise) => {
        setActiveEditingModal((pre) => !pre);
        setEditingRaise(value)
    } // Fun target editing data and activate modal

    const raiseDelete = (id: string) => { setGlobalData((prev) => prev.filter((targ) => targ._id !== id)) }

    const raiseChange = (result: IDataRaise, edit: boolean) => {

        if (edit) {
            setGlobalData((prev) => [...prev.filter((tar) => tar._id !== result._id), result])
        } else setGlobalData((prev) => [...prev, result])
    }

    useEffect(() => {
        setRaisesDataRegular(raisesData.filter((value) => value.isRegular))
        setRaisesDataNoRegular(raisesData.filter((value) => !value.isRegular))

    }, [raisesData])


    console.log(raisesDataRegular)


    if (raises.length) {
        return (
            <>
                <Select_City data={globalData} changeFun={dataFilterChange} />

                <Spacer />

                {raisesData.length ?
                    <>
                        {raisesDataNoRegular.length ?
                            <Table_Service
                                data={raisesDataNoRegular}
                                isRegular={false}
                                label="Гарячі рейси"
                                targetAction={editFun}
                                raiseDeletFun={raiseDelete} />
                            :
                            null}
                        <Spacer y={1} />

                        {raisesDataRegular.length ?
                            <Table_Service
                                data={raisesDataRegular}
                                isRegular={true}
                                label="Регулярні рейси"
                                targetAction={editFun}
                                raiseDeletFun={raiseDelete} />
                            :
                            null}

                    </>
                    :
                    <div
                        style={{
                            height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flex: "1 1 auto"
                        }}>
                        <Text>Нажаль інформацію по обранним рейсам не знайденно</Text>
                    </div>
                }
                <Spacer y={1} />
                <Button size="sm" onPress={() => setActiveModalFlight(true)} css={{ margin: "0px auto" }} color="warning">
                    Додати рейс
                </Button>
                {activeModalFlight ? (
                    <FligrModal active={activeModalFlight} switchFun={switchModalFlight} setRaise={raiseChange} />
                ) : null}

                {activeEditingModal ? (
                    <FligrModal switchFun={switchEditingModal} active={activeEditingModal} data={editingRaise} setRaise={raiseChange} />
                ) : null}
            </>
        );
    } else {
        return (
            <div
                style={{
                    height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flex: "1 1 auto"
                }}>
                <Text>Упс.. Щось пішло не так :(</Text>
            </div>)
    }
};

export default Table_Flights;

export const getStaticProps: GetStaticProps = async () => {

    try {
        const res = await fetch(process.env.HOST + `/api/getRaises`);
        // Parsing the JSON data received from the API
        const data = await res.json();
        return { props: { raises: data }, revalidate: 3 }
    } catch (error) {
        return {
            props: { raises: [] },
            revalidate: 4


        }
    }
}

