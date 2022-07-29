<script>
  import Header from "./lib/components/Header.svelte";
  import Projects from "./lib/components/Projects.svelte";
  import About from "./lib/components/About.svelte";
  import Contact from "./lib/components/Contact.svelte";
</script>

<main data-theme="garden" class="pb-10">
  <Header />
  <Projects />
  <About />
  <Contact />
</main>

<style lang="stylus">
  :global(html) {
    background: rgb(20, 85, 100);
  }
</style>
