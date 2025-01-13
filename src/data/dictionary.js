const fullDictionary = {
  hiragana: {
    あ: "a",
    い: "i",
    う: "u",
    え: "e",
    お: "o",
    か: "ka",
    き: "ki",
    く: "ku",
    け: "ke",
    こ: "ko",
    さ: "sa",
    し: "shi",
    す: "su",
    せ: "se",
    そ: "so",
    た: "ta",
    ち: "chi",
    つ: "tsu",
    て: "te",
    と: "to",
    な: "na",
    に: "ni",
    ぬ: "nu",
    ね: "ne",
    の: "no",
    は: "ha",
    ひ: "hi",
    ふ: "fu",
    へ: "he",
    ほ: "ho",
    ま: "ma",
    み: "mi",
    む: "mu",
    め: "me",
    も: "mo",
    や: "ya",
    ゆ: "yu",
    よ: "yo",
    ら: "ra",
    り: "ri",
    る: "ru",
    れ: "re",
    ろ: "ro",
    わ: "wa",
    を: "wo",
    ん: "n",
  },
  katakana: {
    ア: "a",
    イ: "i",
    ウ: "u",
    エ: "e",
    オ: "o",
    カ: "ka",
    キ: "ki",
    ク: "ku",
    ケ: "ke",
    コ: "ko",
    サ: "sa",
    シ: "shi",
    ス: "su",
    セ: "se",
    ソ: "so",
    タ: "ta",
    チ: "chi",
    ツ: "tsu",
    テ: "te",
    ト: "to",
    ナ: "na",
    ニ: "ni",
    ヌ: "nu",
    ネ: "ne",
    ノ: "no",
    ハ: "ha",
    ヒ: "hi",
    フ: "fu",
    ヘ: "he",
    ホ: "ho",
    マ: "ma",
    ミ: "mi",
    ム: "mu",
    メ: "me",
    モ: "mo",
    ヤ: "ya",
    ユ: "yu",
    ヨ: "yo",
    ラ: "ra",
    リ: "ri",
    ル: "ru",
    レ: "re",
    ロ: "ro",
    ワ: "wa",
    ヲ: "wo",
    ン: "n",
  },
  hiragana_dakuten: {
    が: "ga",
    ぎ: "gi",
    ぐ: "gu",
    げ: "ge",
    ご: "go",
    ざ: "za",
    じ: "ji",
    ず: "zu",
    ぜ: "ze",
    ぞ: "zo",
    だ: "da",
    ぢ: "ji",
    づ: "zu",
    で: "de",
    ど: "do",
    ば: "ba",
    び: "bi",
    ぶ: "bu",
    べ: "be",
    ぼ: "bo",
  },
  katakana_dakuten: {
    ガ: "ga",
    ギ: "gi",
    グ: "gu",
    ゲ: "ge",
    ゴ: "go",
    ザ: "za",
    ジ: "ji",
    ズ: "zu",
    ゼ: "ze",
    ゾ: "zo",
    ダ: "da",
    ヂ: "ji",
    ヅ: "zu",
    デ: "de",
    ド: "do",
    バ: "ba",
    ビ: "bi",
    ブ: "bu",
    ベ: "be",
    ボ: "bo",
  },
  hiragana_handakuon: {
    ぱ: "pa",
    ぴ: "pi",
    ぷ: "pu",
    ぺ: "pe",
    ぽ: "po",
  },
  katakana_handakuon: {
    パ: "pa",
    ピ: "pi",
    プ: "pu",
    ペ: "pe",
    ポ: "po",
  },
  hiragana_yoon: {
    きゃ: "kya",
    きゅ: "kyu",
    きょ: "kyo",
    しゃ: "sha",
    しゅ: "shu",
    しょ: "sho",
    ちゃ: "cha",
    ちゅ: "chu",
    ちょ: "cho",
    にゃ: "nya",
    にゅ: "nyu",
    にょ: "nyo",
    ひゃ: "hya",
    ひゅ: "hyu",
    ひょ: "hyo",
    みゃ: "mya",
    みゅ: "myu",
    みょ: "myo",
    りゃ: "rya",
    りゅ: "ryu",
    りょ: "ryo",
  },
  hiragana_dakuten_yoon: {
    ぎゃ: "gya",
    ぎゅ: "gyu",
    ぎょ: "gyo",
    じゃ: "ja",
    じゅ: "ju",
    じょ: "jo",
    びゃ: "bya",
    びゅ: "byu",
    びょ: "byo",
    ぴゃ: "pya",
    ぴゅ: "pyu",
    ぴょ: "pyo",
  },
  katakana_yoon: {
    キャ: "kya",
    キュ: "kyu",
    キョ: "kyo",
    シャ: "sha",
    シュ: "shu",
    ショ: "sho",
    チャ: "cha",
    チュ: "chu",
    チョ: "cho",
    ニャ: "nya",
    ニュ: "nyu",
    ニョ: "nyo",
    ヒャ: "hya",
    ヒュ: "hyu",
    ヒョ: "hyo",
    ミャ: "mya",
    ミュ: "myu",
    ミョ: "myo",
    リャ: "rya",
    リュ: "ryu",
    リョ: "ryo",
  },
  katakana_dakuten_yoon: {
    ギャ: "gya",
    ギュ: "gyu",
    ギョ: "gyo",
    ジャ: "ja",
    ジュ: "ju",
    ジョ: "jo",
    ビャ: "bya",
    ビュ: "byu",
    ビョ: "byo",
    ピャ: "pya",
    ピュ: "pyu",
    ピョ: "pyo",
  },
  sokuon: {
    // Sokuon
    っ: "tsu",
  },
};

const dictionaryMap = {
  hiragana: {
    name: "平假名",
    dictionary: fullDictionary.hiragana,
  },
  katakana: {
    name: "片假名",
    dictionary: fullDictionary.katakana,
  },
  hiragana_dakuten: {
    name: "平假名濁音",
    dictionary: fullDictionary.hiragana_dakuten,
  },
  hiragana_handakuon: {
    name: "平假名半濁音",
    dictionary: fullDictionary.hiragana_handakuon,
  },
  katakana_dakuten: {
    name: "平假名濁音",
    dictionary: fullDictionary.katakana_dakuten,
  },
  katakana_handakuon: {
    name: "平假名半濁音",
    dictionary: fullDictionary.katakana_handakuon,
  },
  hiragana_yoon: {
    name: "片假名拗音",
    dictionary: fullDictionary.hiragana_yoon,
  },
  katakana_yoon: {
    name: "片假名拗音",
    dictionary: fullDictionary.katakana_yoon,
  },
  // sokuon: {
  //   name: "促音",
  //   dictionary: fullDictionary.sokuon,
  // },
};

const dictionaryList = [
  { key: "hiragana", name: "平假名", words: fullDictionary.hiragana },
  { key: "katakana", name: "片假名", words: fullDictionary.katakana },
  {
    key: "hiragana_dakuten",
    name: "平假名濁音",
    words: fullDictionary.hiragana_dakuten,
  },
  {
    key: "katakana_dakuten",
    name: "片假名濁音",
    words: fullDictionary.katakana_dakuten,
  },
  {
    key: "hiragana_handakuon",
    name: "平假名半濁音",
    words: fullDictionary.hiragana_handakuon,
  },
  {
    key: "katakana_handakuon",
    name: "片假名半濁音",
    words: fullDictionary.katakana_handakuon,
  },
  {
    key: "hiragana_yoon",
    name: "平假名拗音",
    words: fullDictionary.hiragana_yoon,
  },
  {
    key: "katakana_yoon",
    name: "片假名拗音",
    words: fullDictionary.katakana_yoon,
  },
  {
    key: "hiragana_dakuten_yoon",
    name: "平假名濁音拗音",
    words: fullDictionary.hiragana_dakuten_yoon,
  },
  {
    key: "katakana_dakuten_yoon",
    name: "片假名濁音拗音",
    words: fullDictionary.katakana_dakuten_yoon,
  },
  // { key: "sokuon", name: "促音", words: fullDictionary.sokuon },
];

export { fullDictionary, dictionaryMap, dictionaryList };
