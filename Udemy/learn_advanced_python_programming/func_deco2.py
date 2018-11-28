def poly(a, b, c):
    def pol(x):
        return a * x ** 2 + b * x + c
    return pol

res1 = poly(1, 2, 3)
z = res1(4)
print(z)
