<script lang="ts">
  import Heading2 from '../typography/Heading2.svelte'
  import AwardIcon from '../icons/AwardIcon.svelte'
  import BookIcon from '../icons/BookIcon.svelte'
  import StarIcon from '../icons/StarIcon.svelte'
  import CompetencyItemContainer from '../components/CompetencyItemContainer.svelte'
</script>

<section>
  <Heading2>Competency</Heading2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
    <div class="md:col-span-1">
      <CompetencyItemContainer
        containerBackground="bg-green-100"
        iconBackground="bg-green-300"
      >
        <span slot="icon">
          <AwardIcon />
        </span>
        <span slot="heading">Main Expertise</span>
        <ul slot="content" class="space-y-2 list-disc">
          <li>
            <strong>Front-end development</strong>
            using Svelte, React, and Vue with TypeScript
          </li>
          <li>
            <strong>Data wrangling and visualization</strong>
            using R, D3.js, and ThreeJS
          </li>
          <li>
            <strong>Back-end and devOps</strong>
            with NodeJS, Bun, Docker, and cloud services
          </li>
          <li><strong>Team leading</strong> eg. project initiative, task management, coaching, and consulting</li>
        </ul>
      </CompetencyItemContainer>
    </div>
    <div class="md:col-span-1">
      <CompetencyItemContainer
        containerBackground="bg-blue-100"
        iconBackground="bg-blue-300"
      >
        <span slot="icon">
          <BookIcon />
        </span>
        <span slot="heading">Related Experiences</span>
        <ul slot="content" class="space-y-1 list-disc">
          <li>Agile, TDD and pair-programming</li>
          <li>Mobile app with Ionic / React Native</li>
          <li>UI designing and prototyping</li>
          <li>AI & Machine learning</li>
          <li>Mathematics / Physics simulation</li>
          <li>Game design & development</li>
        </ul>
      </CompetencyItemContainer>
    </div>
    <div class="md:col-span-2">
      <CompetencyItemContainer
        containerBackground="bg-red-100"
        iconBackground="bg-red-300"
      >
        <span slot="icon">
          <StarIcon />
        </span>
        <span slot="heading">Interests</span>
        <span slot="content">
          Technology, Data Visualization, Interactive Art, Open Society,
          Democrary, Physics, and Environment
        </span>
      </CompetencyItemContainer>
    </div>
  </div>
</section>
