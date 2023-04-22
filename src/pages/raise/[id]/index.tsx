import { NextPage } from "next";
import { useRouter } from "next/router"
import InfoRaise from "@/components/home/InfoRaise";


const RaisePage: NextPage = (props) => {

    const { query } = useRouter();
    const id = typeof query.id === "string" ? parseInt(query.id) : query.id;

    return <InfoRaise id={id as number} />;

}

export default RaisePage