<script lang="ts">
  import Heading4 from '../typography/Heading4.svelte'

  export let title: string
  export let description: string
  export let image: string
  export let link: string
</script>

<a
  class="block group rounded-lg overflow-hidden h-48 w:h-56 relative"
  href="{link}"
  target="_blank"
  alt="{title}"
>
  <div
    class="absolute inset-0 bg-black opacity-75 md:opacity-0
    group-hover:opacity-75 transition-opacity duration-500 ease-out"
  ></div>
  <div
    class="absolute inset-0 text-white px-8 py-6 flex flex-col opacity-100
    md:opacity-0 group-hover:opacity-100 transition-opacity duration-300
    ease-out"
  >
    <div class="flex-1">
      <Heading4>{title}</Heading4>
    </div>
    <div>{description}</div>
  </div>
  <img
    src="{`./images/${image}`}"
    alt="To Be Alive"
    class="object-cover h-full w-full"
  />
</a>
