<script lang="ts">
  import Heading2 from '../typography/Heading2.svelte'
  import AwardIcon from '../icons/AwardIcon.svelte'
  import BookIcon from '../icons/BookIcon.svelte'
  import StarIcon from '../icons/StarIcon.svelte'
  import CompetencyItemContainer from '../components/CompetencyItemContainer.svelte'
</script>

<section>
  <Heading2>Competency</Heading2>
  <div class="grid grid-cols-1 md:grid-cols-11 gap-4">
    <div class="md:col-span-5">
      <CompetencyItemContainer color="green">
        <span slot="icon">
          <AwardIcon />
        </span>
        <span slot="heading">Main Expertise</span>
        <ul slot="content">
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
      <CompetencyItemContainer color="blue">
        <span slot="icon">
          <BookIcon />
        </span>
        <span slot="heading">Some Experience</span>
        <ul slot="content">
          <li>- Agile, Design thinking and TDD</li>
          <li>- Game design & development</li>
          <li>- UI, UX, Graphic and Animation</li>
          <li>- Data vitualization & Machine learning</li>
          <li>- Mathermatic and Physics simulation</li>
          <li>- Chatbot</li>
        </ul>
      </CompetencyItemContainer>
    </div>
    <div class="md:col-span-11">
      <CompetencyItemContainer color="red">
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
