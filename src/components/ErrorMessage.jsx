import { useEffect, useState } from "react"


export const ErrorMessage =({error})=>{
    const [Userclass,setClass]=useState(false)
    useEffect(
        ()=>{
            setClass(true)
        }
    , [])

    return (
        <div className="errormessage animate-error" >
            <p>{error}</p>
        </div>
    )
}