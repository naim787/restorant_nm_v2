  <script>
    import { House, Store, LayoutDashboard, ChartLine,  Users, ShoppingCart, MessageSquareDot, Book , Siren, Settings, Grid3x3} from "@lucide/svelte";
  </script>

<div class="w-[100vw] h-[100vh] hidden xl:flex bg-black p-4 pr-5">

  <!-- navigasi owner -->
  <div class="w-1/7 h-full bg-gray-900 rounded-3xl">
    <div class="w-full h-20 flex justify-start items-center px-4">
      <h1 class="text-3xl font-bold text-orange-500 flex gap-2 text-shadow-2xs text-shadow-yellow-500"><Grid3x3 />RESTORANT</h1>
    </div>
    <ul class="w-full h-[90%] flex flex-col justify-between items-start px-4 overflow-y-hidden">
      <div class="w-full">
        <div class="w-full">MAIN MANU</div>
        <a href="/home" class="w-full h-[40px] my-1 flex justify-start items-center hover:text-white text-gray-500 border"><House class="mx-2"/>home</a>
        <a href="/dashbord" class="w-full h-[40px] my-1 flex justify-start items-center hover:text-white text-gray-500 border"><Store class="mx-2"/>dashbord</a>
        <a href="/layout_home" class="w-full h-[40px] my-1 flex justify-start items-center hover:text-white text-gray-500 border"><LayoutDashboard class="mx-2"/>home layout</a>
        <a href="/analisis" class="w-full h-[40px] my-1 flex justify-start items-center hover:text-white text-gray-500 border"><ChartLine class="mx-2"/>analisis</a>
        <a href="/users" class="w-full h-[40px] my-1 flex justify-start items-center hover:text-white text-gray-500 border"><Users class="mx-2"/>users</a>
        <a href="/products" class="w-full h-[40px] my-1 flex justify-start items-center hover:text-white text-gray-500 border"><ShoppingCart class="mx-2"/>products</a>
        <a href="/notification" class="w-full h-[40px] my-1 flex justify-start items-center hover:text-white text-gray-500 border"><MessageSquareDot class="mx-2"/>notification</a>
        <a href="/sop" class="w-full h-[40px] my-1 flex justify-start items-center hover:text-white text-gray-500 border"><Book class="mx-2"/>sop</a>
      </div>
      <div class="w-full gap-2">
       <div class="w-full">SETTINGS</div>
       <a href="/police" class="w-full h-[40px] my-1 flex justify-start items-center hover:text-white text-gray-500 border"><Siren class="mx-2"/>police</a>
       <a href="/settings" class="w-full h-[40px] my-1 flex justify-start items-center hover:text-white text-gray-500 border"><Settings class="mx-2"/>settings</a>
     </div>
    </ul>
  </div>


  <!-- contet owner -->
   <div class="w-full h-full bg-black text-white rounded-3xl p-2 flex flex-col gap-3">
    <!-- layer 1 -->
    <div class="w-full h-20 flex justify-between items-center bg-gray-900 rounded-xl">
        <slot name="a" />
    </div>

     <!-- layer 2 -->
    <div class="w-full h-full bg-gray-900 rounded-b-3xl">

        <slot name="b" />

    </div>
     <!-- pembugkus content -->
   </div>


<!-- pembugkus -->
</div>