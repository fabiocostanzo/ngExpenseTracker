import { Component, Input } from '@angular/core';
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
  faTimes = faTimes;
}
