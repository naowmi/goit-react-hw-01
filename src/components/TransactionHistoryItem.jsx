import css from "./TransactionHistoryItem.module.css"
export const TransactionHistoryItem = ({ index, items: { type, amount, currency } }) => {
    const rowClass = index % 2 === 0 ? css.whiteRow : css.grayRow;
    return (
        <tr className={rowClass}>
      <td className={css.name}>{type}</td>
      <td className={css.name}>{amount}</td>
      <td className={css.name}>{currency}</td>
        </tr>

    )
}