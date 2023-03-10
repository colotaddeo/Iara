import { createContext, useState } from "react";

const UserInfoContext = createContext({});

export const UserInfoProvider = ({ children }) => {
    const [Info, setInfo] = useState({});

    return (
        <Info.Provider value={{ Info, setInfo }}>
            {children}
        </Info.Provider>
    )
}

export default UserInfoContext;