import mock_data from './data.json';

const obj_data: { [key: string]: { id: string; value_area: number; value_bar: number } } =
  mock_data.response;
export const labels = Object.keys(obj_data);

export const datelabels = labels.map(dateString => new Date(dateString));
export const extractedData = labels.map((timestamp: string) => obj_data[timestamp]);

const ids = extractedData.map(mock => mock.id);
export const regions = ids.filter((value, index, self) => self.indexOf(value) === index);
