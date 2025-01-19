<script lang="ts">
  import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
  } from "svelte-vertical-timeline";

  const options = [
    { title: "Июнь 2022", tip: "Выпуск из Физтех-лицея" },
    { title: "Август 2022", tip: "Начало обучения в ИТМО" },
    {
      title: "Октябрь 2023",
      tip: "Коммерческий проект по разработке интернет-магазина",
    },
    {
      title: "Декабрь 2023",
      tip: "Начало работы в составе Pawlin Technologies",
    },
  ];
</script>

<div class="hidden md:block">
  <Timeline
    position="alternate"
    style="padding: 20px 0 200px 0; transform-origin: top center;"
  >
    {#each options as option}
      <TimelineItem>
        <TimelineOppositeContent slot="opposite-content">
          <p
            class="m-0 text-gray-500 text-[1.2rem] tracking-[1.5px] leading-4 md:leading-6"
          >
            {option.tip}
          </p>
        </TimelineOppositeContent>
        <TimelineSeparator style="height: 100px;">
          <TimelineDot
            style="background-color: #6200eeaa; width: 6px; height: 6px; border: none;"
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h3 class="m-0 p-0 text-[1.5rem] tracking-[1.5px]">{option.title}</h3>
        </TimelineContent>
      </TimelineItem>
    {/each}

    <TimelineItem>
      <TimelineOppositeContent slot="opposite-content">
        <p
          class="m-0 text-gray-500 text-[1.2rem] tracking-[1.5px] leading-4 md:leading-6"
        >
          Учусь и становлюсь лучше :3
        </p>
      </TimelineOppositeContent>
      <TimelineSeparator style="height: 100px;">
        <TimelineDot
          style="background-color: transparent; width: 4px; height: 4px; border: 2px solid #00000080;"
        />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <h3 class="m-0 p-0 text-[1.5rem] tracking-[1.5px]">Сейчас</h3>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
</div>

<div class="block md:hidden">
  <Timeline
    position="right"
    style="padding: 40px 0 200px 0; transform-origin: top center;"
  >
    {#each options as option}
      <TimelineItem>
        <TimelineOppositeContent slot="opposite-content">
          <p
            class="m-0 text-gray-500 text-[0.8rem] tracking-[1px] leading-4"
          >
            {option.tip}
          </p>
        </TimelineOppositeContent>
        <TimelineSeparator style="height: 150px;">
          <TimelineDot
            style="background-color: #6200eeaa; width: 3px; height: 3px; border: none;"
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h3 class="m-0 p-0 text-[1rem] tracking-[1px]">{option.title}</h3>
        </TimelineContent>
      </TimelineItem>
    {/each}

    <!-- <TimelineItem>
      <TimelineOppositeContent slot="opposite-content">
        <p
          class="m-0 text-gray-500 text-[1.2rem] tracking-[1.5px] leading-4"
        >
          Учусь и становлюсь лучше :3
        </p>
      </TimelineOppositeContent>
      <TimelineSeparator style="height: 100px;">
        <TimelineDot
          style="background-color: transparent; width: 4px; height: 4px; border: 2px solid #00000080;"
        />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <h3 class="m-0 p-0 text-[1.5rem] tracking-[1.5px]">Сейчас</h3>
      </TimelineContent>
    </TimelineItem> -->
  </Timeline>
</div>
