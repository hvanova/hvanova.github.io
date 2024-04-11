<script>
  import Header from "./components/Header.svelte";
  import Nav from "./components/Nav.svelte";
  import About from "./components/About.svelte";
  import Experience from "./components/Experience.svelte";
</script>

<main class="main bg-main font-inter">
  <div class="col mr-14 leftCol">
    <Header />
    <Nav />
  </div>
  <div class="col pr-10 mr-14 h-full">
    <About />
    <Experience />
  </div>
</main>

<style>
  .main {
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .col {
    flex: 1;
    flex-direction: column;
    display: flex;
    min-width: 300px;
    overflow: scroll;
    scrollbar-color: white;
  }
  .leftCol {
    padding: 80px 20px 80px 160px;
  }
</style>
