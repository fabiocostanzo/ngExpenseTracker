import { Component, OnInit } from '@angular/core';
import { Expense } from '../../Expense';
import { ExpenseItemComponent } from '../expense-item/expense-item.component';
import { ExpenseService } from '../../services/expense.service';
import { AddExpenseComponent } from '../add-expense/add-expense.component';
import { BalanceComponent } from '../balance/balance.component';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [ExpenseItemComponent, AddExpenseComponent, BalanceComponent],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css',
})
export class ExpensesComponent implements OnInit {
  expenses: Expense[] = [];
  balance: number = 0;

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenseService.getExpenses().subscribe((expenses) => {
      this.expenses = expenses;
      this.updateBalance();
    });
  }

  deleteExpense(expense: Expense) {
    this.expenseService.deleteExpense(expense).subscribe(() => {
      this.expenses = this.expenses.filter((e) => e.id !== expense.id);
      this.updateBalance();
    });
  }

  toggleExpense(expense: Expense) {
    expense.expense = !expense.expense;
    this.expenseService
      .updateExpense(expense)
      .subscribe(() => this.updateBalance());
  }

  addExpense(expense: Expense) {
    this.expenseService.addExpense(expense).subscribe((newExpense) => {
      this.expenses.push(newExpense);
      this.updateBalance();
    });
  }

  updateBalance(): void {
    this.balance = this.expenses.reduce((total, expense) => {
      return total + (expense.expense ? -1 * expense.amount : expense.amount);
    }, 0);
  }
}
