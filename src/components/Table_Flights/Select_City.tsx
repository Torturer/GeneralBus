import React, { FC } from "react";
import type { IDataRaise } from "./data/data"

import { useEffect, useState, useMemo } from 'react'
import { Checkbox, Container, Spacer } from "@nextui-org/react";

import styles from "../../styles/FligtTable/Table_Service.module.css"

type ICityTarget = string[]
type ICityRange = string[]

interface IProps {
    data: IDataRaise[];
    changeFun: (dataRaise: IDataRaise[]) => void;
    // add any other required props here
}

const Select_City: FC<IProps> = ({ data, changeFun }) => {
    const [dataRaise, setDataRaise] = useState(data)
    const [selected, setSelected] = useState<ICityTarget>([]);
    const [cityes, setCityes] = useState<ICityRange>();


    const dataFilter = (arr: ICityTarget) => dataRaise.filter((raise) => arr.includes(raise.city)) as IDataRaise[]

    useEffect(() => {
        const x: string[] = []

        dataRaise.forEach((raise: IDataRaise) => {
            !x.includes(raise.city) && x.push(raise.city)
        });
        setCityes(x)
    }, [])

    useEffect(() => {
        let target = []
        selected.length ? target = dataFilter(selected) : target = dataRaise
        changeFun(target)
    }, [selected])

    return (
        <Container
            alignItems='center'
            justify='center'
        >
            <Spacer y={2} />
            <Checkbox.Group 
                label="Виберіть місто відправлення"
                value={selected}
                onChange={(setSelected)}
                css={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}
            >
                <Container
                    css={{
                        display: "flex"
                    }}
                    justify='center'


                >
                    {cityes ? cityes.map((city, key) => {
                        return (
                            <Checkbox
                                value={city}
                                key={key}
                                css={{ margin: "20px 18px 0px 0px", justifyContent: "space-around", flexDirection: "row" }}
                            >
                                {city}
                            </Checkbox>
                        )
                    })
                        : null}
                </Container>
            </Checkbox.Group>
            <Spacer y={1} />
        </Container>
    );
}

export default React.memo(Select_City)