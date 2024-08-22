<template>
  <div
    class="text-inner font-medium p-3 xl:p-4 border-2 border-links rounded-lg flex flex-col gap-4.5"
  >
    <h2 class="text-sm">Trading Accounts</h2>
    <div
      class="bg-accounts p-3 xl:p-4 border-1 border-input rounded-lg"
      v-for="i in 2"
      :key="i"
    >
      <h4 class="text-xs font-semibold mb-3">Master Account</h4>
      <div class="flex items-center gap-2.5 mb-3">
        <span class="text-xs py-1 px-2 rounded-full bg-links">CTrader</span>
        <span class="text-xs text-rank">#273728</span>
      </div>
      <div class="flex items-center justify-between pr-2">
        <p class="font-bold text-3.2xl leading-6">
          0.00<span class="text-base ml-1">USD</span>
        </p>
        <svg
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.66987 3.12403L1.7939 11L0.5 9.7061L8.37505 1.83013H1.43428V0H11.5V10.0657H9.66987V3.12403Z"
            fill="#667085"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
