import { createContext, useState, useEffect } from 'react'

const loginContext = createContext()

const LoginProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false)



    const data = {
        loggedIn,
        setLoggedIn
    }

    return <LoginProvider value={data}>{children}</LoginProvider>
}

export { LoginProvider } 
export default loginContext