<script lang="ts">
  import { fadeIn } from "./animation/fadeIn";
  import SkillsSection from "./SkillsSection.svelte";
  import TimelineSection from "./TimelineSection.svelte";
  import Icon from "@iconify/svelte";
  export let element: HTMLElement;

  const programmingLanguages = [
    {
      tip: "C",
      icon: "devicon-c-plain",
      href: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    {
      tip: "C++",
      icon: "devicon-cplusplus-plain",
      href: "https://isocpp.org/",
    },
    {
      tip: "Rust",
      icon: "devicon-rust-plain",
      href: "https://www.rust-lang.org/",
    },
    {
      tip: "Assembly",
      icon: "devicon-embeddedc-plain",
      href: "https://en.wikipedia.org/wiki/Assembly_language",
    },
    {
      tip: "Python",
      icon: "devicon-python-plain",
      href: "https://www.python.org/",
    },
    {
      tip: "Bash",
      icon: "devicon-bash-plain",
      href: "https://www.gnu.org/software/bash/",
    },
    {
      tip: "JavaScript",
      icon: "devicon-javascript-plain",
      href: "https://developer.mozilla.org/docs/Web/JavaScript",
    },
    {
      tip: "TypeScript",
      icon: "devicon-typescript-plain",
      href: "https://www.typescriptlang.org/",
    },
    {
      tip: "Java",
      icon: "devicon-java-plain",
      href: "https://www.oracle.com/java/",
    },
    {
      tip: "Kotlin",
      icon: "devicon-kotlin-plain",
      href: "https://kotlinlang.org/",
    },
    {
      tip: "MATLAB",
      icon: "devicon-matlab-plain",
      href: "https://www.mathworks.com/products/matlab.html",
    },
  ];

  const frameworks = [
    {
      tip: "React",
      icon: "devicon-react-original",
      href: "https://reactjs.org/",
    },
    {
      tip: "Svelte",
      icon: "devicon-svelte-plain",
      href: "https://svelte.dev/",
    },
    {
      tip: "Three.js",
      icon: "devicon-threejs-original",
      href: "https://threejs.org/",
    },
    { tip: "Spring", icon: "devicon-spring-plain", href: "https://spring.io/" },
    {
      tip: "OpenCV",
      icon: "devicon-opencv-plain",
      href: "https://opencv.org/",
    },
    {
      tip: "TensorFlow",
      icon: "devicon-tensorflow-original",
      href: "https://www.tensorflow.org/",
    },
  ];

  const databases = [
    {
      tip: "PostgreSQL",
      icon: "devicon-postgresql-plain",
      href: "https://www.postgresql.org/",
    },
    {
      tip: "SQLite",
      icon: "devicon-sqlite-plain",
      href: "https://www.sqlite.org/",
    },
    {
      tip: "MongoDB",
      icon: "devicon-mongodb-plain",
      href: "https://www.mongodb.com/",
    },
  ];

  const otherTech = [
    { tip: "Git", icon: "devicon-git-plain", href: "https://git-scm.com/" },
    {
      tip: "SVN",
      icon: "devicon-subversion-plain",
      href: "https://subversion.apache.org/",
    },
    { tip: "CMake", icon: "devicon-cmake-plain", href: "https://cmake.org/" },
    {
      tip: "Gradle",
      icon: "devicon-gradle-plain",
      href: "https://gradle.org/",
    },
    {
      tip: "Maven",
      icon: "devicon-maven-plain",
      href: "https://maven.apache.org/",
    },
    {
      tip: "Docker",
      icon: "devicon-docker-plain",
      href: "https://www.docker.com/",
    },
    {
      tip: "Nginx",
      icon: "devicon-nginx-plain",
      href: "https://www.nginx.com/",
    },
    {
      tip: "Linux",
      icon: "devicon-linux-plain",
      href: "https://www.kernel.org/",
    },
    {
      tip: "GitHub Actions",
      icon: "devicon-githubactions-plain",
      href: "https://github.com/features/actions",
    },
  ];
</script>

<section
  bind:this={element}
  class="min-h-[100vh] flex flex-col items-center md:pl-20% md:pr-20% md:w-60%"
>
  <div class="flex items-center text-center p-4 md:p-15 flex-col gap-15">
    <article use:fadeIn>
      <h1 class="text-6 md:text-7 leading-9 font-500 mb-3">Немного обо мне</h1>
      <p class="leading-6 text-4 md:leading-7 md:text-5 font-350">
        Я студент 3 курса кафедры <span class="color-#6200ee">ВТ</span>
        университета <span class="color-#6200ee">ИТМО</span>. В свободное время
        я часто занимаюсь написанием кода и изучением новых технологий. Мне
        нравится работать с различными технологиями, особенно в сфере системного
        программирования и информационной безопасности.
      </p>
      <div class="flex gap-15 items-center justify-center mt-14">
        <a
          href="https://t.me/armemius"
          target="_blank"
          class="flex flex-row items-center gap-2 font-150 color-black no-underline"
        >
          <Icon icon="mdi:telegram" class="text-6 md:text-7"></Icon>
          <p class="text-5 md:text-6 leading-5 md:leading-6">Telegram</p>
        </a>
        <a
          href="https://github.com/Armemius"
          target="_blank"
          class="flex flex-row items-center gap-2 font-150 color-black no-underline"
        >
          <Icon icon="mdi:github" class="text-6 md:text-7"></Icon>
          <p class="text-5 md:text-6 leading-5 md:leading-6">Github</p>
        </a>
        <a
          href="mailto:rusgy@yandex.ru"
          target="_blank"
          class="flex flex-row items-center gap-2 font-150 color-black no-underline"
        >
          <Icon icon="material-symbols:mail" class="text-6 md:text-7"></Icon>
          <p class="text-5 md:text-6 leading-5 md:leading-6">E-Mail</p>
        </a>
      </div>
    </article>
    <article class="md:w-[80%] flex flex-col gap-3">
      <h2 class="text-6 md:text-7 leading-9 font-500">Навыки</h2>
      <div class="flex flex-col gap-7">
        <SkillsSection
          title="Языки программирования"
          data={programmingLanguages}
        />
        <SkillsSection title="Фреймворки и библиотеки" data={frameworks} />
        <SkillsSection title="Базы данных" data={databases} />
        <SkillsSection title="Другие технологии" data={otherTech} />
      </div>
    </article>
  </div>
  <div use:fadeIn={{ threshold: 0.5 }} class="flex p-4 md:p-15 flex-col">
    <h1 class="md:ml-auto md:mr-auto text-6 md:text-7 leading-9 font-500">
      Опыт
    </h1>
    <TimelineSection />
  </div>
</section>
