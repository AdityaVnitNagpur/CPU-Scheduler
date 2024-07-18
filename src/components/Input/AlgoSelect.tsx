import React, { Dispatch, SetStateAction } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

/*
  FCFS - First Come First Serve
  SJF - Shortest Job First
  SRTF - Shortest Remaining Time First
  RR - Round-Robin
  NPP - Non-preemptive Priority
  PP - Preemptive Priority
*/

export type AlgoType = 'FCFS' | 'SJF' | 'SRTF' | 'RR' | 'NPP' | 'PP';
export type OptionType = {
  value: AlgoType;
  label: string;
};

export const defaultOption: OptionType = {
  value: 'FCFS',
  label: 'First Come First Serve (FCFS)',
};

const options: OptionType[] = [
  defaultOption,
  {
    value: 'SJF',
    label: 'Shortest Job First, SJF (non-preemptive)',
  },
  {
    value: 'SRTF',
    label: 'Shortest Remaining Time First, SRTF (preemptive SJF)',
  },
  {
    value: 'RR',
    label: 'Round-Robin (RR)',
  },
  {
    value: 'NPP',
    label: 'Priority (non-preemptive)',
  },
  {
    value: 'PP',
    label: 'Priority (preemptive)',
  },
];

type AlgoSelectProps = {
  selectedAlgo: {};
  setSelectedAlgo: Dispatch<SetStateAction<{}>>;
};

export const StyledSelect = styled(Select)`
  .react-select__control {
    box-sizing: border-box;
    height: 41px;

    &:hover {
      background-color: #fafafa;
    }
  }
  .react-select__value-container {
    padding: 0 8px;
    font-size: 14px;
  }
  .react-select__option {
    font-size: 14px;
  }
`;

const AlgoSelect: React.FC<AlgoSelectProps> = ({
  selectedAlgo,
  setSelectedAlgo,
}) => {
  return (
    <StyledSelect
      defaultValue={selectedAlgo}
      onChange={setSelectedAlgo}
      options={options}
      instanceId="react-select-algo"
      inputId="react-select-algo"
      classNamePrefix="react-select"
      isSearchable={false}
    />
  );
};

export default AlgoSelect;
