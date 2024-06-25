import { useContext } from "react";
import { AppContext } from "../App";

export const Text = ({text, text_username, Dredirect})=>{
    const {username} = useContext(AppContext);
    let side;
    if(text_username == username)side = 'text-right';
    else side = "other";
    const id = new Date().getTime();
    //setTimeout(() => {location.href = `#${id}`}, 50);
    return (
        <div className={"text " + side} id={id}>
            <h4 className="text-header">~ {text_username}</h4>
            {text}
        </div>
    )
}