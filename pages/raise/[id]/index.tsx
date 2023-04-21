import React, { FC } from "react";
import { useRouter } from "next/router"
import dynamic from "next/dynamic";

const InfoRaise = dynamic(() => import('@/components/home/InfoRaise'))

const RaisePage: FC = (): JSX.Element => {

    const { query } = useRouter();
    const id = typeof query.id === "string" ? parseInt(query.id) : query.id;

    return <InfoRaise id={id} />;
    
}

export default RaisePage