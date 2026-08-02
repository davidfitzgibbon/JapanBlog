function titleblock (title, href)  {
  return /* html */ `
    <div class="titleBlock">
      <h2>${title}</h2>
      <a href=${href}>All</a>
    </div>

    <style>
      .titleBlock {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }
      @media (min-width: 37.5rem) {
        .titleBlock {
          justify-content: flex-start;
          gap: var(--space-l);
        }
      }
    </style>
  `
}
module.exports= titleblock;