import Item from "./Item";

export default function LeftItemSecond({ items, onDeleteItem, onToggleItem }) {
  const itemsToShow = items.slice(5, 10);
  return itemsToShow.length > 0 ? (
    <div className="lefbocon-wrapper animated-slidebot-fast animated-opacity">
      {itemsToShow.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={onDeleteItem}
          onToggleItem={onToggleItem}
        />
      ))}
    </div>
  ) : null;
}
