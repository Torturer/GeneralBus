import Image from "next/image";

import { Text } from "@nextui-org/react";
import styled from "../../styles/FligtTable/user.module.css"
import { FC, ReactNode } from "react";

type IProps = {
    src: string;
    name: string;
    children: ReactNode
}

const User:FC<IProps> = (props) => {
    return (
        <div className={styled.user_box}>
            <Image className={styled.user_box_avatar}
                src={props.src}
                width={40}
                height={40}
                quality={100}
                alt=""
            />
            <div>
                <Text className="user_box_text" b size={14}>{props.name}</Text>
                <div className={styled.user_box_link}>{props.children}</div>
            </div>

        </div>
    );
}

export default User;