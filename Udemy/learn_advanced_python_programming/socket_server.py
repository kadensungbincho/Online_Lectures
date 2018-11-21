import socket

host = 'localhost'
port = 8080
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((host, port))
s.listen(1)
print("The Server is listening for client request on port 8080")
con, addr = s.accept()
print("Connection has been established from  ", str(addr))
# con.send("Hello My name is Kaden Sungbin Cho".encode())
try:
    filename = con.recv((1024))
    with open(filename, 'rb') as f:
      readfile = f.read()
    con.send(readfile)
except:
    print("File Not Found on the server".encode())
finally:
    con.close()