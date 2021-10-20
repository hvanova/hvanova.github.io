<script>
  import LogoIcon from "../svg/logo.svelte";
</script>

<nav class="navbar justify-between mb-2">
  <div>
    <a href="/" alt="Site logo" class="mx-6 mb-8 mt-3">
      <LogoIcon />
    </a>
  </div>
  <div class="navbar-end mb-2 flex pr-8 space-x-6">
    <a class="btn btn-primary" href=""> About </a>
    <a class="btn btn-primary" href=""> Contact </a>
    <a
      class="btn btn-primary"
      href="https://drive.google.com/file/d/1_cvyaBoC2ltvacSRy39_N5MfNGT3VLDf/view?usp=sharing"
    >
      Resume
    </a>
  </div>
</nav>

<style>
  nav {
    background-image: linear-gradient(to bottom, transparent, 90%, white),
      url("/images/nav-back.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>
