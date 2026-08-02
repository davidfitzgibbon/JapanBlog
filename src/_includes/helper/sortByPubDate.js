const sortByPubDate = (a, b) =>
  new Date(b.data.pubDate).getTime() -
  new Date(a.data.pubDate).getTime();
module.exports = sortByPubDate;