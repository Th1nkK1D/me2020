<script lang="ts">
  import Heading2 from '../typography/Heading2.svelte'
  import TileWithImage from '../components/TileWithImage.svelte'

  const EXPERIENCE_START_YEAR = 2018
  const yearsOfTotalExperiences =
    new Date().getFullYear() - EXPERIENCE_START_YEAR

  const works = [
    {
      title: 'Punch Up',
      subtitle: 'Technical Lead',
      description: 'June 2022 - Now',
      image: 'punchup.webp',
      link: 'https://punchup.world/',
    },
    {
      title: 'Punch Up',
      subtitle: 'Full-stack Developer',
      description: 'Nov 2020 - June 2022',
      image: 'punchup.webp',
      link: 'https://punchup.world/',
    },
    {
      title: 'Thoughtworks',
      subtitle: 'Developer Consultant',
      description: 'Aug 2019 - Aug 2020',
      image: 'thoughtworks.webp',
      link: 'https://www.thoughtworks.com',
    },
    {
      title: 'Boonme Lab',
      subtitle: 'Freelance Developer',
      description: 'Apr - Jun 2019',
      image: 'boonmelab.webp',
      link: 'https://www.boonmeelab.com',
    },
    {
      title: 'H-Lab Consulting',
      subtitle: 'Freelance Developer',
      description: 'Aug 2017 - Nov 2018',
      image: 'hlab.webp',
      link: 'https://www.hlabconsulting.com',
    },
    {
      title: 'Wongnai Media',
      subtitle: 'Developer Intern',
      description: 'Jun - Aug 2018',
      image: 'wongnai.webp',
      link: 'https://www.wongnai.com"',
    },
    {
      title: 'ActiMotive',
      subtitle: 'Freelance Developer',
      description: 'Jul 2017 - May 2018',
      image: 'actimotive.webp',
      link: 'https://www.acti-motive.com',
    },
  ]
</script>

<section>
  <Heading2>Work Experience</Heading2>

  <div class="grid gap-4 md:gap-6 md:grid-cols-3">
    {#each works as work}
      <TileWithImage {...work} />
    {/each}

    <div class="rounded-lg px-6 py-4 flex flex-col justify-center">
      <p class="text-2xl font-bold">~{yearsOfTotalExperiences} years</p>
      <p>of total experiences</p>
    </div>
  </div>
</section>
