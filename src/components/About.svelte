<script>
    import {about} from "../../content/about.js"
</script>

<div id="about" class="text-left text-m text-secondaryText mt-4">
    {#each about.paragraphs as paragraph}
    <p class="item">{@html paragraph}</p>
  {/each}
</div>
  
<style >
.item {
 margin-bottom: 10px; 
 display: block; 
}
</style>