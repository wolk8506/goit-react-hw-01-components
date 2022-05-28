import PropTypes from 'prop-types'
import s from "components/TransactionHistory/TransactionHistory.module.css";

export const TransactionHistory =({transactionData}) =>{
    return(
<table className={s.transactionHistory}>
  <thead className={s.tableName}>
    <tr>
      <th className={s.cell}>Type</th>
      <th className={s.cell}>Amount</th>
      <th className={s.cell}>Currency</th>
    </tr>
  </thead>
  <tbody>
      {transactionData.map(item=>(
        <tr className={s.item} key={item.id}>
          <td className={s.cell}>{item.type}</td>
          <td className={s.cell}>{item.amount}</td>
          <td className={s.cell}>{item.currency}</td>
        </tr>
      )
        )}
    
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
  transactionData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}