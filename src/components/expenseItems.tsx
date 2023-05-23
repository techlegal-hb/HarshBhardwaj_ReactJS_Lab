import {Table} from "react-bootstrap"
import IExpenseItem from "../models/expense"

import {format} from "date-fns";

type ExpenseItemsModel = {

  expenseItems : IExpenseItem[];

}

const ExpenseItems = ({expenseItems} : ExpenseItemsModel) => {

 

  const convertDateAsString = (date : Date) => {
    //TODO
    return format(new Date(), "yyyy-MM-dd");
  }

  return (
    <div>

      <Table  className="tableOverwrite">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Product Purchased</th>
                <th>Price</th>
                <th>Payee</th>
              </tr>
            </thead>

            <tbody>

              {
                expenseItems.map( (expenseItem : IExpenseItem, index) => {

                  return (
                    <tr>
                    <td>{index + 1}</td>
                    <td >{convertDateAsString(expenseItem.date)}</td>
                    <td >{expenseItem.expenseDescription}</td>
                    <td id="priceTable">{expenseItem.price}</td>
                    <td >{expenseItem.payeeName}</td>
                  </tr>    
                  )
                })
              }

            </tbody>
          </Table>
          
    </div>
  )
}

export {ExpenseItems}