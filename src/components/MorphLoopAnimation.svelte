<script lang="ts">
  export let duration: string
  export let bounceTime: string = '0.5'
  export let startValue: string
  export let endValue: string
</script>

<animate
  attributeName="d"
  dur="{duration}"
  keyTimes="0 ; {bounceTime} ; 1"
  repeatCount="indefinite"
  values="{`${startValue} ; ${endValue} ; ${startValue}`}"
></animate>
