import {useEffect, useState} from "react"
import {getAllExpenseItems} from "../services/expense"
import {Container} from "react-bootstrap"
import { ExpenseItems } from "./expenseItems"
import IExpenseItem from "../models/expense"
import { ExpenseByPayees } from "./expenseByPayees"
import { ExpenseByPendingAmount } from "./expenseByPendingAmount"
import { ExpenseCreator } from "./expenseCreater"


const ExpenseTracker = () => {

  const [expenseItems, setExpenseItems] 
    = useState<IExpenseItem[]>([])

  useEffect( () => {

    const getAllExpenseItemsInvoker = async () => {
      try{
        const response = await getAllExpenseItems();
        console.log(response);
        setExpenseItems(response);
      }catch(error){
        console.log(error);
      }  
    }

    
    getAllExpenseItemsInvoker();

  }, [])

  const refreshParentUponNewExpenseAddition = (newlyCreatedExpenseItem : IExpenseItem) => {

    setExpenseItems(
      [
        newlyCreatedExpenseItem,
        ...expenseItems
      ]
    )
    
  }

  return (
    <Container>
      <h2 id="title">Expense Tracker</h2>
      <br />
      <ExpenseCreator expenseItems={expenseItems} refreshParent={refreshParentUponNewExpenseAddition}></ExpenseCreator>
      <br />
      <br />
      <br />
      <ExpenseItems expenseItems={expenseItems}></ExpenseItems>
      <ExpenseByPayees expenseItems={expenseItems}></ExpenseByPayees>
      <ExpenseByPendingAmount expenseItems={expenseItems}></ExpenseByPendingAmount>
    </Container>
  )
}

export {ExpenseTracker}