<script>
  import LogoIcon from "../svg/target.svelte";
</script>

<nav class="navbar bg-secondary flex justify-between w-full pt-2">
  <div class="navbar-start">
    <a href="/" alt="Site logo" class="ml-4 btn btn-md p-2 btn-secondary">
      <LogoIcon />
    </a>
  </div>
  <div class="navbar-end space-x-6 mr-4">
    <a class="btn btn-secondary btn-md" href=""> About </a>
    <a class="btn btn-secondary btn-md" href=""> Contact </a>
    <a
      class="btn btn-secondary btn-md"
      href="https://drive.google.com/file/d/1_cvyaBoC2ltvacSRy39_N5MfNGT3VLDf/view?usp=sharing"
    >
      Resume
    </a>
  </div>
</nav>
<div class="name justify-around pt-4 ">Hannah VanWingen</div>
<div class="flex items-center flex-col pt-4">
  <div>Hello! Glad you're here</div>
  <div>Sort through my personal and collaborative projects.</div>
</div>

<style>
  .name {
    font-size: 3.5vw;
    font-family: "Unica One";
    letter-spacing: 12px;
    text-align: center;
    font-weight: 1000;
  }
</style>
