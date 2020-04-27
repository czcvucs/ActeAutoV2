import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SelectedDocsService {

  private currentSelected: BehaviorSubject<string[]> = new BehaviorSubject(['']);
  currentSelected$: Observable<string[]> = this.currentSelected.asObservable();

  constructor() {
  }

  public setCurrentSelected(value: string[]): void {
    this.currentSelected.next(value);
  }
}
