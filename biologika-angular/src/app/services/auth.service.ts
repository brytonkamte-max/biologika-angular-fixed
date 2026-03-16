import { Injectable, signal, computed } from '@angular/core';
import { User } from '../models/user.model';

const ADMIN_EMAIL = 'admin@biologika.it';
const ADMIN_PASSWORD = 'admin123';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _users = signal<User[]>(this.loadUsers());
  private _currentUser = signal<User | null>(this.loadCurrentUser());

  readonly currentUser = this._currentUser.asReadonly();
  readonly users = this._users.asReadonly();
  readonly isLoggedIn = computed(() => this._currentUser() !== null);
  readonly isAdmin = computed(() => this._currentUser()?.isAdmin === true);

  private loadUsers(): User[] {
    const stored = localStorage.getItem('biologika_users');
    return stored ? JSON.parse(stored) : [];
  }

  private loadCurrentUser(): User | null {
    const stored = localStorage.getItem('biologika_current_user');
    return stored ? JSON.parse(stored) : null;
  }

  private saveUsers(users: User[]) {
    this._users.set(users);
    localStorage.setItem('biologika_users', JSON.stringify(users));
  }

  login(email: string, password: string): { success: boolean; message: string } {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const admin: User = {
        id: 0,
        name: 'Amministratore',
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
        phone: '',
        address: '',
        city: '',
        zip: '',
        marketingConsent: false,
        firstOrder: false,
        registrationDate: '',
        isAdmin: true
      };
      this._currentUser.set(admin);
      localStorage.setItem('biologika_current_user', JSON.stringify(admin));
      return { success: true, message: '👨‍💼 Accesso amministratore effettuato con successo!' };
    }

    const user = this._users().find(u => u.email === email && u.password === password);
    if (user) {
      this._currentUser.set(user);
      localStorage.setItem('biologika_current_user', JSON.stringify(user));
      return { success: true, message: `👋 Bentornato, ${user.name.split(' ')[0]}!` };
    }

    return { success: false, message: '⚠️ Credenziali non valide. Riprova.' };
  }

  register(userData: Omit<User, 'id' | 'registrationDate' | 'firstOrder' | 'isAdmin'>): { success: boolean; message: string } {
    if (this._users().find(u => u.email === userData.email)) {
      return { success: false, message: '⚠️ Email già registrata. Effettua il login.' };
    }

    const newUser: User = {
      ...userData,
      id: Date.now(),
      registrationDate: new Date().toISOString(),
      firstOrder: true
    };

    const updated = [...this._users(), newUser];
    this.saveUsers(updated);
    this._currentUser.set(newUser);
    localStorage.setItem('biologika_current_user', JSON.stringify(newUser));

    return {
      success: true,
      message: `🎉 Registrazione completata! Benvenuto, ${newUser.name.split(' ')[0]}!\n\nRiceverai il 5% di sconto sul primo ordine.`
    };
  }

  logout() {
    this._currentUser.set(null);
    localStorage.removeItem('biologika_current_user');
  }

  updateMarketingConsent(consent: boolean) {
    const user = this._currentUser();
    if (!user || user.isAdmin) return;

    const updated = { ...user, marketingConsent: consent };
    this._currentUser.set(updated);
    localStorage.setItem('biologika_current_user', JSON.stringify(updated));

    const users = this._users().map(u => u.id === user.id ? updated : u);
    this.saveUsers(users);
  }

  markFirstOrderUsed() {
    const user = this._currentUser();
    if (!user || user.isAdmin) return;

    const updated = { ...user, firstOrder: false };
    this._currentUser.set(updated);
    localStorage.setItem('biologika_current_user', JSON.stringify(updated));

    const users = this._users().map(u => u.id === user.id ? updated : u);
    this.saveUsers(users);
  }
}
