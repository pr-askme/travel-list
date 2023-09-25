export function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPerCent = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPerCent == 100
          ? "All Done! You are ready to go✈🌍 "
          : items.length == 0
          ? "Start packing! Add items to your list"
          : `You have ${numItems} items on your list and you have packed ${packedItems} 
        (${packedPerCent}%)`}
      </em>
    </footer>
  );
}
