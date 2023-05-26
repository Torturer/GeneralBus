import { FC, useState, useCallback } from "react";
import { IconButton } from "./icon/IconButton";
import { Loading, Tooltip } from "@nextui-org/react";
import { BiXCircle } from "react-icons/bi"
import { useRouter } from "next/router";

const DELETE_API = "/api/deleteRaise?id=";

type IProp = {
    id: string;
}

const DeleteButton: FC<IProp> = ({ id }) => {

    // Define showLoader state variable and setShowLoader function for controlling the loading indicator
    const [showLoader, setShowLoader] = useState(false)
    const [statusLoader, setStatusLoader] = useState<"primary" | "success" | "error" | "warning">(`primary`)
    const router = useRouter()


    /**
     * sendDelete function for deleting a raise with the given ID
     * @param {string} id - ID of the raise to be deleted
     */
    const sendDelete = useCallback(async () => {
        try {
            // Set showLoader state variable to true to show loading indicator
            setShowLoader(true)

            // Construct URL for delete API endpoint with the given raise ID
            const url = process.env.NEXT_PUBLIC_API_URL + DELETE_API + id;

            // Send DELETE request to delete API endpoint
            const result = await fetch(url);
            setStatusLoader("success")

            // Invoke setRaise function to update parent component with the deleted raise ID
            setTimeout(() => {
                setStatusLoader("warning")
            }, 500)
            setTimeout(() => {
                setShowLoader(false)
                router.push("/")

            }, 3500)


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
    }, [id]);

    return (
        <>
            {/* If showLoader is true, show loading indicator */}
            {showLoader ? (
                <Loading size="xs" color={statusLoader} >{statusLoader === "success" ? "Успіх" : statusLoader === "error" ? "Помилка" : ""} </Loading>
            ) : (
                // If showLoader is false, show delete button wrapped in tooltip
                <Tooltip content="Видалити рейс" color="error" >
                    {/* Invoke sendDelete function when delete button is clicked */}
                    <IconButton onClick={sendDelete}>
                        <BiXCircle size={20} fill="#FF0080" height={undefined} width={undefined} />
                    </IconButton>
                </Tooltip>
            )}
        </>
    )
}

export default DeleteButton;

