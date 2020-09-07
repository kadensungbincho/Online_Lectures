from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import smtplib

SMTP_SERVER = 'smtp.gmail.com'
SMTP_PORT = 465
SMTP_USER = 'kadensungbincho@gmail.com'
SMTP_PASSWORD = ''


def send_mail(name, addr, subject, contents):
    msg = MIMEMultipart('alternnative')
    
    msg['From'] = SMTP_USER
    msg['To'] = addr
    msg['Subject'] = name + '님,' + subject
    
    text = MIMEText(contents, _charset='utf-8')
    msg.attach(text)

    smtp = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT)
    smtp.login(SMTP_USER, SMTP_PASSWORD)
    smtp.sendmail(name, addr, msg.as_string())
    smtp.close()



contents = 'This is sent by'

send_mail('kadencho', 'kadensungbincho@gmail.com', 'auto mail', contents)
    