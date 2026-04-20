# CV - Jakub Górecki (Zadanie 6)

> - **Zadanie 6:** Dane z JSON   
>  - **Przedmiot:** Projektowanie multimedialnych stron internetowych  
> - **Uczelnia:** Akademia Finansów i Biznesu Vistula  
> - **Numer indeksu:** 68358

## 🔗 Linki

- 📁 **Repozytorium projektowe:** 
[https://github.com/GoreckiJakub68358/zad4-8_javascript_projekt](https://github.com/GoreckiJakub68358/zad4-8_javascript_projekt)

- 🌐 **GitHub Pages:** 
[https://goreckijakub68358.github.io/zad4-8_javascript-zadania/zad6/index.html](https://goreckijakub68358.github.io/zad4-8_javascript-zadania/zad6/index.html)

## 📋 Opis zadania

Celem zadania jest oddzielenie danych od widoku i pierwsze dynamiczne budowanie HTML przez JavaScript.


## ✅ Wymagania techniczne (Zadanie 6)

- [x] dane strony umieszczone w osobnym pliku JSON
- [x] JavaScript odczytuje dane i generuje na ich podstawie elementy HTML
- [x] co najmniej dwie listy generowane dynamicznie, np. umiejętności i projekty
- [x] brak ręcznego wpisywania tych danych bezpośrednio w HTML
- [x] dane mają być pobierane za pomocą `fetch()`

## 📂 Struktura plików (Zadanie 6)

- `data.json` – plik zawierający dane przeznaczone do dynamicznego generowania HTML. 
- `index.html` – struktura CV z przyciskami interakcji.
- `script.js` – logika JavaScript.
- `red.css` – motyw czerwony (domyślny).
- `green.css` – motyw zielony.
- `moje-zdjecie.jpg` – zdjęcie profilowe.

## 📝 Changelog (Zadanie 6)

### v5.0 – Utworzenie pliku `data.json`
- utworzenie pliku JSON z danymi CV.

### v5.1 - Usunięcie statycznych danych z HTML
- zamiana danych statycznych (zawartych w HTML) na dynamiczne (zmieniane przez plik JSON).

### v5.2 - Implementacja Fetch API
- Implementacja Fetch API do dynamicznego ładowania list.