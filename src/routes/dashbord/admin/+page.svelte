<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  import { fly } from "svelte/transition";
  import { OpenSidebarAltSolid } from "flowbite-svelte-icons";
</script>

<Navbar>
  <NavBrand href="/">
    <h1 class=""><OpenSidebarAltSolid class="shrink-0 h-6 w-6" /></h1>
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl transition={fly} transitionParams={{ y: -20, duration: 250 }}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>