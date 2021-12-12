<script lang="ts">
  import AnimatedAvatar from '../components/AnimatedAvatar.svelte'
  import LocationIcon from '../icons/LocationIcon.svelte'
  import Heading1 from '../typography/Heading1.svelte'
</script>

<section class="min-h-screen flex">
  <div
    class="flex flex-col text-center space-y-8 md:space-y-0 md:space-x-16
    my-auto w-full md:flex-row md:text-left"
  >
    <div class="flex-1 px-12 md:px-0">
      <AnimatedAvatar />
    </div>
    <div class="flex-1 flex flex-col space-y-8 justify-center max">
      <Heading1>
        Withee
        <br />
        Poositasai
      </Heading1>
      <p>
        An indie developer and generalist enthusiasm
        <br />
        who value a meaningful impact.
      </p>
      <div class="flex flex-row space-x-2 text-gray-600">
        <LocationIcon />
        <p>Growing up in Bangkok, Studying in Tallinn</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="text-gray-400 mx-auto md:mx-0"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </svg>
    </div>
  </div>
</section>
