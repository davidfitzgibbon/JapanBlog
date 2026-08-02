function timeAgoSC(time) {
  return `
  <time class="time" data-pubdate="${new Date(time)}">
    ${time.toLocaleDateString()}
  </time>`;
}
module.exports = timeAgoSC;
