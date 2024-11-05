# Accept three positive integers as input and check if they form the sides of a right triangle. Print YES if they form one, and NO if they do not. The input will have three lines, with one integer on each line. The output should be a single line containing one of these two strings: YES or NO.

def is_right_triangle(a, b, c):
    sides = [a, b, c]
    sides.sort()

    # Check the Pythagorean theorem
    if sides[0] ** 2 + sides[1] ** 2 == sides[2] ** 2:
        return "YES"
    else:
        return "NO"

# Taking input from the user
a = int(input("Enter the first positive integer: "))
b = int(input("Enter the second positive integer: "))
c = int(input("Enter the third positive integer: "))

# Checking if the sides form a right triangle and printing the result
result = is_right_triangle(a, b, c)
print(result)
