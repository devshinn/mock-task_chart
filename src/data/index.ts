import mock_data from './data.json';

const obj_data: { [key: string]: { id: string; value_area: number; value_bar: number } } =
  mock_data.response;
const labels = Object.keys(obj_data);

const datelabels = labels.map(dateString => new Date(dateString));
const extractedData = labels.map((dateString: string) => obj_data[dateString]);

const regions = extractedData.map(mock => mock.id);
const uniqRegions = regions.filter((value, index, self) => self.indexOf(value) === index);

export { datelabels, extractedData, labels, uniqRegions as regions };
