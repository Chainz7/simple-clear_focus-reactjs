// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 20, packed: false },
// ];

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

export default function App() {
  return (
    <div className="app">
      <img src={BG} alt="" className="background opacity" />
      <Navbar />
      <div className="main">
        <div className="left">
          <LeftText />
          <LeftTheme />
          <LeftItem />
        </div>
        <div className="right">
          <RightSort />
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
        {/* Activated when you already done the project */}
        {/* <div className="box-box opacity">
          <div className="box-items">
            <label className="box-item">
              <input type="checkbox" />
              <img class="unchecked" src={UnTick} alt="a" />
              <img class="checked" src={Tick} alt="a" />
              <span className="box-span">1 adasdasdasd Tootbrush</span>
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
        </div> */}
        <div className="theme-left-title animetleft">
          <span>List</span>
          <div className="theme-left-title2">items</div>
        </div>
      </div>
      <div className="theme-right">
        <div className="box-theme opacity">
          <div className="mode">Light Mode</div>
          <div className="mode-choose">
            <button className="choose light">
              <img src={Light} alt="a" className="normal-state" />
              <img src={LightWhite} alt="a" className="light-hover" />
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
      <div className="box-box phase1">
        <div className="box-items">
          <label className="box-item">
            <input type="checkbox" />
            <img class="unchecked" src={UnTick} alt="a" />
            <img class="checked" src={Tick} alt="a" />
            <span className="box-span">1 adasdasdasd Tootbrush</span>
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
            <span className="box-span">1 adasdasdasd Tootbrush</span>
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
      <div className="box-box phase2">
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
      <div className="box-box phase2">
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
      <div className="box-box phase1">
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

function RightSort() {
  return (
    <div className="box-right special opacity">
      <div className="sort-header">
        <div className="theme-left-title lol">
          <div className="sort-big">Clear</div>
          <div className="theme-left-title2 sort-big">Focus</div>
        </div>
        <span className="sort-small right-slow">SORT BY :</span>
      </div>
      <div className="sort-footer">
        <button className="theme-left-title2 sort-small btn-color right-fast anim">
          INPUT ORDER
        </button>
        <button className="theme-left-title2 sort-small btn-white right-normal">
          DESCRIPTION
        </button>
        <button className="theme-left-title2 sort-small btn-white right-slow">
          TICK STATUS
        </button>
      </div>
      <div className="sort-clear">
        <button className="theme-left-title2 sort-small btn-color right-fast">
          CLEAR LIST
        </button>
      </div>
      <div className="bar">
        <div className="percentage right-slow">
          <span>0%</span>
          <span>25%</span>
          <span>50%</span>
          <span>75%</span>
          <span>100%</span>
        </div>
        <div className="progress right-fast">
          <div className="progress-bar"></div>
        </div>
      </div>
      <div className="total">
        <div className="absolute">
          <img src={Line} alt="Line" className="opacity" />
        </div>
        <div className="total-text-upper">
          <span className="total-small up right-slow">Current</span>
          <span className="total-big right-fast">01</span>
        </div>
        <div className="total-text-under">
          <span className="total-big right-fast">21</span>
          <span className="total-small down right-slow">Total List</span>
        </div>
      </div>
    </div>
  );
}
