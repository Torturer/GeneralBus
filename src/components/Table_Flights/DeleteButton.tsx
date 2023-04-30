import { FC, useState } from "react"
import { IconButton } from "./icon/IconButton"
import { DeleteIcon } from "./icon/DeleteIcon"
import { Loading, Tooltip } from "@nextui-org/react"
import { useRouter } from "next/router"

type IProp = {
    id: string
}

const DeleteButton: FC<IProp> = ({ id }) => {

    const [showLoader, setShowLoader] = useState(false)
    const [statusLoader, setStatusLoader] = useState<"primary" | "success" | "error">(`primary`)

    const router = useRouter()


    const sendDelete = async (id: string) => {
        try {
            setShowLoader(true)
            const api = `/api/deletRaise?id=${id}`
            const url = process.env.NEXT_PUBLIC_API_URL + api
            await fetch(url);
            setStatusLoader("success")
            setTimeout(() => {
                router.reload()
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
                <Loading size="xs" color={statusLoader} >{statusLoader === "success" ? "Успіх" : statusLoader === "error"? "Помилка" : ""} </Loading>
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