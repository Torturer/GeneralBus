import { IDataRaise } from "@/components/Table_Flights/data/data";
import { FC } from "react";

import Image from "next/image";
import { Text } from "@nextui-org/react";

import styles from "../../styles/InfoRaise/components/CardBus.module.css"

type IProps = {
    raise: IDataRaise;
}



const CardBus: FC<IProps> = ({ raise }) => {

    
    return (
        <div className={styles.box}>

            <Image src={raise.busImg} width={150} height={150} alt="" quality={100} />
            <Text>Марка автобусу та його номер: {raise.busName}  {raise.busNumber} </Text>
            <label>
                <Text>Телефон для запису:</Text>
                <a href={"tel:" + raise.phone} title="">{raise.phone}</a>
            </label>

        </div>
    );
}

export default CardBus;
<div>

</div>