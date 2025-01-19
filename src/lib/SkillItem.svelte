<script>
  import Tooltip from "sv-tooltip";

  export let icon;
  export let tip;
  export let href = "";

  let isHovered = false;
</script>

<Tooltip bottom tip={`<a href="${href}" class="color-white">${tip}</a>`}>
  <button
    on:mouseenter={() => (isHovered = true)}
    on:mouseleave={() => (isHovered = false)}
  >
    <div class="flex items-center gap-1">
      <i class:colored={isHovered} class={`${icon} text-13 md:m-1`}></i>
      <span class="text-6 md:text-5 color-black">{tip}</span>
    </div>
  </button>
</Tooltip>

<style>
  i {
    transition: 0.3s;
    padding: 0 4px;
  }
</style>
