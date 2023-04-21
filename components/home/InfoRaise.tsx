import React, { FC } from "react";
import data from "../Table_Flights/data/data"
import { Button, Col, Row, Spacer, Table, Text, Tooltip } from '@nextui-org/react';
import { IconButton } from "../Table_Flights/icon/IconButton";
import { EditIcon } from "../Table_Flights/icon/EditIcon";
import { DeleteIcon } from "../Table_Flights/icon/DeleteIcon";
import { StyledBadge } from "../Table_Flights/icon/StyledBadge";
import { useRouter } from "next/router";

type IProps = {
    id: number | string[]
}

const InfoRaise: FC<IProps> = ({id}): JSX.Element => {

    const { push } = useRouter()
    const listOfStops = data.find((raise) => id === raise._id).listOfStops

    return (
        <>
            <Spacer y={3} />
            <Table
                bordered
                shadow={true}
                color="secondary"
                aria-label="Example pagination  table"
                css={{
                    height: "auto",
                    minWidth: "100%",
                }}
                selectionMode="none"
            >
                <Table.Header>
                    <Table.Column>Адреса</Table.Column>
                    <Table.Column>Час</Table.Column>
                    <Table.Column>Статус</Table.Column>
                    <Table.Column>Мапа</Table.Column>
                    <Table.Column>Дія</Table.Column>
                </Table.Header>
                <Table.Body>
                    {listOfStops.map((stop, index) => (
                        <Table.Row key={index}>
                            <Table.Cell>
                                <Text b size={17} css={{ tt: "capitalize" }}>
                                    {stop.nameStop}
                                </Text>
                            </Table.Cell>
                            <Table.Cell>
                                <Text b size={15} css={{ tt: "capitalize" }}>
                                    {stop.time}
                                </Text>
                            </Table.Cell>
                            <Table.Cell>
                                <StyledBadge
                                    type={stop.status === "complete" ? "vacation" : "active"}
                                >
                                    {stop.status === "active" ? "Активний" : stop.status === "paused" ? "Завантажується" : "Виконаний"}
                                </StyledBadge>
                            </Table.Cell>
                            <Table.Cell>"out"</Table.Cell>
                            <Table.Cell>
                                <Row justify="center" align="center">
                                    <Col css={{ d: "flex" }}>
                                        <Tooltip content="Редагувати рейс">
                                            <IconButton>
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
                                </Row>
                            </Table.Cell>

                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
            <Spacer y={1} />
            <Button
                size="sm"
                onPress={() => push("/")}
                css={{ margin: "0px auto" }}
            >назад
            </Button>
        </>
    )
}

export default InfoRaise