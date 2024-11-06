const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Endpoint do migracji (tworzenie tabel w bazie)
app.post('/migrate', async (req, res) => {
    try {
        prisma.migrate;
        res.json({ message: 'Migracja zakończona. Tabele zostały utworzone.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Wystąpił błąd podczas migracji.' });
    }
});

app.listen(8080, () => {
    console.log('Serwer działa na porcie 8080');
});
