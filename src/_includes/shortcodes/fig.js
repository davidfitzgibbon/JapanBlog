function locationSC(path, alt) {
  return `<figure>
  <img src="${path}" alt="${alt}">
  <figcaption>${alt}</figcaption>
</figure>
  `;
}
module.exports = locationSC;
