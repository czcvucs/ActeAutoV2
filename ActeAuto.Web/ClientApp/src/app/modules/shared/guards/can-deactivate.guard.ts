import { Injectable, HostListener } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export abstract class ComponentCanDeactivate {

  abstract canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): any {
    if ($event.eventPhase === 2) {
      return false;
    }
    if (!this.canDeactivate()) {
      $event.returnValue = true;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(component: ComponentCanDeactivate): boolean | Observable<boolean> | Promise<boolean> {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
