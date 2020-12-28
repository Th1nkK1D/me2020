<script lang="ts">
  export let company: string
  export let position: string
  export let period: string
  export let image: string
  export let link: string
</script>

<div class="rounded-lg bg-gray-200 px-6 py-4 flex flex-row space-x-6">
  <div class="flex">
    <a href="{link}" target="_blank" class="m-auto">
      <img src="{`./images/${image}`}" alt="{company}" class="w-12 rounded" />
    </a>
  </div>
  <div class="flex-1 flex flex-col justify-center">
    <p class="font-bold">{company}</p>
    <p>{position}</p>
    <p class="text-xs text-gray-600">{period}</p>
  </div>
</div>
