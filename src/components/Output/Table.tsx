import React from 'react';
import styled from 'styled-components';

import { media } from '../GlobalStyle.css';

const TableWrapper = styled.div`
  overflow: auto;
  max-width: 100%;
  margin: 0px auto 20px auto;
  ${media['600']`
  margin: 0px auto 0px auto;
  `}
  background-color: white;
  background-size: 40px 100%, 40px 100%, 14px 100%, 14px 100%;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  box-sizing: border-box;
  ${media['1275']`font-size: 14px;`}

  tr {
    height: 40px;
    line-height: 0;
    ${media['600']`height: 35px`};
  }

  th,
  td {
    text-align: center;
    padding: 15px;
    ${media['1275']`padding: 12px`};
    ${media['600']`padding: 8px`};
    border: 1px solid #e1e1e1;
    line-height: 16.1px;
  }`;

const HeaderCell = styled.th`
  font-size: 1rem;
  ${media['1275']`font-size: 14px;`}
  font-weight: 500;
  height: 40px;
  ${media['600']`height: 35px`};
  white-space: nowrap;
  color: #6d71878;
  background-color: #f9f9fb;
`;

const precisionRound = (number: number, precision: number) => {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
};

type TableProps = {
  solvedProcessesInfo: {
    job: string;
    at: number;
    bt: number;
    ft: number;
    tat: number;
    wat: number;
  }[];
};

const Table = ({ solvedProcessesInfo }: TableProps) => {
  const total = (array: number[]) =>
    array.reduce((acc, currentValue) => acc + currentValue, 0);

  const numberOfProcesses = solvedProcessesInfo.length;
  const turnaoundTime = solvedProcessesInfo.map((process) => process.tat);
  const waitingTime = solvedProcessesInfo.map((process) => process.wat);

  const totalTAT = total(turnaoundTime);
  const averageTAT = totalTAT / numberOfProcesses;

  const totalWAT = total(waitingTime);
  const averageWAT = totalWAT / numberOfProcesses;

  return (
    <TableWrapper>    
      <StyledTable>
        <thead>
          <tr>
            <HeaderCell>Job</HeaderCell>
            <HeaderCell>Arrival Time</HeaderCell>
            <HeaderCell>Burst Time</HeaderCell>
            <HeaderCell>Finish Time</HeaderCell>
            <HeaderCell>Turnaround Time</HeaderCell>
            <HeaderCell>Waiting Time</HeaderCell>
          </tr>
        </thead>
        <tbody>
          {solvedProcessesInfo.map((item, index) => (
            <tr key={`process-row-${item.job}`}>
              <td>{item.job}</td>
              <td>{item.at}</td>
              <td>{item.bt}</td>
              <td>{item.ft}</td>
              <td>{item.tat}</td>
              <td>{item.wat}</td>
            </tr>
          ))}
          {
            <tr>
              <td colSpan={4} style={{ textAlign: 'right' }}>
                Average
              </td>
              <td>
                {totalTAT} / {numberOfProcesses} = {precisionRound(averageTAT, 2)}
              </td>
              <td>
                {totalWAT} / {numberOfProcesses} = {precisionRound(averageWAT, 2)}
              </td>
            </tr>
          }
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default Table;
