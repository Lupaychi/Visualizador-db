import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3001'; // Match your backend port

  constructor(private http: HttpClient) { }

  obtenerSaludo(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/saludo`);
  }
}
