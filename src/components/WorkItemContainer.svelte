<script lang="ts">
  export let heading: string
  export let year: number
</script>

<div class="rounded-lg bg-gray-200 px-8 py-6">
  <p class="font-bold">{heading}</p>
  <div class="flex flex-row space-x-2 mt-4">
    <slot />
    {#if year}
      <div class="pl-4 flex flex-col justify-end">
        <p>
          <span class="text-4xl text-teal-400 font-bold leading-none">
            {year}
          </span>
          {year > 1 ? 'years' : 'year'}
        </p>
      </div>
    {/if}
  </div>
</div>
