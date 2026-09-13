function locationSC(loc) {
  const locs = {
    tokyo: "東京",
    kyoto: "京都",
    osaka: "大阪",
    kanagawa: "神奈川",
    ireland: "アイルランド",
    machida: "町田",
  };
  return `
    <span class="loc">${loc} · ${locs[loc]}</span>
  `;
}
module.exports = locationSC;
