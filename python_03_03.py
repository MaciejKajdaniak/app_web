
def zadanie_4_1():
    przeslanie = ""
    with open("sygnaly.txt", "r") as file:
        lines = file.readlines()
        for i in range(39, len(lines), 40):  
            word = lines[i].strip()  
            if len(word) >= 10:  
                przeslanie += word[9]  

    with open("wyniki4.txt", "w") as wynik_file:
        wynik_file.write(f"4.1\n{przeslanie}\n")  



def zadanie_4_2():
    max_distinct = 0
    word_with_max_distinct = ""

    with open("sygnaly.txt", "r") as file:
        lines = file.readlines()
        for word in lines:
            word = word.strip()  
            distinct_letters = set(word)  
            if len(distinct_letters) > max_distinct:
                max_distinct = len(distinct_letters)
                word_with_max_distinct = word

    with open("wyniki4.txt", "a") as wynik_file:
        wynik_file.write(f"4.2\n{word_with_max_distinct} {max_distinct}\n")  



def odleglosc_liter(l1, l2):
    return abs(ord(l1) - ord(l2))

def zadanie_4_3():
    valid_words = []

    with open("sygnaly.txt", "r") as file:
        lines = file.readlines()
        for word in lines:
            word = word.strip()
            is_valid = True
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
            wynik_file.write(f"{word}\n")  

zadanie_4_1()  
zadanie_4_2()  
zadanie_4_3()  
