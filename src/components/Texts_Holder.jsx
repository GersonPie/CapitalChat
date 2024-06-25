import { useState, useContext, useEffect } from "react"
import { AppContext } from "../App";

import { Text } from "./Text";

export const Texts_holder=({listoftexts})=>{
    const {username} = useContext(AppContext);
    
    useEffect(()=>{
        setTimeout(() => {location.href = '#last'}, 50)
    }, [listoftexts])
    return (
        <div className="text-wrapper">
            
            {
            listoftexts.map(element =>{
  
                return <Text text={element.text} text_username={element.text_username} />;
            })
            }
           <div id="last"></div>
           
        </div>
    )
}