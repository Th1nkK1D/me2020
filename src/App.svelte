<script lang="ts">
  export let name: string
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<main>
  <h1 class="text-4xl text-orange-700">Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial" class="text-blue-700 hover:underline">
      Svelte tutorial
    </a>
    to learn how to build Svelte apps.
  </p>
</main>
