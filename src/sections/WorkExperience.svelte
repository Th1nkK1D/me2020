<script lang="ts">
  import Heading2 from '../typography/Heading2.svelte'
  import WorkItem from '../components/WorkItem.svelte'

  const EXPERIENCE_START_YEAR = 2018
  const yearsOfTotalExperiences =
    new Date().getFullYear() - EXPERIENCE_START_YEAR

  const works = [
    {
      company: 'Thoughtworks',
      position: 'Developer Consultant',
      period: 'Aug 2019 - Aug 2020',
      image: 'thoughtworks.jpg',
      link: 'https://www.thoughtworks.com',
    },
    {
      company: 'Boonme Lab',
      position: 'Freelance',
      period: 'Apr - Jun 2019',
      image: 'boonmelab.png',
      link: 'https://www.boonmeelab.com',
    },
    {
      company: 'H-Lab Consulting',
      position: 'Freelance',
      period: 'Aug 2017 - Nov 2018',
      image: 'hlab.png',
      link: 'https://www.hlabconsulting.com',
    },
    {
      company: 'Wongnai Media',
      position: 'Intern',
      period: 'Jun - Aug 2018',
      image: 'wongnai.png',
      link: 'https://www.wongnai.com"',
    },
    {
      company: 'ActiMotive',
      position: 'Freelance',
      period: 'Jul 2017 - May 2018',
      image: 'actimotive.png',
      link: 'https://www.acti-motive.com',
    },
  ]
</script>

<section>
  <Heading2>Work Experience</Heading2>

  <div class="grid gap-4 md:gap-6 md:grid-cols-3">
    {#each works as work}
      <WorkItem {...work} />
    {/each}

    <div class="rounded-lg px-6 py-4 text-center md:text-left">
      <p class="text-2xl font-bold">~{yearsOfTotalExperiences} years</p>
      <p>of total experiences</p>
    </div>
  </div>
</section>
