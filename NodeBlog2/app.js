const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Endpoint do migracji (tworzenie tabel w bazie)
app.post('/migrate', async (req, res) => {
    try {
        await prisma.migrate.deploy();
        res.json({ message: 'Migracja zakończona. Tabele zostały utworzone.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Wystąpił błąd podczas migracji.' });
    }
});
//CRUD
//Create - Dodanie nowego posta
app.post('/posts', async (req, res) => {
    try {
        const { title, content } = req.body;  // Odczytujemy dane z ciała żądania
        const post = await prisma.post.create({
            data: {
                title,
                content
            }
        });
        res.status(201).json(post);  // Zwracamy nowo utworzony post
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Nie udało się utworzyć posta.' });
    }
});

//Read - Pobranie wszystkich postów
app.get('/posts', async (req, res) => {
    try {
        const posts = await prisma.post.findMany();  // Pobieramy wszystkie posty z bazy
        res.json(posts);  // Zwracamy listę postów
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Błąd podczas pobierania postów.' });
    }
});

//Read - Pobranie jednego posta po ID
app.get('/posts/:id', async (req, res) => {
    const { id } = req.params;  // Odczytujemy ID posta z parametrów URL
    try {
        const post = await prisma.post.findUnique({
            where: { id: parseInt(id) }  // Szukamy posta o podanym ID
        });

        if (!post) {
            return res.status(404).json({ error: 'Post nie został znaleziony.' });
        }

        res.json(post);  // Zwracamy znaleziony post
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Błąd podczas pobierania posta.' });
    }
});

//Update - Aktualizacja posta
app.put('/posts/:id', async (req, res) => {
    const { id } = req.params;  // Odczytujemy ID posta z parametrów URL
    const { title, content } = req.body;  // Odczytujemy dane z ciała żądania

    try {
        const post = await prisma.post.update({
            where: { id: parseInt(id) },  // Szukamy posta o podanym ID
            data: {
                title,  // Aktualizujemy tytuł
                content  // Aktualizujemy zawartość
            }
        });

        res.json(post);  // Zwracamy zaktualizowany post
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Błąd podczas aktualizacji posta.' });
    }
});

//Delete - Usunięcie posta
app.delete('/posts/:id', async (req, res) => {
    const { id } = req.params;  // Odczytujemy ID posta z parametrów URL

    try {
        const post = await prisma.post.delete({
            where: { id: parseInt(id) }  // Usuwamy post o podanym ID
        });

        res.json({ message: 'Post został usunięty.', post });  // Zwracamy usunięty post
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Błąd podczas usuwania posta.' });
    }
});

//Uruchomienie serwera
app.listen(8080, () => {
    console.log('Serwer działa na porcie 8080');
});
