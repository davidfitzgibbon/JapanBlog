function locationSC(loc) {
  const locs = {
    tokyo: "東京",
    kyoto: "京都",
    osaka: "大阪",
    kanagawa: "神奈川",
  };
  return `
    <span style="text-transform: uppercase">${loc} · ${locs[loc]}</span>
  `;
}
module.exports = locationSC;
