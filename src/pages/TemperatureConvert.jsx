import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function TemperatureConvert() {
  const { theme, style } = useContext(ThemeContext);
  const [tempFeh, setTempFeh] = useState(null);
  const [tempCel, setTempCel] = useState(null);

  const changeToCelsius = (e) => {
    const value = e.target.value;
    if(value){
      setTempFeh(value);
    const cel = (((value - 32) * 5) / 9).toFixed(2);
    setTempCel(cel);
    }
    else{
      setTempFeh(null);
      setTempCel(0);
    }
    
  };
  const changeToFahrenheit = (e) => {
    const value = e.target.value;
    if(value){
      setTempCel(value);
    const feh = ((value * 9) / 5 + 32).toFixed(2);
    setTempFeh(feh);
    }
    else{
      setTempCel(null);
      setTempFeh(0);
    }
    
  };
  return (
    <div>
      <div className="container">
        <h3>Temperature Converter</h3>
        <div className="card"  style={theme === "dark" ? style.cardSection.dark : style.cardSection.light}>
          <div className="convert-box">
            <label htmlFor="fah" className="temperature">
              Fahrenheit ()
            </label>
            <input
              type="number"
              name="fah"
              value={tempFeh}
              onChange={(e) => changeToCelsius(e)}
              id="fah"
              placeholder="Change To Celsius"
            />
            <span className="changeTo">Vs</span>
            <label htmlFor="cel" className="temperature">
              Celsius ()
            </label>
            <input
              type="number"
              name="cel"
              value={tempCel}
              onChange={(e) => (e = changeToFahrenheit(e))}
              id="cel"
              placeholder="Change To Fahrenheit"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
