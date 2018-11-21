import socket

s = socket.socket()
host = 'localhost'
port = 8080

s.connect((host, port))

# # Receiving
# msg = s.recv(1024)  # max length

# while msg:
#     print("Message", msg.decode())
#     msg = s.recv(1024)

# Sending
filename = "file.txt"
s.send(filename.encode())
readfile = s.recv(1024)
print(readfile.decode())
s.close()