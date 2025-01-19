<script lang="ts">
  import Tooltip from "sv-tooltip";
  import { fadeIn } from "./animation/fadeIn";

  import SkillItem from "./SkillItem.svelte";

  export let title: string;
  export let data: Array<{ tip: string; icon: string; href: string }>;
</script>

<section use:fadeIn>
  <h3 class="color-#6200ee text-5 md:text-6 mb-7">{title}</h3>
  <div class="flex flex-wrap gap-7 justify-center pb-5">
    {#each data as item}
      <SkillItem icon={item.icon} tip={item.tip} href={item.href} />
    {/each}
  </div>
</section>
