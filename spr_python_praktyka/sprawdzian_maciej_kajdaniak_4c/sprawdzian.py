__copyright__ = "Zespół Szkół Komunikacji"
__author__ = "Maciej Kajdaniak 4c"

import datetime
import json
from models.Student import Student
from models.Teacher import Teacher
from models.Subject import Subject
from models.Grades import Grades
from year_grade import year_grade

teachers = []
subjects = []
students = []
grades = []

with open("teachers.txt", "r") as f:
    for line in f:
        segment = line.strip().split()
        _id = int(segment[0])
        name = segment[1]
        surname = segment[2]
        teachers.append(Teacher(_id, name, surname))

with open("subjects.txt", "r") as file:
    for line in file:
        segment = line.strip().split()
        _id = int(segment[0])
        name = segment[1]
        teacher_id = int(segment[2])

        teacher = None
        for t in teachers:
            if t._id == teacher_id:
                teacher = t
                break

        if teacher:
            subjects.append(Subject(_id, name, teacher))


with open("students.txt", "r") as f:
    for line in f:
        segment = line.strip().split()
        _id = int(segment[0])
        first_name = segment[1]
        last_name = segment[2]
        birth_date = datetime.datetime.strptime(segment[3], "%Y-%m-%d").date()
        students.append(Student(_id, first_name, last_name, birth_date))

with open("grades.txt", "r") as f:
    for line in f:
        segment = line.strip().split()
        student_id = int(segment[0])
        subject_id = int(segment[1])
        grades_list = list(map(int, segment[2].split(",")))

        student = next((s for s in students if s._id == student_id), None)
        subject = next((s for s in subjects if s._id == subject_id), None)

        if student and subject:
            g = Grades(student, subject)
            for grade in grades_list:
                try:
                    g.add_grade(grade)
                except ValueError:
                    pass
            grades.append(g)

do_json_students = []
for student in students:
    print(str(student) + ":")
    student_data = {}
    for g in [g for g in grades if g.student == student]:
        subject_name = g.subject.name
        oceny = g.get_grades()
        srednia = round(g.get_average(), 2)
        ocena_koncowa = year_grade(srednia)

        print(" " + subject_name + ":")
        print("     Oceny:", ", ".join(map(str, oceny)))
        print("     Średnia:", srednia)
        print("     Ocena końcowa:", ocena_koncowa)

        do_json_students.append({subject_name: {
            "Oceny": ", ".join(map(str, oceny)),
            "Srednia": srednia,
            "Ocena roczna": ocena_koncowa
        }
        })
    print()

with open("students.json", "w") as f:
    json.dump(do_json_students, f, indent=4)


print("=" * 50)
print()
do_json_subjects = []
for subject in subjects:
    all_grades = []
    for g in [g for g in grades if g.subject == subject]:
        all_grades.extend(g.get_grades())

    srednia = round(sum(all_grades)/len(all_grades), 2) if all_grades else 0

    print(subject.name + ":")
    print("     Nauczyciel:", subject.teacher)
    print("     Oceny:", ", ".join(map(str, all_grades)))
    print("     Średnia:", srednia)
    print()

    do_json_subjects.append({
        subject.name: {
            "Nauczyciel": str(subject.teacher),
            "Oceny": all_grades,
            "Srednia": srednia
        }
    })

with open("subjects.json", "w") as f:
    json.dump(do_json_subjects, f, indent=4)
