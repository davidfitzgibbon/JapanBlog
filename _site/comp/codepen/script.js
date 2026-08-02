let show = () => {
  const div = document.createElement("div");
  div.innerHTML = iframe;
  document.querySelector(".pen").replaceWith(div);
};
let iframe = `<iframe
  class="codepen"
  ${penHeight}
  style="width: 100%;"
  scrolling="no"
  ${title}
  src="https://codepen.io/loficodes/embed/${pen}?height=265&theme-id=default&default-tab=result"
  frameborder="no"
  allowtransparency="true"
  allowfullscreen="true"
>
  See the Pen <a href="https://codepen.io/loficodes/pen/${pen}">${title}</a> by David Fitz (<a
    href="https://codepen.io/loficodes">@loficodes</a
  >) on <a href="https://codepen.io">CodePen</a>.
</iframe>`;
const load = () => {
  const btn = document.createElement("button");
  btn.innerHTML = "Run this pen?";
  btn.addEventListener("click", show);

  const p = document.createElement("p");
  p.innerHTML = "or";

  const a = document.createElement("a");
  a.href = `https://codepen.io/loficodes/full/${pen}`;
  a.target = "_blank";
  a.innerHTML = "View on CodePen";

  // console.log(document.querySelector(".pen img"))
  document.querySelector(".pen img").after(btn, p, a);
};
document.addEventListener("DOMContentLoaded", load);
