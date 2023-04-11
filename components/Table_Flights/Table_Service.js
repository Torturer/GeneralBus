import { Table, Row, Col, Tooltip, User, Text, Badge } from "@nextui-org/react";
import { StyledBadge } from "./icon/StyledBadge";
import { IconButton } from "./icon/IconButton";
import { EditIcon } from "./icon/EditIcon";
import { DeleteIcon } from "./icon/DeleteIcon";
import { useState } from "react";
import { EyeIcon } from "./icon/EyeIcon";

export default function Table_Service(props) {

    const [columns, setColums] = useState([
        { name: "Транспорт", uid: "bus" },
        { name: "Дата", uid: "timeStart" },
        { name: "Маршрут", uid: "fligth" },
        { name: "Ціна", uid: "price" },
        { name: "Статус", uid: "status" },
        { name: "Деталі", uid: "details" },
        { name: "ACTIONS", uid: "actions" },
    ])

    const renderCell = (raise, columnKey) => {
        const cellValue = raise[columnKey];
        switch (columnKey) {
            case "bus":
                return (
                    <User squared src={raise.busImg} name={raise.busName + " -- " + raise.busNumber} css={{ p: 0 }}>
                        <a href={"tel:" + raise.phone}>{raise.phone}</a>
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
                            <IconButton onClick={() => console.log("View user", raise._id)}>
                                <EyeIcon size={20} fill="#979797" />
                            </IconButton>
                        </Tooltip>
                    </Col>
                )

            case "actions":
                return (
                    <Row justify="center" align="center">
                        <Col css={{ d: "flex" }}>
                            <Tooltip content="Редагувати рейс">
                                <IconButton onClick={() => console.log("Edit user", user.id)}>
                                    <EditIcon size={20} fill="#979797" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                        <Col css={{ d: "flex" }}>
                            <Tooltip
                                content="Видалити рейс"
                                color="error"
                                onClick={() => console.log("Delete user", user.id)}
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
        <Table
            aria-label="Example table with custom cells"
            lined
            selectionMode="none"
        >
            <Table.Header>
                {columns.map((column) => (
                    <Table.Column
                        key={column.uid}
                        hideHeader={column.uid === "actions" || column.uid === "details"}
                        align={column.uid === "actions" ? "center" : "start"}
                    >
                        {column.name}
                    </Table.Column>
                ))}
            </Table.Header>

            <Table.Body>
                {props.selectData.map((item, index) => (
                    <Table.Row key={index + 125}>
                        {(columnKey) => (
                            <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                        )}
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
}
