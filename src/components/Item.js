import Tick from "../assets/Tick.png";
import UnTick from "../assets/UnTick.png";
import Detail from "../assets/Detail.png";
import Delete from "../assets/Delete.png";

export default function Item({ item, onDeleteItem, onToggleItem }) {
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
