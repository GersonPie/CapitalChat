import React, { useEffect, useState, useContext } from 'react'
import { Left_Side } from "./../components/Left-side"
import { Buttons } from './../components/Buttons'
import { Texts_holder } from './../components/Texts_Holder'
import { AppContext } from '../App'


export const ChatPage = ()=>{
    const [listoftexts, setlistoftexts] = useState([]);
    const {IP} = useContext(AppContext);

    

    useEffect(()=>{
       const intervalID = setInterval(()=>{
            fetchdata()
        }, 1000);
        return ()=> clearInterval(intervalID)
    }, [])

    const fetchdata = async () => {
        try {
            const response = await fetch(IP, { method: 'get' });
    
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            } else {
                // Parse the response body as JSON
                const data = await response.json();
                
                if(localStorage.getItem('chats') === JSON.stringify(data) && localStorage.getItem('chats') !== '');
                else {
                    setlistoftexts(data);
                    localStorage.setItem('chats', JSON.stringify(data))
                }

                
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Left_Side username={username} />
            <Texts_holder listoftexts={listoftexts} addtext={setlistoftexts}/>
            <Buttons listoftexts={listoftexts} addtext={setlistoftexts} />
        </>
    )
}