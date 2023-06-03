import React, { useState } from "react"
import { IDataRaise, IListOFStops } from "../Table_Flights/data/data"
import { AnimatePresence, motion } from "framer-motion"
import { Badge, Spacer, Text, Tooltip } from "@nextui-org/react"
import { IconButton } from "../Table_Flights/icon/IconButton"
import { EditIcon } from "../Table_Flights/icon/EditIcon"
import { EyeIcon } from "../Table_Flights/icon/EyeIcon"
import Link from "next/link"
import styles from "../../styles/InfoRaise/components/Table.module.css"
import { BiMap } from "react-icons/bi"
import { MdOutlineModeEditOutline } from "react-icons/md"
import DeleteButtonStop from "./DeleteButtonStop"

type Props = {
    raise: IDataRaise
    funEditingStop: (id: string) => void,
    setRaise: (updatedRaise: IDataRaise) => void

}

const FlightStopList: React.FC<Props> = ({ funEditingStop, setRaise, raise }) => {


        return (

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Spacer y={2} />
                <Badge size="lg" color="primary" >Зупинки</Badge>
                <Spacer />


                {raise?.listOfStops.length > 0 ?
                    <AnimatePresence initial={false} >
                        {raise.listOfStops.map((stop) => {
                            return (
                                <motion.div
                                    className={styles.table_cell}
                                    key={stop.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <Text b size={15} css={{ margin: "5px", paddingRight: "10px" }}>
                                        {stop.nameStop}
                                    </Text>


                                    <Text b size={12} css={{ color: "$accents7", margin: "5px" }}>
                                        {stop.time}
                                    </Text>
                                    <Text b size={12} css={{ color: "$accents7", margin: "5px" }}>
                                        {stop.date}
                                    </Text>

                                    <div className={styles.info}>
                                        <Tooltip content="Пергелянути на мапі">
                                            <Link href={stop.map} target="_blank" shallow passHref>
                                                <IconButton>
                                                    <BiMap size={20} fill="#ee3840" height={undefined} width={undefined} />
                                                </IconButton>
                                            </Link>
                                        </Tooltip>
                                    </div>

                                    {/* <div className={styles.tools} >
                                        <Tooltip content="Редагувати зупинку">
                                            <IconButton onClick={() => funEditingStop(stop.id)} >
                                                <MdOutlineModeEditOutline size={20} fill="#979797" height={undefined} width={undefined} />
                                            </IconButton>
                                        </Tooltip>
                                    </div>

                                    <DeleteButtonStop id={stop.id} setRaise={setRaise} raise={raise} /> */}

                                </motion.div>
                            )
                        })}

                    </AnimatePresence>

                    :
                    <div>Нажаль.. зупинки для цього рейсу ще не додані</div>
                }


            </div>
        )
}

export default FlightStopList