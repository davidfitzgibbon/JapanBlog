const sortByPubDate = (a, b) =>
  new Date(a.data.pubDate).getTime() - new Date(b.data.pubDate).getTime();
module.exports = sortByPubDate;
