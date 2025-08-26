<!-- +page.svelte (Dashboard Content) -->
<script>
  import { onMount } from 'svelte';
  
  // Stats data
  const statsData = [
    {
      title: "Clients Added",
      value: "197",
      change: "+2.5%",
      changeType: "positive",
      period: "Since last week",
      progress: 75
    },
    {
      title: "Contracts Signed", 
      value: "745",
      change: "+1.5%",
      changeType: "negative",
      period: "Since last week",
      progress: 60
    },
    {
      title: "Invoice Sent",
      value: "512", 
      change: "+0.6%",
      changeType: "positive",
      period: "Since last week",
      progress: 85
    }
  ];
  
  // Device usage data
  const deviceData = [
    { name: "Mobile", percentage: 19, color: "bg-blue-500" },
    { name: "Tablet", percentage: 20, color: "bg-cyan-400" },
    { name: "Desktop", percentage: 70, color: "bg-cyan-500" }
  ];
  
  // Chart data for payments overview
  const chartData = [
    { month: "Sep", value: 20 },
    { month: "Oct", value: 35 },
    { month: "Nov", value: 42 },
    { month: "Dec", value: 38 },
    { month: "Jan", value: 45 },
    { month: "Feb", value: 62 },
    { month: "Mar", value: 58 },
    { month: "Apr", value: 68 },
    { month: "May", value: 75 },
    { month: "Jun", value: 72 },
    { month: "Jul", value: 78 },
    { month: "Aug", value: 85 }
  ];
  
  let selectedPeriod = "Monthly";
  let selectedDevicePeriod = "Monthly";
</script>

<svelte:head>
  <title>Dashboard - TailAdmin</title>
</svelte:head>

<!-- Stats Cards -->
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
  {#each statsData as stat}
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <h3 class="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
          <p class="text-sm font-medium text-gray-600 mb-3">{stat.title}</p>
          
          <div class="flex items-center space-x-2">
            <span class="px-2 py-1 text-xs font-medium rounded {stat.changeType === 'positive' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
              {stat.change}
            </span>
            <span class="text-xs text-gray-500">{stat.period}</span>
          </div>
        </div>
        
        <!-- Circular Progress -->
        <div class="relative w-16 h-16">
          <svg class="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 A 15.9155 15.9155 0 0 1 18 33.9155 A 15.9155 15.9155 0 0 1 18 2.0845"
              fill="none"
              stroke="#e5e7eb"
              stroke-width="2"
            />
            <path
              d="M18 2.0845 A 15.9155 15.9155 0 0 1 18 33.9155 A 15.9155 15.9155 0 0 1 18 2.0845"
              fill="none"
              stroke="#3b82f6"
              stroke-width="2"
              stroke-dasharray="{stat.progress}, 100"
              class="transition-all duration-500 ease-in-out"
            />
          </svg>
        </div>
      </div>
    </div>
  {/each}
</div>

<div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
  <!-- Payments Overview Chart -->
  <div class="xl:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-lg font-semibold text-gray-900">Payments Overview</h3>
      <div class="flex items-center space-x-2">
        <span class="text-sm text-gray-500">SHORT BY:</span>
        <select bind:value={selectedPeriod} class="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option value="Monthly">Monthly</option>
          <option value="Weekly">Weekly</option>
          <option value="Daily">Daily</option>
        </select>
      </div>
    </div>
    

    <!-- Chart Area -->


    
    <div class="relative h-64 mb-6">
      <svg class="w-full h-full" viewBox="0 0 600 200">
        <!-- Grid lines -->
        {#each [0, 20, 40, 60, 80, 100] as y}
          <line 
            x1="60" 
            y1={200 - (y * 1.6)} 
            x2="580" 
            y2={200 - (y * 1.6)} 
            stroke="#f3f4f6" 
            stroke-width="1"
          />
          lorem100
</div>