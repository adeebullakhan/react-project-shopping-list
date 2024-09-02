import { useState } from "react";

const Form = ({handleAddItems}) => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product) {
      const newTodo = {
        id: Date.now(),
        packed: false,
        product,
        quantity,
      };
      console.log(newTodo);
      handleAddItems(newTodo)
      setProduct("");
      setQuantity(1);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {[...Array(20)].map((_, index) => (
          <option value={index + 1} key={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="enter a name"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      ></input>
      <button type="submit">add</button>
    </form>
  );
};
export default Form;
