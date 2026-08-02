function codepen (pen, title, penHeight)  {
  return `<script>
    const pen = "${pen}";
    const penHeight = ${penHeight};
    const title = "${title}";
</script>
<script src="/comp/codepen/script.js"></script>
<link rel="stylesheet" href="/comp/codepen/style.css" />

<noscript>
  <a href="https://codepen.io/loficodes/pen/${pen}">Check out "${title}" on CodePen</a>
</noscript>

<div class="pen">
  <img
    src="https://codepen.io/loficodes/pen/${pen}/image/small.png"
    alt=${title}
  />
</div>`
}

module.exports = codepen;