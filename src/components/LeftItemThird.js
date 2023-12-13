import Item from "./Item";

export default function LeftItemThird({ items, onDeleteItem, onToggleItem }) {
  const itemsToShow = items.slice(10, 15);
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
