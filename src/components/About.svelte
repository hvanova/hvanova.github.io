<script>
  import { bio, about} from "../../content/about.js";
  import "../../styles.css";
</script>

<div id="about" class="sectionContainer">
  <p class="sectionTitle">ABOUT</p>
  <div class="details">
    <div class="intro text-secondaryText text-semibold text-base">
      {bio}
    </div>
    <div class="about pt-5">
      <p class="text-sm text-greyText">{@html about}</p>
    </div>
  </div>
</div>

<style>
  .details {
    padding: 20px 5%;
  }
</style>
