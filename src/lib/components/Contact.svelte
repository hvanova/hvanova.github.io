<script>
  import GitHubIcon from "../svg/github.svelte";
  import LinkedInIcon from "../svg/linkedin.svelte";
  import EmailIcon from "../svg/email.svelte";
</script>

<div class="flex flex-col w-full items-center mt-8">
  <div class="font-bold text text-xl my-2">
    I'm currently looking for new opportunities. Feel free to reach out for any
    reason
  </div>
  <div class="flex pr-4 space-x-6">
    <a
      class="btn btn-md btn-secondary p-2"
      href="https://www.linkedin.com/in/hannah-vanwingen-248976115/"
    >
      <LinkedInIcon />
    </a>

    <a class="btn btn-md btn-secondary p-2" href="https://github.com/hvanova">
      <GitHubIcon />
    </a>
    <a class="btn btn-md p-2 btn-secondary" href="mailto:hvanova@umich.edu">
      <EmailIcon />
    </a>
  </div>
</div>

<style>
  .text {
    color: rgb(237, 121, 84);
    letter-spacing: 2px;
  }
</style>
