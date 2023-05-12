import React, { FC } from "react";
import type { IDataRaise } from "./data/data"

import { useEffect, useState, useMemo } from 'react'
import { Checkbox, Container, Spacer } from "@nextui-org/react";

import styles from "../../styles/FligtTable/Table_Service.module.css"
import CheckBoxGroup from "./CheckBoxGroup";

interface IProps {
    data: IDataRaise[];
    changeFun: (dataRaise: IDataRaise[]) => void;
}

const Select_City: FC<IProps> = ({ data, changeFun }) => {


    const [selectedStart, setSelectedStart] = useState<string[]>([]),
        [selectedStops, setSelectedStops] = useState<string[]>([]),
        [selectedFinish, setSelectedFinish] = useState<string[]>([]);

    const [startCityes, setStartCityes] = useState<string[]>([]),
        [stopsCityes, setStopsCityes] = useState<string[]>([]),
        [finishCityes, setFinishCityes] = useState<string[]>([]);

    useEffect(() => {
        const start: string[] = []
        const stops: string[] = []
        const finish: string[] = []

        data.forEach((raise: IDataRaise) => {
            !start.includes(raise.city) && start.push(raise.city)
            !stops.includes(raise.cityTarget.goGoCity) && stops.push(raise.cityTarget.goGoCity)
            !finish.includes(raise.cityTarget.stopCity) && finish.push(raise.cityTarget.stopCity)

        });
        setStartCityes(start);
        setStopsCityes(stops);
        setFinishCityes(finish)
    }, [])


    useEffect(() => {
        let targetData = data

        if (selectedStart.length) { targetData = targetData.filter((raise) => selectedStart.includes(raise.city)) }
        if (selectedStops.length) { targetData = targetData.filter((raise) => selectedStops.includes(raise.cityTarget.goGoCity)) }
        if (selectedFinish.length) { targetData = targetData.filter((raise) => selectedFinish.includes(raise.cityTarget.stopCity)) }

        changeFun(targetData)
    }, [selectedStart, selectedStops, selectedFinish])

    return (
        <>
            <Container
                alignItems='center'
                justify='center'
                display="flex"
                css={{ margin: "15px 0 15px 0", maxWidth: "inherit"}}
            >
                <CheckBoxGroup

                    label="Виберіть місто відправлення"
                    value={selectedStart}
                    setValue={setSelectedStart}
                    cityes={startCityes}
                />
                <CheckBoxGroup

                    label="Виберіть проїздне місто"
                    value={selectedStops}
                    setValue={setSelectedStops}
                    cityes={stopsCityes}
                />

                <CheckBoxGroup

                    label="Виберіть місто прибуття"
                    value={selectedFinish}
                    setValue={setSelectedFinish}
                    cityes={finishCityes}
                />
            </Container>
        </>
    );
}

export default Select_City