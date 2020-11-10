import React, {Component} from "react"
import ShoppingCart from "./components/ShoppingCart"
import GroceryList from "./components/GroceryList"

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groceryItems: [
                { id: 1, title: "Apple" },
                { id: 2, title: "Coke" },
                { id: 3, title: "Coffee" },
                { id: 4, title: "Melon" },
            ],
            shoppingListItems: [{ id: 1, title: "Meat", amount: 2 }],
        };
        
    };

render() {
    const groceryListItems = this.state.groceryItems;
    const shoppingListItems = this.state.shoppingListItems;

    const addNewProductToList = (product => {
        const newProduct = {
            id: shoppingListItems.length + 1,
            title: product,
            amount: 1,
        }
        this.setState(prevState => {
            const newShoppingList = prevState.shoppingListItems.concat(newProduct);
            return { shoppingListItems: newShoppingList };
        });
    });

    const emptyCart = () => { this.setState({ shoppingListItems: [] }) };

    const addAmount = (addProduct => {
        const shoppingList = [...shoppingListItems];
        const newShoppingList = shoppingList.map(product => {
            if (product.title === addProduct) {
                product.amount++;
            }
            return product;
        });
        this.setState({ shoppingListItems: newShoppingList });
    });


    const getClickGroceryItem = (value) => {
        const clickedProduct = value;
        const shoppingListProduct = shoppingListItems.filter(product => product.title === clickedProduct);
        shoppingListProduct.length === 0 ? addNewProductToList(clickedProduct) : addAmount(clickedProduct);
    };

    const addGroceryToGroceryList = (e, product) => {
        e.preventDefault();
        this.setState(prevState => {
            const updateId = prevState.groceryItems.length + 1;
            return {
                groceryItems: [{ id: updateId, title: product }, ...prevState.groceryItems]
            };
        });
    };

    return (
        <>
            <div className="grocerylist">
                <h1 className="grocerylist__text">Grocery list</h1>
                <GroceryList
                    addGroceryToGroceryList={addGroceryToGroceryList}
                    value={groceryListItems}
                    getClickGroceryItem={getClickGroceryItem}
                />
            </div>
            <hr />
            <div className="shoppingcart">
                <h1 className="shoppingcart__text">Shoppingcart</h1>
                <ShoppingCart
                    handleClickEmptyCart={emptyCart}
                    value={shoppingListItems}
                />
            </div>
            <hr />
        </>
        );
    };
};

export default Container