# CV – Jakub Górecki (Zadanie 4)

> **Zadanie 4:** Interakcja (JavaScript)  
> **Przedmiot:** Projektowanie multimedialnych stron internetowych  
> **Uczelnia:** Akademia Finansów i Biznesu Vistula  
> **Numer indeksu:** 68358

## 🔗 Linki

- 📁 Repozytorium projektowe: [https://github.com/GoreckiJakub68358/zad4-8_javascript_projekt](https://github.com/GoreckiJakub68358/zad4-8_javascript_projekt)
- 🌐 GitHub Pages: [LINK_DO_GITHUB_PAGES]

## 📋 Opis zadania

Celem zadania było dodanie pierwszej warstwy interaktywnej do strony CV przy użyciu języka JavaScript. Strona reaguje na działania użytkownika bez konieczności przeładowania.

## ✅ Wymagania techniczne (Zadanie 4)

- [x] **Podłączenie skryptu:** Plik `script.js` jest poprawnie podłączony do dokumentu HTML.
- [x] **Zmiana motywu (JS):** Przycisk umożliwia dynamiczną zmianę między motywem `red.css` a `green.css`.
- [x] **Ukrywanie sekcji (JS):** Dodano funkcjonalność ukrywania i pokazywania sekcji "Projekty".
- [x] **Brak błędów:** Konsola przeglądarki nie wykazuje żadnych błędów podczas działania skryptu.
- [x] **Numer indeksu:** Numer 68358 znajduje się w kodzie, na stronie oraz w commitach.

## 📂 Struktura plików (zad4)

- `index.html` – struktura CV z przyciskami interakcji.
- `script.js` – logika JavaScript (obsługa zdarzeń click).
- `red.css` – motyw czerwony (domyślny).
- `green.css` – motyw zielony.
- `moje-zdjecie.jpg` – zdjęcie profilowe.

## 🎨 Porównanie motywów i interakcji

| Cecha | Motyw Czerwony (`red.css`) | Motyw Zielony (`green.css`) |
| :--- | :--- | :--- |
| **Kolor główny** | `#c0392b` (Crimson Red) | `#2e8b57` (SeaGreen) |
| **Typografia** | Segoe UI (Bezszeryfowa) | Georgia (Szeryfowa) |
| **Przycisk motywu** | Czerwone obramowanie + cień | Zielone obramowanie + skala |
| **Efekt najechania** | Skalowanie (`scale 1.03`) | Podniesienie (`translateY -5px`) |
| **Interakcja JS 1** | Przełącznik motywów (Dynamiczny href) | Przełącznik motywów (Dynamiczny href) |
| **Interakcja JS 2** | Ukrywanie listy projektów | Ukrywanie listy projektów |

## 📝 Changelog (Zadanie 4)

### v3.0 – Integracja JavaScript
- Dodanie pliku `script.js` i powiązanie go z elementami DOM.
- Implementacja funkcji `toggleTheme()` zmieniającej atrybut `href` arkusza stylów.

### v3.1 – Widoczność Sekcji
- Dodanie przycisku "Ukryj/Pokaż" do sekcji Projekty.
- Implementacja logiki zmiany `display: none/block` w JavaScript.
