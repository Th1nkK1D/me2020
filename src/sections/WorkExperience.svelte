<script lang="ts">
  import Heading2 from '../typography/Heading2.svelte'
  import TileWithImage from '../components/TileWithImage.svelte'
  import Heading3 from '../typography/Heading3.svelte'

  const EXPERIENCE_START_YEAR = 2018
  const yearsOfTotalExperiences =
    new Date().getFullYear() - EXPERIENCE_START_YEAR

    const current = [
    {
      title: 'Punch Up',
      subtitle: 'Technical Lead',
      description: 'Since June 2022',
      image: 'punchup.webp',
      link: 'https://punchup.world',
    },
    {
      title: 'WeVis',
      subtitle: 'Tech Lead & Co-founder',
      description: 'Since Aug 2023',
      image: 'wevis.webp',
      link: 'https://wevis.info',
    },
    {
      title: 'Hato',
      subtitle: 'CTO & Co-founder',
      description: 'Since 2020',
      image: 'hato.webp',
      link: 'https://hato.land',
    },
  ]

  const previous = [
    {
      title: 'Punch Up',
      subtitle: 'Full-stack Developer',
      description: 'Nov 2020 - June 2022',
      image: 'punchup.webp',
      link: 'https://punchup.world',
    },
    {
      title: 'ThoughtWorks',
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

  <Heading3>Current Positions</Heading3>

  <div class="grid gap-4 md:gap-6 md:grid-cols-3 mt-4 mb-12">
    {#each current as work}
      <TileWithImage {...work} />
    {/each}
  </div>

  <Heading3>Previous Positions</Heading3>

  <div class="grid gap-4 md:gap-6 md:grid-cols-3 mt-4">
    {#each previous as work}
      <TileWithImage {...work} />
    {/each}

    <div class="rounded-lg px-6 py-4 flex flex-col justify-center">
      <p class="text-2xl font-bold">~{yearsOfTotalExperiences} years</p>
      <p>of total experiences</p>
    </div>
  </div>
</section>
