import React, {
    Component
} from "react"
import ListItem from './ListItem'

class List extends Component {
    render() {
        const { items, handleClickItem, readonly } = this.props
        const listItems = items ? items.map(product => (
            <ListItem
                key={product.id}
                item={product}
                clickItem={handleClickItem}
                readonly={readonly}
            />
        ))
    : " ";

        return (
            <>
                <ul className="list">
                    {listItems}
                </ul>
            </>
        )
    }
}


export default List;