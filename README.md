# Elderly Voice Assistant

A **web-based voice-controlled assistant** designed to help elderly and digitally inexperienced users perform essential phone actions **without complex navigation**.

---

## 📌 Project Overview

The Elderly Voice Assistant is a **lightweight, browser-based prototype** that enables users to execute essential actions—such as calling family members, contacting emergency services, and managing medicine reminders—using **simple voice commands**.

**Focus Areas:**
- Accessibility
- Simplicity
- Digital inclusion
- Respect for privacy & browser security limitations

⚠️ **Note:** This is a **working prototype**, not a full-scale AI assistant.

---

## 🎯 Core Features

### 🔹 Voice Commands
- Recognizes commands like:
  - `"Call son"`
  - `"Call emergency"`
  - `"Check medicine"`
- Provides instant voice feedback:
  - “Calling your son now.”
  - “I did not understand, please try again.”

### 🔹 Emergency Support (Updated)
- Opens phone dialer with **pre-configured emergency number**.
- **Requires voice confirmation** to prevent accidental calls.
- Designed for **clarity and safety**.

### 🔹 Family Communication (WhatsApp Integration)
- Opens native WhatsApp chat with pre-set contact.
- Pre-fills phone number and message.
- Automatic calling is restricted for **privacy compliance**.

### 🔹 Medicine Reminders (Updated)
- Add reminders using a simple form.
- Alerts user via voice notification.
- **Snooze feature** allows delayed reminders without canceling.
- Reminders stored in `localStorage`.
- Can be marked as taken or removed.

### 🔹 Elderly-Friendly Interface
- Single-screen layout
- Large buttons and **high-contrast colors**
- Minimal interaction steps
- Mobile responsive
- **Optional features:** larger text, simplified voice feedback, one-tap repeat last action

---

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Voice Processing:** Web Speech API (Speech Recognition & Speech Synthesis)  
- **Storage:** Browser `localStorage`  
- **Deployment:** GitHub Pages  
- **Privacy:** No backend. No external data storage. No voice data retained.

---

## 👥 Prototype Validation (Real User Testing)

### Participants

| User | Age | Digital Familiarity | Evidence |
|------|-----|----------------------|----------|
| 1    | 60  | First-time internet user | [Full Demo Video](https://drive.google.com/file/d/1CqPNyc6q5aUFBKFO3usVPj-tii6qqXc0/view?usp=sharing) |
| 2    | 46  | Occasional phone user | [Validation Clip](https://drive.google.com/file/d/1escJwWZX4n_7QMlOmElKtd6uJOsIwwOl/view?usp=drive_link) |
| 3    | 38  | Limited experience with voice commands | [Validation Clip](https://drive.google.com/file/d/1H7PvYuLwdogI_OwWyHBAzXnrnJePSKNH/view?usp=drive_link) |


**Commands Tested:**  
- `"Call son"`  
- `"Call emergency"`  
- `"Check medicine"`  

**Results:**
- Voice recognition successfully detected commands.
- Correct actions triggered (WhatsApp / Dialer opened).
- Automatic calling blocked (browser security behavior as expected).
- Users interacted successfully without complex guidance.

**Observations:**
- First-time internet users triggered commands successfully.
- One-button interaction reduces confusion.
- Voice feedback improved clarity for users unfamiliar with touch navigation.
- Snooze respected real-life behavior: users could delay medicine instead of cancelling.
- Emergency confirmation prevented panic during accidental triggers.

---

## 💡 Design Philosophy

This project prioritizes:
- **Human dignity** over strict compliance
- **Accessibility** over complexity
- **Ethical constraints** over automation
- **Simplicity** over feature overload

> The goal isn’t to build another AI assistant—but to demonstrate **how simplified, voice-triggered actions can improve digital accessibility for elderly users**.

---

## 👨‍💻 Skills Demonstrated
- User-centered design
- Accessibility-first UI thinking
- Voice interface implementation
- Real-user validation & testing
- Understanding of browser security & privacy constraints
- Frontend development (HTML/CSS/JavaScript)
- Structured documentation & evaluation

---

## 🌐 Deployment
- Hosted on GitHub Pages
- Optimized for mobile browsers (Chrome recommended)

---

## 🏷️ Topics
`accessibility`, `voice-assistant`, `web-app`, `elderly-tech`, `digital-inclusion`, `emergency-calls`, `whatsapp-integration`, `medicine-reminders`

---

## 📂 Evidence
- Full demo video (User 1)  
- Short validation clips  
- Available via Google Drive evidence folder
