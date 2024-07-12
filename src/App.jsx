import React, { useState, createContext, useEffect} from 'react'


import { ChatPage } from './pages/chatPage'
import { Login } from './pages/login'

export const AppContext = createContext()

const App = () => {

  const [username, setUsername]= useState('')
  const [isLogged, setIsLogged]= useState(false)
  const [loadedChats, setLoadedChats]= useState(false)
  const [listoftexts, setlistoftexts] = useState([]);
  const [userError, setError] = useState('');
  const [IP, setIP]=useState('http://localhost:3000/rooms1')
  
  const ContextData ={
    username,
    setUsername,
    setIsLogged,
    isLogged,
    loadedChats,
    setLoadedChats,
    IP,
    listoftexts,
    setlistoftexts,
    userError,
    setError,
    
  }

  useEffect(()=>{
    localStorage.setItem('chats', "[]");
  },[isLogged])


  return (
    <AppContext.Provider value={ContextData}>

      <div className='app'>

        {isLogged && <ChatPage/>}
        {!isLogged && <Login/>}
        
      </div>
    </AppContext.Provider>
  )
}

export default App
