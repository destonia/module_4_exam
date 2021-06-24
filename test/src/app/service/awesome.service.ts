import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Awesome } from '../awesome';

const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class AwesomeService {

  constructor(private http: HttpClient) { }
  
  getAll(): Observable<Awesome[]> {
    return this.http.get<Awesome[]>(API_URL + '/awesomes');
  }

  findById(id: number): Observable<Awesome> {
    return this.http.get<Awesome>(`${API_URL}/awesomes/${id}`);
  }

  updateAwesome(id: number, awesome: Awesome[]): Observable<Awesome> {
    return this.http.put<Awesome>(`${API_URL}/awesomes/${id}`, awesome);
  }

  deleteAwesome(id: number): Observable<Awesome> {
    return this.http.delete<Awesome>(`${API_URL}/awesomes/${id}`);
  }
}
