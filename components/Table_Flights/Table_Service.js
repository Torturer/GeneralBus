import { Table, Row, Col, Tooltip, Text, Badge, Button, Spacer } from "@nextui-org/react";
import { StyledBadge } from "./icon/StyledBadge";
import { IconButton } from "./icon/IconButton";
import { EditIcon } from "./icon/EditIcon";
import { DeleteIcon } from "./icon/DeleteIcon";
import { useState } from "react";
import { EyeIcon } from "./icon/EyeIcon";
import Link from "next/link";
import User from "../component/User";

export default function Table_Service(props) {

    const [columns, setColums] = useState([
        { name: "Транспорт", uid: "bus" },
        { name: "Дата", uid: "timeStart" },
        { name: "Маршрут", uid: "fligth" },
        { name: "Ціна", uid: "price" },
        // { name: "Статус", uid: "status" },
        { name: "Зупинки", uid: "details" },
        { name: "ACTIONS", uid: "actions" },
    ])

    const rediractDetails = async (id) => {
        const link = "/raise/" + id
        return [{
            destination: link
        }]
    }

    const renderCell = (raise, columnKey) => {
        const cellValue = raise[columnKey];
        switch (columnKey) {
            case "bus":
                return (
                    <User squared src={raise.busImg} name={raise.busName + " -- " + raise.busNumber}>
                        <a href={"tel:" + raise.phone} alt="">{raise.phone}</a>
                    </User>
                );

            case "fligth":
                return (
                    <Col>
                        <Row>
                            <Text b size={15} css={{ tt: "capitalize" }}>
                                {raise.city}
                            </Text>
                        </Row>
                        <Row>
                            <Text b size={12} css={{ tt: "capitalize", color: "$accents7" }}>
                                {raise.cityTrget.join(` -> `)} { }
                            </Text>
                        </Row>
                    </Col >
                );

            case "price":
                return (
                    <Badge isSquared color="primary" variant="bordered">
                        {raise.price + " UAH"}
                    </Badge>
                )

            case "timeStart":
                return (
                    <Col>
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
                    </Col >
                )

            case "status":
                return <StyledBadge
                    type={raise.status === "complete" ? "vacation" : raise.status}
                >
                    {raise.status === "active" ? "Активний" : raise.status === "paused" ? "Завантажується" : "Виконаний"}
                </StyledBadge>;

            case "details":
                return (
                    <Col css={{ d: "flex" }}>
                        <Tooltip content="Більше про рейс">
                            <Link href={`/raise/` + raise._id}>
                                <IconButton>
                                    <EyeIcon size={20} fill="#979797" />
                                </IconButton>
                            </Link>
                        </Tooltip>
                    </Col>
                )

            case "actions":
                return (
                    <Row justify="center" align="center">
                        <Col css={{ d: "flex" }}>
                            <Tooltip content="Редагувати рейс">
                                <IconButton >
                                    <EditIcon size={20} fill="#979797" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                        <Col css={{ d: "flex" }}>
                            <Tooltip
                                content="Видалити рейс"
                                color="error"
                            >
                                <IconButton>
                                    <DeleteIcon size={20} fill="#FF0080" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                    </Row>
                );

            default:
                return cellValue;
        }
    };


    return (
        <>
            <Table
                aria-label="Example table with custom cells"
                lined
                selectionMode="none"
            >
                <Table.Header>
                    {columns.map((column) => (
                        <Table.Column
                            key={column.uid}
                            hideHeader={column.uid === "actions"}
                            align={column.uid === "actions" ? "center" : "start"}
                        >
                            {column.name}
                        </Table.Column>
                    ))}
                </Table.Header>

                <Table.Body>
                    {props.selectData.map((item, index) => (
                        <Table.Row key={index + 125} >
                            {(columnKey) => (
                                <Table.Cell css={columnKey === 'bus' ? { minWidth: "200px" } : {}}>{renderCell(item, columnKey)}</Table.Cell>
                            )}
                        </Table.Row>
                    ))}
                </Table.Body>
                {props.selectData.length > 8 ?
                    <Table.Pagination
                        shadow
                        noMargin
                        align="center"
                        rowsPerPage={8}
                    />
                    : null}
            </Table>
        </>
    );
}
