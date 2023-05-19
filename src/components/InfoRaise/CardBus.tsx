import { FC } from "react";
import Image from "next/image";
import { Text } from "@nextui-org/react";
import { IDataRaise } from "@/components/Table_Flights/data/data";
import styles from "../../styles/InfoRaise/components/CardBus.module.css";

type IProps = {
    raise: IDataRaise;
};

const CardBus: FC<IProps> = ({ raise }) => {
    const {
        busImg,
        busName,
        busNumber,
        city,
        cityTarget,
        dataOfLanding,
        landingTime,
        price,
        map,
    } = raise;

    return (
        <div
            className={styles.box}
        >
            <Image
                className={styles.image}
                src={busImg}
                width={150}
                height={150}
                alt=""
                quality={100}
                priority />
            <Text size={16}>
                Марка та номер: <span>{busName} {busNumber}</span>{" "}
            </Text>
            <Text size={16}>
                Телефон для запису:{" "}
                <a href={`tel:`} title=""> </a>
            </Text>
            <Text size={16}>Місто відправлення: <span>{city}</span></Text>
            {cityTarget.goGoCity && (
                <Text size={16}>
                    Проїздне місто: <span>{cityTarget.goGoCity}</span>
                </Text>
            )}
            <Text size={16}>Місто прибуття: <span>{cityTarget.stopCity}</span></Text>
            <Text size={16}>
                Дата та час: <span>{dataOfLanding} в {landingTime}</span>
            </Text>
            <Text size={16}>
                Ціна за місце: <span>{price} UAH</span>
            </Text>
            {map && <Text size={16}>Місце посадки на мапі: </Text>}
        </div>
    );
};

export default CardBus;
