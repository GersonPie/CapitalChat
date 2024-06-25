import { useContext } from "react";
import { AppContext } from "../App";
export const Left_Side = ()=>{
    const {username} = useContext(AppContext);    
    return (
        <div className="left-side">
            <h1>Chat 1</h1>

            <div className="chats">
                <p>chat 1</p>
                <p>chat 2</p>
                <p>chat 3</p>
            </div>
            
            <div className="myname">
                <h3>{username}</h3>
            </div>
        </div>
        )
}