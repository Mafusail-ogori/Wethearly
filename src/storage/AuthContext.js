import React, {useEffect, useState} from "react";
import getRole from "../utils/getRole";

export const AuthContext = React.createContext({
    role: "none",
    setRole: () => {
    }
})

const AuthContextProvider = (props) => {
    const [role, setRole] = useState("none")

    useEffect(() => {
        if (getRole()) {
            setRole(getRole())
        }
    }, [])

    return <AuthContext.Provider value={{role: role, setRole: setRole}}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContextProvider