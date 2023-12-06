// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 20, packed: false },
// ];

import BG from "./design/Anime2.png";
import Logo from "./design/Title.png";
import Plus from "./design/Plus.png";
import Tick from "./design/Tick.png";
import UnTick from "./design/UnTick.png";
import Detail from "./design/Detail.png";
import Delete from "./design/Delete.png";
import Light from "./design/Light Mode.png";
import Dark from "./design/Dark Mode.png";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <img src={BG} alt="" className="background" />
        <div className="left">
          <LeftText />
          <LeftTheme />
          <LeftItem />
        </div>
        <div className="right">
          <Right />
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="" className="add-logo" />
      <form className="add-form">
        <button>
          <img src={Plus} alt="" />
        </button>
        <div className="add-input">
          <input type="text" placeholder="Add Item..." />
          <select>
            <option value={1}>1</option>
            <option value={2}>2</option>
          </select>
        </div>
      </form>
    </div>
  );
}

function LeftText() {
  return (
    <div className="text-box">
      <div className="text-1">Time to</div>
      <div className="text-2">Manage</div>
      <div className="text-3">Your Focus</div>
    </div>
  );
}

function LeftTheme() {
  return (
    <div className="theme-box">
      <div className="theme-left">
        <div className="box-box">
          <div className="box-items">
            <label className="box-item">
              <input type="checkbox" />
              <img class="unchecked" src={UnTick} alt="a" />
              <img class="checked" src={Tick} alt="a" />
              <span className="box-span">Tootbrush</span>
            </label>
            <div className="box-button">
              <button>
                <img src={Detail} alt="a" />
              </button>
              <button>
                <img src={Delete} alt="a" />
              </button>
            </div>
          </div>
          <div className="box-items">
            <label className="box-item">
              <input type="checkbox" />
              <img class="unchecked" src={UnTick} alt="a" />
              <img class="checked" src={Tick} alt="a" />
              <span className="box-span">Tootbrush</span>
            </label>
            <div className="box-button">
              <button>
                <img src={Detail} alt="a" />
              </button>
              <button>
                <img src={Delete} alt="a" />
              </button>
            </div>
          </div>
          <div className="box-items">
            <label className="box-item">
              <input type="checkbox" />
              <img class="unchecked" src={UnTick} alt="a" />
              <img class="checked" src={Tick} alt="a" />
              <span className="box-span">Tootbrush</span>
            </label>
            <div className="box-button">
              <button>
                <img src={Detail} alt="a" />
              </button>
              <button>
                <img src={Delete} alt="a" />
              </button>
            </div>
          </div>
        </div>
        <div className="theme-left-title">
          <span>List</span>
          <div className="theme-left-title2">items</div>
        </div>
      </div>
      <div className="theme-right">
        <div className="box-theme">
          <div className="mode">Light Mode</div>
          <div className="mode-choose">
            <button className="choose light">
              <img src={Light} alt="a" />
            </button>
            <button className="choose dark">
              <img src={Dark} alt="a" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftItem() {
  return (
    <div className="items">
      <div className="box-box">
        <div className="box-items">
          <label className="box-item">
            <input type="checkbox" />
            <img class="unchecked" src={UnTick} alt="a" />
            <img class="checked" src={Tick} alt="a" />
            <span className="box-span">Tootbrush</span>
          </label>
          <div className="box-button">
            <button>
              <img src={Detail} alt="a" />
            </button>
            <button>
              <img src={Delete} alt="a" />
            </button>
          </div>
        </div>
        <div className="box-items">
          <label className="box-item">
            <input type="checkbox" />
            <img class="unchecked" src={UnTick} alt="a" />
            <img class="checked" src={Tick} alt="a" />
            <span className="box-span">Tootbrush</span>
          </label>
          <div className="box-button">
            <button>
              <img src={Detail} alt="a" />
            </button>
            <button>
              <img src={Delete} alt="a" />
            </button>
          </div>
        </div>
        <div className="box-items">
          <label className="box-item">
            <input type="checkbox" />
            <img class="unchecked" src={UnTick} alt="a" />
            <img class="checked" src={Tick} alt="a" />
            <span className="box-span">Tootbrush</span>
          </label>
          <div className="box-button">
            <button>
              <img src={Detail} alt="a" />
            </button>
            <button>
              <img src={Delete} alt="a" />
            </button>
          </div>
        </div>
        <div className="box-items">
          <label className="box-item">
            <input type="checkbox" />
            <img class="unchecked" src={UnTick} alt="a" />
            <img class="checked" src={Tick} alt="a" />
            <span className="box-span">Tootbrush</span>
          </label>
          <div className="box-button">
            <button>
              <img src={Detail} alt="a" />
            </button>
            <button>
              <img src={Delete} alt="a" />
            </button>
          </div>
        </div>
      </div>
      <div className="box-box">
        <div className="box-items">
          <label className="box-item">
            <input type="checkbox" />
            <img class="unchecked" src={UnTick} alt="a" />
            <img class="checked" src={Tick} alt="a" />
            <span className="box-span">Tootbrush</span>
          </label>
          <div className="box-button">
            <button>
              <img src={Detail} alt="a" />
            </button>
            <button>
              <img src={Delete} alt="a" />
            </button>
          </div>
        </div>
        <div className="box-items">
          <label className="box-item">
            <input type="checkbox" />
            <img class="unchecked" src={UnTick} alt="a" />
            <img class="checked" src={Tick} alt="a" />
            <span className="box-span">Tootbrush</span>
          </label>
          <div className="box-button">
            <button>
              <img src={Detail} alt="a" />
            </button>
            <button>
              <img src={Delete} alt="a" />
            </button>
          </div>
        </div>
        <div className="box-items">
          <label className="box-item">
            <input type="checkbox" />
            <img class="unchecked" src={UnTick} alt="a" />
            <img class="checked" src={Tick} alt="a" />
            <span className="box-span">Tootbrush</span>
          </label>
          <div className="box-button">
            <button>
              <img src={Detail} alt="a" />
            </button>
            <button>
              <img src={Delete} alt="a" />
            </button>
          </div>
        </div>
        <div className="box-items">
          <label className="box-item">
            <input type="checkbox" />
            <img class="unchecked" src={UnTick} alt="a" />
            <img class="checked" src={Tick} alt="a" />
            <span className="box-span">Tootbrush</span>
          </label>
          <div className="box-button">
            <button>
              <img src={Detail} alt="a" />
            </button>
            <button>
              <img src={Delete} alt="a" />
            </button>
          </div>
        </div>
      </div>
      <div className="box-box">
        <div className="box-items">
          <label className="box-item">
            <input type="checkbox" />
            <img class="unchecked" src={UnTick} alt="a" />
            <img class="checked" src={Tick} alt="a" />
            <span className="box-span">Tootbrush</span>
          </label>
          <div className="box-button">
            <button>
              <img src={Detail} alt="a" />
            </button>
            <button>
              <img src={Delete} alt="a" />
            </button>
          </div>
        </div>
        <div className="box-items">
          <label className="box-item">
            <input type="checkbox" />
            <img class="unchecked" src={UnTick} alt="a" />
            <img class="checked" src={Tick} alt="a" />
            <span className="box-span">Tootbrush</span>
          </label>
          <div className="box-button">
            <button>
              <img src={Detail} alt="a" />
            </button>
            <button>
              <img src={Delete} alt="a" />
            </button>
          </div>
        </div>
        <div className="box-items">
          <label className="box-item">
            <input type="checkbox" />
            <img class="unchecked" src={UnTick} alt="a" />
            <img class="checked" src={Tick} alt="a" />
            <span className="box-span">Tootbrush</span>
          </label>
          <div className="box-button">
            <button>
              <img src={Detail} alt="a" />
            </button>
            <button>
              <img src={Delete} alt="a" />
            </button>
          </div>
        </div>
        <div className="box-items">
          <label className="box-item">
            <input type="checkbox" />
            <img class="unchecked" src={UnTick} alt="a" />
            <img class="checked" src={Tick} alt="a" />
            <span className="box-span">Tootbrush</span>
          </label>
          <div className="box-button">
            <button>
              <img src={Detail} alt="a" />
            </button>
            <button>
              <img src={Delete} alt="a" />
            </button>
          </div>
        </div>
      </div>
      <div className="box-box">
        <div className="box-items">
          <label className="box-item">
            <input type="checkbox" />
            <img class="unchecked" src={UnTick} alt="a" />
            <img class="checked" src={Tick} alt="a" />
            <span className="box-span">Tootbrush</span>
          </label>
          <div className="box-button">
            <button>
              <img src={Detail} alt="a" />
            </button>
            <button>
              <img src={Delete} alt="a" />
            </button>
          </div>
        </div>
        <div className="box-items">
          <label className="box-item">
            <input type="checkbox" />
            <img class="unchecked" src={UnTick} alt="a" />
            <img class="checked" src={Tick} alt="a" />
            <span className="box-span">Tootbrush</span>
          </label>
          <div className="box-button">
            <button>
              <img src={Detail} alt="a" />
            </button>
            <button>
              <img src={Delete} alt="a" />
            </button>
          </div>
        </div>
        <div className="box-items">
          <label className="box-item">
            <input type="checkbox" />
            <img class="unchecked" src={UnTick} alt="a" />
            <img class="checked" src={Tick} alt="a" />
            <span className="box-span">Tootbrush</span>
          </label>
          <div className="box-button">
            <button>
              <img src={Detail} alt="a" />
            </button>
            <button>
              <img src={Delete} alt="a" />
            </button>
          </div>
        </div>
        <div className="box-items">
          <label className="box-item">
            <input type="checkbox" />
            <img class="unchecked" src={UnTick} alt="a" />
            <img class="checked" src={Tick} alt="a" />
            <span className="box-span">Tootbrush</span>
          </label>
          <div className="box-button">
            <button>
              <img src={Detail} alt="a" />
            </button>
            <button>
              <img src={Delete} alt="a" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Right() {
  return <div>s</div>;
}
