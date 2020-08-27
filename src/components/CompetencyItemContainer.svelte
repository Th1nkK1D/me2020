<script lang="ts">
  import Heading3 from '../typography/Heading3.svelte'

  export let containerBackground: string
  export let iconBackground: string
</script>

<div
  class="{`${containerBackground} rounded-lg p-8 flex flex-col md:flex-row space-y-4
  md:space-y-0 md:space-x-8 w-full h-full`}"
>
  <div
    class="{`rounded-full ${iconBackground} text-white w-24 h-24 m-auto flex`}"
  >
    <div class="m-auto">
      <slot name="icon" />
    </div>
  </div>
  <div class="flex-1 flex flex-col justify-center">
    <div class="text-center md:text-left mb-2">
      <Heading3>
        <slot name="heading" />
      </Heading3>
    </div>
    <slot name="content" />
  </div>
</div>
