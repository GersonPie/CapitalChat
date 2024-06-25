import React, { useState, useContext } from 'react'
import { AppContext } from '../App';

//componet 
export const Login = ()=>{
    const {isLogged, setIsLogged, username, setUsername} = useContext(AppContext);
    const [errormessage, setError] = useState("")
    
    const handleInput=(e)=>{
        setUsername(e.target.value)
        if(username.length>=2 && username.length<16){

            setError(`nick name ${e.target.value} disponivel👍✌`)
    
        }else{
            setError("Nick Name Invalido, tente Outro❌☹")
        }
    }

    const handleClick=()=>{
        if(username.length>=2 && username.length<16){

            setIsLogged(true);
        }else{
            setError("Nick Name Invalido, tente Outro")
        }
    }
    return(
        <form className="login-page" onSubmit={(e)=>e.preventDefault()}>
            <h2>Nick Name</h2>
            <input type="text" name='usename' className='username' id='username' onChange={(e)=>handleInput(e)} onInput={(e)=>handleInput(e)} value={username} autoFocus/>
            
            <input type="submit" value='Entrar' className='submitBTN' onClick={handleClick} />
            {errormessage}
        </form>
    )
}