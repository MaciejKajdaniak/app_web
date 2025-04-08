class Etudiant:
    def __init__(self, id_etudiant: int, prenom: str, nom: str, age: int):
        self.id_etudiant = id_etudiant
        self.prenom = prenom
        self.nom = nom
        self.age = age
        self.cours = []

    def ajouter_cours(self, cours):
        self.cours.append(cours)

    def afficher_info(self):
        cours_str = ', '.join(self.cours)
        print(f"{self.prenom} {self.nom} ({self.age} lat): {cours_str}")

    def sauvegarder_cours(self):
        with open(f"{self.prenom.lower()}_{self.nom.lower()}.txt", "w") as file:
            file.write("Kursy:  - " + ',  - '.join(self.cours))


class Course:
    def __init__(self, id_etudiant: int, nom_cours: str):
        self.id_etudiant = id_etudiant
        self.nom_cours = nom_cours


def import_donnees_etudiants(fichier: str):
    etudiants = []
    with open(fichier, "r") as f:
        for ligne in f:
            id_etudiant, prenom, nom, age = ligne.strip().split(",")
            etudiants.append(Etudiant(int(id_etudiant), prenom, nom, int(age)))
    return etudiants


def import_donnees_cours(fichier: str, etudiants: list):
    with open(fichier, "r") as f:
        for ligne in f:
            id_etudiant, nom_cours = ligne.strip().split(",")
            etudiant = next((e for e in etudiants if e.id_etudiant == int(id_etudiant)), None)
            if etudiant:
                etudiant.ajouter_cours(nom_cours)


#załaduj dane
etudiants = import_donnees_etudiants("students.txt")
import_donnees_cours("courses.txt", etudiants)

#wypisz dane
for etudiant in etudiants:
    etudiant.afficher_info()
    etudiant.sauvegarder_cours()
