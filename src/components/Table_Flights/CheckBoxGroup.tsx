import { Checkbox, Container } from "@nextui-org/react"
import React, { FC } from "react";



type IProps = {
    label: string;
    value: string[]
    setValue: React.Dispatch<React.SetStateAction<string[]>>
    cityes: string[]
}


const CheckBoxGroup: FC<IProps> = ({label, value, setValue, cityes}) => {
    return (
        <Checkbox.Group
        orientation="horizontal"
        label={label}
        value={value}
        onChange={(setValue)}
        css={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center", margin: "10px"}}
        defaultValue={cityes}
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
                        size="sm"
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

    )
}



export default CheckBoxGroup