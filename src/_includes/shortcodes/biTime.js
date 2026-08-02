function biTimeSC(time) {
  const options = {
    // year: "numeric",
    month: "long",
    day: "numeric",
  };
  return `
  <time class="time" data-pubdate="${new Date(time)}">
    ${time.toLocaleDateString("en-IE", options)} · ${time.toLocaleDateString("ja-JP", options)}
  </time>`;
}
module.exports = biTimeSC;
