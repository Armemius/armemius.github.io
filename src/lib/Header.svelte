<script lang="ts">
  import NotebookModel from "$lib/NotebookModel.svelte";
  import BriefInfo from "$lib/BriefInfo.svelte";
</script>

<section class="grid grid-cols-1 md:grid-cols-2 h-screen items-center justify-items-center pl-[10%] pr-10%">
  <BriefInfo />
  <NotebookModel />
</section>
