import { FC, useState, useCallback } from "react";
import { IconButton } from "../Table_Flights/icon/IconButton";
import { Loading, Tooltip } from "@nextui-org/react";
import { IDataRaise } from "../Table_Flights/data/data";
import { BiXCircle } from "react-icons/bi";

type IProp = {
    id: string;
    raise: IDataRaise;
    setRaise: (updatedRaise: IDataRaise) => void

}


const DeleteButtonStop: FC<IProp> = ({ id, raise, setRaise }) => {

    const [showLoader, setShowLoader] = useState(false)
    const [statusLoader, setStatusLoader] = useState<"primary" | "success" | "error">(`primary`)


    const confirmedStops = () => raise.listOfStops.filter((value) => value.id !== id)

    const deleteStop = async () => {
        try {
            let api = `/api/updateRaise?id=${raise._id}`
            let url = process.env.NEXT_PUBLIC_API_URL + api
            let newRaiseInfo = {
                ...raise,
                listOfStops: confirmedStops()
            }

            setShowLoader(true)
            let respons = await fetch(url, {
                method: "POST",
                body: JSON.stringify(newRaiseInfo),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
            });

            let result = await respons.json()
            setStatusLoader("success")

            // Invoke setRaise function to update parent component with the deleted raise ID
            setTimeout(() => {
                setShowLoader(false)
                setStatusLoader("primary")
                setRaise(newRaiseInfo)
            }, 500)

        } catch (error) {
            console.log(error)

            setStatusLoader("error")
            setTimeout(() => {
                setShowLoader(false)
                setStatusLoader("primary")
            }, 500)

            // Show error message and give option to retry
            setShowLoader(false);
            alert("An error occurred while deleting the raise. Please try again.");
        }
    }


    return (
        <>
            {/* If showLoader is true, show loading indicator */}
            {showLoader ? (
                <Loading size="xs" color={statusLoader} >{statusLoader === "success" ? "Успіх" : statusLoader === "error" ? "Помилка" : ""} </Loading>
            ) : (
                // If showLoader is false, show delete button wrapped in tooltip
                <Tooltip content="Видалити зупинку" color="error">
                    {/* Invoke sendDelete function when delete button is clicked */}
                    <IconButton onClick={deleteStop}>
                        <BiXCircle size={20} fill="#FF0080" height={undefined} width={undefined} />
                    </IconButton>
                </Tooltip>
            )}
        </>
    )
}

export default DeleteButtonStop;