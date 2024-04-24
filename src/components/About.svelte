<script>
  import { intro, aboutP1, aboutP2 } from "../../content/about.js";
  import "../../styles.css";
</script>

<div id="about" class="sectionContainer">
  <p class="sectionTitle">ABOUT</p>
  <div class="details">
    <div class="intro text-secondaryText text-semibold text-base">
      {intro}
    </div>
    <div class="about pt-5">
      <p class="mb-4 text-sm text-greyText">{@html aboutP1}</p>
      <p class="text-sm text-greyText">{@html aboutP2}</p>
    </div>
  </div>
</div>

<style>
  .details {
    padding: 20px 5%;
  }
</style>
