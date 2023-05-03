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

            <Image className={styles.image} src={raise.busImg} width={150} height={150} alt="" quality={100} priority />

            <Text size={16}>Марка та номер: <span>{raise.busName}  {raise.busNumber}</span> </Text>

            <Text size={16}>Телефон для запису: {<a href={"tel:" + raise.phone} title="">{raise.phone}</a>} </Text>

            <Text size={16}>Місто відправлення: <span>{raise.city}</span></Text>

            {raise.cityTarget.goGoCity &&
                <Text size={16}>Проїздне місто: {<span>{raise.cityTarget.goGoCity}</span>}</Text>
            }

            <Text size={16}>Місто приуття: <span>{raise.cityTarget.stopCity}</span></Text>

            <Text size={16}>Дата та час: <span>{raise.dataOfLanding} в {raise.landingTime}</span></Text>

            <Text size={16}>Ціна за місце: <span>{raise.price} UAH</span></Text>

            {raise.map &&
                <Text size={16}>Місце посадки на мапі: </Text>
            }

        </div>
    );
}

export default CardBus;
<div>

</div>