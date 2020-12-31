import React from 'react';
import './styles/App.css';

import PercentTab from "./components/PercentTab";
import HardnessTab from "./components/HardnessTab";
import EasinessTab from "./components/EasinessTab";
import TimeTab from "./components/TimeTab";
import Figure from "./components/Figure";

function App() {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <Figure />
          <h1 className="header__title">Student dashboard</h1>
        </div>
        <div className="header__tabs">
          <PercentTab />
        </div>
        <div className="header__tabs">
          <HardnessTab />
        </div>
        <div className="header__tabs">
          <EasinessTab />
        </div>
        <div className="header__tabs">
          <TimeTab />
        </div>
      </header>

      <main className="main">
        <div className="main__chart"></div>
        <span className="main__verticalbar"></span>
        <div className="main__chart"></div>
        <Figure />
        <span className="main__horizontalbar"></span>
        <div className="main__chart"></div>
        <span className="main__verticalbar"></span>
        <div className="main__chart"></div>
        <span className="main__horizontalbar"></span>
        <div className="main__chart"></div>
        <span className="main__verticalbar"></span>
        <div className="main__chart"></div>
      </main>

      <footer className="footer">
        <h2 className="footer__title">footer</h2>
      </footer>
    </>
  );
}

export default App;
