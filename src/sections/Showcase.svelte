<script lang="ts">
  import Heading2 from '../typography/Heading2.svelte'
  import ShowcaseItem from '../components/ShowcaseItem.svelte'

  const showcaseItems = [
    {
      title: 'The Monument Garden',
      description: 'A relaxing gardening game, built with Godot and Blender',
      image: 'monumentgarden.png',
      link: 'https://th1nkk1d.github.io/the-monument-garden/',
    },
    {
      title: 'Invoker Playground',
      description: 'Practicing invoking abilities, built with ThreeJS',
      image: 'invokerplayground.png',
      link: 'https://th1nkk1d.github.io/invoker-playground/',
    },
    {
      title: 'To Be Alive',
      description:
        'Stealth puzzle game made in pair during Ludum Dare 46 gamejam',
      image: 'tobealive.jpg',
      link: 'https://divinehook.itch.io/tobealive',
    },
    {
      title: 'Quantarium',
      description: 'An Interactive Quantum Computing Mini Exhibition',
      image: 'quantarium.png',
      link: 'https://github.com/Th1nkK1D/quantarium',
    },
    {
      title: 'Swallom',
      description: 'Nearby place-to-eat randomizer progressive web app',
      image: 'swallom.jpg',
      link: 'https://swallom-1506749334555.firebaseapp.com/',
    },
    {
      title: 'VQE Battleship',
      description:
        'Variational Quantum Eigensolver for Battleship Puzzle with Qiskit research',
      image: 'vqe.png',
      link: 'https://github.com/Th1nkK1D/vqe-battleship',
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
