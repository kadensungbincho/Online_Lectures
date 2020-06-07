
print('Running module2.py')

import module1


def hello():
    print('module2 says hello\n')
    module1.hello()
