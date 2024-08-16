'use client'

const {createContext, useState, useEffect } = require("react")

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [user,setUser] = useState(null)
    
    useEffect(() => {        
        if(localStorage.getItem('user')) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
        
    },[])

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
