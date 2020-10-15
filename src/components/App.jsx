import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function eCard(emojip) {
  return (
    <Card
      key={emojip.id}
      emoji={emojip.emoji}
      name={emojip.name}
      meaning={emojip.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(eCard)}</dl>
    </div>
  );
}

export default App;
