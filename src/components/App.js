import { useState } from "react";

import Navbar from "./Navbar";
import LeftUpperText from "./LeftUpperText";
import LeftMiddleText from "./LeftMiddleText";
import LeftMiddleTheme from "./LeftMiddleTheme";
import LeftItemFirst from "./LeftItemFirst";
import LeftItemSecond from "./LeftItemSecond";
import LeftItemThird from "./LeftItemThird";
import LeftItemFourth from "./LeftItemFourth";
import LeftItemFifth from "./LeftItemFifth";
import RightSort from "./RightSort";

import BG from "../assets/Anime.png";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleOrderItems() {
    setItems((prevItems) => [...prevItems].sort((a, b) => a.id - b.id));
  }

  function handleSortItems() {
    setItems((prevItems) =>
      [...prevItems].sort((a, b) => a.description.localeCompare(b.description))
    );
  }

  function handlePackedItems() {
    setItems((prevItems) =>
      [...prevItems].sort((a, b) => {
        if (a.packed && !b.packed) {
          return 1;
        }
        if (!a.packed && b.packed) {
          return -1;
        }
        return a.description.localeCompare(b.description);
      })
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <div className="wrapper-row animated-opacity-slow">
        <img src={BG} alt="" className="background" />
      </div>
      <Navbar onAddItems={handleAddItems} />
      <div className="wrapper-row">
        <div className="maiwra-container">
          <div className="wrapper-column">
            <div className="lefup-wrapper">
              <LeftUpperText />
            </div>
            <div className="lefmid-container animated-opacity">
              <div className="lefmicon-left">
                <LeftItemFifth
                  items={items}
                  onDeleteItem={handleDeleteItem}
                  onToggleItem={handleToggleItem}
                />
                <LeftMiddleText />
              </div>
              <LeftMiddleTheme />
            </div>
            <div className="lefbot-container">
              <LeftItemFirst
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
              />
              <LeftItemSecond
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
              />
              <LeftItemThird
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
              />
              <LeftItemFourth
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
              />
            </div>
          </div>
          <div className="right-wrapper animated-opacity">
            <RightSort
              items={items}
              onSortAItems={handleOrderItems}
              onSortBItems={handleSortItems}
              onSortCItems={handlePackedItems}
              onClearList={handleClearList}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
