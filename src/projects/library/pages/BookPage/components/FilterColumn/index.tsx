import { FC } from "react";
import { Filter } from "../../types";
import { Select } from "antd";
import { DefaultOptionType } from "antd/es/select";

interface IProps {
  selectors: Filter | undefined;
  setFilter: (filter:Filter) => void;
}

const FilterColumn:FC<IProps> = (props) => {

  const { selectors, setFilter } = props;

  const renderOption = (arr:any[], code:string, name:string):DefaultOptionType[]|undefined => arr ? arr.map((option) => {
    return {
      label: option[name],
      value: option[code]
    }
  }) : undefined;

  const handleChange = (paramKey:string, paramValue:string) => {
    if (selectors) {
      const newSelectors = {...selectors};
      Object.entries(selectors).map(([key, value]) => {
        if (key === paramKey) {
          const temp = selectors[key].values.find((option) => option[value.code] === paramValue);
          newSelectors[key].defaultValue = {...temp};
        }
      });
      setFilter(newSelectors);
    }
  }

  return (
    <div className="selector-container">
      {selectors && Object.entries(selectors).map(([key, value]) => (
        <div key={key}>
          <div>{value.title}:</div>
          <Select
            style={{width: 120}}
            defaultValue={value.defaultValue}
            options={renderOption(value.values, value.code, value.name)}
            onChange={(value:string) => {
              handleChange(key, value);
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default FilterColumn;