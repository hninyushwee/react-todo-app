import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Home() {
const {theme} = useContext(ThemeContext);
  return (
    <div className="container">
      <h3>This page will be useful for you</h3>
      <div className="content" style = {{color: theme === 'dark' && '#000'}}>
        <div className="card1">
          <h4 className="title">Todo Page</h4>
          <div>
            <p className="body">
              In todo Page, you can save to do daily task and if you done task,
              you can mark this task. This tab have delete action too.You can
              delete unwanted task.{" "}
            </p>
          </div>
        </div>
        <div className="card2">
          <h4 className="title">Register Page</h4>
          <div>
            <p className="body">
              In this app, you can register and see your register data. If you
              miss input fill, show error. So you fill all input field.{" "}
            </p>
          </div>
        </div>
        <div className="card3">
          <h4 className="title">Temperature Page</h4>
          <div>
            <p className="body">
              This page is very simple for you. In this page you can change
              temperature from <b> Fahrenheit</b> to <b>Celsius</b> and{" "}
              <i>vice versa.</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
