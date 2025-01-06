import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import Practice from "./Practice";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import DictionaryTable from "./components/dictionary-table";
import { dictionaryMap, dictionaryList } from "@/data/dictionary";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <h1>五十音打字練習</h1>
      <ModeToggle />
      <Practice />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {dictionaryList.map((dictionary, index) => (
          <div
            key={index}
            style={{
              flex: "1 1 50%",
              boxSizing: "border-box",
              padding: "10px",
            }}
          >
            <DictionaryTable dictionary={dictionary} />
          </div>
        ))}
      </div>
    </ThemeProvider>
  );
}

export default App;
