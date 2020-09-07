import gspread
from oauth2client.service_account import ServiceAccountCredentials

scope = [
    'https://www.googleapis.com/auth/drive',
    'https://spreadsheets.google.com/feeds'
]
credentials = ServiceAccountCredentials.from_json_keyfile_name('/Users/a1101256/keys/fastcampus-online-11231-ea56e7035cf4.json', scope)

gs = gspread.authorize(credentials)

doc = gs.create('TestSheetFromCode')

ws = doc.get_worksheet(0)

for i in range(5):
    ws.append_row([i, str(i) + 'data'])


doc.share('kadensungbincho@gmail.com', perm_type='user', role='owner')