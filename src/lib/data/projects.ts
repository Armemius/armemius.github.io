import FRACTALS from "$assets/fractals.jpg";
import TESSERACTUS from "$assets/tesseractus.jpg";
import PROCESSOR from "$assets/processor.jpg";
import COMPUTER from "$assets/computer.jpg";
import INTERPOLATOR from "$assets/interpolator.jpg";

export type Language =
  | "any"
  | "c"
  | "cpp"
  | "rust"
  | "asm"
  | "python"
  | "js"
  | "ts"
  | "java"
  | "kotlin"
  | "matlab";

export type Target = "any" | "lib" | "cli" | "web" | "desktop" | "embedded";

export type Libs =
  | "glfw"
  | "qt"
  | "gtk"
  | "ncurses"
  | "opengl"
  | "webgl"
  | "vulkan"
  | "directx"
  | "winapi"
  | "xlib"
  | "react"
  | "svelte"
  | "wasm";

export interface Project {
  title: string;
  description: string;
  image: string;
  github?: string;
  page?: string;
  libs?: Libs[];
  languages: Language[];
  target: Target;
}

const projects: Project[] = [
  {
    title: "Fractals",
    description: "Рендер фракталов на GPU с использованием WebGL и WebAssembly",
    image: FRACTALS,
    github: "https://github.com/Armemius/fractals",
    page: "https://armemius.github.io/fractals/",
    languages: ["js", "ts", "rust"],
    libs: ["react", "webgl", "wasm"],
    target: "web",
  },
  {
    title: "Tesseractus",
    description: "Рендер тессеракта на чистом WebGL",
    image: TESSERACTUS,
    github: "https://github.com/Armemius/tesseractus",
    languages: ["js", "ts"],
    libs: ["react", "webgl"],
    target: "web",
    page: "https://armemius.github.io/tesseractus/",
  },
  {
    title: "Processor Emulator",
    description:
      "Эмулятор стекового процессора с компиллятором ассемблера в машинные коды",
    image: PROCESSOR,
    languages: ["python"],
    target: "cli",
    github: "https://github.com/Armemius/ProcessorEmulator",
  },
  {
    title: "Primitive Windows Shell",
    description: "Примитивная оболочка для Windows с использованием WinAPI",
    image: COMPUTER,
    languages: ["c"],
    libs: ["winapi"],
    target: "cli",
    github: "https://github.com/Armemius/WindowsPrimitiveShell",
  },
  {
    title: "Interpolator",
    description: "Интерполятор функций с использованием различных методов",
    image: INTERPOLATOR,
    languages: ["js", "ts", "rust"],
    libs: ["svelte", "wasm"],
    target: "web",
    github: "https://armemius.github.io/FunctionalProgramming/",
    page: "https://armemius.github.io/FunctionalProgramming/",
  },
];

export default projects;
