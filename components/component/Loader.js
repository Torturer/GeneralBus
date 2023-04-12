import { Loading } from "@nextui-org/react"
import styles from "./Loader.module.css"

const Loader = (props) => {
    return (
        <div className={styles.loader_box}>
            <Loading
                className={styles.loader}
                size="xl"
                textColor={props.status}
                color={props.status}>
                {props.status === "success" ? "Успіх" : props.status === "error" && "Помилка"}
            </Loading>
        </div>
    )
}

export default Loader