const timeAgo = require("../../../public/js/timeAgo.js");
function card(title, href, date, imgPath) {
  const time = new Date(date);
  let img = imgPath
    ? `https://codepen.io/loficodes/pen/${imgPath}/image/small.png`
    : false;
  return /* html */ `
    <a href=${href} class="card">
      <h1 class="title">${title}</h1>
      <time class="time" data-pubdate="${date}">${time.toLocaleDateString()}</time>
      ${
        img
          ? `<img loading="lazy" src=${img} alt="${title}" />`
          : /* html */ `
        <svg viewBox="0 0 184 107" class="placeholder">
          <path class="pink" d="M127 84V73h-6v11h-11v6h11v11h6V90h11v-6h-11Z" />
          <path class="purple" d="M126 46V35h-6v11h-11v6h11v11h6V52h11v-6h-11Z" />
          <path class="blue" d="M52 61V50h-6v11H35v6h11v11h6V67h11v-6H52Z" />
          <circle
            cx="712.2"
            cy="1237.7"
            r="24"
            class="gold"
            transform="matrix(.58983 0 0 .58949 -264 -671)"
          />
          <circle
            cx="712.2"
            cy="1237.7"
            r="24"
            class="orange"
            transform="matrix(.58983 0 0 .58949 -336 -638)"
          />
          <circle
            cx="712.2"
            cy="1237.7"
            r="24"
            class="pink"
            transform="matrix(.58983 0 0 .58949 -334 -679)"
          />
          <path class="purple" d="m170 79 14 28h-28l14-28Z" />
          <path class="blue" d="m168 0 14 28h-28l14-28Z" />
          <path class="gold" d="m14 77 14 28H0l14-28Z" />
        </svg>
      `
      }
    </a>

    <style>
      .card {
        display: block;
        position: relative;
        margin-block-start: var(--step-0);
        border: 2px solid transparent;
        transition: all 0.2s ease-in-out;
        border-color: var(--c-60);
        aspect-ratio: 738/415;
      }
      .card:hover {
        border-color: var(--c-gold);
      }
      .card:has(svg) {
        aspect-ratio: 585/356;
      }
      .card .title {
        position: absolute;
        left: var(--step--2);
        padding: var(--step--2) var(--step--1);
        background: var(--c-100);
        font-size: var(--step-2);
        max-width: calc(100% - var(--step-3));
        transition: all 0.2s ease-in-out;
        z-index: 2;
      }
      .card:hover .title {
        background: var(--c-gold);
      }
      .card:hover .time,
      .card:hover .title {
        background: var(--c-gold);
      }
      .card img {
        width: 100%;
        aspect-ratio: 738/415;
      }
      .card .placeholder {
        position: absolute;
        bottom: 12%;
        right: 5%;
        width: 35%;
      }
      .card .placeholder path,
      .card .placeholder circle {
        transition: all 0.2s ease-in-out;
      }
      .card:hover .gold {
        fill: var(--c-gold);
        transition-delay: 0.05s;
      }
      .card:hover .orange {
        fill: var(--c-orange);
        transition-delay: 0.1s;
      }
      .card:hover .pink {
        fill: var(--c-pink);
        transition-delay: 0.15s;
      }
      .card:hover .purple {
        fill: var(--c-purple);
        transition-delay: 0.2s;
      }
      .card:hover .blue {
        fill: var(--c-blue);
      }
      .card .time {
        position: absolute;
        right: var(--step--2);
        bottom: calc(var(--step--1) * -1);
        padding: var(--step--3) var(--step--2);
        margin-inline-end: var(--step--2);
        background: var(--c-100);
        font-size: var(--step--2);
        transition: all 0.2s ease-in-out;
      }
    </style>`;
}

module.exports = card;
