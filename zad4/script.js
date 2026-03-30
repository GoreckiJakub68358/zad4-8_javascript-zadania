// NR_INDEKSU: 68358

// === ZMIANA MOTYWU ===
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

// === UKRYWANIE SEKCJI PROJEKTY ===
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