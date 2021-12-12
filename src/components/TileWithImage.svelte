<script lang="ts">
  export let title: string
  export let subtitle: string
  export let description: string
  export let image: string
  export let link: string
</script>

<div class="rounded-lg bg-gray-100 px-4 py-3 flex flex-row space-x-4">
  <div class="flex">
    <a href="{link}" target="_blank" class="m-auto">
      <img src="./images/{image}" alt="{title}" class="w-16 rounded-lg" />
    </a>
  </div>
  <div class="flex-1 flex flex-col justify-center">
    <p class="font-bold">{title}</p>
    <p>{subtitle}</p>
    <p class="text-xs text-gray-600">{description}</p>
  </div>
</div>
