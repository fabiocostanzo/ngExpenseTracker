import { Injectable } from '@angular/core';
import { EXPENSES } from '../mock-expenses';
import { Expense } from '../Expense';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  constructor() {}

  getExpenses(): Observable<Expense[]> {
    const expenses = of(EXPENSES);
    return expenses;
  }
}
