<script>
  import "../../app.css";
  import { AlignJustify, Moon, Sun } from "@lucide/svelte";
</script>


<div class="drawer fixed z-30 bg-coffe" data-theme="coffe" >
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="navbar bg-black w-full">
        <div class="flex-none">
          <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
            <AlignJustify />
          </label>
        </div>
        <div class="mx-2 flex-1 px-2 font-thin">RESTORANT</div>
        <div class="hidden flex-none lg:block">
          <ul class="menu menu-horizontal">
            <!-- Navbar menu content here -->
            <label class="swap swap-rotate">
              <!-- this hidden checkbox controls the state -->
              <input type="checkbox" class="theme-controller" value="synthwave" />
            
              <!-- sun icon -->
              <Sun class="swap-off" />
            
              <!-- moon icon -->
              <Moon class="swap-on" />
            </label>
            <li><a href="/">Navbar Item 1</a></li>
            <li><a href="/">Navbar Item 2</a></li>
          </ul>
        </div>
      </div>
      <!-- Page content here -->
      <!-- Content -->
    </div>
    <div class="drawer-side backdrop-blur">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-black min-h-full w-80 p-4 shadow-2xl shadow-white/20">
        <!-- Sidebar content here -->
         <div class="p-2 "></div>
        <h1 class="text-white">Orders</h1>
        <li><a class="text-gray-300" href="/">Ceker</a></li>
        <li><a class="text-gray-300" href="/">Status Order</a></li>
      </ul>
    </div>
  </div>