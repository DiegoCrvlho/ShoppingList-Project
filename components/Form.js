import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");

  function handleSubmition(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, id: Date.now(), packed: false };

    onAddItems(newItem);

    setDescription("");
  }

  return (
    <form onSubmit={handleSubmition} className="form">
      <h3>What do you want in your shopping list?</h3>
      <input
        type="text"
        placeholder="items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="add-button">ADD</button>
    </form>
  );
}
