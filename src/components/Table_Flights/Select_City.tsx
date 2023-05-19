// Import required modules and interfaces
import React, { FC, useMemo, useCallback } from "react";
import type { IDataRaise } from "./data/data"
import { useEffect, useState } from 'react'
import { Container } from "@nextui-org/react";
import CheckBoxGroup from "./CheckBoxGroup";

// Define props interface for component
interface IProps {
    data: IDataRaise[];
    changeFun: (dataRaise: IDataRaise[]) => void;
}

// Define SelectCity functional component
const SelectCity: FC<IProps> = ({ data, changeFun }) => {

    // Define state hooks for selected checkboxes
    const [selectedStart, setSelectedStart] = useState<string[]>([]);
    const [selectedStops, setSelectedStops] = useState<string[]>([]);
    const [selectedFinish, setSelectedFinish] = useState<string[]>([]);

    // Memoize distinct values of cities from the data array
    const startCities = useMemo(() => Array.from(new Set(data.map(raise => raise.city))), [data]);
    const stopsCities = useMemo(() => Array.from(new Set(data.map(raise => raise.cityTarget.goGoCity))), [data]);
    const finishCities = useMemo(() => Array.from(new Set(data.map(raise => raise.cityTarget.stopCity))), [data]);

    // Define function to filter data array based on selected checkboxes
    const filterData = useCallback(() => {
        let targetData = data;

        if (selectedStart.length) {
            targetData = targetData.filter(raise => selectedStart.includes(raise.city));
        }
        if (selectedStops.length) {
            targetData = targetData.filter(raise => selectedStops.includes(raise.cityTarget.goGoCity));
        }
        if (selectedFinish.length) {
            targetData = targetData.filter(raise => selectedFinish.includes(raise.cityTarget.stopCity));
        }

        return targetData;
    }, [selectedStart, selectedStops, selectedFinish, data]);

    // Trigger filtering and changing of data when selected checkboxes change
    useEffect(() => {
        changeFun(filterData());
    }, [filterData]);

    // Render checkbox groups inside a container component
    return (
        <Container
            alignItems="center"
            justify="center"
            display="flex"
            css={{ margin: "15px 0", maxWidth: "inherit", alignItems: "flex-start" }}
        >
            <CheckBoxGroup
                label="Звідки їдимо?"
                value={selectedStart}
                setValue={setSelectedStart}
                cityes={startCities}
            />
            <CheckBoxGroup
                label="Де будемо проїжджати?"
                value={selectedStops}
                setValue={setSelectedStops}
                cityes={stopsCities}
            />

            <CheckBoxGroup
                label="В яке місто їдимо?"
                value={selectedFinish}
                setValue={setSelectedFinish}
                cityes={finishCities}
            />
        </Container>
    );
};

// Export SelectCity component as the default export
export default SelectCity;