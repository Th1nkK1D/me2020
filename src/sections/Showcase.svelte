<script lang="ts">
  import Heading2 from '../typography/Heading2.svelte'
  import ShowcaseItem from '../components/ShowcaseItem.svelte'

  const showcaseItems = [
    {
      title: 'OrdinaryUnfold',
      description:
        'My solo hobby project for visualization and storytelling experiments',
      image: 'ordinaryunfold.webp',
      link: 'https://www.ordinaryunfold.com',
    },
    {
      title: 'Sheethuahua',
      description:
        'Type-safe CSV and Google Sheets parser library for TypeScript and JavaScript',
      image: 'sheethuahua.webp',
      link: 'https://punchupworld.github.io/sheethuahua/',
    },
    {
      title: 'BKK Election 2022',
      description: 'Bangkok election data visualization and information hub',
      image: 'bkkelection.webp',
      link: 'https://bkkelection2022.wevis.info',
    },
    {
      title: 'WeVis: Reconstitution',
      description:
        'A visualization and articles collection about Thailand constitutions',
      image: 'recon.webp',
      link: 'https://reconstitution.wevis.info',
    },
    {
      title: '112 Story',
      description: 'A storytelling about lèse-majesté law abuse in Thailand',
      image: '112story.webp',
      link: 'https://112story.com',
    },
    {
      title: 'ELECT: CDA',
      description:
        'A visualization about Constitution Drafting Assembly of Thailand',
      image: 'cda.webp',
      link: 'https://elect.in.th/cda',
    },
    {
      title: 'ELECT: Civil Movements',
      description: 'A visualization about Thai civil movements in 2020',
      image: 'civil-movements.webp',
      link: 'https://elect.in.th/civil-movement-2020',
    },
    {
      title: 'The Monument Garden',
      description: 'A relaxing gardening game, built with Godot and Blender',
      image: 'monumentgarden.webp',
      link: 'https://th1nkk1d.github.io/the-monument-garden',
    },
    {
      title: 'Invoker Playground',
      description: 'Practicing invoking abilities, built with ThreeJS',
      image: 'invokerplayground.webp',
      link: 'https://th1nkk1d.github.io/invoker-playground',
    },
    {
      title: 'To Be Alive',
      description:
        'Stealth puzzle game made in pair during Ludum Dare 46 gamejam',
      image: 'tobealive.webp',
      link: 'https://divinehook.itch.io/tobealive',
    },
    {
      title: 'Quantarium',
      description: 'An Interactive Quantum Computing Mini Exhibition',
      image: 'quantarium.webp',
      link: 'https://github.com/Th1nkK1D/quantarium',
    },
  ]
</script>

<section>
  <Heading2>Showcase</Heading2>

  <div class="grid md:grid-cols-3 gap-4 md:gap-6">
    {#each showcaseItems as items}
      <ShowcaseItem {...items} />
    {/each}
  </div>
</section>
