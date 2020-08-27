<script lang="ts">
  import Tailwindcss from './styles/Tailwindcss.svelte'
  import Hero from './sections/Hero.svelte'
  import Competency from './sections/Competency.svelte'
  import WorkExperience from './sections/WorkExperience.svelte'
</script>

<main class="max-w-screen-lg mx-auto px-6">
  <Tailwindcss />
  <Hero />
  <div class=" space-y-24 md:space-y-32">
    <Competency />
    <WorkExperience />
  </div>
</main>
