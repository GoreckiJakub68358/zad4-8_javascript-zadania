# CV - Jakub Górecki (Zadanie 8)

> - **Zadanie 8:** Backend
>  - **Przedmiot:** Projektowanie multimedialnych stron internetowych  
> - **Uczelnia:** Akademia Finansów i Biznesu Vistula  

## 🔗 Linki

- 📁 **Repozytorium projektowe:** 
[https://github.com/GoreckiJakub68358/zad4-8_javascript_projekt](https://github.com/GoreckiJakub68358/zad4-8_javascript_projekt)

- 🌐 **GitHub Pages:** 
[https://goreckijakub68358.github.io/zad4-8_javascript-zadania/zad7/index.html](https://goreckijakub68358.github.io/zad4-8_javascript-zadania/zad7/index.html)

## 📋 Opis zadania

Celem zadania jest wprowadzenie do komunikacji frontendu z serwerem i zapisu danych poza
przeglądarką.

## ✅ Wymagania techniczne (Zadanie 8)

- [x] Wysłanie danych formularza metodą `POST`
- [x] Zapis danych poza przeglądarką użytkownika
- [x] Odczyt danych po odświeżeniu strony
- [x] Krótkie pokazanie w wideo, gdzie dane trafiają
- [x] widoczne działanie funkcji na stronie

## 📂 Struktura plików (Zadanie 8)

- `data.json` – plik zawierający dane przeznaczone do dynamicznego generowania HTML. 
- `index.html` – struktura CV z przyciskami interakcji.
- `script.js` – logika JavaScript.
- `red.css` – motyw czerwony (domyślny).
- `green.css` – motyw zielony.
- `moje-zdjecie.jpg` – zdjęcie profilowe.

## 📝 Changelog (Zadanie 8)

### v7.0 – Konfriguracja endpointu backendu (FormSpree)
- Podpięcie formularza kontaktowego pod FormSpree.

### v7.1 - Implementacja wysylki formularza metoda POST przez fetch
- Zaimplementowano asynchroniczną wysyłkę formularza (metoda `POST`) przy użyciu `fetch` i `FormData`.

### v7.2 - Dodanie potwierdzenia wysylki danych z serwera
- Wdrożenie potwierdzenia dostarczenia wysyłanych danych.