import { regions } from 'data';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  checkedRegions: string[];
  setCheckedRegions: Dispatch<SetStateAction<string[]>>;
};
function RegionsCheckBox({ checkedRegions, setCheckedRegions }: Props) {
  const handleCheckboxChange = (region: string) => {
    const isChecked = checkedRegions.includes(region);

    if (!isChecked) {
      setCheckedRegions([...checkedRegions, region]);
    } else {
      setCheckedRegions(checkedRegions.filter(item => item !== region));
    }
  };

  return (
    <ul>
      {regions.map((region: string) => (
        <li key={region}>
          <label>
            <input
              type='checkbox'
              value={region}
              checked={checkedRegions.includes(region)}
              onChange={() => handleCheckboxChange(region)}
            />
            {region}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default RegionsCheckBox;
