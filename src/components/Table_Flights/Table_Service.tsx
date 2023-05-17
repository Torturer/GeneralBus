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
                    textAlign: "center"
                    
                }}
            >Гарячі рейси</Text>

            {data.length ?
                <AnimatePresence initial={false} >
                    {data.map((raise) => {
                        return (
                            <motion.div
                                className={styles.table_cell}
                                key={raise._id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <User src={raise.busImg} name={raise.busName + " -- " + raise.busNumber}>
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

                                    <Badge className={styles.price_box} isSquared color="primary" variant="bordered" css={{ minWidth: "80px" }}>
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
                                            <Link href={`/raise/` + raise._id}>
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
                                </div>

                                <DeleteButton id={raise._id} setRaise={setRaise} />

                            </motion.div>
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