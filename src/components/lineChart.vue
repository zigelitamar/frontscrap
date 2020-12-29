<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;
export default {
  extends: Line,
  mixins: [reactiveProp],
  props: {
    label: {
      type: String,
    },
    chartData: {
      type: Array,
    },
    options: {
      type: Object,
    },
    chartColors: {
      type: Object,
    },
  },
  mounted() {
    const dates = this.chartData[0].map((d) => d.date).reverse();
    const totals = this.chartData[0].map((d) => d.total / 10).reverse();
    const totals2 = this.chartData[1].map((d) => d.total).reverse();
    console.log(totals2);
    console.log(totals);
    console.log(dates.length);
    const {
      borderColor,
      pointBorderColor,
      pointBackgroundColor,
      backgroundColor,
    } = this.chartColors;

    this.renderChart(
      {
        labels: dates,
        datasets: [
          {
            label: "sick",
            data: totals,
            borderColor: borderColor,
            pointBorderColor: pointBorderColor,
            pointBackgroundColor: pointBackgroundColor,
            backgroundColor: backgroundColor,
          },
          {
            label: "dead",
            data: totals2,
            borderColor: ["blue"],
            pointBorderColor: ["blue"],
            pointBackgroundColor: ["blue"],
            backgroundColor: ["blue"],
          },
        ],
      },
      this.options
    );
  },
};
</script>
