<script lang="ts">
  import { fadeIn } from "./animation/fadeIn";

  import Tooltip from "sv-tooltip";

  export let element: HTMLElement;
</script>

<section bind:this={element} class="min-h-[100vh] block md:grid md:grid-cols-2">
  <div class="flex p-4 md:p-15 flex-col gap-15">
    <article use:fadeIn>
      <h1 class="text-6 md:text-7 leading-9 font-500 mb-3">Немного обо мне</h1>
      <p class="leading-6 text-4 md:leading-7 md:text-5 font-350">
        Я студент 3 курса кафедры
        <span class="color-#6200ee">ВТ</span>
        университета
        <span class="color-#6200ee">ИТМО</span>. В свободное время я часто
        занимаюсь написанием кода, изучением новых технологий и разработкой
        проектов. Мне нравится работать с различными технологиями, но в
        особенности меня привлекает сфера системного программирования и
        информационная безопасность.
      </p>
    </article>
    <article use:fadeIn class="md:w-[80%] flex flex-col gap-3">
      <h2 class="text-6 md:text-7 leading-9 font-500">Навыки</h2>
      <div class="flex flex-col gap-7">
        <section>
          <h3 class="color-#6200ee text-5 md:text-6 mb-3">
            Языки программирования
          </h3>
          <div class="flex flex-wrap gap-2">
            <Tooltip tip="C" bottom>
              <i class="devicon-c-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="C++" bottom>
              <i class="devicon-cplusplus-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="Rust" bottom>
              <i class="devicon-rust-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="Assembly" bottom>
              <i class="devicon-embeddedc-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="Python" bottom>
              <i class="devicon-python-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="Bash" bottom>
              <i class="devicon-bash-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="JavaScript" bottom>
              <i class="devicon-javascript-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="TypeScript" bottom>
              <i class="devicon-typescript-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="Java" bottom>
              <i class="devicon-java-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="Kotlin" bottom>
              <i class="devicon-kotlin-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="MATLAB" bottom>
              <i class="devicon-matlab-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
          </div>
        </section>
        <section>
          <h3 class="color-#6200ee text-5 md:text-6 mb-3">
            Фреймворки и библиотеки
          </h3>
          <div class="flex flex-wrap gap-2">
            <Tooltip tip="React" bottom>
              <i class="devicon-react-original text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="Svelte" bottom>
              <i class="devicon-svelte-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="Three.js" bottom>
              <i class="devicon-threejs-original text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="Spring" bottom>
              <i class="devicon-spring-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="OpenCV" bottom>
              <i class="devicon-opencv-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="TensorFlow" bottom>
              <i class="devicon-tensorflow-original text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
          </div>
        </section>
        <section>
          <h3 class="color-#6200ee text-5 md:text-6 mb-3">Базы данных</h3>
          <div class="flex flex-wrap gap-2">
            <Tooltip tip="PostgreSQL" bottom>
              <i class="devicon-postgresql-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="SQLite" bottom>
              <i class="devicon-sqlite-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="MongoDB" bottom>
              <i class="devicon-mongodb-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
          </div>
        </section>
        <section>
          <h3 class="color-#6200ee text-5 md:text-6 mb-3">Другие технологии</h3>
          <div class="flex flex-wrap gap-2">
            <Tooltip tip="Git" bottom>
              <i class="devicon-git-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="SVN" bottom>
              <i class="devicon-subversion-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="CMake" bottom>
              <i class="devicon-cmake-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="Gradle" bottom>
              <i class="devicon-gradle-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="Maven" bottom>
              <i class="devicon-maven-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="Docker" bottom>
              <i class="devicon-docker-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="Nginx" bottom>
              <i class="devicon-nginx-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="Linux" bottom>
              <i class="devicon-linux-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
            <Tooltip tip="GitHub Actions" bottom>
              <i class="devicon-githubactions-plain text-12 m-1 md:m-0 md:text-10"></i>
            </Tooltip>
          </div>
        </section>
      </div>
    </article>
  </div>
  <div use:fadeIn class="flex p-4 md:p-15 flex-col">
    <h1 class="text-6 md:text-7 leading-9 font-500">Опыт</h1>
  </div>
</section>

<style>
  i {
    opacity: 0.8;
    padding: 0 4px;
    display: inline-block;
    transform: translateY(1px);
  }
</style>
