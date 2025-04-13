__copyright__ = "Zespół Szkół Komunikacji"
__author__ = "Maciej Kajdaniak 4c"

import datetime

class Student:
    def __init__(self, _id, first_name, last_name, birth_date):
        self._id = _id
        self.first_name = first_name
        self.last_name = last_name
        self.birth_date = birth_date

    @property
    def age(self):
        return datetime.date.today().year - self.birth_date.year

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.age})"
