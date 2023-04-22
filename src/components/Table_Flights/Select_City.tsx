import { FC } from "react";
import { IDataRaise } from "./data/data"

import { useEffect, useState } from 'react'
import { Checkbox, Container, Spacer } from "@nextui-org/react";

type ICityTarget = string[]
type ICityRange = string[]

interface IProps {
    data: IDataRaise[];
    changeFun: (dataRaise: string[]) => void;
    // add any other required props here
}

const Select_City: FC<IProps> = ({ data, changeFun}) => {
    const [selected, setSelected] = useState<ICityTarget>();
    const [cityes, setCityes] = useState<ICityRange>();

    useEffect(() => {
        const x: string[] = []

        data.forEach((raise: IDataRaise) => {
            !x.includes(raise.city) && x.push(raise.city)
        });
        setCityes(x)
    }, [])

    useEffect(() => {
        changeFun((selected as ICityTarget))
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

export default Select_City;