import React from "react"
import InputField from "./InputField"
import List from "./List"

const GroceryList = (props) => {
    return (
        <>
            <InputField addGroceryToGroceryList={props.addGroceryToGroceryList} />
            <List
                key={props.id}
                value={props.value}
                readOnly={false}
                getClickGroceryItem={props.getClickGroceryItem}
            />
        </>
    );
};

export default GroceryList