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

const InfoRaise: FC<IProps> = ({ id }): JSX.Element => {

    const { push } = useRouter()
    const dataTarget = data.find((raise) => id === raise._id)
    const listOfStops = dataTarget.listOfStops


    return (
        <>
            <Spacer y={3} />


            {listOfStops.map((stop, index) => (

                <div key={index+43}>
                    <Text b size={17} css={{ tt: "capitalize" }}>
                        {stop.nameStop}
                    </Text>
                    <Text b size={15} css={{ tt: "capitalize" }}>
                        {stop.time}
                    </Text>
                    <StyledBadge
                        type={stop.status === "complete" ? "vacation" : "active"}
                    >
                        {stop.status === "active" ? "Активний" : stop.status === "paused" ? "Завантажується" : "Виконаний"}
                    </StyledBadge>
                    <Tooltip content="Редагувати рейс">
                        <IconButton>
                            <EditIcon size={20} fill="#979797" height={undefined} width={undefined} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip
                        content="Видалити рейс"
                        color="error"
                    >
                        <IconButton>
                            <DeleteIcon size={20} fill="#FF0080" height={undefined} width={undefined} />
                        </IconButton>
                    </Tooltip>
                </div>
            ))}

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