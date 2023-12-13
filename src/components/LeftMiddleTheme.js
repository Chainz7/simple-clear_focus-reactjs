import Light from "../assets/Light Mode.png";
import LightWhite from "../assets/Light Mode White.png";
import Dark from "../assets/Dark Mode.png";

export default function LeftMiddleTheme() {
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
