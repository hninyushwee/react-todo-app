import React, { useContext } from "react";
import { RoutingContext, pageUrl } from "../contexts/Routing";
import Home from "../pages/Home";
import Todo from "../pages/Todo";
import Register from "../pages/Register";
import TemperatureConvert from "../pages/TemperatureConvert";
import TodoProvider from "../contexts/TodoContext";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Header() {
  const { page, setPage } = useContext(RoutingContext);
  const { theme, themeSwitcher, isChecked, style } = useContext(ThemeContext);
  return (
    <div
      className="body-container"
      style={
        theme === "dark" ? style.mainSection.dark : style.mainSection.light
      }
    >
      <header
        className="navbar"
        style={theme === "dark" ? style.navBar.dark : style.navBar.light}
      >
        <div className="logoTab">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAA7VBMVEUAAADj4+Pe3t78ry79sjD9tDFaWlpdXV3a2tr/uTP/uzT+tzP/vzf/swv4+Pju7e3/rS3/xDbcoi1oSRTinilxcXGvr67Hx8ZfRxTnqi+geSMIBgFWQRJCLw5QOxGIZBz1tzS4iyfEkSidciAaDwUUBAByUxcPAAOUbR4oGwisgSS1hCZ8VxjPlim+iSYwJAo4KQundyAgFgezfCHwqCxfQRH5yH372qv45cv37eH/04T+siH5wGvt3cryyJfix67dx7jctZbmpGD7s0D9vE764L7+pwDboXCFhYXrxp5BQUAhJCUWFhaampk0NDRXL7WWAAAD3klEQVRoge2Xa3uiOBSApSRqLgWhtJZ1VNROqyNQtbbTGTqX3c7udGa6+/9/zgYFSsAbGLvPs0/ebxyRN+fkJIFKRSKRSCQSiUQikUgkwji3f/vP3C0bG28ysXbntewmol0+cu5kIwejh3GPj/Qp7b+SfICRyUcofrXMTyixL9KBLkXO21eSVwxCuAYz8eGqfpHNihB6mbq8MhB3LZKObbf5CGv3YepyQBE/DQLpE2iPuMg7jNNlZmMZH8hdcSlAHhcZUpxq9zar+uH2mAEGyOcifTNl44ciHA8CNF3768h2su02fHctzm5BgNf388UkE+gZhrfyzlJMbABIe/t9C0Ym2/BETsQtAdDabTlNHEpoZnnsiYshzFZ3JZcUI0P0ftf1XO76qt3prBjNlCJ+BxLO5HJs2w6Ejm1Oz2e8myB8yAOu7TuYQAAXYGxPX+a35SDsnBxOPfIxBMwcyQnzk0Hy69iwBa7wLG6oCwEARHIIqZ1seFeHU1fGOJQuE49yX1Zf7DzfzKe3uaCPQAxcDiKuPRLZ4ROqQtUa8ovphoAUfPbYXfOkEowAUFWVqJ7bSmIu74aAr7zAThsN5kgN/SAu6HU4nEzmacSeq+2bOWY+HF16UOXskTMZgui359Ztfx6/xdxCNUydT55D7GkSMnkTHWY+U0f2fPphyxMu9Yv2ede3TUHjWXSAmuSuctNOQpLvmJY79mxI2flGexufuSsuVFN2NZU4CILjBQGKNjqb4uVokCGmD3yVI9bD4Jjcvb//wLh//zFSGQhhahCzN8h+SpejZalZQncQ3H3SdWWJrmvN0/Bm1+xPL2fbHrk7My7rWB48fFI4dK1eFSeNGZFc5mwQn5UcunYmXH6N8/LHL3k3Q6sLl6O8/OtKN0teESzPl72xzs3sgnOfZd3B70dr5cr+837dORl41nz5mRQvtSAIFt3e+KO+3s3sp/sk2vU9qwHVRqNhLSPhJhOAx4e7h28w2Fj0vafdB40IHL2aujB4/PFBZ2j6n9/++r4xcWZ/Ki+3mJaolnfTTV6kjn+wZx4t0LX7zYmH9srPf0rKO74/7Mxaqciv5suDjxR9Q7dFco2hN/eZ+4TnJvfore5kCMoe9Y/5e2dfTl8vW/6Y6mKuyw1A1/Y8a86WnVYye+1nKWntTAkbp95UotTL6fXn4upqk70oLPI9emH3bkvJm4XdT5yU8xdFqxV2r1aX6byiqdfWu0tkrxdbb/XN7oL2Ynv900Z3Ybte5IR/bta3sWV0GYpM+q/Tai2mWqvyRNEM1VW3vvylSNklEolEIpFIJBKJRCKRSCSS/xP/ApHPUdLOK8bpAAAAAElFTkSuQmCC"
            alt="img"
            className="logo"
            onClick={() => setPage(pageUrl.home)}
          />
          <h2 className="pageName" onClick={() => setPage(pageUrl.home)}>
            Dashboard
          </h2>
        </div>
        <div className="menuTab">
          <p className="todo" onClick={() => setPage(pageUrl.todo)}>
            Todo
          </p>
          <p className="register" onClick={() => setPage(pageUrl.register)}>
            Register
          </p>
          <p className="convert" onClick={() => setPage(pageUrl.convert)}>
            Converter
          </p>
          <div className="theme">
            <input
              type="checkbox"
              id="change-theme"
              defaultChecked={isChecked}
              onClick={themeSwitcher}
            />
            <label htmlFor="change-theme"></label>
          </div>
        </div>
      </header>
      <main>
        {pageUrl.home === page && <Home />}
        {pageUrl.todo === page && (
          <TodoProvider>
            <Todo />
          </TodoProvider>
        )}
        {pageUrl.register === page && <Register />}
        {pageUrl.convert === page && <TemperatureConvert />}
      </main>
    </div>
  );
}
