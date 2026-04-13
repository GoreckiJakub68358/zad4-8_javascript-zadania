// NR_INDEKSU: 68358

// === ZADANIE 4 - ZMIANA MOTYWU ===
const themeStylesheet = document.getElementById('theme-stylesheet');
const themeToggleBtn = document.getElementById('theme-toggle');

let currentTheme = 'red';

function toggleTheme() {
    if (currentTheme === 'red') {
        themeStylesheet.setAttribute('href', 'green.css');
        themeToggleBtn.textContent = '🔴 Przełącz na motyw czerwony';
        currentTheme = 'green';
    } else {
        themeStylesheet.setAttribute('href', 'red.css');
        themeToggleBtn.textContent = '🌿 Przełącz na motyw zielony';
        currentTheme = 'red';
    }
}

themeToggleBtn.addEventListener('click', toggleTheme);

// === ZADANIE 4 - UKRYWANIE SEKCJI PROJEKTY ===
const toggleProjektyBtn = document.getElementById('toggle-projekty');
const projektyLista = document.getElementById('projekty-lista');

function toggleProjekty() {
    const isHidden = projektyLista.style.display === 'none';

    if (isHidden) {
        projektyLista.style.display = 'block';
        toggleProjektyBtn.textContent = 'Ukryj';
    } else {
        projektyLista.style.display = 'none';
        toggleProjektyBtn.textContent = 'Pokaż';
    }
}

toggleProjektyBtn.addEventListener('click', toggleProjekty);

// === ZADANIE 5 - WALIDACJA FORMULARZA ===
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Zatrzymujemy wysyłkę strony
    
    let isValid = true;

    // Pobieramy pola i kontenery błędów
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Funkcja pomocnicza do wyświetlania błędów
    function showError(input, message) {
        const errorSpan = document.getElementById(`${input.id}-error`);
        errorSpan.textContent = message;
        input.style.borderColor = '#c0392b';
        isValid = false;
    }

    // Czyszczenie poprzednich błędów
    document.querySelectorAll('.error-message').forEach(span => span.textContent = '');
    document.querySelectorAll('input, textarea').forEach(el => el.style.borderColor = '#ccc');
    formSuccess.style.display = 'none';

    // 1. Walidacja Imienia (brak cyfr, niepuste)
    const nameRegex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/;
    if (!firstName.value.trim()) {
        showError(firstName, 'Imię jest wymagane.');
    } else if (!nameRegex.test(firstName.value)) {
        showError(firstName, 'Imię nie może zawierać cyfr ani znaków specjalnych.');
    }

    // 2. Walidacja Nazwiska (brak cyfr, niepuste)
    if (!lastName.value.trim()) {
        showError(lastName, 'Nazwisko jest wymagane.');
    } else if (!nameRegex.test(lastName.value)) {
        showError(lastName, 'Nazwisko nie może zawierać cyfr.');
    }

    // 3. Walidacja E-mail (regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        showError(email, 'E-mail jest wymagany.');
    } else if (!emailRegex.test(email.value)) {
        showError(email, 'Wprowadź poprawny adres e-mail.');
    }

    // 4. Walidacja Wiadomości
    if (!message.value.trim()) {
        showError(message, 'Wiadomość nie może być pusta.');
    }

    // Jeśli wszystko OK
    if (isValid) {
        formSuccess.style.display = 'block';
        contactForm.reset(); // Czyścimy formularz
        console.log('Formularz wysłany pomyślnie!');
    }
});