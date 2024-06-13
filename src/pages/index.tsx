import React, {useState} from "react";
import DDList from "../components/DDList";
import DDItem from "../components/DDItem";

export default function index(){
    const [showList, setList] = useState(false);

    const info = ["a", "b"]

    return (
            <main>
                <h1>Test</h1>
                <DDItem name="Test" info={info} listState={[showList, setList]}/>
            </main>
    )
}