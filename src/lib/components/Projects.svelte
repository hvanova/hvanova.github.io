<script>
  import ExternalLink from "../svg/external-link.svelte";

  let categories = [
    "All Categories",
    "Data Visualization",
    "Data Science",
    "Research",
  ];
  let projects = [
    {
      title: "ARGOS: Automated RecoGnition Of Species",
      img: "/images/heatmap.jpeg",
      year: 2020,
      category: "Data Visualization",
      tech: ["Python", "D3.js"],
    },
    {
      title: "Group Influence on Spatially Connected and Random Networks",
      link: "https://github.com/hvanova/network_group_influence",
      img: "/images/groupinfluence.jpeg",
      year: 2019,
      category: "Research",
      tech: ["NetLogo"],
    },
    {
      title: "Bibliometric Networks Tutorial",
      link: "https://clarkdatalabs.github.io/bibliometric_networks/",
      img: "/images/bibnet.jpeg",
      year: 2019,
      category: "Data Visualization",
      tech: ["Python", "Colab"],
    },
    {
      title: "Derrida's Sources: Citations and References in Of Grammatology",
      link: "https://clarkdatalabs.github.io/derrida/",
      img: "/images/derrida.jpeg",
      year: 2018,
      category: "Data Visualization",
      tech: ["d3.js"],
    },
    {
      title:
        "Wide Angle Mirror System Design for Distortionless Imaging of the Sky",
      link: "https://drive.google.com/file/d/1wxGC0qPh5QiqPP0eOrF7YcuqKKq03N8p/view",
      img: "/images/SAIP.jpeg",
      year: 2017,
      category: "Research",
      tech: ["Matlab"],
    },
  ];

  let selectedCategory = "All Categories";
</script>

<div class="flex justify-around">
  <div class="px-6 pt-8 btn-group">
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
</div>

<div
  class="flex flex-col items-center md:space-x-12 md:flex-row mt-4 p-6 mx-10"
>
  {#each projects.filter((proj) => selectedCategory === "All Categories" || proj.category === selectedCategory) as project}
    <a href={project.link} alt="project url" class="card w-3/4 md:w-1/2">
      <div class="w-full relative">
        <img src={project.img} alt={project.title} />
      </div>
      <div class="container text-sm">
        {project.title}
        <div class="flex w-full justify-between">
          <div class="flex">
            {#each project.tech as tech}
              <div class="tech p-1 mt-1 text-xs mr-2">
                {tech}
              </div>
            {/each}
          </div>
          <div class="btn btn-sm btn-accent p-2">
            <ExternalLink />
          </div>
        </div>
      </div>
    </a>
  {/each}
</div>

<style>
  .card {
    border: 1px solid black;
    border-radius: 20px;
    align-self: flex-start;
  }
  .container {
    padding: 12px 16px;
    background-color: black;
    color: white;
  }
  .tech {
    height: fit-content;
    background-color: white;
    border-radius: 5px;
    color: black;
  }
</style>
