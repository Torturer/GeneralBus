import React, { FC } from "react";
import type { IDataRaise } from "./data/data";

import { Row, Col, Tooltip, Text, Badge } from "@nextui-org/react";
import { IconButton } from "./icon/IconButton";
import { EditIcon } from "./icon/EditIcon";
import { DeleteIcon } from "./icon/DeleteIcon";
import { EyeIcon } from "./icon/EyeIcon";
import Link from "next/link";
import User from "../component/User";

import styles from "../../styles/Table_Service.module.css"

type IProps = {
    selectData: IDataRaise[];
    pushToForm: (id: number) => void;
}

const Table_Service: FC<IProps> = ({selectData, pushToForm}): JSX.Element => {

    return (
        <div className={styles.table}>
            {selectData.map((raise, index) => {
                return (
                    <div className={styles.table_cell} key={index + 87}>
                        <User squared src={raise.busImg} name={raise.busName + " -- " + raise.busNumber}>
                            <a href={"tel:" + raise.phone} title="">{raise.phone}</a>
                        </User>
                        <div className={styles.cityText}>
                            <Row>
                                <Text b size={15} css={{ tt: "capitalize" }}>
                                    {raise.city}
                                </Text>
                            </Row>
                            <Row>
                                <Text b size={12} css={{ tt: "capitalize", color: "$accents7" }}>
                                    {raise.cityTarget.goGoCity + " -> " + raise.cityTarget.stopCity}
                                </Text>
                            </Row>
                        </div >

                        <Badge isSquared color="primary" variant="bordered">
                            {raise.price + " UAH"}
                        </Badge>

                        <div>
                            <Row>
                                <Text b size={15} css={{ tt: "capitalize" }}>
                                    {raise.landingTime}
                                </Text>
                            </Row>
                            <Row>
                                <Text b size={12} css={{ tt: "capitalize", color: "$accents7" }}>
                                    {raise.dataOfLanding}
                                </Text>
                            </Row>
                        </div >

                        <div>
                            <Tooltip content="Більше про рейс">
                                <Link href={`/raise/` + raise._id} prefetch={false}>
                                    <IconButton>
                                        <EyeIcon size={20} fill="#979797" height={undefined} width={undefined} />
                                    </IconButton>
                                </Link>
                            </Tooltip>
                        </div>

                        <div >
                            <Col css={{ d: "flex" }}>
                                <Tooltip content="Редагувати рейс">
                                    <IconButton onClick={() => pushToForm(raise._id)}>
                                        <EditIcon size={20} fill="#979797" height={undefined} width={undefined} />
                                    </IconButton>
                                </Tooltip>
                            </Col>
                            <Col css={{ d: "flex" }}>
                                <Tooltip
                                    content="Видалити рейс"
                                    color="error"
                                >
                                    <IconButton>
                                        <DeleteIcon size={20} fill="#FF0080" height={undefined} width={undefined} />
                                    </IconButton>
                                </Tooltip>
                            </Col>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Table_Service