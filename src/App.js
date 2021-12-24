import React from "react";
import ColorProvider from "./contextAPI/ColorProvider";
import "./style.css";
import Score from "./components/Score";
import ColorSelected from "./components/ColorSelected";
import ColorsOptions from './components/ColorsOptions';
import Guide from "./components/Guide";
import Timer from "./components/Timer";
import StartButton from "./components/StartButton";
import FeedBack from "./components/FeedBack";

function App() {
  return (
    <div>
      <ColorProvider>
        <h1 id="title">Color Guess</h1>
        <Score />
        <ColorSelected />
        <ColorsOptions />
        <Guide />
        <Timer />
        <StartButton />
        <FeedBack />
      </ColorProvider>
    </div>
  );
}

export default App;
