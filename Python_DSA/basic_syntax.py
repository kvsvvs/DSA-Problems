# Function declarations

# 1. Simple function
def greet():
    print("Hello, world!")

# 2. Function with parameters
def custom_greet(name):
    print(f"Hello, {name}!")

# 3. Function with a return value
def add_numbers(a, b):
    return a + b

# 4. Function with default parameter values
def increment(number, by=1):
    return number + by

# 5. Function with variable number of arguments
def sum_numbers(*numbers):
    return sum(numbers)

# Control structures

# if-else statement
age = 20
if age >= 18:
    print("You are an adult.")
else:
    print("You are not an adult.")

# Python doesn't have a built-in switch statement, but we can simulate it with a dictionary:
def switch_example(case):
    switcher = {
        1: "Case 1",
        2: "Case 2",
        3: "Case 3"
    }
    return switcher.get(case, "Default Case")

# All types of loops

# while loop
counter = 0
while counter < 3:
    print(f"While loop iteration: {counter}")
    counter += 1

# for loop (range based)
for i in range(3):
    print(f"For loop iteration: {i}")

# for loop (iterating over items)
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"Fruit: {fruit}")

# Nested loops
for i in range(2):  # outer loop
    for j in range(3):  # inner loop
        print(f"Nested loop: ({i}, {j})")

# Use of functions
greet()
custom_greet("Alice")
result = add_numbers(10, 15)
print("Sum of 10 and 15 is:", result)
result = increment(10, 2)
print("Incremented value is:", result)
total = sum_numbers(10, 20, 30)
print("Sum of numbers is:", total)
print(switch_example(2))
