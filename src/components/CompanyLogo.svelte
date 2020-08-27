<script lang="ts">
  export let name: string
  export let image: string
  export let url: string
</script>

<a href="{url}" target="_blank">
  <img src="{`/images/${image}`}" alt="{name}" class="w-10" />
</a>
