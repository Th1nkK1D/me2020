<script lang="ts">
  export let isCentered: boolean = false
</script>

<div class="flex flex-col mb-6 {isCentered ? 'text-center' : ''}">
  <h2 class="font-display font-bold text-4xl md:text-5xl leading-tight">
    <slot />
  </h2>
  <div
    class="bg-teal-400 h-1 md:h-2 w-6 md:w-10 my-2 {isCentered ? 'mx-auto' : ''}"
  ></div>
</div>
