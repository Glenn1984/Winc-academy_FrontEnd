import React from "react"
import List from "./List"



const ShoppingCart = ({ groceryItems, handleClickEmptyCart }) => {
    return (
        <>
            <button onClick={handleClickEmptyCart}>
                Empty shoppingcart
            </button>
            <List
                readonly={true}
                products={groceryItems}
            />
        </>
    )
};

export default ShoppingCart