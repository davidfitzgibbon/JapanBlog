function p5(file, path) {
  return /* html */ `
<div class="demo">
<div id="${file}">
<img loading="lazy" src="https://davidfitz.dev/img/demo/${file}.gif" alt="Demo of ${file}" />
<p>This is an interactive demo, <a href="https://davidfitz.dev${path}">try it out on the site</a> to see it in action!</p>
</div>
<script>
  // document.getElementById("${file}").innerHTML = "";
</script>
<script src="/js/demo/${file}.js"></script>
<script src="/js/lib/p5.js"></script>
</div>
`;
}

module.exports = p5;
