import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";
// import { table } from "react-bootstrap";

const TransactionHistory = function ({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.title}>Type</th>
          <th className={s.title}>Amount</th>
          <th className={s.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((e) => {
          return (
            <tr key={e.id}>
              <td>{e.type}</td>
              <td>{e.amount}</td>
              <td>{e.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
