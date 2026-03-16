# 🌿 Biologika Angular

E-commerce biologico convertito da HTML a **Angular 17** con componenti standalone.

## 🚀 Avvio rapido

```bash
# 1. Installa le dipendenze
npm install

# 2. Avvia il server di sviluppo
npm start
```

Apri il browser su `http://localhost:4200`

---

## 📁 Struttura progetto

```
src/app/
├── models/
│   ├── product.model.ts      # Interfaccia Product
│   ├── user.model.ts         # Interfaccia User
│   └── order.model.ts        # Interfacce Order e CartItem
│
├── services/
│   ├── auth.service.ts       # Login, registrazione, stato utente
│   ├── cart.service.ts       # Carrello e ordini
│   ├── product.service.ts    # Lista prodotti
│   └── navigation.service.ts # Navigazione tra viste
│
├── components/
│   ├── header/               # Barra di navigazione
│   ├── hero/                 # Carousel + features + titolo
│   ├── products/             # Griglia prodotti
│   ├── dashboard/            # Profilo utente + storico ordini
│   ├── admin/                # Pannello admin con tabella clienti
│   ├── footer/               # Piè di pagina
│   └── modals/
│       ├── auth-modal/       # Login e registrazione
│       ├── cart-modal/       # Carrello + checkout
│       ├── ad-modal/         # Popup offerta stagionale
│       ├── lottery-modal/    # Info lotteria (home + invito)
│       └── game-modal/       # Gioco delle 3 carte
│
└── app.component.*           # Root component
```

---

## 🔑 Credenziali admin

| Campo    | Valore              |
|----------|---------------------|
| Email    | admin@biologika.it  |
| Password | admin123            |

---

## 🖼️ Immagini prodotti

Inserisci le immagini originali nella cartella `src/assets/img/`:

| File           | Prodotto                    |
|----------------|-----------------------------|
| popooo.png     | Olio Extra Vergine D.O.P.   |
| vinoo.png      | Vino Rosso Riserva Bio      |
| mielle.png     | Miele Millefiori Italiano   |
| popoo.png      | Confetture Bio Assortite    |
| popo.png       | Confetture Artigianali Mix  |
| bobo.png       | Salsa/Crema Bio             |

---

## ✨ Funzionalità

- 🔐 Autenticazione (login / registrazione / admin)
- 🛒 Carrello con aggiornamento in tempo reale (Angular Signals)
- 💰 Sconto 5% automatico al primo ordine
- 📊 Pannello admin con statistiche, filtri, esportazione CSV
- 📧 Invio comunicazioni marketing (simulato)
- 🎰 Popup lotteria + gioco delle 3 carte (attivato con ordine ≥ €70)
- 💾 Persistenza dati tramite `localStorage`
- 📱 Design responsive

---

## 🛠️ Tecnologie

- **Angular 17** – Standalone components, Signals, `@if`, `@for`, `@switch`
- **TypeScript 5.2**
- **RxJS** (minimo, preferiti i Signals)
- **CSS Variables** – Sistema di design coerente con l'originale

---

## 📦 Build di produzione

```bash
npm run build
```

I file compilati saranno in `dist/biologika-angular/`.
