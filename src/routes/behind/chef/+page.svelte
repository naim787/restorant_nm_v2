<script>
  import Footer from "$lib/components/user/Footer.svelte";
  import MenuNav from "$lib/components/user/MenuNav.svelte";
  import { Card, Button } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";


  // modal
  import {Modal, P } from "flowbite-svelte";
  let defaultModal = $state(false);

  let data = [
    "tinutuan.webp",
    "soto ayam.webp",
    "nasi_ayam_goreg_mentega.webp",
    "rawon.webp",
    "nasi goreg kawan baru.webp",
    "nasi goreg kambig.webp",
    "nasi ayam isi bulu.webp",
    "nasi ayam rempah.webp",
    "nasi campur nusantara.webp",
    "nasi capcay.webp",
    "nasi goreg ayam.webp",
    "nasi goreg cakalag.webp"
  ]
</script>

<MenuNav />
<div class="w-[100vw] h-[100vh] overflow-scroll flex flex-wrap justify-evenly items-center pt-15">
    <div class="space-y-4 m-2 flex flex-wrap justify-evenly items-center mt-10">
        {#each data as d}
            <Card img={`/${d}`}>
                <!-- <img src="/nasi_ayam_goreg_mentega.webp" alt="" class="w-full object-cover"> -->
                <div class="m-6">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">porsi : 12</p>
                <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">tendo : 15</p>
                <Button onclick={() => (defaultModal = true)} class="bg-black">Default modal</Button>
                </div>
            </Card>
        {/each}

    </div>
</div>

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
<Footer/>/