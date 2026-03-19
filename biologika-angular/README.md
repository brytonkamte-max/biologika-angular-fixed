<div align="center">

# 🌿 Biologika Angular

**E-commerce biologico moderno — da sito statico a Single Page Application**

![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

</div>

---

## 📖 Descrizione

**Biologika Angular** è un'applicazione e-commerce per prodotti biologici, sviluppata con **Angular 17** e un'architettura a componenti standalone. Il progetto nasce dalla migrazione e l'evoluzione di un sito statico HTML verso una web app dinamica, interattiva e completamente responsiva.

---

## 🚀 Avvio rapido

### Prerequisiti

- Node.js ≥ 18
- npm ≥ 9
- Angular CLI 17

### Installazione

```bash
# 1. Clona il repository
git clone https://github.com/tuo-username/biologika-angular.git
cd biologika-angular

# 2. Installa le dipendenze
npm install

# 3. Avvia il server di sviluppo
npm start
```

> 👉 Apri il browser su **[http://localhost:4200](http://localhost:4200)**

### Build di produzione

```bash
npm run build
```

> Output disponibile in: `dist/biologika-angular/`

---

## 🛠️ Stack tecnologico

| Tecnologia | Utilizzo |
|---|---|
| **Angular 17** | Framework principale — Standalone Components, Signals |
| **TypeScript** | Tipizzazione statica e sviluppo robusto |
| **RxJS** | Gestione flussi asincroni (uso minimale e mirato) |
| **CSS3 / CSS Variables** | Stile responsive e theming dinamico |
| **LocalStorage** | Persistenza dati lato client |

---

## ✨ Funzionalità

### 🔐 Autenticazione
- Registrazione e login utenti
- Gestione ruoli: **utente** / **admin**
- Stato utente persistente tra le sessioni

### 🛒 E-commerce
- Catalogo prodotti dinamico e navigabile
- Carrello con aggiornamento in tempo reale tramite **Angular Signals**
- Checkout simulato con **sconto automatico** al primo ordine

### 👤 Dashboard Utente
- Visualizzazione e modifica del profilo
- Storico ordini completo

### ⚙️ Pannello Admin
- Gestione utenti registrati
- Visualizzazione e filtraggio degli ordini
- Statistiche e dashboard dati
- **Esportazione dati in CSV**

### 🎯 Funzionalità avanzate
- Popup marketing e promozioni dinamiche
- Sistema lotteria + mini gioco interattivo
- Design completamente responsive

---

## 📁 Struttura del progetto

```
src/app/
├── models/          # Interfacce dati (Product, User, Order)
├── services/        # Logica applicativa (auth, cart, prodotti)
├── components/      # UI (header, dashboard, admin, modals)
└── app.component    # Root component
```

> Le immagini dei prodotti sono gestite in `src/assets/img/`

---

## 🔑 Accesso Admin

Per testare il pannello di amministrazione, usa le seguenti credenziali:

| Campo | Valore |
|---|---|
| **Email** | `admin@biologika.it` |
| **Password** | `admin123` |

---

## 🎯 Obiettivi del progetto

Questo progetto è stato realizzato per:

- ✅ Applicare i concetti del **frontend moderno** con Angular 17
- ✅ Implementare logiche **e-commerce complete** lato client
- ✅ Migrare un sito statico in una **Single Page Application (SPA)**
- ✅ Esplorare pattern avanzati come **Signals** e **Standalone Components**

---

## 👨‍💻 Autore

Progetto sviluppato come esercizio pratico per consolidare competenze in **Angular**, sviluppo frontend e architetture web moderne.

---

<div align="center">

*Fatto con 🌿 e tanta voglia di imparare*

</div>
