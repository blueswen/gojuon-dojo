import "./App.css";
import Practice from "./Practice";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import DictionaryTable from "./components/dictionary-table";
import { dictionaryList } from "@/data/dictionary";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="top-nav">
        <Button
          className="mr-3 text-current"
          variant="outline"
          size="icon"
          asChild
        >
          <a href="https://github.com/blueswen/gojuon-dojo" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </Button>
        <ModeToggle />
      </div>
      <div className="main-content">
        <h1>五十音道場</h1>
        <Practice />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {dictionaryList.map((dictionary: any, index: number) => (
            <div
              key={index}
              style={{
                flex: "1 1 50%",
                boxSizing: "border-box",
                padding: "10px",
              }}
            >
              <DictionaryTable name={dictionary.name} dictionary={dictionary} />
            </div>
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
