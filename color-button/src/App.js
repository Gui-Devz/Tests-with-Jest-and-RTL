import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z]\B)/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [buttonStatus, setButtonStatus] = useState(false);

  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  const changeButtonColor = () => {
    setButtonColor(newButtonColor);
  };
  return (
    <div>
      <button
        style={{ backgroundColor: buttonStatus ? "gray" : buttonColor }}
        onClick={() => changeButtonColor()}
        disabled={buttonStatus}
      >
        Change to {newButtonColor}
      </button>
      <input
        id="disabled-button-checkbox"
        type="checkbox"
        onChange={(e) => setButtonStatus(e.target.checked)}
        defaultChecked={buttonStatus}
        aria-checked={buttonStatus}
      />
      <label htmlFor="disabled-button-checkbox">
        {buttonStatus ? "Enable" : "Disable"} button
      </label>
    </div>
  );
}

export default App;
