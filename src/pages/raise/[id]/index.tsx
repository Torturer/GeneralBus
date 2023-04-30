import CardBus from "@/components/InfoRaise/CardBus";
import type { IDataRaise } from "@/components/Table_Flights/data/data";
// import { dataRaises } from "@/components/Table_Flights/data/data";

import { GetServerSideProps, GetStaticProps } from "next";

import { NextPage } from "next";
import { useRouter } from "next/router";

type IProps = {
    raise: IDataRaise
}

const RaisePage: NextPage<IProps> = ({ raise }) => {

    const router = useRouter()




    return (
        <>
            
        </>
    );

}

export default RaisePage

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(process.env.HOST + `/api/getRaise?id=${context.query.id}`);
    // Parsing the JSON data received from the API

    const data = await res.json();
    return { props: { raise: data } }
}
