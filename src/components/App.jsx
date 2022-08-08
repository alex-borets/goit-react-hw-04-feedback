import React from 'react';
import { Component } from 'react';
import { Section } from '../components/Section';
import { Statistics } from '../components/Statistics';
import { Notification } from '../components/Notification';
import { FeedbackOptions } from '../components/FeedbackOptions';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onButtonClick = event => {
    this.setState(prevState => {
      const prevScore = prevState[event] || 0;
      return {
        [event]: prevScore + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countFeedbackPercent = () => {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const options = Object.keys(this.state);
    const totalCount = this.countTotalFeedback();
    const positiveFeedback = this.countFeedbackPercent();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onButtonClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {totalCount === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalCount}
              positiveFeedback={positiveFeedback}
            ></Statistics>
          )}
        </Section>
      </div>
    );
  }
}
