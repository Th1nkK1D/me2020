<script lang="ts">
  import anime from 'animejs/lib/anime.es.js'
  import { onMount } from 'svelte'

  export let duration: number
  export let startValue: string
  export let endValue: string
  export let fill: string

  let path

  onMount(() => {
    anime({
      targets: path,
      d: [startValue, endValue],
      easing: 'easeInOutQuad',
      duration,
      loop: true,
      direction: 'alternate',
    })
  })
</script>

<path bind:this="{path}" {fill} d="{startValue}"></path>
