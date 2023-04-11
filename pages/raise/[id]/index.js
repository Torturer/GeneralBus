import { useRouter } from "next/router"
import InfoRaise from "@/components/home/InfoRaise";

const RaisePage = () => {

    const { query } = useRouter();

    return <InfoRaise id={query.id}/>
}

export default RaisePage