import { Component, OnInit } from '@angular/core';
import { Expense } from '../../Expense';
import { ExpenseItemComponent } from '../expense-item/expense-item.component';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [ExpenseItemComponent],
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
}
