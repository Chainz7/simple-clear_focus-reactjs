import Item from "./Item";

export default function LeftItemFifth({ items, onDeleteItem, onToggleItem }) {
  const shouldRender = items.length > 20 && items[20] !== undefined;
  return shouldRender ? (
    <div className="lefbocon-wrapper animated-opacity">
      <Item
        key={items[20].id}
        item={items[20]}
        onDeleteItem={onDeleteItem}
        onToggleItem={onToggleItem}
      />
    </div>
  ) : null;
}
