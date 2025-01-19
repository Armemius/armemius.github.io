<script lang="ts">
  import NotebookModel from "$lib/NotebookModel.svelte";
  import BriefInfo from "$lib/BriefInfo.svelte";
  import { Keyboard_arrow_down as Arrow } from "svelte-google-materialdesign-icons";
  import { fadeIn } from "./animation/fadeIn";

  export let element: HTMLElement;
  export let aboutSection: HTMLElement;
  export let projectsSection: HTMLElement;

  const scrollToSection = (section: HTMLElement) => {
    return () => {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };
  };
</script>

<section
  class="relative grid grid-cols-1 md:grid-cols-2 h-screen items-center justify-items-center pl-[3%] pr-[3%] md:pl-[10%] md:pr-[10%]"
  bind:this={element}
>
  <BriefInfo {aboutSection} {projectsSection} />
  <NotebookModel />
</section>
