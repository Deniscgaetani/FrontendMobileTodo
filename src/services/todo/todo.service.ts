import { Ticket } from './../../models/ticket.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TodoService {

  private serviceUrl = `http://localhost:8080/api/v1/ticket`;

  constructor(private http: HttpClient) {
  }

  post(ticket: Ticket): Observable<Ticket> {
      return this.http.post<Ticket>(this.serviceUrl, ticket);
    }

  listAll(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.serviceUrl);
  }

  delete(ticket_id: string): Observable<Ticket> {
    return this.http.delete<Ticket>(this.serviceUrl + '/' + ticket_id);
  }

}
