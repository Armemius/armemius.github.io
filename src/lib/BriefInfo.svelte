<script lang="ts">
  import Button from "@smui/button";
  import { fadeIn } from "$lib/animation/fadeIn";

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

<article use:fadeIn class="relative mb-50 mr-20 flex flex-col gap-4">
  <h1 class="text-10 font-500">Привет!</h1>
  <p class="leading-9 text-6 font-350">
    Меня зовут <span class="color-#6200ee">Арсений</span>, я люблю
    программирование, компьютеры и всё, что с ними связано
  </p>
  <div>
    <button on:click={scrollToSection(aboutSection)}>
      <Button>Обо мне</Button>
    </button>
    <button on:click={scrollToSection(projectsSection)}>
      <Button>Мои проекты</Button>
    </button>
  </div>
</article>
