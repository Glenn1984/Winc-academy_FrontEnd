import React from "react"
import List from "./List"
import InputField from "./InputField"


const GroceriesList = ({ groceryItems, handleClickGroceryItem, addGrocery }) => {
    return (
        <>
            <InputField onSubmit={addGrocery} />
            <List
                items={groceryItems}
                handleClickitem={handleClickGroceryItem}
            />
        </>
    )
}

export default GroceriesList