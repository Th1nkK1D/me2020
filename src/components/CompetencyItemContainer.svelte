<script lang="ts">
  import Heading3 from '../typography/Heading3.svelte'

  export let containerBackground: string
  export let iconBackground: string
</script>

<div
  class="{containerBackground} rounded-lg flex flex-col md:flex-row md:space-y-0
  w-full h-full overflow-hidden"
>
  <div class="{iconBackground} text-white md:w-24 flex">
    <div class="mx-auto my-3 md:my-8">
      <slot name="icon" />
    </div>
  </div>
  <div class="flex-1 flex flex-col py-3 px-4 md:py-6 md:px-8">
    <div class="mb-2">
      <Heading3>
        <slot name="heading" />
      </Heading3>
    </div>
    <slot name="content" />
  </div>
</div>
