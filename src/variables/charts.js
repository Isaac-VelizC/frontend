export const barChartDataWeeklyRevenue = [
  {
    name: "Daily Traffic",
    data: [20, 30, 40, 20, 45, 50, 30, 80, 55, 44],
  },
];

// Extraer nombres y valores de productos
//const productNames = barChartDataWeeklyRevenue[0].data.map(product => product.name);
//const productValues = barChartDataWeeklyRevenue[0].data.map(product => product.valor);

export const barChartOptionsWeeklyRevenue = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000"
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["Product A", "Product B", "Product C", "Product D", "Product E", "Product F", "Product H", "Product I", "Product J", "Product K"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: "#4318FF",
            opacity: 1,
          },
          {
            offset: 100,
            color: "rgba(67, 24, 255, 1)",
            opacity: 0.28,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
      columnWidth: "16px",
    },
  },
};

{/* Chart */}
export const pieChartOptions = {
  labels: ["Your files", "System", "Empty", "Your files", "System", "Empty", "Your files", "System", "Empty", "Your files", "System", "Empty", "Your files", "System", "Empty"],
  colors: ["#4318FF", "#6AD2FF", "#EFF4FB", "#4318FF", "#6AD2FF", "#EFF4FB", "#4318FF", "#6AD2FF", "#EFF4FB", "#4318FF", "#6AD2FF", "#EFF4FB", "#4318FF", "#6AD2FF", "#EFF4FB"],
  chart: {
    width: "100px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000"
    },
  },
};

export const pieChartData = [10, 10, 10, 8, 2, 5, 5, 8, 12, 5, 5, 5, 5, 5, 5];
