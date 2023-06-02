import { NextPage } from "next";
import CardBus from "@/components/InfoRaise/CardBus";
import Table from "@/components/InfoRaise/Table";
import { GetStaticProps } from "next";
import Link from "next/link";
import styles from "../../../styles/InfoRaise/InfoRaise.module.css";
import { Button, Loading, Spacer } from "@nextui-org/react";
import type { IDataRaise } from "@/components/Table_Flights/data/data";
import { useState } from "react";
import StopModal from "@/components/InfoRaise/StopModal";
import FligrModal from "@/components/Table_Flights/FligrModal";
import DeleteButton from "@/components/Table_Flights/DeleteButton";

type IProps = {
    raise: IDataRaise | undefined;
};

const RaisePage: NextPage<IProps> = ({ raise }) => {
    const [dataRaise, setDataRaise] = useState(raise)
    const [showModal, setShowModal] = useState(false);
    const [targetEditingStopID, setTargetEditingStopID] = useState<string | undefined>()

    const [activeRedaction, setActiveRedaction] = useState(false)


    const switchActiveRedaction = () => { setActiveRedaction((prevState) => !prevState) }
    const raiseChange = (data: IDataRaise, editing = true) => { editing && setDataRaise({ ...data }) }

    const handleChancheModal = (clear: boolean) => {
        setShowModal((pre) => !pre)
        clear && setTargetEditingStopID(undefined)

    }
    const updateRaiseFun = (updatedRaise: IDataRaise) => {
        setDataRaise(updatedRaise);
        setTargetEditingStopID(undefined)
    }

    const editStopActivator = (id: string) => {
        setTargetEditingStopID(id);
        handleChancheModal(false)
    }


    if (!dataRaise) {
        return <div>Данні готуюуться</div>;
    }

    return (
        <div className={styles.container}>
            <Spacer y={2} />

            <div className={styles.box_info_raise}>
                <CardBus raise={dataRaise} />
                <Table funEditingStop={editStopActivator} setRaise={updateRaiseFun} raise={dataRaise} />
            </div>

            <Spacer y={2} />
            <Link href="/" className={styles.button}>
                назад
            </Link>
            <div className={styles.button} style={{ backgroundColor: "#F5A524", margin: "10px auto", cursor: "pointer" }} onClick={() => handleChancheModal(true)}> Додати зупинку</div>

            {showModal ?
                <StopModal active={showModal} switchFun={handleChancheModal} raise={dataRaise} id={targetEditingStopID} setRaise={updateRaiseFun} />
                : null
            }
        </div>
    );
};

export default RaisePage;

export const getStaticPaths = async () => ({
    paths: [],
    fallback: "blocking",
});

export const getStaticProps: GetStaticProps<IProps> = async (context) => {
    try {
        const raiseId = context.params?.id;
        if (!raiseId) throw new Error("Raise ID is missing");

        const res = await fetch(`${process.env.HOST}/api/getRaise?id=${raiseId}`);
        const data = await res.json();

        return { props: { raise: data }, revalidate: 30 };
    } catch (error) {
        console.error("Error fetching raise", error);
        return { props: { raise: null }, revalidate: 10 };
    }
};
