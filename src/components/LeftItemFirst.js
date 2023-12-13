import Item from "./Item";

export default function LeftItemFirst({ items, onDeleteItem, onToggleItem }) {
  const itemsToShow = items.slice(0, 5);
  return itemsToShow.length > 0 ? (
    <div className="lefbocon-wrapper animated-slidebot-slow animated-opacity">
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
