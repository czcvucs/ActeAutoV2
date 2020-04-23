import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActeService {

  constructor(private httpService: HttpClient) { }

  public Get(): Observable<any> {
    return this.httpService.get<any>(`http://localhost:57013/weatherforecast`);
  }
}
