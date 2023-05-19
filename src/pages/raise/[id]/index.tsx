import { NextPage } from "next";
import CardBus from "@/components/InfoRaise/CardBus";
import Table from "@/components/InfoRaise/Table";
import { GetStaticProps } from "next";
import Link from "next/link";
import styles from "../../../styles/InfoRaise/InfoRaise.module.css";
import { Button, Spacer } from "@nextui-org/react";
import type { IDataRaise } from "@/components/Table_Flights/data/data";

type IProps = {
    raise: IDataRaise;
};

const RaisePage: NextPage<IProps> = ({ raise }) => {
    if (!raise) {
        return <div>Данні готуюуться</div>;
    }

    return (
        <div className={styles.container}>
            <Spacer y={2} />

            <div className={styles.box_info_raise}>
                <CardBus raise={raise} />
                <Table data={raise.listOfStops} />
            </div>

            <Spacer y={2} />
            <Link href="/" className={styles.button}>
                назад
            </Link>
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
