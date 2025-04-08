def read_graph(nazwa_pliku):
    with open(nazwa_pliku, 'r') as plik:
        liczba_wierzcholkow = int(plik.readline())  # liczba wierzchołków
        lista_sasiedztwa = [list(map(int, linia.split())) for linia in plik.readlines()]
    return liczba_wierzcholkow, lista_sasiedztwa

def write_neighbours_list(liste_sasiedztwa):
    for i, sasiedzi in enumerate(liste_sasiedztwa):
        print(f"Les voisins du sommet {i} sont: {', '.join(map(str, sasiedzi))}")

def list_to_matrix(liste_sasiedztwa, n):
    matrice = [[0] * n for _ in range(n)]
    for i, sasiedzi in enumerate(liste_sasiedztwa):
        for sasied in sasiedzi:
            matrice[i][sasied] = 1
    return matrice

def write_matrix(matrice):
    for wiersz in matrice:
        print(" ".join(map(str, wiersz)))

def main():
    liczba_wierzcholkow, lista_sasiedztwa = read_graph("graph.txt")
    print("Lista sąsiedztwa:")
    write_neighbours_list(lista_sasiedztwa)
    macierz = list_to_matrix(lista_sasiedztwa, liczba_wierzcholkow)
    print("\nMacierz sąsiedztwa:")
    write_matrix(macierz)

if __name__ == "__main__":
    main()
