import {Table} from "react-bootstrap"
import IExpenseItem from "../models/expense"
import {getUniquePayeeNames, getGrandTotal, getTotalExpenseByPayee,noOfPayee} from "../services/expense_utils";

type ExpenseByPendingAmountModel = {
  expenseItems : IExpenseItem[];
}

const ExpenseByPendingAmount = ({expenseItems} : ExpenseByPendingAmountModel) => {

  const uniquePayeeNames = getUniquePayeeNames(expenseItems);
console.log("uniquePayeeNames",uniquePayeeNames)
  const getPendingAmount = (payeeName : string) => {

   

    const totalExpenses = getGrandTotal(expenseItems);
    const totalExpenseByPayee = getTotalExpenseByPayee(payeeName, expenseItems);
    
    const amountToBePaidByPayee = -1*(totalExpenses / (getUniquePayeeNames(expenseItems).length)-totalExpenseByPayee);

    return amountToBePaidByPayee
  } 

 

  return (

    <Table className="tablePending">

    <tbody>

      {
        uniquePayeeNames.map( (payeeName, index) => {
          let amount = getPendingAmount(payeeName);
          if(amount > 0){
          return (
            <tr>
            <td>Pay {payeeName}</td>
            <td>Rs {" "}
               {getPendingAmount(payeeName)}</td>
          </tr>    
          )
          }
        })
        
      } 

    </tbody>
    
  </Table>

  );
}

export {ExpenseByPendingAmount}