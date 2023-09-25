import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function Form({ onAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!description) return;
    const newItems = { id: Date.now(), quantity, description, packed: false };
    onAddItems(newItems);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need on your vacation?</h3>
      <select
        value={quantity}
        onChange={(input) => setQuantity(input.target.value)}
      >
        {Array.from(Array(20)).map((e, i) => (
          <option value={i + 1} key={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item.."
        value={description}
        onChange={(input) => setDescription(input.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
