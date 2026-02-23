# Elderly Voice Assistant

A web-based voice-controlled assistant designed to help elderly and digitally inexperienced users perform essential phone actions without complex navigation.

---

## 📌 Project Overview
The **Elderly Voice Assistant** is a lightweight, browser-based prototype that enables users to execute essential actions — such as calling family members, contacting emergency services, and managing medicine reminders — using simple voice commands.

**Focus Areas:**
- Accessibility  
- Simplicity  
- Digital inclusion  
- Respect for privacy & browser security limitations  

⚠️ This is a working prototype, not a full-scale AI assistant.

---

## 🎯 Core Features

### 🔹 Voice Commands
- Recognizes commands like:
  - `"Call son"`
  - `"Call emergency"`
  - `"Check medicine"`
- Provides instant voice feedback:
  - *“Calling your son now.”*  
  - *“I did not understand, please try again.”*

### 🔹 Emergency Support
- Opens the phone dialer with pre-configured emergency number.  
- Requires user confirmation (browser security compliance).  
- Designed to prevent accidental misdials.  

### 🔹 Family Communication (WhatsApp Integration)
- Opens native WhatsApp chat with pre-set contact.  
- Pre-fills phone number and message.  
- Automatic calling restricted by browser permissions (privacy-compliant).  

### 🔹 Medicine Reminders
- Add reminder time through simple form.  
- Alerts user via voice notification.  
- Reminders stored using **localStorage**.  
- Can be marked as taken or removed.  

### 🔹 Elderly-Friendly Interface
- Single-screen layout  
- Large buttons  
- High-contrast colors  
- Minimal interaction steps  
- Mobile responsive  

---

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Voice Processing:** Web Speech API (Speech Recognition & Speech Synthesis)  
- **Storage:** Browser localStorage  
- **Deployment:** GitHub Pages  

> No backend. No external data storage. No voice data retained.

---

## 👥 Prototype Validation (Real User Testing)

### Participants

| User | Age | Digital Familiarity | Evidence |
|------|-----|----------------------|----------|
| 1    | 60  | First-time internet user | [Full Demo Video](https://drive.google.com/file/d/1CqPNyc6q5aUFBKFO3usVPj-tii6qqXc0/view?usp=sharing) |
| 2    | 46  | Occasional phone user | [Validation Clip](https://drive.google.com/file/d/1escJwWZX4n_7QMlOmElKtd6uJOsIwwOl/view?usp=drive_link) |
| 3    | 38  | Limited experience with voice commands | [Validation Clip](https://drive.google.com/file/d/1H7PvYuLwdogI_OwWyHBAzXnrnJePSKNH/view?usp=drive_link) |


### Commands Tested
- `"Call son"`  
- `"Call emergency"`  
- `"Check medicine"`  
**Total commands tested:** 9  

### Results
- Voice recognition successfully detected commands.  
- Correct actions triggered (WhatsApp / Dialer opened).  
- Automatic calling blocked (expected browser security behavior).  
- Users interacted successfully without complex guidance.  

### Observations
- Even first-time internet users triggered commands successfully.  
- One-button interaction reduced confusion.  
- Voice feedback improved clarity for users unfamiliar with touch navigation.  

📂 Evidence:  
- Full demo video (User 1)  
- Short validation clips (User 2 & 3)  
- Available via Google Drive evidence folder  

---

## ⚠️ Limitations
- Automatic calls cannot be executed (browser security restrictions).  
- Works best on **mobile Chrome**.  
- Speech recognition accuracy depends on microphone clarity & environment.  
- Prototype only — not intended for medical or emergency-certified use.  

---

## 💡 Design Philosophy
This project prioritizes:
- Human dignity  
- Accessibility over complexity  
- Ethical constraints over automation  
- Simplicity over feature overload  

> The goal is not to build another AI assistant — but to demonstrate how simplified voice-triggered actions can improve digital accessibility for elderly users.

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
- Hosted on **GitHub Pages**  
- Optimized for mobile browsers (**Chrome recommended**)  

---

## 🏷️ Topics
`accessibility` `voice-assistant` `web-app` `elderly-tech` `digital-inclusion`  
`emergency-calls` `whatsapp-integration` `medicine-reminders`
