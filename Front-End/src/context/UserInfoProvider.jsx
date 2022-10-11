import { createContext, useState } from "react";

const UserInfoContext = createContext({});

export const UserInfoProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    return (
        <UserInfo.Provider value={{ auth, setAuth }}>
            {children}
        </UserInfo.Provider>
    )
}

export default UserInfoContext;