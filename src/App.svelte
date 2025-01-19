<script lang="ts">
  import Header from "$lib/Header.svelte";
  import About from "$lib/About.svelte";
  import Projects from "$lib/Projects.svelte";

  let headerSection: HTMLElement;
  let aboutSection: HTMLElement;
  let projectsSection: HTMLElement;
</script>

<main>
  <Header bind:element={headerSection} {aboutSection} {projectsSection} />
  <About bind:element={aboutSection} />
  <Projects bind:element={projectsSection} />
</main>
