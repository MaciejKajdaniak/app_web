# Zadanie 4.1
# Odczytujemy plik sygnaly.txt i analizujemy co czterdzieste słowo.
# Z każdego 40. słowa wybieramy dziesiątą literę i tworzymy przesłanie.

def zadanie_4_1():
    przeslanie = ""
    with open("sygnaly.txt", "r") as file:
        lines = file.readlines()
        for i in range(39, len(lines), 40):  # Zaczynamy od 40. słowa (indeks 39)
            word = lines[i].strip()  # Usuwamy zbędne białe znaki
            if len(word) >= 10:  # Zabezpieczamy przed słowami krótszymi niż 10 znaków
                przeslanie += word[9]  # 10. litera (indeks 9)

    with open("wyniki4.txt", "w") as wynik_file:
        wynik_file.write(f"4.1\n{przeslanie}\n")  # Zapisujemy wynik w odpowiednim formacie

# Zadanie 4.2
# Szukamy słowa z największą liczbą różnych liter. Liczymy unikalne litery w każdym słowie.

def zadanie_4_2():
    max_distinct = 0
    word_with_max_distinct = ""

    with open("sygnaly.txt", "r") as file:
        lines = file.readlines()
        for word in lines:
            word = word.strip()  # Usuwamy zbędne białe znaki
            distinct_letters = set(word)  # Zbiór unikalnych liter w słowie
            if len(distinct_letters) > max_distinct:
                max_distinct = len(distinct_letters)
                word_with_max_distinct = word

    with open("wyniki4.txt", "a") as wynik_file:
        wynik_file.write(f"4.2\n{word_with_max_distinct} {max_distinct}\n")  # Zapisujemy wynik

# Zadanie 4.3
# Szukamy słów, w których każda para liter jest oddalona od siebie w alfabecie o co najwyżej 10.

def odleglosc_liter(l1, l2):
    # Obliczamy odległość między literami w alfabecie
    return abs(ord(l1) - ord(l2))

def zadanie_4_3():
    valid_words = []

    with open("sygnaly.txt", "r") as file:
        lines = file.readlines()
        for word in lines:
            word = word.strip()
            is_valid = True
            # Sprawdzamy, czy każda para liter w słowie spełnia warunek odległości
            for i in range(len(word)):
                for j in range(i + 1, len(word)):
                    if odleglosc_liter(word[i], word[j]) > 10:
                        is_valid = False
                        break
                if not is_valid:
                    break

            if is_valid:
                valid_words.append(word)

    with open("wyniki4.txt", "a") as wynik_file:
        wynik_file.write("4.3\n")
        for word in valid_words:
            wynik_file.write(f"{word}\n")  # Zapisujemy wszystkie pasujące słowa

# Wywołanie wszystkich funkcji
zadanie_4_1()  # Zadanie 4.1
zadanie_4_2()  # Zadanie 4.2
zadanie_4_3()  # Zadanie 4.3
