import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { fullDictionary, dictionaryMap } from "@/data/dictionary";

// 隨機取得 n 個假名
function getRandomChars(dictionary, n = 5) {
  const keys = Object.keys(dictionary);
  const result = [];
  for (let i = 0; i < n; i++) {
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    result.push(randomKey);
  }
  return result;
}

// 合併多個字典
function mergeDictionaries(selectedDictionaries) {
  return selectedDictionaries.reduce((acc, key) => {
    return { ...acc, ...dictionaryMap[key].dictionary };
  }, {});
}

function speakJapanese(text, voice = null) {
  // 建立一個語音物件
  const utterance = new SpeechSynthesisUtterance(text);
  // 設定語言：日文通常用 ja-JP
  utterance.lang = "ja-JP";
  utterance.rate = 0.8;
  if (voice) {
    utterance.voice = voice;
  }
  // 呼叫瀏覽器的 TTS 播放
  speechSynthesis.speak(utterance);
}

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

export default function HiraganaPractice() {
  // State to keep track of selected dictionaries
  const [selectedDictionaries, setSelectedDictionaries] = useState([
    "hiragana",
  ]);
  const [charAmount, setCharAmount] = useState(10);
  const practicedDictionary = mergeDictionaries(selectedDictionaries);

  // 一次產生 10 個要練習的假名
  const [chars, setChars] = useState(() =>
    getRandomChars(practicedDictionary, charAmount),
  );
  // 紀錄使用者在每個輸入框輸入的內容
  const [inputs, setInputs] = useState(Array(charAmount).fill(""));
  // 紀錄每個字母是否已經「答對過」(只要第一次對了就算)
  const [isCorrect, setIsCorrect] = useState(Array(charAmount).fill(false));
  // 追蹤當前正在輸入哪個 index
  const [currentIndex, setCurrentIndex] = useState(0);
  // Timer state
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerRef = useRef(null);

  // 方便自動聚焦：refs 用來存每個 input DOM
  const inputRefs = useRef([]);

  // 確保有 Google 日本語的語音, if not, set to null
  const synth = window.speechSynthesis;
  const voice =
    synth.getVoices().find((v) => v.name === "Google 日本語") || null;

  useEffect(() => {
    // 每次轉到下個字時，自動 focus 到該字的 input
    inputRefs.current[currentIndex]?.focus();
  }, [currentIndex]);

  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isTimerRunning]);

  // 處理輸入時的檢查
  const handleChange = (value, index) => {
    // Start the timer if it's not already running
    if (!isTimerRunning) {
      setIsTimerRunning(true);
    }

    // 先更新輸入內容
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    // 檢查正確與否
    const correctRomaji = practicedDictionary[chars[index]];
    if (value.toLowerCase() === correctRomaji) {
      // 若正確，標記答對
      const newIsCorrect = [...isCorrect];
      // 只有第一次正確才算數
      if (!newIsCorrect[index]) {
        newIsCorrect[index] = true;
        setIsCorrect(newIsCorrect);
        // 說出正確的假名
        speakJapanese(chars[index], voice);
      }
      // 移到下一個字
      if (index < chars.length - 1) {
        setCurrentIndex(index + 1);
      }
      // Stop the timer if all inputs are correct
      if (newIsCorrect.every(Boolean)) {
        setIsTimerRunning(false);
      }
    }
  };

  // 計算已答對幾題
  const correctCount = isCorrect.filter(Boolean).length;
  const totalCount = chars.length;
  const isAllDone = correctCount === totalCount;

  // 重新開始
  const handleRestart = () => {
    const newChars = getRandomChars(practicedDictionary, charAmount);
    setChars(newChars);
    setInputs(Array(charAmount).fill(""));
    setIsCorrect(Array(charAmount).fill(false));
    setCurrentIndex(0);
    setTimer(0);
    setIsTimerRunning(false);
  };

  // 處理字典選擇變更
  const handleDictionaryChange = (values) => {
    if (values.includes("selectAll")) {
      if (selectedDictionaries.length === Object.keys(dictionaryMap).length) {
        setSelectedDictionaries(["hiragana"]);
      } else {
        setSelectedDictionaries(Object.keys(dictionaryMap));
      }
    } else {
      setSelectedDictionaries(values);
    }
  };

  // 處理設定應用
  const handleApplySettings = () => {
    const newChars = getRandomChars(practicedDictionary, charAmount);
    setChars(newChars);
    setInputs(Array(charAmount).fill(""));
    setIsCorrect(Array(charAmount).fill(false));
    setCurrentIndex(0);
    setTimer(0);
    setIsTimerRunning(false);
  };

  return (
    <div style={{ margin: "0 auto" }}>
      <div className="m-5">
        <p>
          進度：{correctCount} / {totalCount}
        </p>
        <p>時間：{formatTime(timer)}</p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          gap: 8,
        }}
      >
        {/* 顯示假名和對應輸入框 */}
        {chars.map((char, i) => (
          <React.Fragment key={`char-input-${i}`}>
            <div
              style={{
                display: "grid",
                gridTemplateRows: "auto auto",
                justifyItems: "center",
                gap: 4,
              }}
            >
              <div style={{ width: 60 }}>{char}</div>
              <Input
                ref={(el) => (inputRefs.current[i] = el)}
                type="text"
                value={inputs[i]}
                disabled={isAllDone || i !== currentIndex} // 只允許當前的那一格輸入
                onChange={(e) => handleChange(e.target.value, i)}
                style={{
                  width: 60,
                  border:
                    inputs[i] &&
                    inputs[i] !== practicedDictionary[char] &&
                    !isCorrect[i]
                      ? "2px solid red"
                      : "1px solid #ccc",
                  textAlign: "center",
                }}
              />
            </div>
          </React.Fragment>
        ))}
      </div>

      {isAllDone && (
        <div className="m-5">
          <h2>恭喜完成！</h2>
          <Button onClick={handleRestart}>重新開始</Button>
        </div>
      )}
      <div className="grid auto-rows-min gap-4 my-10 p-6 md:grid-cols-1 border border-500 rounded-xl">
        <h2>設定區</h2>
        {/* 選擇要練習哪些 Dictionary */}
        <ToggleGroup
          className="m-4"
          type="multiple"
          value={selectedDictionaries}
          onValueChange={handleDictionaryChange}
        >
          <ToggleGroupItem key="selectAll" value="selectAll">
            全選
          </ToggleGroupItem>
          {Object.keys(dictionaryMap).map((key) => (
            <ToggleGroupItem key={key} value={key}>
              {dictionaryMap[key].name}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <div className="grid grid-cols-3 place-items-center m-4">
          <div className="col-start-2">
            <Label htmlFor="amount">練習數量</Label>
            <Input
              type="number"
              id="amount"
              value={charAmount}
              onChange={(e) => setCharAmount(Number(e.target.value))}
            />
          </div>
        </div>

        {/* 應用設定按鈕 */}
        <div className="flex justify-center">
          <Button className="m-4" onClick={handleApplySettings}>
            應用設定
          </Button>
        </div>
      </div>
    </div>
  );
}
