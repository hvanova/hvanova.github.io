<script>
    import roles from "../../content/experience.js";
</script>

<div id="experience" class="sectionContainer">
    <p class="sectionTitle">EXPERIENCE</p>
    {#each roles as role}
        <a href={role.link}>
            <div class="container">
                <div class="flex flex-row">
                    <div class="col text-greyText text-xs">
                        {role.range}
                    </div>
                    <div class="ml-8">
                        <p class="text-l text-white">{role.title}</p>
                        <p class="text-m text-secondaryText link">
                            {role.company}
                        </p>
                    </div>
                </div>
                <div class="text-greyText text-sm mt-4">
                    {role.description}
                </div>
                <div class="text-highlightText flex flex-row pt-2 flex-wrap">
                    {#each role.skills as skill}
                        <div class="skill mr-2 mt-2 text-xs">
                            {skill}
                        </div>
                    {/each}
                </div>
            </div>
        </a>
    {/each}
</div>

<style>
    .container {
        padding: 20px 5% 20px;
    }
    .container:hover {
        background-color: rgba(172, 172, 172, 0.1);
    }
    .container:hover .link {
        color: theme("colors.highlightText");
    }
    .skill {
        border-radius: 24px;
        background-color: rgba(172, 172, 172, 0.322);
        padding: 8px 16px;
    }
</style>
