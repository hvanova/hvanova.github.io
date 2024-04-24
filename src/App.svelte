<script>
  import Header from "./components/Header.svelte";
  import About from "./components/About.svelte";
  import Experience from "./components/Experience.svelte";
  import Projects from "./components/Projects.svelte";
  import Nav from "./components/Nav.svelte";
</script>

<main class="main bg-main font-inter">
  <div class="container">
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100vw;
  }
  .container {
    padding: 0 10%;
    margin-top: 8%;
    max-width: 2000px;
    width: 100%;
  }
</style>
