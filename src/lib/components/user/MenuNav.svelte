<script>
  import { page } from "$app/state";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  let activeUrl = $derived(page.url.pathname);
</script>

<Navbar class="fixed top-0 left-0 backdrop-blur">
  <NavBrand href="/">
    <img src="https://mocipay.com/blog/wp-content/uploads/2022/12/20221208_161631_0000-768x768.png" class="me-3 h-9 sm:h-20" alt="Flow" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">RM stark</span>
  </NavBrand>
  <NavHamburger />
  <NavUl {activeUrl}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/docs/components/accordion">Accordion</NavLi>
    <NavLi href="/docs/components/alert">Alert</NavLi>
    <NavLi href="/docs/components/avatar">Avatar</NavLi>
  </NavUl>
</Navbar>