__copyright__ = "Zespół Szkół Komunikacji"
__author__ = "Maciej Kajdaniak 4c"

class Teacher:
    def __init__(self, _id, name, surname):
        self._id = _id
        self.name = name
        self.surname = surname

    def __str__(self):
        return f"{self.name} {self.surname}"
