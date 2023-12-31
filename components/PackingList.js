import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItems,
  onToggleItems,
  onClearList,
}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="clearList">
        <button onClick={() => onClearList()}>Clear List</button>
      </div>
    </div>
  );
}
