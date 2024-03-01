import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Expense } from '../../Expense';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css',
})
export class AddExpenseComponent {
  @Output() onAddExpense: EventEmitter<Expense> = new EventEmitter();

  description!: string;
  amount: number = 0;
  expense: boolean = true;

  onSubmit() {
    if (!this.description) {
      alert('Please add a description');
      return;
    }

    const newExpense = {
      description: this.description,
      amount: Number(this.amount),
      expense: this.expense,
    };

    this.onAddExpense.emit(newExpense);

    this.description = '';
    this.amount = 0;
    this.expense = true;
  }
}
