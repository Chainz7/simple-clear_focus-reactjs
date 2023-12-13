import { useState } from "react";

import Logo from "../assets/Title.png";
import Plus from "../assets/Plus.png";

export default function Navbar({ onAddItems }) {
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
