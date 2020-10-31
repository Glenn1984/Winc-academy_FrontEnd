import React, {
    Component
} from "react"
import ListItem from './ListItem'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            groceryItems: [
                { id: 1, title: "Appels" },
                { id: 2, title: "Chips" },
                { id: 3, title: "Cola" },
                { id: 4, title: "Drop" },
                { id: 5, title: "Energy drink" },
                { id: 6, title: "Koffie" },
                { id: 7, title: "Pak melk" },
                { id: 8, title: "Snoep" },
                { id: 9, title: "Suiker" },
            ]
        }
    }
    render() {

        return (
            <ul className="list">
                {this.state.groceryItems.map(product => <ListItem key={product.id} value={product.title} />)}
            </ul>
        )
    }
}

export default List;