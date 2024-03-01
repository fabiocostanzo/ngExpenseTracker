import { Injectable } from '@angular/core';
import { Expense } from '../Expense';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private apiUrl = 'http://localhost:5000/expenses';

  constructor(private http: HttpClient) {}

  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.apiUrl);
  }

  deleteExpense(expense: Expense): Observable<Expense> {
    return this.http.delete<Expense>(`${this.apiUrl}/${expense.id}`);
  }
}
