<script lang="ts">
  import Heading2 from '../typography/Heading2.svelte'
  import SocialLink from '../components/SocialLink.svelte'
  import FacebookIcon from '../icons/FacebookIcon.svelte'
  import CodepenIcon from '../icons/CodepenIcon.svelte'
  import GithubIcon from '../icons/GithubIcon.svelte'
  import LinkedinIcon from '../icons/LinkedinIcon.svelte'
</script>

<section class="text-center pt-12 md:pt-18">
  <Heading2 isCentered>Contact Me</Heading2>
  <div class="flex flex-col space-y-4">
    <a href="tel:+37258344505">(+372) 5834 4505</a>

    <a href="mailto:witheep@gmail.com">witheep@gmail.com</a>
    <p>Born in Bangkok, Studying in Tallinn</p>
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
