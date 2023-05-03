import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

import CardBus from "@/components/InfoRaise/CardBus";
import type { IDataRaise, IListOFStops } from "@/components/Table_Flights/data/data";
// import { dataRaises } from "@/components/Table_Flights/data/data";

import { GetServerSideProps, GetStaticProps } from "next";
import styles from "../../../styles/InfoRaise/InfoRaise.module.css"
import { Button, Spacer } from "@nextui-org/react";
import Table from "@/components/InfoRaise/Table";
import Link from "next/link";
type IProps = {
    raise: IDataRaise
}

const RaisePage: NextPage<IProps> = ({ raise }) => {

    const [targetRaise, setTargetRaise] = useState(raise)

    const route = useRouter()






    return (
        <div className={styles.container}>
            <Spacer y={2} />
            <div className={styles.box_info_raise}>

                <CardBus raise={targetRaise} />
                <Table data={targetRaise.listOfStops} />


            </div>

            <Spacer y={2} />
            <Link href="/" about="back" prefetch={false}>
                <Button
                    className={styles.button}
                >
                    назад
                </Button>
            </Link>

        </div >
    );

}

export default RaisePage




export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(process.env.HOST + `/api/getRaise?id=${context.query.id}`);
    // Parsing the JSON data received from the API

    const data = await res.json();
    return { props: { raise: data } }
}
