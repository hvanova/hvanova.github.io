<script>
  import Header from "./components/Header.svelte";
  import Nav from "./components/Nav.svelte";
  import About from "./components/About.svelte";
</script>

<main class="main bg-main font-inter">
  <div class="col">
    <Header />
    <Nav />
  </div>
  <div class="col">
    <About />
  </div>
</main>

<style>
  .main {
    background-position: center;
    padding: 80px 160px;
    height: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box; /* Ensure padding is included in the width */
  }
  .main-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px; /* Add padding between the columns */
    box-sizing: border-box; /* Ensure padding is included in the width */
  }
  .col {
    flex: 1;
    flex-direction: column;
    display: flex;
    min-width: 300px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 768px) {
    .main {
      padding: 20px;
    }
    .col {
      width: 100%;
      padding: 20px;
    }
  }
</style>
