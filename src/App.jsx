import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TextForm from "./TextForm";
import WordsIframe from "./WordsIframe";

function App() {
  const [input, setInput] = useState({
    text: "Word",
    nbRows: 7,
    nbCols: 5,
    padding: 0,
    fontWeight: "400",
    fontSize: 16,
    color: "#000000",
    fontFamily: "sans-serif",
  });

  return (
    <div className="flex flex-col lg:flex-row max-w-[1200px] mx-auto gap-20 px-6">
      <TextForm input={input} setInput={setInput} />
      <WordsIframe input={input} setInput={setInput} />
    </div>
  );
}

export default App;
