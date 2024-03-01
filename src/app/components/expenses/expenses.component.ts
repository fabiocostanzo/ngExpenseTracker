import { Component } from '@angular/core';
import { Expense } from '../../Expense';
import { EXPENSES } from '../../mock-expenses';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css',
})
export class ExpensesComponent {
  expenses: Expense[] = EXPENSES;
}
