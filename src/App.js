import { useState } from "react";
import { Message } from "./components/classes/Message";
import { Message as MessageFunc } from "./components/func/Message";
import './index.css'

export const App =()=>{
    const mess = 'fjrjkgdfjkgfgjk'; 
    // eslint-disable-next-line
    const [arr, setArr] = useState([1,2,3,4]);
    return (
        <>
        <Message msg={'to class'}/>
        <hr/>
        <MessageFunc msg={'to func'} msg3={mess}/>
        <ul>
            {arr.map((item, index)=> <li key={index}>{item}</li>)}
        </ul>
        </>
    )
}