<script lang="ts">
  import Tooltip from "sv-tooltip";
  import type { Language, Libs } from "$lib/data/projects";

  export let title: string;
  export let description: string;
  export let image: string;
  export let github: string | undefined = undefined;
  export let page: string | undefined = undefined;
  export let libs: Libs[] | undefined = [];
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

  const libIcons = {
    undefined: "hidden",
    sdl: "devicon-sdl-plain",
    glfw: "devicon-glfw-plain",
    qt: "devicon-qt-plain",
    gtk: "devicon-gtk-plain",
    ncurses: "devicon-ncurses-plain",
    opengl: "devicon-opengl-plain",
    webgl: "devicon-opengl-plain",
    vulkan: "devicon-vulkan-plain",
    directx: "devicon-directx-plain",
    winapi: "devicon-windows8-original",
    xlib: "devicon-x11-plain",
    react: "devicon-react-original",
    svelte: "devicon-svelte-plain",
    wasm: "devicon-wasm-original",
  };

  const libNames = {
    sdl: "SDL",
    glfw: "GLFW",
    qt: "Qt",
    gtk: "GTK",
    ncurses: "ncurses",
    opengl: "OpenGL",
    webgl: "WebGL",
    vulkan: "Vulkan",
    directx: "DirectX",
    winapi: "WinAPI",
    xlib: "Xlib",
    react: "React",
    svelte: "Svelte",
    wasm: "WebAssembly",
  };
</script>

<section
  class="w-100 bg-white hover:bg-WhiteSmoke rounded-lg shadow-md p-5 flex flex-col gap-5 m-5 justify-between"
>
  <img src={image} alt={title} class="w-full h-40 object-cover rounded-lg" />
  <h2 class="text-5 font-500">{title}</h2>
  <p class="text-4 leading-7 font-350">{description}</p>
  <div class="flex gap-2">
    {#each languages as language}
      <Tooltip tip={languageNames[language]} bottom>
        <i class={`${languageIcons[language]} text-6`}></i>
      </Tooltip>
    {/each}
    {#if libs}
      {#each libs as lib}
        <Tooltip tip={libNames[lib as keyof typeof libNames]} bottom>
          <i class={`${libIcons[lib as keyof typeof libNames]} text-6`}></i>
        </Tooltip>
      {/each}
    {/if}
  </div>
  <div class="flex flex-col gap-2 justify-self-end">
    {#if github}
      <a
        href={github}
        target="_blank"
        class="text-4 font-350 no-underline color-black"
      >
        <i class="devicon-github-original text-5"></i>
        Ссылка на GitHub
      </a>
    {/if}
    {#if page}
      <a
        href={page}
        target="_blank"
        class="text-4 font-350 no-underline color-black"
      >
        <i class="devicon-ros-original text-5 inline-block"></i>
        Веб-страница
      </a>
    {/if}
  </div>
</section>
