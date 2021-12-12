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
        <ul slot="content" class="space-y-2">
          <li>
            -
            <strong>Responsive Website</strong>
            using Svelte, React and Vue (TS/JS)
          </li>
          <li>
            -
            <strong>Data Visualization and Animation</strong>
            using CSS, SVG, Canvas, D3.js and ThreeJS
          </li>
          <li>
            -
            <strong>Backend Service</strong>
            with NodeJS and Cloud architecture
          </li>
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
        <ul slot="content" class="space-y-1">
          <li>- Agile, CI/CD and TDD</li>
          <li>- Mobile application with React Native</li>
          <li>- Docker and Docker Compose</li>
          <li>- Game design & development</li>
          <li>- UI designing and prototyping</li>
          <li>- AI & Machine learning</li>
          <li>- Mathematics/Physics simulation</li>
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
          Technology, Interactive Art, Physics, Environment and Social Justice
        </span>
      </CompetencyItemContainer>
    </div>

  </div>
</section>
