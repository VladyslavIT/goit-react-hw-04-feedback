import React from 'react';
import PropTypes from 'prop-types';


import { OptionsThumb, Button } from './feedback.styled';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <OptionsThumb>
    {options.map((option, index) => (
      <Button key={index} name={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </Button>
    ))}
  </OptionsThumb>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export { FeedbackOptions };
