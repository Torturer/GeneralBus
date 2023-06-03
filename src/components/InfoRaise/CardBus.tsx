import { FC } from "react";
import Image from "next/image";
import { Text, Tooltip } from "@nextui-org/react";
import { IDataRaise } from "@/components/Table_Flights/data/data";
import styles from "../../styles/InfoRaise/components/CardBus.module.css";
import Link from "next/link";
import { IconButton } from "../Table_Flights/icon/IconButton";
import { BiMap } from "react-icons/bi";

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
        finishDate,
        finishTime,
        isRegular,
        regular
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
            {/* <Text size={16}>
                Телефон для запису:{" "}
                <a href={`tel:`} title=""> </a>
            </Text> */}
            <Text size={16}>Місто відправлення: <span>{city}</span></Text>
            {cityTarget.goGoCity && (
                <Text size={16}>
                    Проїздне місто: <span>{cityTarget.goGoCity}</span>
                </Text>
            )}
            <Text size={16}>Місто прибуття: <span>{cityTarget.stopCity}</span></Text>

            {!isRegular ?
                <>
                    <Text size={16}>
                        Відправляється: <span>{dataOfLanding} в {landingTime}</span>
                    </Text>
                    <Text size={16}>
                        Прибуває: <span>{finishDate} в {finishTime}</span>
                    </Text>

                </>
                :
                <>
                    <Text size={16}>
                        Відправляється: <span>{landingTime}</span>
                    </Text>
                    <Text size={16}>
                        Прибуває: <span>{finishTime}</span>
                    </Text>

                </>
            }

            <Text size={16}>
                Ціна за місце: <span>{price} UAH</span>
            </Text>
            {map.length &&

                <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                    <Text size={16}>Місце посадки на мапі: </Text>
                    <Tooltip content="Пергелянути на мапі">
                        <Link href={map} target="_blank" shallow passHref>
                            <IconButton>
                                <BiMap size={20} fill="#ee3840" height={undefined} width={undefined} />
                            </IconButton>
                        </Link>
                    </Tooltip>
                </div>
            }
        </div>
    );
};

export default CardBus;
