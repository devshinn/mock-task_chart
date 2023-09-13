import { ChartOptions } from 'chart.js';
import { extractedData } from 'data';

export const options: ChartOptions<'bar' | 'line'> = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
  },

  plugins: {
    tooltip: {
      callbacks: {
        afterTitle: (context: any) => {
          const dataItem = extractedData[context[0].dataIndex];
          return `id: ${dataItem.id}`;
        },
      },
    },
  },

  scales: {
    xx: {
      type: 'time',
      ticks: {
        autoSkip: true,
        maxTicksLimit: 10,
        maxRotation: 0,
      },
    },

    barAxis: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      title: {
        display: true,
        text: 'value_bar',
      },
    },

    areaAxis: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
      grid: {
        drawOnChartArea: false,
      },
      max: 200,
      title: {
        display: true,
        text: 'value_area',
      },
    },
  },
};
