import tkinter
import socket
from tkinter import (
    Tk, Frame, LEFT, BOTH, Y, 
    RIGHT, Listbox, StringVar, mainloop, 
    Scrollbar, Label, Entry, Button)
from threading import Thread


def receive():
    while True:
        try:
            msg = s.recv(1024).decode("utf8")
            msg_list.insert(tkinter.END, msg)
        except:
            print("There is an error while receiving a message")
            break

    
def send():
    msg = my_msg.get()
    my_msg.set("")
    s.send(bytes(msg, "utf8"))

    if msg == "#quit":
        s.close()
        window.quit()

    
def on_closing():
    my_msg.set("#quit")
    send()


window = Tk()
window.title("Chat Room")
window.configure(bg="green")
messages_frame = Frame(window, 
    height=200, 
    width=200, 
    bg="red")
my_msg = StringVar()
my_msg.set("")
scroll_bar = Scrollbar(messages_frame)
msg_list = Listbox(
    messages_frame, 
    height=15, 
    width=100, 
    bg="red", 
    yscrollcommand=scroll_bar.set)
scroll_bar.pack(side=RIGHT, fill=Y)
msg_list.pack(side=LEFT, fill=BOTH)
msg_list.pack()
messages_frame.pack()

button_label = Label(window, text="Enter Your Message", fg="blue", font="Arial", bg="red")
button_label.pack()

entry_field = Entry(window, textvariable=my_msg, fg="red", width=50)
entry_field.pack()

send_button = Button(window, text="Send", bg="green", font="Arial", fg="white", command=send)
send_button.pack()

quit_button = Button(window, text="Quit", bg="green", font="Arial", fg="white", command=on_closing)
quit_button.pack()

window.protocol("WM_DELETE_WINDOW", on_closing)

host = '127.0.0.1'
port = 8080
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((host, port))
receive_thread = Thread(target=receive)
receive_thread.start()
mainloop()