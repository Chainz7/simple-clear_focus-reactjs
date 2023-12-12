import BG from "./design/Anime.png";
import Logo from "./design/Title.png";
import Plus from "./design/Plus.png";
import Tick from "./design/Tick.png";
import UnTick from "./design/UnTick.png";
import Detail from "./design/Detail.png";
import Delete from "./design/Delete.png";
import Light from "./design/Light Mode.png";
import LightWhite from "./design/Light Mode White.png";
import Dark from "./design/Dark Mode.png";
import Line from "./design/Line 3.png";
import { useState } from "react";

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

function Navbar({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(0);
  }

  return (
    <div className="navbar wrapper-row animated-opacity">
      <div className="navwra-container">
        <img src={Logo} alt="" className="navcon-logo animated-slidetop-fast" />
        <form className="navcon-form" onSubmit={handleSubmit}>
          <button className="animated-slidetop-slow">
            <img src={Plus} alt="Plus" />
          </button>
          <div className="navfor-input animated-slidetop-normal">
            <input
              type="text"
              placeholder="Add Item..."
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <select
              value={quantity}
              onChange={(e) => {
                setQuantity(Number(e.target.value));
              }}
            >
              {Array.from({ length: 16 }, (_, i) => i).map((num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}

function LeftUpperText() {
  return (
    <div className="lefup-container animated-opacity">
      <div className="lefupcon-1 animated-slideleftspec-slow">Time to</div>
      <div className="lefupcon-2 animated-slideleftspec-normal">Manage</div>
      <div className="lefupcon-3 animated-slideleftspec-fast">Your Focus</div>
    </div>
  );
}

function LeftMiddleText() {
  return (
    <div className="lefmicon-left-container animated-slideleft-fast">
      <span>List</span>
      <div>items</div>
    </div>
  );
}
function LeftMiddleTheme() {
  return (
    <div className="lefmicon-right-wrapper">
      <div className="lefmicon-rigwra-container">
        <div className="lefmicon-rigcon-up">Light Mode</div>
        <div className="lefmicon-rigcon-bot">
          <button>
            <img src={Light} alt="Light" className="light-normal" />
            <img src={LightWhite} alt="Light" className="light-hover" />
          </button>
          <button>
            <img src={Dark} alt="Moon" />
          </button>
        </div>
      </div>
    </div>
  );
}

function LeftItemFirst({ items, onDeleteItem, onToggleItem }) {
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
function LeftItemSecond({ items, onDeleteItem, onToggleItem }) {
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
function LeftItemThird({ items, onDeleteItem, onToggleItem }) {
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
function LeftItemFourth({ items, onDeleteItem, onToggleItem }) {
  const itemsToShow = items.slice(15, 20);
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
function LeftItemFifth({ items, onDeleteItem, onToggleItem }) {
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
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <div className="lefbocon-wrapper-container">
      <label className="lefbocon-wracon-text">
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        {item.packed ? (
          <img className="checked" src={Tick} alt="Checked" />
        ) : (
          <img className="unchecked" src={UnTick} alt="Uncheck" />
        )}
        {item.packed ? (
          <span className="lefbocon-wracon-through">
            {item.quantity > 0 && `${item.quantity} `}
            {item.description}
          </span>
        ) : (
          <span>
            {item.quantity > 0 && `${item.quantity} `}
            {item.description}
          </span>
        )}
      </label>
      <div className="lefbocon-wracon-button">
        <button>
          <img src={Detail} alt="Detail" />
        </button>
        <button onClick={() => onDeleteItem(item.id)}>
          <img src={Delete} alt="Delete" />
        </button>
      </div>
    </div>
  );
}

function RightSort({
  items,
  onSortAItems,
  onSortBItems,
  onSortCItems,
  onClearList,
}) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  const thresholds = [0, 25, 50, 75, 100];
  const nearestThreshold = thresholds.reduce((prev, curr) =>
    Math.abs(curr - percentage) < Math.abs(prev - percentage) ? curr : prev
  );

  return (
    <div className="rigwra-container">
      <div className="rigwra-container-up ">
        <div className="rigwra-conup-container animated-slideright-fast">
          <span>Clear</span>
          <div className="rigwra-conupcon-container">Focus</div>
        </div>
      </div>
      <div className="rigwra-container-mid">
        <span className="rigwra-container-small center animated-slideright-slow">
          SORT BY :
        </span>
        <button
          onClick={onSortAItems}
          className="rigwra-conupcon-container rigwra-container-small btn-color animated-slideright-fast"
        >
          INPUT ORDER
        </button>
        <button
          onClick={onSortBItems}
          className="rigwra-conupcon-container rigwra-container-small btn-white animated-slideright-normal"
        >
          DESCRIPTION
        </button>
        <button
          onClick={onSortCItems}
          className="rigwra-conupcon-container rigwra-container-small btn-white animated-slideright-slow"
        >
          TICK STATUS
        </button>
      </div>
      <div className="rigwra-container-bot">
        <button
          onClick={onClearList}
          className="rigwra-conupcon-container rigwra-container-small btn-color animated-slideright-fast"
        >
          CLEAR LIST
        </button>
      </div>
      <div className="rigwra-container-wrapper">
        <div className="rigwra-container-bar">
          <div className="rigwra-conbar-percentage animated-slideright-slow">
            {thresholds.map((threshold) => (
              <span
                key={threshold}
                style={
                  threshold === nearestThreshold ? { fontWeight: "bold" } : {}
                }
              >
                {threshold}%
              </span>
            ))}
          </div>
          <div className="rigwra-conbar-progress animated-slideright-fast">
            <div></div>
          </div>
        </div>
        <div className="rigwra-container-total">
          <div className="rigwra-contot-image">
            <img src={Line} alt="Line" className="animated-slideright-fast" />
          </div>
          <div className="rigwra-contot-up">
            <span className="rigwra-contotup-small up animated-slideright-slow">
              Current
            </span>
            <span className="rigwra-contotup-big animated-slideright-fast">
              {numPacked < 10 ? `0${numPacked}` : numPacked}
            </span>
          </div>
          <div className="rigwra-contot-bot">
            <span className="rigwra-contotup-big animated-slideright-fast">
              {numItems < 10 ? `0${numItems}` : numItems}
            </span>
            <span className="rigwra-contotup-small down animated-slideright-slow">
              Total List
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
