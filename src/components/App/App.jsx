import React from 'react';

import { Section } from '../Section/section';
import { FeedbackOptions } from '../FeedbackOptions/feedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { ErrorMessage } from '../Section/Notification';

import { Container, SectionApp } from './App.styled';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    };
    
    onLeaveFeedback = (count) => {
        this.setState(prevState => ({
            [count]: prevState[count] + 1,
        }))
    }
    
    render() {
        const { good, neutral, bad } = this.state;
        const total = (good + neutral + bad);
        const positivePercentage = Number.parseInt((good / total) * 100);

        return (
            <Container>
            <SectionApp>
                <Section title={'Please leave feedback'}>
                    <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} options={Object.keys(this.state)} />
                    </Section>
                <Section title={'Statistics'}>
                    {total !== 0 ?
                    <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} /> : <ErrorMessage message={'There is no feedback'}/> }
                    </Section>
                </SectionApp>
                </Container>
        )
    }
}

export {App};