<script lang="ts">
  import Tooltip from "sv-tooltip";
  import { fadeIn } from "./animation/fadeIn";

  export let title: string;
  export let data: Array<{ tip: string; icon: string }>;
</script>

<section use:fadeIn >
  <h3 class="color-#6200ee text-5 md:text-6 mb-3">{title}</h3>
  <div class="flex flex-wrap gap-2">
    {#each data as item}
      <Tooltip tip={item.tip} bottom>
        <i class="{item.icon} text-12 m-1 md:m-0 md:text-10"></i>
      </Tooltip>
    {/each}
  </div>
</section>

<style>
  i {
    opacity: 0.8;
    padding: 0 4px;
  }
</style>
