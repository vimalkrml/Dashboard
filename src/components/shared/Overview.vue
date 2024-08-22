<template>
  <div
    class="text-inner font-medium pt-3 xl:pt-4 border-2 border-links rounded-lg"
  >
    <div class="flex items-center justify-between px-4 pb-3 lg:pb-6">
      <h2 class="text-sm">Overview</h2>
      <div class="flex items-center gap-3">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.899994 15.3H17.1V17.1H0.899994V15.3ZM9.89999 10.0548L15.3639 4.59L16.6365 5.8626L8.99999 13.5L1.36349 5.8635L2.63609 4.59L8.09999 10.053V0H9.89999V10.0548Z"
            fill="#AD8EDD"
          />
        </svg>

        <p class="text-overview text-sm">Download Report</p>
      </div>
    </div>

    <div class="flex items-center gap-4 px-6 text-sm lg:text-base">
      <button type="button" aria-label="Monthly" class="text-button">
        Monthly
      </button>
      <button
        type="button"
        aria-label="Yearly"
        class="bg-button py-1 lg:py-2 px-3 lg:px-4 rounded-lg"
      >
        Yearly
      </button>
    </div>

    <div style="margin-bottom: -20px; margin-left: 10px; margin-right: -10px">
      <div ref="chart"></div>
    </div>
  </div>
</template>

<script>
import ApexCharts from "apexcharts";

export default {
  name: "BarChart",
  mounted() {
    const isMobile = window.innerWidth < 768;
    const columnWidth = isMobile ? "15" : "26";

    const chartConfig = {
      series: [
        {
          name: "Sales",
          data: [800, 350, 1100, 1350, 500, 600, 250, 1400, 300, 480, 300, 250],
        },
      ],
      chart: {
        type: "bar",
        height: 295,
        toolbar: {
          show: false,
        },
      },
      colors: ["#AD8EDD"],
      plotOptions: {
        bar: {
          columnWidth: columnWidth,
          borderRadius: 3,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#98A2B3",
            fontSize: "12px",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
          },
          offsetY: -4,
        },
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return `$${value.toFixed(0)}`;
          },
          style: {
            colors: "#98A2B3",
            fontSize: "12px",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
          },
          offsetX: -10,
        },
        axisBorder: {
          show: true,
          color: "#EAECF0",
          height: "1px",
        },
        tickAmount: 4,
        min: 0,
        max: 1500,
      },
      grid: {
        show: false,
        borderColor: "#dddddd",
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        enabled: false,
        y: {
          formatter: function (value) {
            return `$${value}`;
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
    };

    const chart = new ApexCharts(this.$refs.chart, chartConfig);
    chart.render();
  },
};
</script>

<style scoped>
.apexcharts-yaxis {
  border: 2px solid #000 !important;
}
</style>
