import { useState, useEffect, useContext, createContext } from "react";
import axios from 'axios'
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    let [allProducts, setAllProducts] = useState();

    async function fetchData() {
        await axios.get('http://localhost:3000')
            .then((res) => {
                // console.log(res);
                setAllProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

    }

    useEffect(() => {
        fetchData();
    }, [])



    return <AuthContext.Provider value={{ fetchData, allProducts }}>
        {children}
    </AuthContext.Provider>
}
export const useAuth = () => {
    return useContext(AuthContext);
}