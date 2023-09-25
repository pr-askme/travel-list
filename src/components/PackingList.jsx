import { useState } from "react";

export function PackingList({
  itemsList,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy == "input") {
    sortedItems = itemsList;
  } else if (sortBy == "description") {
    sortedItems = itemsList
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy == "packed") {
    sortedItems = itemsList
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              value={item.packed}
              onChange={() => onToggleItem(item.id)}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
              {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={() => setSortBy(event.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="packed">Sort by packed</option>
          <option value="description">Sort by description</option>
        </select>
        <button onClick={onClearItems}>Clear List</button>
      </div>
    </div>
  );
}
