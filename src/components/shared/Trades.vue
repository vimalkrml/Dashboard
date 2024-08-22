<template>
  <div
    class="text-inner font-medium p-4 border-2 border-links rounded-lg flex flex-col gap-4.5 2xl:h-fit"
  >
    <h2 class="text-sm">Open Trades</h2>

    <div
      v-for="(trade, index) in trades"
      :key="index"
      class="bg-accounts px-4 py-3 border-1 border-input rounded-lg"
    >
      <div class="flex items-center justify-between mb-0.5">
        <div class="flex items-center gap-2.5">
          <span class="text-xs text-rank">{{ trade.pair }}</span>
          <span
            class="text-xs py-1 px-2 rounded-full"
            :style="{ backgroundColor: trade.bgcolor }"
          >
            {{ trade.type }}
          </span>
        </div>
        <p class="text-xs">{{ trade.volume }}</p>
      </div>
      <div class="flex items-end">
        <span class="font-bold mr-1" :style="{ color: trade.textcolor }">{{
          trade.profit
        }}</span>
        <p class="text-sm">USD</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trades: [
        {
          pair: "GBPUSD",
          type: "Long",
          volume: "0.12",
          profit: "+56.00",
          textcolor: "#14AE5C",
          bgcolor: "#EBFFEE",
        },
        {
          pair: "USDJPY",
          type: "Long",
          volume: "0.52",
          profit: "-0.09",
          textcolor: "#EC221F",
          bgcolor: "#EBFFEE",
        },
        {
          pair: "EURUSD",
          type: "Short",
          volume: "0.34",
          profit: "-1.09",
          textcolor: "#EC221F",
          bgcolor: "#FEE9E7",
        },
      ],
    };
  },
};
</script>
