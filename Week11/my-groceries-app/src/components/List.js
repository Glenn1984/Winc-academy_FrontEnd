import React from "react"
import ListItem from "./ListItem"

const List = (props) => {
    const products = props.value.map(product =>
        <ListItem
            key={product.id}
            value={product.title}
            readOnly={props.readOnly}
            amount={product.amount}
            getClickGroceryItem={props.getClickGroceryItem}
        />
    );

    return (
        <>
            <ul className="list">{products}</ul>
        </>
    );
};

export default List