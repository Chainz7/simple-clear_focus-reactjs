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

const initialItems = [
  { id: 1, description: "Passports", quantity: 0, packed: false },
  { id: 2, description: "Socks", quantity: 1, packed: false },
  { id: 3, description: "Socks", quantity: 12, packed: false },
  { id: 4, description: "Socks", quantity: 12, packed: false },
  { id: 5, description: "Socks", quantity: 12, packed: false },
  { id: 6, description: "Socks", quantity: 12, packed: false },
  { id: 7, description: "Socks", quantity: 12, packed: false },
  { id: 8, description: "Socks", quantity: 12, packed: false },
  { id: 9, description: "Socks", quantity: 12, packed: false },
  { id: 10, description: "Socks", quantity: 12, packed: false },
  { id: 11, description: "Socks", quantity: 12, packed: false },
  { id: 12, description: "Socks", quantity: 12, packed: false },
  { id: 13, description: "Socks", quantity: 12, packed: false },
  { id: 14, description: "Socks", quantity: 12, packed: false },
  { id: 15, description: "Socks", quantity: 12, packed: false },
  { id: 16, description: "Socks", quantity: 12, packed: false },
  // { id: 17, description: "Socks", quantity: 12, packed: false },
  // { id: 18, description: "Socks", quantity: 12, packed: false },
  // { id: 19, description: "Socks", quantity: 12, packed: false },
  // { id: 20, description: "Socks", quantity: 12, packed: false },
  // { id: 21, description: "aaaaa", quantity: 12, packed: false },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
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
            <LeftUpperText />
            <div className="lefmid-container animated-opacity">
              <div className="lefmicon-left">
                <LeftItemFifth items={items} />
                <LeftMiddleText />
              </div>
              <LeftMiddleTheme />
            </div>
            <div className="lefbot-container">
              <LeftItemFirst items={items} />
              <LeftItemSecond items={items} />
              <LeftItemThird items={items} />
              <LeftItemFourth items={items} />
            </div>
          </div>
          <div className="right-wrapper animated-opacity">
            <RightSort />
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

function LeftItemFirst({ items }) {
  const itemsToShow = items.slice(0, 5);
  return itemsToShow.length > 0 ? (
    <div className="lefbocon-wrapper animated-slidebot-slow animated-opacity">
      {itemsToShow.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  ) : null;
}
function LeftItemSecond({ items }) {
  const itemsToShow = items.slice(5, 10);
  return itemsToShow.length > 0 ? (
    <div className="lefbocon-wrapper animated-slidebot-fast animated-opacity">
      {itemsToShow.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  ) : null;
}
function LeftItemThird({ items }) {
  const itemsToShow = items.slice(10, 15);
  return itemsToShow.length > 0 ? (
    <div className="lefbocon-wrapper animated-slidebot-fast animated-opacity">
      {itemsToShow.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  ) : null;
}
function LeftItemFourth({ items }) {
  const itemsToShow = items.slice(15, 20);
  return itemsToShow.length > 0 ? (
    <div className="lefbocon-wrapper animated-slidebot-fast animated-opacity">
      {itemsToShow.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  ) : null;
}
function LeftItemFifth({ items }) {
  const shouldRender = items.length > 20 && items[20] !== undefined;
  return shouldRender ? (
    <div className="lefbocon-wrapper animated-opacity">
      <Item key={items[20].id} item={items[20]} />
    </div>
  ) : null;
}

function Item({ item }) {
  return (
    <div className="lefbocon-wrapper-container">
      <label className="lefbocon-wracon-text">
        <input type="checkbox" />
        <img class="unchecked" src={UnTick} alt="Uncheck" />
        <img class="checked" src={Tick} alt="Checked" />
        <span>
          {item.quantity > 0 && `${item.quantity} `}
          {item.description}
        </span>
      </label>
      <div className="lefbocon-wracon-button">
        <button>
          <img src={Detail} alt="Detail" />
        </button>
        <button>
          <img src={Delete} alt="Delete" />
        </button>
      </div>
    </div>
  );
}

function RightSort() {
  return (
    <div className="rigwra-container">
      <div className="rigwra-container-up ">
        <div className="rigwra-conup-container animated-slideright-fast">
          <span>Clear</span>
          <div className="rigwra-conupcon-container">Focus</div>
        </div>
        <span className="rigwra-container-small animated-slideright-slow">
          SORT BY :
        </span>
      </div>
      <div className="rigwra-container-mid">
        <button className="rigwra-conupcon-container rigwra-container-small btn-color animated-slideright-fast">
          INPUT ORDER
        </button>
        <button className="rigwra-conupcon-container rigwra-container-small btn-white animated-slideright-normal">
          DESCRIPTION
        </button>
        <button className="rigwra-conupcon-container rigwra-container-small btn-white animated-slideright-slow">
          TICK STATUS
        </button>
      </div>
      <div className="rigwra-container-bot">
        <button className="rigwra-conupcon-container rigwra-container-small btn-color animated-slideright-fast">
          CLEAR LIST
        </button>
      </div>
      <div className="rigwra-container-bar">
        <div className="rigwra-conbar-percentage animated-slideright-slow">
          <span>0%</span>
          <span>25%</span>
          <span>50%</span>
          <span>75%</span>
          <span>100%</span>
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
            01
          </span>
        </div>
        <div className="rigwra-contot-bot">
          <span className="rigwra-contotup-big animated-slideright-fast">
            21
          </span>
          <span className="rigwra-contotup-small down animated-slideright-slow">
            Total List
          </span>
        </div>
      </div>
    </div>
  );
}
