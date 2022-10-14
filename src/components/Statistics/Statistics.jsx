import React from 'react';
import PropTypes from 'prop-types';

import { StatisticsList, GoodItem, NeutralItem, BadItem, TotalItem, PercentageItem } from './statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticsList>
    <GoodItem>Good: {good}</GoodItem>
    <NeutralItem>Neutral: {neutral}</NeutralItem>
    <BadItem>Bad: {bad}</BadItem>
    <TotalItem>Total: {total}</TotalItem>
    <PercentageItem>PositivePercentage: {positivePercentage}%</PercentageItem>
  </StatisticsList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export { Statistics };
