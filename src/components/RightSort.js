import Line from "../assets/Line 3.png";

export default function RightSort({
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
