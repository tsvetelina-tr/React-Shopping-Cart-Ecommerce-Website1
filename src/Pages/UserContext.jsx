import { createContext, useState } from "react";

const UserContext = createContext();

export const ContextProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState({});

    const addToCart = (index, name, price, source) => {
        setItems((prevState) => [...prevState, {index, name, price, source}])
    }

    const showProductData = (index, name, price, source) => {
        setItem((values) => ({...values, index, name, price, source}))
    }
    return (
        <UserContext.Provider value={{items, addToCart, setItems, showProductData}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;