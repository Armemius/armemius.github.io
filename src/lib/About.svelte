<script lang="ts">
  import { fadeIn } from "./animation/fadeIn";
  import SkillsSection from "./SkillsSection.svelte";
  import TimelineSection from "./TimelineSection.svelte";

  export let element: HTMLElement;

  const programmingLanguages = [
    { tip: "C", icon: "devicon-c-plain" },
    { tip: "C++", icon: "devicon-cplusplus-plain" },
    { tip: "Rust", icon: "devicon-rust-plain" },
    { tip: "Assembly", icon: "devicon-embeddedc-plain" },
    { tip: "Python", icon: "devicon-python-plain" },
    { tip: "Bash", icon: "devicon-bash-plain" },
    { tip: "JavaScript", icon: "devicon-javascript-plain" },
    { tip: "TypeScript", icon: "devicon-typescript-plain" },
    { tip: "Java", icon: "devicon-java-plain" },
    { tip: "Kotlin", icon: "devicon-kotlin-plain" },
    { tip: "MATLAB", icon: "devicon-matlab-plain" },
  ];

  const frameworks = [
    { tip: "React", icon: "devicon-react-original" },
    { tip: "Svelte", icon: "devicon-svelte-plain" },
    { tip: "Three.js", icon: "devicon-threejs-original" },
    { tip: "Spring", icon: "devicon-spring-plain" },
    { tip: "OpenCV", icon: "devicon-opencv-plain" },
    { tip: "TensorFlow", icon: "devicon-tensorflow-original" },
  ];

  const databases = [
    { tip: "PostgreSQL", icon: "devicon-postgresql-plain" },
    { tip: "SQLite", icon: "devicon-sqlite-plain" },
    { tip: "MongoDB", icon: "devicon-mongodb-plain" },
  ];

  const otherTech = [
    { tip: "Git", icon: "devicon-git-plain" },
    { tip: "SVN", icon: "devicon-subversion-plain" },
    { tip: "CMake", icon: "devicon-cmake-plain" },
    { tip: "Gradle", icon: "devicon-gradle-plain" },
    { tip: "Maven", icon: "devicon-maven-plain" },
    { tip: "Docker", icon: "devicon-docker-plain" },
    { tip: "Nginx", icon: "devicon-nginx-plain" },
    { tip: "Linux", icon: "devicon-linux-plain" },
    { tip: "GitHub Actions", icon: "devicon-githubactions-plain" },
  ];
</script>

<section
  bind:this={element}
  class="min-h-[100vh] block md:grid md:grid-cols-2 md:justify-items-center"
>
  <div class="flex p-4 md:p-15 flex-col gap-15">
    <article use:fadeIn>
      <h1 class="text-6 md:text-7 leading-9 font-500 mb-3">Немного обо мне</h1>
      <p class="leading-6 text-4 md:leading-7 md:text-5 font-350">
        Я студент 3 курса кафедры <span class="color-#6200ee">ВТ</span>
        университета <span class="color-#6200ee">ИТМО</span>. В свободное время
        я часто занимаюсь написанием кода и изучением новых технологий. Мне
        нравится работать с различными технологиями, особенно в сфере системного
        программирования и информационной безопасности.
      </p>
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
