import { useState } from 'react';
import { Section } from '../components/Section';
import { Statistics } from '../components/Statistics';
import { Notification } from '../components/Notification';
import { FeedbackOptions } from '../components/FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onButtonClick = value => {
    switch (value) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countFeedbackPercent = () => {
    return Math.floor((good / countTotalFeedback()) * 100);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={onButtonClick}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countFeedbackPercent()}
          ></Statistics>
        )}
      </Section>
    </div>
  );
};
