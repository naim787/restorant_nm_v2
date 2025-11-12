<script>
  import Footer from "$lib/components/user/Footer.svelte";
  import MenuNav from "$lib/components/user/MenuNav.svelte";
  import { Card, Button } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";

  let data = [
    "tinutuan.webp",
    "soto ayam.webp",
    "nasi_ayam_goreg_mentega.webp",
    ""
  ]
</script>

<MenuNav />
<div class="w-[100vw] h-[100vh] overflow-scroll flex flex-wrap justify-evenly items-center pt-15">
    <div class="space-y-4 m-2">

        <Card img="/soto ayam.webp">
            <!-- <img src="/nasi_ayam_goreg_mentega.webp" alt="" class="w-full object-cover"> -->
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
</div>
<Footer/>/'ukkkk/9lj'