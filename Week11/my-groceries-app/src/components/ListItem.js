import React from "react"

const ListItem = (props) => {
    return (
        <li
            className="list__item"
            value={props.value}
            onClick={() => props.getClickGroceryItem(props.value)}
        >
            <span>{props.value}</span>
            <>
                {props.readOnly ? <span className="list__amount">Amount: {props.amount}</span> : ""}
            </>
        </li>
    )
};

export default ListItem