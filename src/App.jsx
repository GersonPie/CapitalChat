import React, { useState, createContext} from 'react'


import { ChatPage } from './pages/chatPage'
import { Login } from './pages/login'

export const AppContext = createContext()

const App = () => {
  const [username, setUsername]= useState('')
  const [isLogged, setIsLogged]= useState(false)
  const [loadedChats, setLoadedChats]= useState(false)
  const [IP, setIP]=useState('http://127.0.0.1:3000/rooms1')

  const ContextData ={
    username,
    setUsername,
    setIsLogged,
    isLogged,
    loadedChats,
    setLoadedChats,
    IP
  }


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
