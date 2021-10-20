<script>
  let categories = [
    "All Categories",
    "Data Visualization",
    "Data Science",
    "Research",
  ];
  let projects = [
    {
      title:
        "Wide Angle Mirror System Design for Distortionless Imaging of the Sky",
      link: "https://drive.google.com/file/d/1wxGC0qPh5QiqPP0eOrF7YcuqKKq03N8p/view",
      img: "/images/SAIP.jpeg",
      year: 2017,
      category: "Research",
    },
    {
      title: "Derrida's Sources: Citations and References in Of Grammatology",
      link: "https://clarkdatalabs.github.io/derrida/",
      img: "/images/derrida.jpeg",
      year: 2018,
      category: "Data Visualization",
    },
    {
      title: "Bibliometric Networks: A Python Tutorial",
      link: "https://clarkdatalabs.github.io/bibliometric_networks/",
      img: "/images/bibnet.jpeg",
      year: 2019,
      category: "Data Visualization",
    },
    {
      title: "Group Influence on Spatially Connected and Random Networks",
      link: "https://github.com/hvanova/network_group_influence",
      img: "/images/groupinfluence.jpeg",
      year: 2019,
      category: "Research",
    },
  ];

  let selectedCategory = "All Categories";
</script>

<div class="mx-20">
  <div class="btn-group justify-center">
    {#each categories as category}
      <input
        type="radio"
        name="options"
        data-title={category}
        value={category}
        bind:group={selectedCategory}
        class="btn"
      />
    {/each}
  </div>

  <div
    class="flex flex-col items-center space-y-12 md:space-x-12 md:flex-row mt-10 p-6"
  >
    {#each projects.filter((proj) => selectedCategory === "All Categories" || proj.category === selectedCategory) as project}
      <div class="flex-grow-0 w-3/4 md:w-1/3">
        <img src={project.img} alt={project.title} />
      </div>
    {/each}
  </div>
</div>

<style>
</style>
