<script lang="ts">
  import AnimatedAvatar from '../components/AnimatedAvatar.svelte'
  import Heading1 from '../typography/Heading1.svelte'
</script>

<section class="min-h-screen flex">
  <div
    class="flex flex-col text-center space-y-8 md:space-y-0 md:space-x-16
    my-auto w-full md:flex-row md:text-left"
  >
    <div class="flex-1">
      <AnimatedAvatar />
    </div>
    <div class="flex-1 flex flex-col space-y-8 justify-center">
      <Heading1>
        Withee
        <br />
        Poositasai
      </Heading1>
      <p>An indie developer and generalist enthuthism</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="mx-auto md:mx-0"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
  </div>

</section>
