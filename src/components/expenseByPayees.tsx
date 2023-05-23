import {Table} from "react-bootstrap"
import IExpenseItem from "../models/expense"
import {getTotalExpenseByPayee} from "../services/expense_utils"

type ExpenseByPayeesModel = {
  expenseItems : IExpenseItem[];
}

const ExpenseByPayees = ({expenseItems} : ExpenseByPayeesModel) => {

  const getUniquePayeeNames = (expenseItems : IExpenseItem[]) => {

   

    const uniquePayeeNames : string[] = [];

    expenseItems.forEach( (expenseItem) => {

      let payeeName = expenseItem.payeeName;
      if (!uniquePayeeNames.includes(payeeName)){
        uniquePayeeNames.push(payeeName);
      }
    })

    return uniquePayeeNames;
  }

  const uniquePayeeNames = getUniquePayeeNames(expenseItems);

  

  const getGrandTotal = () => {

    let grandTotalAmount = 0;

    expenseItems.forEach((expenseItem) => {

      grandTotalAmount = grandTotalAmount + expenseItem.price;
    })

    return grandTotalAmount;    
  }

  return (

    <Table className="tableOverwrite">
  

    <tbody>
          <tr>
            <td>TOTAL:</td>
            <td>{getGrandTotal()}</td>
          </tr> 
      {
        uniquePayeeNames.map( (payeeName) => {

          return (
            <tr id="#payeeTotal">
            <td >{payeeName} paid:</td>
            <td >{getTotalExpenseByPayee(payeeName,expenseItems)}</td>
          </tr>    
          )
        })
      }

            

    </tbody>
  </Table>

  );
}

export {ExpenseByPayees}