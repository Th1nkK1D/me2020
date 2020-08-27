<script lang="ts">
  import Heading2 from '../typography/Heading2.svelte'
  import CompanyLogo from '../components/CompanyLogo.svelte'
  import WorkItemContainer from '../components/WorkItemContainer.svelte'
</script>

<section>
  <Heading2>Work Experience</Heading2>
  <div class="grid gap-4 md:gap-6 md:grid-cols-11">
    <div class="md:col-span-4">
      <WorkItemContainer heading="Full-time developer consultant" year="{1}">
        <CompanyLogo
          name="ThoughtWorks (Thailand)"
          image="thoughtworks.jpg"
          url="https://www.thoughtworks.com"
        />
      </WorkItemContainer>
    </div>
    <div class="md:col-span-4">
      <WorkItemContainer heading="Freelance developer" year="{2}">
        <CompanyLogo
          name="Boonme Lab"
          image="boonmelab.png"
          url="https://www.boonmeelab.com"
        />
        <CompanyLogo
          name="H Lab Consulting"
          image="hlab.png"
          url="https://www.hlabconsulting.com"
        />
        <CompanyLogo
          name="ActiMotive"
          image="actimotive.png"
          url="https://www.acti-motive.com"
        />
      </WorkItemContainer>
    </div>
    <div class="md:col-span-3">
      <WorkItemContainer heading="Developer intern">
        <CompanyLogo
          name="Wongnai Media"
          image="wongnai.png"
          url="https://www.wongnai.com"
        />
      </WorkItemContainer>
    </div>

  </div>
</section>
