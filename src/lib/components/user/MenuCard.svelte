<script>
  import { Card, Button } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  import Modal from "./Modal.svelte";

  import {Modal, P } from "flowbite-svelte";

  let defaultModal = $state(false);
</script>

<Modal title="Terms of Service" form bind:open={defaultModal} onaction={({ action }) => alert(`Handle "${action}"`)}>
  <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>
  <P>
    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to
    notify users as soon as possible of high-risk data breaches that could personally affect them.
  </P>

  {#snippet footer()}
    <Button type="submit" value="success">I accept</Button>
    <Button type="submit" value="decline" color="alternative">Decline</Button>
  {/snippet}
</Modal>


<div class="space-y-4 m-2">
  <Card img="https://assets.telkomsel.com/public/2024-12/makanan-khas-indonesia.png?VersionId=TfbS8hN3yl4fLIANXfbipwkFx1Fq.KKU">
    <div class="m-6">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
      <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">porsi : 12</p>
      <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">tendo : 15</p>
      <Button class="w-full bg-amber-600">
        Read more <ArrowRightOutline class="ms-2 h-6 w-6 text-white" />
      </Button>
    </div>
  </Card>
</div>