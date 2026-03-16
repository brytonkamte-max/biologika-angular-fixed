import { Injectable, signal } from '@angular/core';

export type AppView = 'home' | 'dashboard' | 'admin';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private _currentView = signal<AppView>('home');
  readonly currentView = this._currentView.asReadonly();

  navigate(view: AppView) {
    this._currentView.set(view);
    window.scrollTo(0, 0);
  }
}
