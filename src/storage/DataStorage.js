import React, {useEffect, useState} from "react";

export const DataContext = React.createContext({
    data: {},
    setData: () => {
    }
})

const DataContextProvider = (props) => {
    const [data, setData] = useState({})

    useEffect(() => {
        setData(props.data)
    }, [])

    return <DataContext.Provider value={{data: data, setData: setData}}>
        {props.children}
    </DataContext.Provider>
}

export default DataContextProvider