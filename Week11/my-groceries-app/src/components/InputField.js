import React, { useState } from "react";

const InputField = (props) => {
  const [product, setProduct] = useState("");

return (
  <form className="grocerylist__container" onSubmit={(e) => props.addGroceryToGroceryList(e, product)}>
      <input
        className="grocerylist__input"
        type="text"
        name="title"
        value={product}
      onChange={(e) => setProduct(e.target.value)}
        placeholder="Add your groceries."
      />
      <button className="grocerylist__button" type="submit" value="submit">
        Add
      </button>
    </form>
  );
};

export default InputField;