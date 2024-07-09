import React, { useEffect, useState, useContext } from 'react'
import { Left_Side } from "./../components/Left-side"
import { Buttons } from './../components/Buttons'
import { Texts_holder } from './../components/Texts_Holder'
import { AppContext } from '../App'
import { ErrorMessage } from '../components/ErrorMessage'


export const ChatPage = ()=>{
    
// Variables********************************************
    let FetchTimes = 0;
    const {IP,listoftexts,setlistoftexts,userError,setError} = useContext(AppContext);
    
//******************************************************


//Variables life cicle *********************************
    useEffect(()=>{
       const intervalID = setInterval(()=>{
            if(FetchTimes < 3)fetchdata();
            
            
        }, 2000);
        return ()=> clearInterval(intervalID)
    }, [listoftexts])

    useEffect(()=>{
        //if an error was triggered
        
        if(userError != 0){
            
            setTimeout(() => {setError('')}, 4900);
            if(typeof(listoftexts[listoftexts.length-1]) === 'string'){
                listoftexts.splice(listoftexts.length-1, 1)
    
            }
            else{
                
                
            }
        }

    },[userError])
//********************************************************


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
            FetchTimes ++
            console.log('fetch failed for the ', FetchTimes, 'th time')
            if(FetchTimes >= 3){
                setError(<ErrorMessage error={"Não foi possivel carregar messagens,\n Verifique a internet"}/>)
                console.error(error);
            }
        }
    };

    return (
        <div className='whole-wrapper'>
            {/* <Left_Side username={username} /> */}
            <Texts_holder listoftexts={listoftexts} addtext={setlistoftexts}/>
            <Buttons listoftexts={listoftexts} setError={setError} FetchTimes={FetchTimes} addtext={setlistoftexts} />
            
            {userError}
        </div>
    )
}