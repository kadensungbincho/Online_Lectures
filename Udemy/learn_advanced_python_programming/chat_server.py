import socket
from threading import Thread


clients = {}
addresses = {}

host = '127.0.0.1'
port = 8080

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((host, port))


def accept_client_connections():
    while True:
        client_con, client_addr = s.accept()
        print(client_addr, "Has connected")
        client_con.send("Welcome to the chat room! Please type your name to continue".encode("utf8"))
        addresses[client_con] = client_addr
        Thread(target=handle_client, args=(client_con, client_addr)).start()


def broadcast(msg, prefix=""):
    for x in clients:
        x.send(bytes(prefix, "utf8") + msg)


def handle_client(con, addr):
    name = con.recv(1024).decode("utf8")
    welcome = "Welcome " + name + "You can type #quit if you want to leave chat room"
    con.send(bytes(welcome, "utf8"))

    msg = f"{name} has recently joined the chat room"
    broadcast(bytes(msg, "utf8"))
    clients[con] = name
    while True:
        msg = con.recv(1024)

        if msg != bytes("#quit", "utf8"):
            broadcast(msg, name + ":")
        else:
            con.send(bytes("#quit", "utf8"))
            con.close()
            del clients[con]
            broadcast(bytes(f"{name} has left the chat room", "utf8"))


if __name__ == "__main__":
    s.listen(5)
    print("The server has been started and is now listening to clients")
    t1 = Thread(target=accept_client_connections)
    t1.start()
    t1.join()