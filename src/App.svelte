<script lang="ts">
  import { onMount } from 'svelte'
  import smoothscroll from 'smoothscroll-polyfill'
  import Tailwindcss from './styles/Tailwindcss.svelte'
  import Hero from './sections/Hero.svelte'
  import Competency from './sections/Competency.svelte'
  import WorkExperience from './sections/WorkExperience.svelte'
  import Showcase from './sections/Showcase.svelte'
  import Contact from './sections/Contact.svelte'
  import Footer from './sections/Footer.svelte'
  import Education from './sections/Education.svelte'

  onMount(() => smoothscroll.polyfill())
</script>

<main class="max-w-screen-lg mx-auto px-3">
  <Tailwindcss />
  <Hero />
  <div class=" space-y-24 md:space-y-32">
    <Competency />
    <WorkExperience />
    <Education />
    <Showcase />
    <Contact />
    <Footer />
  </div>
</main>
