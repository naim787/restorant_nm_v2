<script>
  import { Card, Button } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  let vCard = false;
</script>

<div class="space-y-4">
  <Card img="https://assets.telkomsel.com/public/2024-12/makanan-khas-indonesia.png?VersionId=TfbS8hN3yl4fLIANXfbipwkFx1Fq.KKU" reverse={vCard}>
    <div class="m-6">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
      <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      <Button class="w-40">
        Read more <ArrowRightOutline class="ms-2 h-6 w-6 text-white" />
      </Button>
    </div>
  </Card>
  <!-- <Toggle bind:checked={vCard} class="italic dark:text-gray-500">Reverse</Toggle> -->
</div>