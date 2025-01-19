<script lang="ts">
  import TextField from "@smui/textfield";
  import Select, { Option } from "@smui/select";
  import ProjectItem from "./ProjectItem.svelte";
  import projects, { type Target, type Language } from "$lib/data/projects";

  let search = "";
  let language: Language = "any";
  let target: Target = "any";

  export let element: HTMLElement;
</script>

<section
  bind:this={element}
  class="min-h-[100vh] flex flex-col items-center p-15"
>
  <section class="center pb-10">
    <h1 class="text-6 md:text-7 leading-9 font-500 mb-3 text-center">
      Мои проекты
    </h1>
    <p class="leading-6 text-4 md:leading-7 md:text-5 font-350">
      Здесь представлены мои проекты, над которыми я работал в свободное время
    </p>
  </section>
  <div class="flex flex-col md:flex-row gap-6 mb-8">
    <TextField bind:value={search} class="w-80" label="Поиск по названию" />
    <Select bind:value={language} label="Язык">
      <Option value="any" default>Любой</Option>
      <Option value="c">C</Option>
      <Option value="cpp">C++</Option>
      <Option value="rust">Rust</Option>
      <Option value="asm">Ассемблер</Option>
      <Option value="python">Python</Option>
      <Option value="js">JavaScript</Option>
      <Option value="ts">TypeScript</Option>
      <Option value="java">Java</Option>
      <Option value="kotlin">Kotlin</Option>
      <Option value="matlab">MATLAB</Option>
    </Select>
    <Select bind:value={target} label="Тип">
      <Option value="any" default>Любой</Option>
      <Option value="lib">Библиотека</Option>
      <Option value="cli">Консольное приложение</Option>
      <Option value="web">Веб-приложение</Option>
      <Option value="desktop">Десктопное приложение</Option>
      <Option value="embedded">Встроенные системы</Option>
    </Select>
  </div>
  <div class="flex flex-wrap gap-7 justify-center">
    {#each projects
      .filter((it) => search === "" || it.title.toLowerCase().includes(search.toLowerCase()))
      .filter((it) => language === "any" || it.languages.includes(language))
      .filter((it) => target === "any" || it.target === target) as project}
      <ProjectItem {...project} />
    {/each}
    {#if !projects
      .filter((it) => search === "" || it.title.toLowerCase().includes(search.toLowerCase()))
      .filter((it) => language === "any" || it.languages.includes(language))
      .filter((it) => target === "any" || it.target === target).length}
      <p class="text-4 font-350">Ничего не найдено :(</p>
    {/if}
  </div>
</section>
