<script>
  import Footer from "$lib/components/user/Footer.svelte";
  import MenuCard from "$lib/components/user/MenuCard.svelte";
  import MenuNav from "$lib/components/user/MenuNav.svelte";
</script>

<MenuNav />

<div class="w-[100vw] h-[100vh] overflow-scroll flex flex-wrap justify-evenly items-center pt-15">
  <MenuCard />
  <MenuCard />
  <MenuCard />
</div>

<Footer/>