import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import Practice from "./Practice";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import DictionaryTable from "./components/dictionary-table";
import { dictionaryMap } from "@/data/dictionary";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <h1>五十音打字練習</h1>
        <ModeToggle />
        <Practice />
      </ThemeProvider>
      {Object.entries(dictionaryMap).map(([name, dictionary]) => (
        <DictionaryTable key={name} dictionary={dictionary} />
      ))}
    </>
  );
}

export default App;
