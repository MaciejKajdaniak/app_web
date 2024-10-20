const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(path.join(__dirname, 'static')));

app.use(express.urlencoded({ extended: true }));

function render(h, tekst) {
    return `<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moja Strona</title>
    <link rel="stylesheet" href="/static/style.css">
</head>
<body>
    <nav>
        <ul>
            <li><a href="/">Strona główna</a></li>
            <li><a href="/o-nas">O nas</a></li>
            <li><a href="/oferta">Oferta</a></li>
            <li><a href="/kontakt">Kontakt</a></li>
        </ul>
    </nav>

    <main>
        <h1>${h}</h1>
        ${tekst}
    </main>

    <footer>
        <p>Imię i Nazwisko: Maciej Kajdaniak</p>
        <p>Klasa: 4c</p>
    </footer>
</body>
</html>`;
}

// Strona główna
app.get('/', (req, res) => {
    const content = `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.</p>
    `;
    res.send(render("Strona główna", content));
});

// Strona "O nas"
app.get('/o-nas', (req, res) => {
    const content = `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p><b>MoJe ulubione, bliskie sercu, ukochane pomoce naukowe:</b></p>
        <div class="slider">
            <img src="/static/image1.jpg" alt="Zdjęcie 1" />
            <img src="/static/image2.jpg" alt="Zdjęcie 2" />
            <img src="/static/image3.jpg" alt="Zdjęcie 3" />
        </div>
    `;
    res.send(render("O firmie", content));
});

// Strona "Oferta"
app.get('/oferta', (req, res) => {
    const content = `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.</p>
        <p>Oferujemy szeroki wachlarz usług IT, od doradztwa technicznego po implementację złożonych systemów.</p>
        <table>
            <tr>
                <th>Usługa</th>
                <th>Cena</th>
            </tr>
            <tr>
                <td>Tworzenie stron internetowych</td>
                <td>2000 PLN</td>
            </tr>
            <tr>
                <td>Administracja serwerami</td>
                <td>1500 PLN miesięcznie</td>
            </tr>
            <tr>
                <td>Audyt bezpieczeństwa</td>
                <td>3000 PLN</td>
            </tr>
        </table>
    `;
    res.send(render("Oferta", content));
});

// Strona "Kontakt"
app.get('/kontakt', (req, res) => {
    const content = `
        <form action="/kontakt" method="POST">
            <label for="imie">Imię:</label>
            <input type="text" id="imie" name="imie" required><br>

            <label for="nazwisko">Nazwisko:</label>
            <input type="text" id="nazwisko" name="nazwisko" required><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br>

            <label for="wiadomosc">Treść wiadomości:</label>
            <textarea id="wiadomosc" name="wiadomosc" rows="4" required></textarea><br>

            <button type="submit">Wyślij</button>
        </form>
    `;
    res.send(render("Kontakt", content));
});

// Obsługa formularza kontaktowego (POST)
app.post('/kontakt', (req, res) => {
    const { imie, nazwisko, email, wiadomosc } = req.body;
    console.log(`Otrzymano wiadomość od ${imie} ${nazwisko} (${email}): ${wiadomosc}`);
    res.redirect('/');
});

// Uruchomienie serwera
app.listen(8080, () => {
    console.log('Serwer uruchomiony na porcie 8080');
});
