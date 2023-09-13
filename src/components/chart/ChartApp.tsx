import './chart.css';
import { options } from './lib/options';
import RegionsCheckBox from './RegionsCheckBox';
import {
  BarController,
  BarElement,
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  TimeScale,
  Tooltip,
} from 'chart.js';
import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm';
import { datelabels, extractedData } from 'data';
import { useState } from 'react';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  LineController,
  BarController,
  TimeScale,
);

export function ChartApp() {
  const [checkedRegions, setCheckedRegions] = useState<string[]>([]);
  const data = {
    labels: datelabels,
    datasets: [
      {
        type: 'line' as const,
        label: 'value_area',
        borderColor: 'rgba(255, 255, 255, 0)',
        borderWidth: 2,
        fill: true,
        backgroundColor: '#ff6fe7c3',
        data: extractedData.map(moc => moc.value_area),
        cubicInterpolationMode: 'monotone',
        pointRadius: 0,
        tension: 0.5,
        yAxisID: 'areaAxis',
        xAxisID: 'xx',
      },
      {
        type: 'bar' as const,
        label: 'value_bar',
        backgroundColor: extractedData.map(item => {
          if (checkedRegions.includes(item.id)) {
            return 'rgb(87, 65, 192)';
          } else {
            return 'rgb(86, 187, 255)';
          }
        }),
        hoverBackgroundColor: '#ff8282',

        data: extractedData.map(moc => moc.value_bar),
        borderColor: 'white',
        borderWidth: 0,

        yAxisID: 'barAxis',
        xAxisID: 'xx',
      },
    ],
  } as ChartData<'bar' | 'line', number[], unknown>;

  return (
    <div className='wrap'>
      <div className='chart-wrap'>
        <Chart type={'bar' || 'line'} options={options} data={data} />
        <RegionsCheckBox checkedRegions={checkedRegions} setCheckedRegions={setCheckedRegions} />
      </div>
    </div>
  );
}
