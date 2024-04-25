import { createContext, useEffect, useState } from "react";

export let cityDataContext= createContext()

function CityDataContext ({children}){
    let [citydata, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/Data.json")
                const data = await res.json()
                setData(data)
                // console.log("testing",data)
            } catch (err) {
                console.log('error while fetching data', err)
            }
        }
        fetchData()
    }, [])

    return <cityDataContext.Provider value={citydata}>
        {children}
    </cityDataContext.Provider>
}

export default CityDataContext;