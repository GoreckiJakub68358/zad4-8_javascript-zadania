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

// === ZADANIE 5 + 8 - WALIDACJA I WYSYŁKA DO BACKENDU ===
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    function showError(input, msg) {
        const errorSpan = document.getElementById(`${input.id}-error`);
        errorSpan.textContent = msg;
        input.style.borderColor = '#c0392b';
        isValid = false;
    }

    // Czyszczenie poprzednich błędów
    document.querySelectorAll('.error-message').forEach(span => span.textContent = '');
    document.querySelectorAll('input, textarea').forEach(el => el.style.borderColor = '#ccc');
    formSuccess.style.display = 'none';

    // Walidacja
    const nameRegex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s-]+$/;
    if (!firstName.value.trim()) {
        showError(firstName, 'Imię jest wymagane.');
    } else if (!nameRegex.test(firstName.value)) {
        showError(firstName, 'Imię nie może zawierać cyfr ani znaków specjalnych.');
    }

    if (!lastName.value.trim()) {
        showError(lastName, 'Nazwisko jest wymagane.');
    } else if (!nameRegex.test(lastName.value)) {
        showError(lastName, 'Nazwisko nie może zawierać cyfr.');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        showError(email, 'E-mail jest wymagany.');
    } else if (!emailRegex.test(email.value)) {
        showError(email, 'Wprowadź poprawny adres e-mail.');
    }

    if (!message.value.trim()) {
        showError(message, 'Wiadomość nie może być pusta.');
    }

    // === ZADANIE 8 - Wysyłka do Formspree (tylko jeśli walidacja OK) ===
    if (isValid) {
        const formData = new FormData(contactForm);
        const endpoint = "https://formspree.io/f/mgopkqer";

        const submitBtn = document.getElementById('submit-btn');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = "Wysyłanie...";
        submitBtn.disabled = true;

        fetch(endpoint, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                formSuccess.style.display = 'block';
                formSuccess.textContent = "✅ Wiadomość została wysłana do backendu (Formspree)!";
                formSuccess.style.color = "#2e8b57";
                contactForm.reset();
            } else {
                throw new Error('Błąd serwera');
            }
        })
        .catch(error => {
            formSuccess.style.display = 'block';
            formSuccess.textContent = "❌ Wystąpił błąd podczas wysyłki do serwera.";
            formSuccess.style.color = "#c0392b";
        })
        .finally(() => {
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        });
    }
});

// === ZADANIE 6 - DANE Z JSON (FETCH API) ===

async function loadData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error('Błąd podczas pobierania danych JSON');
        
        const data = await response.json();

        // 1. Generowanie listy umiejętności
        const umiejetnosciLista = document.getElementById('umiejetnosci-lista');
        umiejetnosciLista.innerHTML = ''; // Czyścimy "Ładowanie danych..."

        data.umiejetnosci.forEach(skill => {
            const li = document.createElement('li');
            li.className = 'section-element';
            li.textContent = skill;
            umiejetnosciLista.appendChild(li);
        });

        // 2. Generowanie listy projektów
        const projektyLista = document.getElementById('projekty-lista');
        projektyLista.innerHTML = ''; // Czyścimy "Ładowanie danych..."

        data.projekty.forEach(proj => {
            const li = document.createElement('li');
            li.className = 'section-element';
            li.innerHTML = `<strong>${proj.tytul}:</strong><br>${proj.opis}`;
            projektyLista.appendChild(li);
        });

        console.log('Dane z JSON załadowane pomyślnie dla indeksu:', data.nr_indeksu);

    } catch (error) {
        console.error('Błąd:', error);
        document.getElementById('umiejetnosci-lista').innerHTML = '<li>Nie udało się załadować danych.</li>';
    }
}

// Wywołujemy funkcję przy starcie strony
loadData();

// === ZADANIE 7 - LOCAL STORAGE (NOTATKI) ===

const noteInput = document.getElementById('note-input');
const addNoteBtn = document.getElementById('add-note-btn');
const notesList = document.getElementById('notes-list');

// 1. Funkcja wyświetlająca notatki na stronie
function displayNotes() {
    const notes = JSON.parse(localStorage.getItem('userNotes')) || [];
    notesList.innerHTML = ''; // Czyścimy listę przed ponownym renderowaniem

    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.className = 'section-element';
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.alignItems = 'center';
        
        li.innerHTML = `
            <span>${note}</span>
            <button 
                onclick="deleteNote(${index})"
                class="delete-note-btn">
                Usuń
            </button>
        `;
        notesList.appendChild(li);
    });
}

// 2. Funkcja dodająca nową notatkę
addNoteBtn.addEventListener('click', () => {
    const newNote = noteInput.value.trim();
    if (newNote) {
        const notes = JSON.parse(localStorage.getItem('userNotes')) || [];
        notes.push(newNote);
        localStorage.setItem('userNotes', JSON.stringify(notes));
        noteInput.value = ''; // Czyścimy input
        displayNotes(); // Odświeżamy widok
    }
});

// 3. Funkcja usuwająca notatkę
window.deleteNote = function(index) {
    const notes = JSON.parse(localStorage.getItem('userNotes')) || [];
    notes.splice(index, 1); // Usuwamy element o danym indeksie
    localStorage.setItem('userNotes', JSON.stringify(notes));
    displayNotes(); // Odświeżamy widok
};

// 4. Ładujemy notatki przy starcie strony
displayNotes();