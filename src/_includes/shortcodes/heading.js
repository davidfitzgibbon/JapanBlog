function heading (title) {
  let heading = title.length ? ` - ${title}` : "";
  return "David Fitz" + heading;
};

module.exports = heading;