import {useState} from "react";
import styles from "../styles/DDItem.module.css"

type UserProps = {
    name : string
    info : string[]
    listState : ReturnType<typeof useState<boolean>> 
}

const DDItem: React.FC<UserProps> = ({name, info, listState : [showList, setList]}) => {
    const infoList = info.map((item) => {
        return <li>{item}</li>
    })

    const titleButton = (
        <div className = {styles.titleButton}>
        <button onClick={() => setList(!showList)}>
            {showList ? "▼" : "►"} {name}
        </button>
        </div>
    )

    return (
        <div>
            {titleButton}
            {showList}
            <div>
                {showList && infoList}
            </div>
        </div>
    )
}

export default DDItem