<script lang="ts">
  import Tooltip from "sv-tooltip";
  import type { Language } from "$lib/data/projects";

  export let title: string;
  export let description: string;
  export let image: string;
  export let github: string;
  export let languages: Language[];

  const languageIcons = {
    any: "hidden",
    c: "devicon-c-plain",
    cpp: "devicon-cplusplus-plain",
    rust: "devicon-rust-plain",
    asm: "devicon-assembly-plain",
    python: "devicon-python-plain",
    js: "devicon-javascript-plain",
    ts: "devicon-typescript-plain",
    java: "devicon-java-plain",
    kotlin: "devicon-kotlin-plain",
    matlab: "devicon-matlab-plain",
  };

  const languageNames = {
    any: "Не указан",
    c: "C",
    cpp: "C++",
    rust: "Rust",
    asm: "Ассемблер",
    python: "Python",
    js: "JavaScript",
    ts: "TypeScript",
    java: "Java",
    kotlin: "Kotlin",
    matlab: "MATLAB",
  };
</script>

<section class="p-5 bg-gray-100 rounded-md">
  <div class="flex flex-col md:flex-row gap-6">
    <div class="w-full md:w-1/3">
      <img src={image} alt={title} class="w-full h-auto" />
    </div>
    <div class="w-full md:w-2/3">
      <h2 class="text-5 md:text-6 leading-8 font-500 mb-3">{title}</h2>
      <p class="leading-6 text-4 md:leading-7 md:text-4 font-350">
        {description}
      </p>
      <div class="flex gap-1 mt-3">
        {#each languages as language}
          <Tooltip
            tip={languageNames[language]}
            bottom>
            <i class={`${languageIcons[language]} text-5`}></i>
          </Tooltip>
        {/each}
      </div>
      <a
        href={github}
        target="_blank"
        class="text-4 md:text-5 font-350 color-black underline-none mt-3 block ">GitHub</a
      >
    </div>
  </div>
</section>
