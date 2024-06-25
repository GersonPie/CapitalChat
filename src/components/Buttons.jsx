import { useState, useContext, useRef } from "react"

import { AppContext } from "../App";

export const Buttons = ({addtext})=>{
    const [in_text, setInText]= useState('');
    const {username, IP} = useContext(AppContext);

    const handleInput=(e)=>{
        if(e.key === 'Enter')handleClick();
        setInText(e.target.value);
    }
    const handleClick=()=>{
        
        fetch(IP, {
            headers:{
                'Content-Type': "application/json"
            },
            body: JSON.stringify({text: in_text, text_username: username}),
            method: "POST"
        })
        setTimeout(() => {
            setInText('')
        }, 50);
        
    }

    const inputRef = useRef();

  const handleBlur = () => {
    inputRef.current.focus();
  };
    return (
        <div className="bottom-buttons">
            <div className="inputs-wrapper">
                {/* <input type="file" name="file" id="upload-file"/> */}
                <form className="userinput-wrapper" onSubmit={(e)=> e.preventDefault()}>

                    <input type="text" className="userInput" onChange={(e)=>handleInput(e)} ref={inputRef} onblur={handleBlur} autoFocus value={in_text}/>
                    <input type="submit" value="Send" className="sendBTN"  onClick={handleClick} />
                </form>
            </div>
        </div>
    )
}