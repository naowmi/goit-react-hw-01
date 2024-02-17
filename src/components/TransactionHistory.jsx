import { TransactionHistoryItem } from "./TransactionHistoryItem";
import css from "./TransactionHistory.module.css"
export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.box} >
            <thead>
    <tr className={css.title}>
         <th>Type</th>
        <th>Amount</th>
         <th>Currency</th>
        </tr> 
    </thead>            
         <tbody>
            {items.map((item, index) => {
                return <TransactionHistoryItem key={item.id} items={item} index={index} />
          })}
        </tbody>    
    </table>
)
}