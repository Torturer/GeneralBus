import { FC } from "react";
import type { IDataRaise } from "./data/data";

import { Tooltip, Text, Badge } from "@nextui-org/react";
import { IconButton } from "./icon/IconButton";
import { EditIcon } from "./icon/EditIcon";
import { DeleteIcon } from "./icon/DeleteIcon";
import { EyeIcon } from "./icon/EyeIcon";
import Link from "next/link";
import User from "../component/User";

import styles from "../../styles/FligtTable/Table_Service.module.css"
import { useRouter } from "next/router";

type IProps = {
    selectData: IDataRaise[];
    pushToForm: (id: string) => void;
}

const Table_Service: FC<IProps> = ({ selectData, pushToForm }): JSX.Element => {
    const router = useRouter()


    const sendDelete = async (id: string) => {
        try {
            const api = `/api/deletRaise?id=${id}`
            const url = process.env.NEXT_PUBLIC_API_URL + api
            await fetch(url);
            router.reload()


        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className={styles.table}>
            {selectData.map((raise, index) => {
                return (
                    <div className={styles.table_cell} key={index + 87}>
                        <User squared src={raise.busImg} name={raise.busName + " -- " + raise.busNumber}>
                            <a href={"tel:" + raise.phone} title="">{raise.phone}</a>
                        </User>

                        <div className={styles.box_city_price}>
                            <div className={styles.cityText}>
                                <Text b size={15} css={{ tt: "capitalize" }}>
                                    {raise.city}
                                </Text>
                                <Text b size={12} css={{ tt: "capitalize", color: "$accents7" }}>
                                    {raise.cityTarget.goGoCity + " -> " + raise.cityTarget.stopCity}
                                </Text>
                            </div >

                            <Badge className={styles.price_box} isSquared color="primary" variant="bordered">
                                {raise.price + " UAH"}
                            </Badge>
                        </div>

                        <div className={styles.box_time_info}>
                            <div className={styles.time_fligt}>
                                <Text b size={15} css={{ tt: "capitalize" }}>
                                    {raise.landingTime}
                                </Text>
                                <Text b size={12} css={{ tt: "capitalize", color: "$accents7" }}>
                                    {raise.dataOfLanding}
                                </Text>
                            </div >

                            <div className={styles.info}>
                                <Tooltip content="Більше про рейс">
                                    <Link href={`/raise/` + raise._id} prefetch={false}>
                                        <IconButton>
                                            <EyeIcon size={20} fill="#979797" height={undefined} width={undefined} />
                                        </IconButton>
                                    </Link>
                                </Tooltip>
                            </div>
                        </div>

                        <div className={styles.tools} >
                            <Tooltip content="Редагувати рейс">
                                <IconButton onClick={() => pushToForm(raise._id)}>
                                    <EditIcon size={20} fill="#979797" height={undefined} width={undefined} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip
                                content="Видалити рейс"
                                color="error"
                            >
                                <IconButton onClick={() => sendDelete(raise._id)}>
                                    <DeleteIcon size={20} fill="#FF0080" height={undefined} width={undefined} />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Table_Service