import React from "react"

const ListItem = ({item, readonly, clickItem }) => {
    return (
        <li
            key={item.id}
            className="list__item"
            value={item.title}
            onClick={clickItem}
        >
            <span>{item.title || ""}</span>
            <span>{readonly ? `Amount: ${item.amount}` : ""}</span>
        </li>
    )
}

export default ListItem