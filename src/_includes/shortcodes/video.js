function locationSC(path, alt) {
  return `<figure>
  <video loading="lazy" controls src="${path}" alt="${alt}">
  <figcaption>${alt}</figcaption>
</figure>
  `;
}
module.exports = locationSC;
