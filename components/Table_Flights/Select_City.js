import { useEffect, useState } from 'react'
import { Checkbox, Container, Spacer, Col, Row } from "@nextui-org/react";

export default function Select_City({ data, changeFun }) {
    const [selected, setSelected] = useState([]);
    const [cityes, setCityes] = useState([]);

    useEffect(() => {
        const x = []

        data.forEach(raise => {
            !x.includes(raise.city) && x.push(raise.city)
        });
        setCityes(x)
    }, [])

    useEffect(() => {
        changeFun(selected)
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
                onChange={setSelected}
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