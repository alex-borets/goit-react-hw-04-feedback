import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <div className={css.stats_wrap}>
      <ul className={css.list}>
        <li className={css.list_item}>Good: {good}</li>
        <li className={css.list_item}>Neutral: {neutral}</li>
        <li className={css.list_item}>Bad: {bad}</li>
        <li className={css.list_item}>Total: {total}</li>
        <li className={css.list_item}>
          Positive feedback: {positiveFeedback}%
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
