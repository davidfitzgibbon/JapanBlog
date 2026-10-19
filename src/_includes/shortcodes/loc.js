function locationSC(loc) {
  const locs = {
    hakuraku: "白楽",
    ireland: "アイルランド",
    kyoto: "京都",
    kanagawa: "神奈川",
    kagurazaka: "神楽坂",
    machida: "町田",
    osaka: "大阪",
    odaiba: "お台場",
    shinjuku: "新宿",
    tokyo: "東京",
    yokohama: "横浜",
  };
  return `
    <span class="loc">${loc} · ${locs[loc]}</span>
  `;
}
module.exports = locationSC;
