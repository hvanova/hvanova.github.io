<script>
    import NavOption from "./NavOption.svelte";
    import LinkedInIcon from "../../public/svg/Linkedin.svelte";
    import GithubIcon from "../../public/svg/Github.svelte";
    import ObservableIcon from "../../public/svg/Observable.svelte";
    import EmailIcon from "../../public/svg/Email.svelte";
    import { links } from "../../content/about";

    let selectedOption = "ABOUT";

    function handleClick(optionName) {
        selectedOption = optionName;
    }
</script>

<div id="nav" class="py-10">
    <!-- <div class="w-full">
        <a href="#about"
            ><NavOption name="ABOUT" {selectedOption} {handleClick} /></a
        >
        <a href="#experience">
            <NavOption name="EXPERIENCE" {selectedOption} {handleClick} /></a
        >
        <a href="#projects">
            <NavOption name="PROJECTS" {selectedOption} {handleClick} /></a
        >
    </div> -->
    <div class="links">
        <div class="link text-greyText">
            <a href={links.github} aria-label="Github">
                <GithubIcon />
            </a>
        </div>
        <div class="link text-greyText">
            <a href={links.linkedin} aria-label="LinkedIn">
                <LinkedInIcon />
            </a>
        </div>
        <div class="link text-greyText">
            <a href={links.observable} aria-label="Observable">
                <ObservableIcon />
            </a>
        </div>
        <div class="link text-greyText" aria-label="Email">
            <a href={links.email}>
                <EmailIcon />
            </a>
        </div>
    </div>
</div>

<style>
    .link {
        display: flex;
        height: 32px;
    }
    .link:hover {
        color: white;
    }
    .links {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 300px;
    }
    .container {
        /* display: flex;
        align-items: center;
        justify-content: center;
        padding: 100px 16% 0px 16%; */
    }
</style>
