<script lang="ts">
  export let link: string
  export let alt: string
</script>

<a
  href="{link}"
  {alt}
  target="_blank"
  class="block rounded-full text-blue-900 bg-blue-100 p-4 hover:bg-blue-900
  hover:text-white transition-colors duration-300"
>
  <slot />
</a>
