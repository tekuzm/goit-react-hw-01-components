import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ label, percentage }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.statList}>
        <li className={css.item}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}</span>
        </li>
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};

export default Statistics;
