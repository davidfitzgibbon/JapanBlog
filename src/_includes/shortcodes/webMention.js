function webMention() {
	return /*html*/ `<script>
    const path = "https://webmention.io/api/count.json?target=https://davidfitz.dev${this.page.url}";
    async function getCount() {
      const response = await fetch(path);
      const count = await response.json();
      console.log(count)
      if(count.count > 0)  {
        const type = count.type;
        // type.like + type.repost
        // type.mention + type.reply
        document.querySelector(".webMentions").innerHTML = "❤️ " + (type.like + type.repost || 0) + " 💬 " + (type.mention + type.reply || 0);
      }
      return count;
    }
    const count = getCount();
</script>
<div class="webMentions"></div>
`;
}

module.exports = webMention;
