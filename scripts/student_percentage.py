"""Calculate student percentages from subject marks."""


def calculate_percentage(marks_obtained, max_marks):
    total_obtained = sum(marks_obtained)
    total_max = sum(max_marks)
    return (total_obtained / total_max) * 100


def grade_for_percentage(percentage):
    if percentage >= 90:
        return "A+"
    elif percentage >= 80:
        return "A"
    elif percentage >= 70:
        return "B"
    elif percentage >= 60:
        return "C"
    elif percentage >= 50:
        return "D"
    else:
        return "F"


def main():
    students = [
        {"name": "Alice", "marks": [85, 90, 78, 92, 88], "max_marks": [100] * 5},
        {"name": "Bob", "marks": [60, 55, 70, 65, 58], "max_marks": [100] * 5},
        {"name": "Charlie", "marks": [95, 98, 92, 97, 99], "max_marks": [100] * 5},
    ]

    print(f"{'Name':<10}{'Percentage':<15}{'Grade':<10}")
    print("-" * 35)
    for student in students:
        percentage = calculate_percentage(student["marks"], student["max_marks"])
        grade = grade_for_percentage(percentage)
        print(f"{student['name']:<10}{percentage:<15.2f}{grade:<10}")


if __name__ == "__main__":
    main()
