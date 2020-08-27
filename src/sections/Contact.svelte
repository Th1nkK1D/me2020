<script lang="ts">
  import Heading2 from '../typography/Heading2.svelte'
  import SocialLink from '../components/SocialLink.svelte'
  import FacebookIcon from '../icons/FacebookIcon.svelte'
  import CodepenIcon from '../icons/CodepenIcon.svelte'
  import GithubIcon from '../icons/GithubIcon.svelte'
  import LinkedinIcon from '../icons/LinkedinIcon.svelte'
</script>

<section class="text-center py-12 md:py-18">
  <Heading2 isCentered>Contact Me</Heading2>
  <div class="flex flex-col space-y-4">
    <a href="tel:+66851255278">(+66) 85 125 5278</a>
    <a href="mailto:witheep@gmail.com">witheep@gmail.com</a>
  </div>
  <div class="flex flex-row space-x-4 justify-center mt-10">
    <SocialLink link="https://github.com/Th1nkK1D/" alt="Github">
      <GithubIcon />
    </SocialLink>
    <SocialLink link="https://codepen.io/Th1nkK1D" alt="Codepen">
      <CodepenIcon />
    </SocialLink>
    <SocialLink
      link="https://www.linkedin.com/in/withee-poositasai/"
      alt="Linkedin"
    >
      <LinkedinIcon />
    </SocialLink>
    <SocialLink link="https://www.facebook.com/Th1nkK1D" alt="Facebook">
      <FacebookIcon />
    </SocialLink>
  </div>
</section>
