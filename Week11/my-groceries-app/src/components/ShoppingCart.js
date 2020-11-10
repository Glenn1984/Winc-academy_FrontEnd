import React from "react"
import List from "./List"


const ShoppingCart = (props) => {
    return (
        <>
            <button
                onClick={props.handleClickEmptyCart}
                className="button">
                Empty cart
            </button>
            <List
                value={props.value}
                readOnly={true}
            />
        </>
    );
};

export default ShoppingCart