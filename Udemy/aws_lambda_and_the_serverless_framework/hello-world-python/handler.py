import json
import time


def hello(event, context):
    print('first update !')
    time.sleep(4)
    return "Hello"