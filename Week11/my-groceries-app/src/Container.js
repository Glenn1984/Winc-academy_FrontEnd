import React, { Component } from "react";
import GroceriesList from "./components/GroceriesList";
import ShoppingCart from "./components/ShoppingCart";




class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groceryInput: "",
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
            ],
            shoppingListItems: [
                { id: 1, title: "Chips", amount: 5 },
            ]
        };
    };

    render() {
        const addNewShoppingListItem = itemTitle => {
            const newShoppingItem = {
                id: this.state.shoppingListItems.length + 1,
                title: itemTitle,
                amount: 1
            };

            this.setState(prevState => {
                const newList = prevState.shoppingListItems.concat(newShoppingItem)
                return {
                    shoppingListItems: newList
                };
            });
        };

        const addAmountToItem = itemTitle => {
            const shoppingList = [...this.state.shoppingListItems];
            const newList = shoppingList.map(shoppingItem => {
                if (shoppingItem.title === itemTitle) {
                    shoppingItem.amount++;
                };
                return shoppingItem
            });
            this.setState({ shoppingListItems: newList });
        };

        const handleClickGroceryItem = event => {
            const clickedItem = event.target.getAttribute("value");
            const currentShoppingList = this.state.shoppingListItems;
            const shoppingListItem = currentShoppingList.filter(item => item.title === clickedItem);

            shoppingListItem.length === 0 ? addNewShoppingListItem(clickedItem) : addAmountToItem(clickedItem);
        };

        const emptyCart = () => {
            this.setState({ shoppingListItems: [] });
        };

        const addGrocery = grocery => {
            const item = { id: this.state.groceryItems.length + 1, title: grocery };
            this.setState({ groceryItems: this.state.groceryItems.concat(item) });
        };


        return (
            <div className="container">
                <div className="groceries">
                    <h2>Grocerieslist</h2>
                    <GroceriesList
                        addGrocery={addGrocery}
                        groceryItems={this.state.groceryItems}
                        handleClickGroceryItem={handleClickGroceryItem}
                    />
                </div>
                <div>
                    <h2>Shoppingcart</h2>
                    <ShoppingCart
                        handleClickEmptyCart={emptyCart}
                        groceryItems={this.state.shoppingListItems}
                    />
                </div>
            </div>
        );
    };
};

export default Container