<template>
  <div class="font-inter w-full h-screen flex">
    <div class="lg:w-2/12 h-full">
      <Sidebar />
    </div>
    <div class="w-full lg:w-10/12 h-full">
      <Navbar />
      <div
        class="flex flex-col lg:flex-row pl-4 pr-4 py-4 xl:pl-6 xl:py-6 xl:pr-8 gap-4 xl:gap-6"
      >
        <div class="lg:w-9/12 xl:w-links 2xl:w-6/12">
          <Links class="mb-4 xl:mb-6" />
          <Overview />
        </div>
        <div
          class="lg:w-3/12 xl:w-accounts 2xl:w-6/12 flex flex-col 2xl:flex-row gap-4 xl:gap-6"
        >
          <Accounts class="2xl:w-6/12" />
          <Trades class="2xl:w-6/12" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./shared/Sidebar.vue";
import Navbar from "./shared/Navbar.vue";
import Links from "./shared/Links.vue";
import Accounts from "./shared/Accounts.vue";
import Trades from "./shared/Trades.vue";
import Overview from "./shared/Overview.vue";

export default {
  components: {
    Sidebar,
    Navbar,
    Links,
    Accounts,
    Trades,
    Overview,
  },
  data() {
    return {
      previousWidth: window.innerWidth,
    };
  },
  methods: {
    handleResize() {
      const currentWidth = window.innerWidth;
      if (this.previousWidth !== currentWidth) {
        window.location.reload();
      }
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>
