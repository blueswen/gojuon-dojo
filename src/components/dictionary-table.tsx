import React from "react";
import { speakJapanese } from "@/utils/speakJapanese"; // Adjust the import path as needed

interface DictionaryTableProps {
  name: string;
  dictionary: { [key: string]: string };
}

const DictionaryTable: React.FC<DictionaryTableProps> = ({ dictionary }) => {
  return (
    <div className="grid auto-rows-min gap-4 mt-2 mb-2 p-6 md:grid-cols-1 border border-500 rounded-xl">
      <h3>{dictionary.name}</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: dictionary.key.endsWith("yoon")
            ? "repeat(3, 1fr)"
            : "repeat(5, 1fr)",
          gap: 8,
        }}
      >
        {Object.entries(dictionary.words).map(([char, romaji]) => {
          let emptyBlocks = 0;
          if (romaji === "yu" || romaji === "yo") {
            emptyBlocks = 1;
          } else if (romaji === "wo") {
            emptyBlocks = 3;
          }
          return (
            <React.Fragment key={char}>
              {Array.from({ length: emptyBlocks }).map((_, index) => (
                <React.Fragment key={`${char}-empty-${index}`}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: "auto auto",
                      justifyItems: "center",
                      gap: 4,
                      padding: 4,
                    }}
                  >
                    <div style={{ width: 60 }}></div>
                    <div style={{ width: 60 }}></div>
                  </div>
                </React.Fragment>
              ))}
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: "auto auto",
                  justifyItems: "center",
                  gap: 4,
                  padding: 4,
                }}
                onClick={() => speakJapanese(char, { rate: 0.5 })}
              >
                <div style={{ width: 60 }}>{char}</div>
                <div style={{ width: 60 }}>{romaji}</div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default DictionaryTable;
