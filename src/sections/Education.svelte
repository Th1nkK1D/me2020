<script lang="ts">
  import Heading2 from '../typography/Heading2.svelte'
  import TileWithImage from '../components/TileWithImage.svelte'

  const educations = [
    {
      title: `Open Society Technologies (Master)`,
      subtitle: 'Tallinn University, Estonia',
      description: '2021 - 2023',
      image: 'tlu.webp',
      link: 'https://www.tlu.ee/en/open-society-technologies',
    },
    {
      title: 'Computer Engineering (Bachelor)',
      subtitle: 'KMUTT, Thailand',
      description: '2015 - 2018',
      image: 'kmutt.webp',
      link: 'https://www.cpe.kmutt.ac.th/en/index',
    },
  ]
</script>

<section>
  <Heading2>Education</Heading2>

  <div class="grid gap-4 md:gap-6 md:grid-cols-2">
    {#each educations as education}
      <TileWithImage {...education} />
    {/each}
  </div>
</section>
