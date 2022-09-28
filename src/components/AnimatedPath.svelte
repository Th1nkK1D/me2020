<script lang="ts">
  import anime from 'animejs'
  import { onMount } from 'svelte'

  export let duration: number
  export let startValue: string
  export let endValue: string
  export let fill: string

  let path: SVGPathElement

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

<path bind:this={path} {fill} d={startValue} />
