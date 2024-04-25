<script>
    import projects from "../../content/projects.js";
</script>

<div id="projects" class="text-left pb-16 pt-10">
    <p class="sectionTitle">PROJECTS</p>
    {#each projects as project}
        <a href={project.link}>
            <div class="container">
                <div class="image my-4">
                    <img src={project.imagePath} alt={project.title} />
                </div>
                <div class="text">
                    <div class="text-white text-l title">
                        {project.title}
                    </div>
                    <div class="text-secondaryText">
                        {project.role}, {project.year}
                    </div>
                    <div class="text-greyText mt-4 text-sm">
                        {project.description}
                    </div>
                </div>
            </div>
        </a>
    {/each}
</div>

<style>
    .container {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding: 20px 5% 20px;
    }
    .container:hover {
        background-color: rgba(172, 172, 172, 0.1);
    }
    .container:hover .title {
        color: theme("colors.highlightText");
    }
    .image img {
        height: 160px;
    }
    .text {
        flex: 1;
        /* min-width: 200px; */
    }
</style>
