<script>
  import { about } from "../../content/about.js";
</script>

<div id="about" class="text-left text-m text-secondaryText pt-24">
  <p class="text-white tracking-widest text-m mb-6">ABOUT</p>
  <div class="px-20">
    {#each about.paragraphs as paragraph}
      <p class="item">{@html paragraph}</p>
    {/each}
  </div>
</div>

<style>
  .item {
    margin-bottom: 30px;
    display: block;
  }
</style>
