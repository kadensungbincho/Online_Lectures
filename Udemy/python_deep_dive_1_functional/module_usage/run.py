import timing

code = '[x**2 for x in range(1_000)]'

result = timing.timeit(code, 100)
print(result)
