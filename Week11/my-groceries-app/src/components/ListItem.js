import React from "react"

const ListItem = (title) => {

    return (
        <li
            key={title.key}
            className="list__item"
        >
    {title.value}
    </li>
    )
}

export default ListItem