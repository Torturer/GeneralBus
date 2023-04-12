import Image from "next/image";
import styled from "./user.module.css"
import { Text } from "@nextui-org/react";

const User = (props) => {
    return (
        <div className={styled.user_box}>
            <Image className={styled.user_box_avatar}
                src={props.src}
                width={40}
                height={40}
                quality={100}
                alt=""
                objectFit="contain"
            />
            <div>
                <Text className="user_box_text" b size={14}>{props.name}</Text>
                <div className={styled.user_box_link}>{props.children}</div>
            </div>

        </div>
    );
}

export default User;