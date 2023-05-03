import { FC, useState } from "react"
import { IListOFStops } from "../Table_Flights/data/data"



type IProps = {
    data: IListOFStops[] | undefined
}

const Table = ({ data }: IProps) => {



    const [listStops, setListStops] = useState(data)

    if (listStops) {
        return (

            listStops.map((stop, index) => {
                return (
                    <div key={stop.nameStop}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                )
            })

        )
    } else {
        return (
            <div>Нажаль зупинки для цього рейсу ще не додані</div>

        )
    }
}



export default Table