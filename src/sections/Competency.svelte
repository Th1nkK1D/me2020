<script lang="ts">
  import Heading2 from '../typography/Heading2.svelte'
  import AwardIcon from '../icons/AwardIcon.svelte'
  import BookIcon from '../icons/BookIcon.svelte'
  import StarIcon from '../icons/StarIcon.svelte'
  import CompetencyItemContainer from '../components/CompetencyItemContainer.svelte'
</script>

<section>
  <Heading2>Competency</Heading2>
  <div class="grid grid-cols-1 md:grid-cols-11 gap-4 md:gap-6">
    <div class="md:col-span-5">
      <CompetencyItemContainer
        containerBackground="bg-green-100"
        iconBackground="bg-green-300"
      >
        <span slot="icon">
          <AwardIcon />
        </span>
        <span slot="heading">Main Expertise</span>
        <ul slot="content" class="space-y-1">
          <li>
            -
            <strong>Responsive Website</strong>
            (React, Vue, TypeScript and Jamstack)
          </li>
          <li>
            -
            <strong>Backend Service</strong>
            (NodeJS and Cloud architecture)
          </li>
        </ul>
      </CompetencyItemContainer>
    </div>
    <div class="md:col-span-6">
      <CompetencyItemContainer
        containerBackground="bg-blue-100"
        iconBackground="bg-blue-300"
      >
        <span slot="icon">
          <BookIcon />
        </span>
        <span slot="heading">Some Experience</span>
        <ul slot="content" class="space-y-1">
          <li>- Agile, CI/CD and TDD</li>
          <li>- Game design & development</li>
          <li>- UI, UX, Graphic and Animation</li>
          <li>- Vitualization & Machine learning</li>
          <li>- Mathematics/Physics simulation</li>
        </ul>
      </CompetencyItemContainer>
    </div>
    <div class="md:col-span-11">
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
