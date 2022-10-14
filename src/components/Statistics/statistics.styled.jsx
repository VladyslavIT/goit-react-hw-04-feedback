import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  display: flex;
  gap: 16px;
`;
export const GoodItem = styled.li`
    padding: 4px 16px;
    background-color: chartreuse;
    border: 1px solid black;
    border-radius: 8px;
   
`;

export const NeutralItem = styled.li`
    padding: 4px 16px;
    background-color: goldenrod;
    border:  1px solid black;
    border-radius: 8px;
`;

export const BadItem = styled.li`
    padding: 4px 16px;
    background-color: red;
    border: 1px solid black;
    border-radius: 8px;
`;

export const TotalItem = styled.li`
    padding: 4px 16px;
    background-color: yellow;
    border: 1px dashed black;
    border-radius: 8px;
`;

export const PercentageItem  = styled.li`
    padding: 4px 16px;
    background-color: aquamarine;
    border: 1px dashed black;
    border-radius: 8px;
`;