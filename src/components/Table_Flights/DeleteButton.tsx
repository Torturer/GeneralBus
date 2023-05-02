import { FC, useState, Dispatch, SetStateAction } from "react"
import { IconButton } from "./icon/IconButton"
import { DeleteIcon } from "./icon/DeleteIcon"
import { Loading, Tooltip } from "@nextui-org/react"
import { useRouter } from "next/router"
import { IDataRaise } from "./data/data"

type IProp = {
    id: string;
    setRaise: (id:string) => void;
}

const DeleteButton: FC<IProp> = ({ id, setRaise }) => {

    const [showLoader, setShowLoader] = useState(false)
    const [statusLoader, setStatusLoader] = useState<"primary" | "success" | "error">(`primary`)

    const router = useRouter()


    const sendDelete = async (id: string) => {
        try {

            setShowLoader(true)
            const api = `/api/deletRaise?id=${id}`
            const url = process.env.NEXT_PUBLIC_API_URL + api

            let result = await fetch(url);


            setStatusLoader("success")
            setTimeout(() => {
                setRaise(id)
            }, 1000)


        } catch (error) {
            console.log(error)
            setStatusLoader("error")
            setTimeout(() => {
                router.reload()
            }, 1000)
        }
    }

    return (
        <>
            {showLoader ?
                <Loading size="xs" color={statusLoader} >{statusLoader === "success" ? "Успіх" : statusLoader === "error" ? "Помилка" : ""} </Loading>
                :
                <Tooltip
                    content="Видалити рейс"
                    color="error"
                >
                    <IconButton onClick={() => sendDelete(id)}>
                        <DeleteIcon size={20} fill="#FF0080" height={undefined} width={undefined} />
                    </IconButton>
                </Tooltip>}
        </>
    )
}

export default DeleteButton