import React from 'react';
import {ExpenseTracker} from './components/expenseTracker';
import { ExpenseItems } from './components/expenseItems';
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div >
     <ExpenseTracker></ExpenseTracker>

    </div>
  );
}

export default App;