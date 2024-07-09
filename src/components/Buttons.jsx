import { useState, useContext, useRef } from "react"
import { ErrorMessage } from "./ErrorMessage";
import { AppContext } from "../App";
import { ReloadButton } from '../components/ReloadButton'

export const Buttons = ({addtext, setError, FetchTimes})=>{
    const [in_text, setInText]= useState('');
    const {username, IP,setlistoftexts, listoftexts} = useContext(AppContext);

    const handleInput=(e)=>{
        if(e.key === 'Enter')handleClick();
        setInText(e.target.value);
    }
    const handleClick=()=>{
        
        const response = fetch(IP, {
            headers:{
                'Content-Type': "application/json"
            },
            body: JSON.stringify({text: in_text, text_username: username}),
            method: "POST"
        }).catch(err =>{
            setError(<ErrorMessage error="Sem conexão com servidor, verifique a Internet"/>)
        })
        if(response.ok)setTimeout(() => {setInText('')}, 50);

        localStorage.setItem('chats', "[]")
        
    }

    return (
        <div className="bottom-buttons">
            <div className="inputs-wrapper">
                {/* <input type="file" name="file" id="upload-file"/> */}
                <form className="userinput-wrapper" onSubmit={(e)=> e.preventDefault()}>

                    <input type="text" className="userInput" onChange={(e)=>handleInput(e)} autoFocus value={in_text}/>
                    <input type="submit" value="Send" className="sendBTN" onClick={handleClick} />
                    <ReloadButton FetchTimes={FetchTimes} listoftexts={listoftexts} setList={setlistoftexts}/>
                </form>
            </div>
        </div>
    )
}