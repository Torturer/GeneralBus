import { FC, Dispatch, SetStateAction } from "react"
import type { IDataRaise, IRegular } from "./data/data";

import { Text, Badge, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import User from "../component/User";


import styles from "../../styles/FligtTable/Table_Service.module.css"
import { motion, AnimatePresence } from "framer-motion";
import { BiLabel } from "react-icons/bi";
import { IconButton } from "./icon/IconButton";
import { EditIcon } from "./icon/EditIcon";
import DeleteButton from "./DeleteButton";
import ShowWeek from "./ShowWeek";

type IProps = {
    data: IDataRaise[];
    label: string;
    isRegular: boolean;
    targetAction: (data: IDataRaise) => void
    raiseDeletFun: (id: string) => void

}

const Table_Service: FC<IProps> = ({ data, label, isRegular, targetAction, raiseDeletFun }): JSX.Element => {


    return (
        <div className={styles.table}>
            {isRegular ?
                <Badge size="lg" color="primary">{label}</Badge>
                :
                <Badge size="lg" color="warning">{label}</Badge>}

            {data.length ?





                <AnimatePresence initial={false} >
                    {data.map((raise) => {
                        return (
                            <div key={raise._id} style={{ width: "100%" }}>
                                <Link href={`/raise/` + raise._id} shallow passHref className={styles.link}


                                >
                                    <motion.div
                                        className={styles.table_cell}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <User src={raise.busImg} name={raise.busName + " -- " + raise.busNumber}>Забронювати

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
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <Text size={16}>Відправлення:</Text>
                                                <div className={styles.time_fligt}>
                                                    <Text b size={15} css={{ tt: "capitalize" }}>
                                                        {raise.landingTime}
                                                    </Text>
                                                    {!isRegular ? <Text b size={12} css={{ tt: "capitalize", color: "$accents7" }}>
                                                        {raise.dataOfLanding}
                                                    </Text> : null}
                                                </div >
                                            </div>

                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <Text size={16}>Прибуття:</Text>
                                                <div className={styles.time_fligt}>
                                                    <Text b size={15} css={{ tt: "capitalize" }}>
                                                        {raise.finishTime}
                                                    </Text>
                                                    {!isRegular ? <Text b size={12} css={{ tt: "capitalize", color: "$accents7" }}>
                                                        {raise.finishDate}
                                                    </Text> : null}
                                                </div >
                                            </div>

                                        </div>

                                        {isRegular ?
                                            <ShowWeek week={raise.regular as IRegular} />
                                            :
                                            null
                                        }
                                    </motion.div>

                                </Link>

                                <div className={styles.tools} >
                                    <Tooltip content="Редагувати рейс">
                                        <IconButton onClick={() => targetAction(raise)}>
                                            <EditIcon size={20} fill="#979797" height={undefined} width={undefined} />
                                        </IconButton>
                                    </Tooltip>
                                    <DeleteButton id={raise._id} setRaise={raiseDeletFun} />

                                </div>

                            </div>
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