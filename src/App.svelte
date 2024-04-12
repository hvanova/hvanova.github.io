<script>
  import Header from "./components/Header.svelte";
  import About from "./components/About.svelte";
  import Experience from "./components/Experience.svelte";
  import Projects from "./components/Projects.svelte";
  import Nav from "./components/Nav.svelte";
</script>

<main class="main bg-main font-inter">
  <div class="mt-20">
    <Header />
    <Nav />
    <div>
      <About />
      <Experience />
      <Projects />
    </div>
  </div>
</main>

<style>
  .main {
    background-position: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0px 140px 0px 140px;
    column-gap: 160px;
  }
  .col {
    flex: 1;
    flex-direction: column;
    display: flex;
    min-width: 500px;
    overflow: scroll;
    scrollbar-color: white;
    max-height: 100vh;
    /* padding: 80px 0px 80px 0px; */
  }
</style>
