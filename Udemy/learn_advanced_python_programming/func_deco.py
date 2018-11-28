def outside_func():
    def inside_func():
        print("inside")
    print("outside func")
    return inside_func()

outside_func()
