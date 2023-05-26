import { FC } from "react"
import type { IDataRaise } from "./data/data";

import { Tooltip, Text, Badge } from "@nextui-org/react";
import { IconButton } from "./icon/IconButton";
import { EditIcon } from "./icon/EditIcon";
import { EyeIcon } from "./icon/EyeIcon";
import Link from "next/link";
import User from "../component/User";


import styles from "../../styles/FligtTable/Table_Service.module.css"
import DeleteButton from "./DeleteButton";
import { motion, AnimatePresence } from "framer-motion";

type IProps = {
    data: IDataRaise[];
    pushToForm: (id: string) => void;
    setRaise: (id: string) => void;

}

const Table_Service: FC<IProps> = ({ data, pushToForm, setRaise }): JSX.Element => {


    return (
        <div className={styles.table}>
            <Text
                css={{
                    borderBottom: "2px inset",
                    minWidth: "300px",
                    textAlign: "center",
                    background: "rgba(241, 13, 13, 0.05)",
                    borderRadius: "15px"

                }}
            >Гарячі рейси</Text>

            {data.length ?





                <AnimatePresence initial={false} >
                    {data.map((raise) => {
                        return (
                            <Link href={`/raise/` + raise._id} shallow passHref className={styles.link}

                                key={raise._id}
                            >
                                <motion.div
                                    className={styles.table_cell}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <User src={raise.busImg} name={raise.busName + " -- " + raise.busNumber}>Забронювати:
                                        <a href={"tel:"} title=""> ссылка</a>
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

                                        <Badge className={styles.price_box} isSquared color="primary" variant="bordered" css={{ minWidth: "80px" }}>
                                            {raise.price + " UAH"}
                                        </Badge>
                                    </div>

                                    <div className={styles.box_time_info}>
                                        <div style={{display: "flex", alignItems: "center", margin: "0px 7px"}}>
                                            <Text size={16}>Відправлення:</Text>
                                            <div className={styles.time_fligt}>
                                                <Text b size={15} css={{ tt: "capitalize" }}>
                                                    {raise.landingTime}
                                                </Text>
                                                <Text b size={12} css={{ tt: "capitalize", color: "$accents7" }}>
                                                    {raise.dataOfLanding}
                                                </Text>
                                            </div >
                                        </div>

                                        <div style={{display: "flex", alignItems: "center", margin: "0px 7px"}}>
                                            <Text size={16}>Прибуття:</Text>
                                            <div className={styles.time_fligt}>
                                                <Text b size={15} css={{ tt: "capitalize" }}>
                                                    {raise.finishTime}
                                                </Text>
                                                <Text b size={12} css={{ tt: "capitalize", color: "$accents7" }}>
                                                    {raise.finishDate}
                                                </Text>
                                            </div >
                                        </div>

                                    </div>



                                    {/* <div className={styles.tools} >
                                        <Tooltip content="Редагувати рейс">
                                            <IconButton onClick={() => pushToForm(raise._id)}>
                                                <EditIcon size={20} fill="#979797" height={undefined} width={undefined} />
                                            </IconButton>
                                        </Tooltip>
                                    </div>

                                    <DeleteButton id={raise._id} setRaise={setRaise} /> */}

                                </motion.div>

                            </Link>

                        )
                    })}

                </AnimatePresence>
                :
                <Text>Нажаль зазначених в фільтрі рейсів не знайденно. </Text>
            }
        </div>
    )
}

export default Table_Service