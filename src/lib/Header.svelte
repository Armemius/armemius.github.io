<script lang="ts">
  import NotebookModel from "$lib/NotebookModel.svelte";
  import BriefInfo from "$lib/BriefInfo.svelte";
  import { Keyboard_arrow_down as Arrow } from "svelte-google-materialdesign-icons";
  import { fadeIn } from "./animation/fadeIn";
  
</script>

<section
  class="relative grid grid-cols-1 md:grid-cols-2 h-screen items-center justify-items-center pl-[10%] pr-10%"
>
  <BriefInfo />
  <NotebookModel />
  <div use:fadeIn class="absolute opacity-[0.7] bottom-0 hover:opacity-[1.0] cursor-pointer">
    <Arrow class="outline-none" on:click size="64" />
  </div>
</section>
