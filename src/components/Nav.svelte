<script>
    import NavOption from "./NavOption.svelte";
    import LinkedInIcon from "../../public/svg/Linkedin.svelte";
    import GithubIcon from "../../public/svg/Github.svelte";
    import ObservableIcon from "../../public/svg/Observable.svelte";
    import EmailIcon from "../../public/svg/Email.svelte";
    import { links } from "../../content/about";

    let selectedOption = "ABOUT";

    // Function to handle click event and update selectedOption
    function handleClick(optionName) {
        selectedOption = optionName;
    }
</script>

<div
    id="nav"
    class="text-left text-xs mt-20 font-bold text-secondaryText tracking-widest h-full navBar"
>
    <div class="w-full">
        <NavOption name="ABOUT" {selectedOption} {handleClick} />
        <NavOption name="EXPERIENCE" {selectedOption} {handleClick} />
        <NavOption name="PROJECTS" {selectedOption} {handleClick} />
    </div>
    <div class="links w-full">
        <div class="link">
            <a href={links.github}>
                <GithubIcon />
            </a>
        </div>
        <div class="link">
            <a href={links.linkedin}>
                <LinkedInIcon />
            </a>
        </div>
        <div class="link">
            <a href={links.observable}>
                <ObservableIcon />
            </a>
        </div>
        <div class="link">
            <a href={links.email}>
                <EmailIcon />
            </a>
        </div>
    </div>
</div>

<style>
    .navBar {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .link {
        padding-right: 32px;
        height: 32px;
    }
    .link:hover {
        color: white;
    }
    .links {
        display: flex;
        padding-top: 60px;
        align-items: flex-end;
        width: 100%;
    }
</style>
