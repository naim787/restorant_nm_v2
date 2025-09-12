<script>
  import "../../app.css";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  import ConfigurateData from "$lib/component/conf.js";
  import { onMount } from "svelte";
  let data;
  onMount(async ()=> {
     data = ConfigurateData();
  })
</script>

<Navbar>
  <NavBrand href="/">
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">toro</span>
  </NavBrand>
  <NavHamburger />
  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>