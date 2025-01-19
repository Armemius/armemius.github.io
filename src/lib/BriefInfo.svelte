<script lang="ts">
  import Button from "@smui/button";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let observer: IntersectionObserver;
  let element: HTMLElement;

  let isVisible = false;

  const handleIntersect: IntersectionObserverCallback = (entries) => {
    if (entries[0].isIntersecting) {
      isVisible = true;
    }
  };

  onMount(() => {
    observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.1,
    });
    observer.observe(element);

    return () => {
      if (observer) observer.disconnect();
    };
  });
</script>

<article
  bind:this={element}
  class="relative mb-50 mr-20 flex flex-col gap-4"
  class:hidden={!isVisible}
  transition:fade
>
  <h1 class="text-10 font-500">Привет!</h1>
  <p class="leading-9 text-6 font-350">
    Меня зовут <span class="color-#6200ee">Арсений</span>, я люблю
    программирование, компьютеры и всё, что с ними связано
  </p>
  <div>
    <Button>Обо мне</Button>
    <Button>Мои проекты</Button>
  </div>
</article>
