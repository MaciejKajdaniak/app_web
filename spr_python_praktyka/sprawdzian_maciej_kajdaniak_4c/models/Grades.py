__copyright__ = "Zespół Szkół Komunikacji"
__author__ = "Maciej Kajdaniak 4c"

class Grades:
    def __init__(self, student, subject):
        self.student = student
        self.subject = subject
        self.grades = []

    def add_grade(self, grade):
        if grade < 1 or grade > 6:
            raise ValueError("Grade must be between 1 and 6")
        self.grades.append(grade)

    def get_grades(self):
        return self.grades

    def get_average(self):
        return sum(self.grades) / len(self.grades)
