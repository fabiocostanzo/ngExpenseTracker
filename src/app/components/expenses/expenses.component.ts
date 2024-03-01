import { Component, OnInit } from '@angular/core';
import { Expense } from '../../Expense';
import { ExpenseItemComponent } from '../expense-item/expense-item.component';
import { ExpenseService } from '../../services/expense.service';
import { AddExpenseComponent } from '../add-expense/add-expense.component';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [ExpenseItemComponent, AddExpenseComponent],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css',
})
export class ExpensesComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenseService
      .getExpenses()
      .subscribe((expenses) => (this.expenses = expenses));
  }

  deleteExpense(expense: Expense) {
    this.expenseService
      .deleteExpense(expense)
      .subscribe(
        () => (this.expenses = this.expenses.filter((e) => e.id !== expense.id))
      );
  }

  toggleExpense(expense: Expense) {
    expense.expense = !expense.expense;
    this.expenseService.updateExpense(expense).subscribe();
  }

  addExpense(expense: Expense) {
    this.expenseService
      .addExpense(expense)
      .subscribe((newExpense) => this.expenses.push(newExpense));
  }
}
