def outer_func(a):
    def inner_func(b):
        return a + b
    return inner_func

z = outer_func(2)
v = outer_func(3)

res1 = z(4)
res2 = v(4)

print(res1, res2)
