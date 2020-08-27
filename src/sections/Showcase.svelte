<script lang="ts">
  import Heading2 from '../typography/Heading2.svelte'
  import ShowcaseItem from '../components/ShowcaseItem.svelte'
</script>

<section>
  <Heading2>Showcase</Heading2>

  <div class="grid md:grid-cols-3 gap-4 md:gap-6">
    <ShowcaseItem
      title="To Be Alive"
      description="Stealth puzzle game made in pair during Ludum Dare 46 game
      jam"
      image="tobealive.jpg"
      link="https://divinehook.itch.io/tobealive"
    />
    <ShowcaseItem
      title="Swallom"
      description="Nearby place-to-eat randomizer progressive web app"
      image="swallom.jpg"
      link="https://swallom-1506749334555.firebaseapp.com/"
    />
    <ShowcaseItem
      title="Lyricie"
      description="Non-useful and time-wasting lyric chatbot powered by
      musiXmatch "
      image="lyricie.png"
      link="https://lyricie-bot.firebaseapp.com/"
    />
    <ShowcaseItem
      title="Invoker Playground"
      description="Practicing invoking abilities, built with ThreeJS"
      image="invokerplayground.png"
      link="https://th1nkk1d.github.io/invoker-playground/"
    />
    <ShowcaseItem
      title="Quantarium"
      description="An Interactive Quantum Computing Mini Exhibition"
      image="quantarium.png"
      link="https://github.com/Th1nkK1D/quantarium"
    />
    <ShowcaseItem
      title="VQE Battleship"
      description="Variational Quantum Eigensolver for Battleship Puzzle with
      Qiskit research"
      image="vqe.png"
      link="https://github.com/Th1nkK1D/vqe-battleship"
    />
  </div>
</section>
