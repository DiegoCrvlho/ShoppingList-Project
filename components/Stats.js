export default function Stats({ items }) {
  if (!items.length)
    return <p className="stats">Start adding some objects to your list!!!</p>;

  const numTotalItems = items.length;
  const numTotalPackedItems = items.filter((num) => num.packed).length;
  const numPorcentage = Math.round((numTotalPackedItems / numTotalItems) * 100);
  return (
    <footer className="stats">
      {numPorcentage === 100
        ? "You got everything!!!"
        : `You have ${numTotalItems} items on your list, and you already packed ${numTotalPackedItems} (${numPorcentage}%)`}
    </footer>
  );
}
