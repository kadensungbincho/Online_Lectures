class SimpleTest:
    def __init__(self):
        self.prefix = 'You said: '
        self.postfix = '\n' + '-'*20 + '\n'

    def print_with_fix(self, string):
        print(self.prefix + string + self.postfix)

