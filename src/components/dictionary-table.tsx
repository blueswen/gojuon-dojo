import React from "react";

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
          gridTemplateColumns: "repeat(10, 1fr)",
          gap: 8,
        }}
      >
        {/* 顯示假名和對應輸入框 */}
        {Object.entries(dictionary.dictionary).map(([char, romaji]) => (
          <React.Fragment>
            <div
              style={{
                display: "grid",
                gridTemplateRows: "auto auto",
                justifyItems: "center",
                gap: 4,
              }}
            >
              <div style={{ width: 60 }}>{char}</div>
              <div style={{ width: 60 }}>{romaji}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DictionaryTable;
