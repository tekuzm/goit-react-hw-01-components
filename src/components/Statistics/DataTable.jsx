import PropTypes from 'prop-types';
import Statistics from './Statistics';

const DataTable = (title, data) => {
  return (
    <div className="dataTable">
      {data.map(({ id, label, percentage }) => {
        return (
          <Statistics
            stats={data}
            id={id}
            label={label}
            percentage={percentage}
          />
        );
      })}
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ),
};

export default DataTable;
