import React, { FC } from "react"
import { Loading } from "@nextui-org/react"
import styles from "../../styles/Layaout/Loader/Loader.module.css"

type IProps = {
    status: "default" | "success" | "error" | "primary"
}

const Loader: FC<IProps> = ({ status }): JSX.Element => {
    return (
        <div className={styles.loader_box}>
            <Loading
                className={styles.loader}
                size="xl"
                textColor={status}
                color={status}>
                {status === "success" ? "Успішно" : status === "error" && "Помилка"}
            </Loading>
        </div>
    )
}

export default Loader