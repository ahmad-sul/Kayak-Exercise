import React, { useContext } from "react";
import MyContext from "../../context/MyContext";
import "./FilterAir.css";

export default function FilterAirlines() {
  const { fItems, setFItems } = useContext(MyContext);

  const filterItems = (e) => {
    if (e.target.checked) {
      setFItems([...fItems, e.target.value]);
    } else {
      setFItems(fItems.filter((item) => item !== e.target.value));
    }
  };
  return (
    <div className="filter">
      <p className="fiterPara">Filter by Alliances</p>
      <div className="checkBoxes">
        <div className="checkBox">
          <input
            className="chBox"
            type="checkbox"
            id="1"
            value="ST"
            onChange={(e) => filterItems(e)}
          />
          <label className="chBoxLabel" htmlFor="inlineCheckbox1">
            Sky Team
          </label>
        </div>
        <div className="checkBox">
          <input
            className="chBox"
            type="checkbox"
            id="2"
            value="OW"
            onChange={(e) => filterItems(e)}
          />
          <label className="chBoxLabel" htmlFor="inlineCheckbox2">
            Oneworld
          </label>
        </div>
        <div className="checkBox">
          <input
            className="chBox"
            type="checkbox"
            id="3"
            value="SA"
            onChange={(e) => filterItems(e)}
          />
          <label className="chBoxLabel" htmlFor="inlineCheckbox3">
            Star Alliance
          </label>
        </div>
      </div>
    </div>
  );
}
