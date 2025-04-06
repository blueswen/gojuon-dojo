export function speakJapanese(
  text: string,
  options: { volume?: number; rate?: number; pitch?: number } = {},
) {
  // 建立一個語音物件
  const utterance = new SpeechSynthesisUtterance(text);
  // 設定語言：日文通常用 ja-JP
  utterance.lang = "ja-JP";
  // 設定選項
  utterance.volume = options.volume !== undefined ? options.volume : 1; // 音量 (0 到 1)
  utterance.rate = options.rate !== undefined ? options.rate : 1; // 速度 (0.1 到 10)
  utterance.pitch = options.pitch !== undefined ? options.pitch : 1; // 音高 (0 到 2)
  // 呼叫瀏覽器的 TTS 播放
  speechSynthesis.cancel(); // 先取消之前的語音
  speechSynthesis.speak(utterance);
}
