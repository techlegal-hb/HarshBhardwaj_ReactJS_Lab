import IExpenseItem from "../models/expense";

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

  const noOfPayee = (expenseItems : IExpenseItem[]) => {

    const uniquePayeeNames : string[] = [];
    let n=0
    expenseItems.forEach( (expenseItem) => {

      let payeeName = expenseItem.payeeName;
      if (!uniquePayeeNames.includes(payeeName)){
        uniquePayeeNames.push(payeeName);
        n=n+1
      }
    })

    return n;
  }

  const getGrandTotal = (expenseItems : IExpenseItem[]) => {

    let grandTotalAmount = 0;

    expenseItems.forEach((expenseItem) => {

      grandTotalAmount =grandTotalAmount+ expenseItem.price;
    })

    return grandTotalAmount;    
  }

  const getTotalExpenseByPayee = (payeeName : string,expenseItems :IExpenseItem[]) => {

    let totalContributedAmount = 0;

    expenseItems.forEach((expenseItem) => {

      if (expenseItem.payeeName === payeeName){
        totalContributedAmount = totalContributedAmount+expenseItem.price;
      }
    })

    return totalContributedAmount;
  }
  export {getUniquePayeeNames,noOfPayee,getGrandTotal,getTotalExpenseByPayee}