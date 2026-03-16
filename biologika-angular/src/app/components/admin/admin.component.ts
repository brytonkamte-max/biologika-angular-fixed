import { Component, inject, signal } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { NavigationService } from '../../services/navigation.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, DecimalPipe],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  auth = inject(AuthService);
  cart = inject(CartService);
  nav = inject(NavigationService);

  searchText = '';
  filterConsent = 'all';

  // Marketing modal state
  showMarketingModal = signal(false);
  selectedCustomer: User | null = null;
  marketingSubject = '';
  marketingMessage = '';
  attachmentType = 'catalog';
  attachmentName = 'Biologika_Catalogo_2024.pdf';

  get filteredUsers(): User[] {
    return this.auth.users().filter(u => {
      const matchSearch = !this.searchText ||
        u.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        u.email.toLowerCase().includes(this.searchText.toLowerCase());
      const matchConsent =
        this.filterConsent === 'all' ||
        (this.filterConsent === 'yes' && u.marketingConsent) ||
        (this.filterConsent === 'no' && !u.marketingConsent);
      return matchSearch && matchConsent;
    });
  }

  get totalRevenue(): number {
    return this.cart.orders().reduce((s, o) => s + o.total, 0);
  }

  get marketingOptIn(): number {
    return this.auth.users().filter(u => u.marketingConsent).length;
  }

  getOrderCount(userId: number): number {
    return this.cart.getOrdersByUser(userId).length;
  }

  getTotalSpent(userId: number): number {
    return this.cart.getOrdersByUser(userId).reduce((s, o) => s + o.total, 0);
  }

  openMarketing(user: User) {
    this.selectedCustomer = user;
    this.marketingSubject = '';
    this.marketingMessage = '';
    this.attachmentType = 'catalog';
    this.updateAttachmentName();
    this.showMarketingModal.set(true);
  }

  closeMarketing() {
    this.showMarketingModal.set(false);
  }

  updateAttachmentName() {
    const map: Record<string, string> = {
      catalog: 'Biologika_Catalogo_2024.pdf',
      offers: 'Biologika_Offerte_Speciali.pdf',
      brochure: 'Biologika_Brochure.pdf',
      newsletter: 'Biologika_Newsletter_Stagionale.pdf',
      custom: 'Documento_Personalizzato.pdf'
    };
    this.attachmentName = map[this.attachmentType] || 'documento.pdf';
  }

  sendMarketing() {
    if (!this.selectedCustomer) return;
    console.log('📧 INVIO COMUNICAZIONE MARKETING');
    console.log('Destinatario:', this.selectedCustomer.email);
    console.log('Oggetto:', this.marketingSubject);
    console.log('Messaggio:', this.marketingMessage);
    console.log('Allegato:', this.attachmentName);

    alert(`✅ Comunicazione inviata con successo!\n\n📧 Destinatario: ${this.selectedCustomer.name}\n📬 Email: ${this.selectedCustomer.email}\n📎 Allegato: ${this.attachmentName}\n\nIl cliente riceverà la comunicazione a breve.`);
    this.closeMarketing();
  }

  exportData() {
    const users = this.auth.users();
    const rows = [
      ['Nome', 'Email', 'Telefono', 'Città', 'CAP', 'Newsletter', 'Ordini', 'Totale Speso'],
      ...users.map(u => [
        u.name, u.email, u.phone, u.city, u.zip,
        u.marketingConsent ? 'Sì' : 'No',
        this.getOrderCount(u.id).toString(),
        '€' + this.getTotalSpent(u.id).toFixed(2)
      ])
    ];
    const csv = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'biologika_clienti.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  logout() {
    this.auth.logout();
    this.nav.navigate('home');
  }
}
