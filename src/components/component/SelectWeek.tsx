import { FC, useEffect, useState } from "react"
import { IRegular } from "../Table_Flights/data/data"
import styles from "../../styles/SelectWeek.module.css"

type IProps = {
    changeFun: (data: IRegular) => void
    regular: IRegular | undefined
}




const SelectWeek: FC<IProps> = ({ regular, changeFun }) => {
    const [selectGroup, setSelectGroup] = useState<IRegular>(regular ?? {

        mon: false,
        tues: false,
        wed: false,
        thurs: false,
        fri: false,
        sat: false,
        sun: false

    })


    useEffect(() => { changeFun(selectGroup) }, [selectGroup])



    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "302px",
                padding: "6px"
            }}
        >

            <div
                className={`${styles.square} ${selectGroup.mon && styles.active}`}
                onClick={() => setSelectGroup((prevState) => ({ ...prevState, mon: !prevState.mon }))}
            >Пн
            </div >
            <div
                className={`${styles.square} ${selectGroup.tues && styles.active}`}
                onClick={() => setSelectGroup((prevState) => ({ ...prevState, tues: !prevState.tues }))}
            >Вт
            </div >
            <div
                className={`${styles.square} ${selectGroup.wed && styles.active}`}
                onClick={() => setSelectGroup((prevState) => ({ ...prevState, wed: !prevState.wed }))}
            >Ср
            </div >
            <div
                className={`${styles.square} ${selectGroup.thurs && styles.active}`}
                onClick={() => setSelectGroup((prevState) => ({ ...prevState, thurs: !prevState.thurs }))}
            >Чт
            </div >
            <div
                className={`${styles.square} ${selectGroup.fri && styles.active}`}
                onClick={() => setSelectGroup((prevState) => ({ ...prevState, fri: !prevState.fri }))}
            >Пт
            </div >
            <div
                className={`${styles.square} ${selectGroup.sat && styles.active}`}
                onClick={() => setSelectGroup((prevState) => ({ ...prevState, sat: !prevState.sat }))}
            >Сб
            </div >
            <div
                className={`${styles.square} ${selectGroup.sun && styles.active}`}
                onClick={() => setSelectGroup((prevState) => ({ ...prevState, sun: !prevState.sun }))}
            >Вс
            </div >


        </div>
    )
}


export default SelectWeek