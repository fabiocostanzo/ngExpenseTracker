import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Expense } from '../../Expense';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-expense-item',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './expense-item.component.html',
  styleUrl: './expense-item.component.css',
})
export class ExpenseItemComponent {
  @Input() expense!: Expense;
  @Output() onDeleteExpense: EventEmitter<Expense> = new EventEmitter();
  faTimes = faTimes;

  onDelete(expense: Expense) {
    this.onDeleteExpense.emit(expense);
  }
}
