import { Injectable } from '@angular/core';
import { Expense } from '../Expense';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

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

  updateExpense(expense: Expense): Observable<Expense> {
    return this.http.put<Expense>(
      `${this.apiUrl}/${expense.id}`,
      expense,
      httpOptions
    );
  }

  addExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.apiUrl, expense, httpOptions);
  }
}
