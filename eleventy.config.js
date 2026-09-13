// PLUGINS
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginWebc = require("@11ty/eleventy-plugin-webc");
const socialImages = require("@11tyrocks/eleventy-plugin-social-images");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

// HELPERS
const sortByPubDate = require("./src/_includes/helper/sortByPubDate.js");
const filterByPreview = require("./src/_includes/helper/filterByPreview.js");

// SHORTCODES
const heading = require("./src/_includes/shortcodes/heading.js");
const card = require("./src/_includes/shortcodes/card.js");
const titleblock = require("./src/_includes/shortcodes/titleblock.js");
const timeAgoSC = require("./src/_includes/shortcodes/timeAgo.js");
const biTimeSC = require("./src/_includes/shortcodes/biTime.js");
const locSC = require("./src/_includes/shortcodes/loc.js");
const figSC = require("./src/_includes/shortcodes/fig.js");
const imgSC = require("./src/_includes/shortcodes/img.js");
const youtube = require("./src/_includes/shortcodes/youtube.js");
const codepen = require("./src/_includes/shortcodes/codepen.js");
const p5 = require("./src/_includes/shortcodes/p5.js");
const webMention = require("./src/_includes/shortcodes/webMention.js");
const gptMath = require("./src/_includes/shortcodes/gptMath.js");

module.exports = function (eleventyConfig) {
  // PASSTHROUGH
  eleventyConfig.addPassthroughCopy({ public: "/" });

  // PLUGINS
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(socialImages);
  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/_includes/components/**/*.webc",
  });

  // SHORTCODES
  eleventyConfig.addShortcode("heading", heading);
  eleventyConfig.addShortcode("card", card);
  eleventyConfig.addShortcode("p5", p5);
  eleventyConfig.addShortcode("titleblock", titleblock);
  eleventyConfig.addShortcode("timeAgo", timeAgoSC);
  eleventyConfig.addShortcode("biTime", biTimeSC);
  eleventyConfig.addShortcode("loc", locSC);
  eleventyConfig.addShortcode("fig", figSC);
  eleventyConfig.addShortcode("img", imgSC);
  eleventyConfig.addShortcode("youtube", youtube);
  eleventyConfig.addShortcode("codepen", codepen);
  eleventyConfig.addShortcode("webMention", webMention);
  eleventyConfig.addShortcode("gptMath", gptMath);
  eleventyConfig.addShortcode("currentYear", () => {
    return new Date().getFullYear();
  });
  eleventyConfig.addShortcode("sitedomain", () => {
    return `https://davidfitz.dev`;
  });

  // COLLECTIONS
  eleventyConfig.addCollection("postsByDate", function (collectionApi) {
    return collectionApi
      .getFilteredByTags("post")
      .filter(filterByPreview)
      .sort(sortByPubDate);
  });

  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
