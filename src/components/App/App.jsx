import React from 'react';
import { useState } from 'react';


import { Section } from '../Section/section';
import { FeedbackOptions } from '../FeedbackOptions/feedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { ErrorMessage } from '../Section/Notification';

import { Container, SectionApp } from './App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = count => {
    switch (count) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotal = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    return Number.parseInt((good / total) * 100);
    };
    
  const total = countTotal();
  const percentage = positivePercentage();
  const options = Object.keys({ good, neutral, bad });

  return (
    <Container>
      <SectionApp>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onLeaveFeedback={onLeaveFeedback}
            options={options}
          />
        </Section>
        <Section title={'Statistics'}>
          {total !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            />
          ) : (
            <ErrorMessage message={'There is no feedback'} />
          )}
        </Section>
      </SectionApp>
    </Container>
  );
};

export { App };
