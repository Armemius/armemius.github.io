<script lang="ts">
  import NotebookModel from "$lib/NotebookModel.svelte";
  import BriefInfo from "$lib/BriefInfo.svelte";

  export let element: HTMLElement;
  export let aboutSection: HTMLElement;
  export let projectsSection: HTMLElement;
</script>

<section
  class="relative grid grid-cols-1 md:grid-cols-2 h-screen items-center justify-items-center pl-[3%] pr-[3%] md:pl-[10%] md:pr-[10%]"
  bind:this={element}
>
  <BriefInfo {aboutSection} {projectsSection} />
  <NotebookModel />
</section>
