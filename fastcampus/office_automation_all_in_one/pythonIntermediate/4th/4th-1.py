import gspread
from oauth2client.service_account import ServiceAccountCredentials

scope = ['https://spreadsheets.google.com/feeds']
credentials = ServiceAccountCredentials.from_json_keyfile_name('/Users/a1101256/keys/fastcampus-online-11231-ea56e7035cf4.json', scope)

gs = gspread.authorize(credentials)

doc = gs.open_by_url('https://docs.google.com/spreadsheets/d/1sTL5wTXS5pKmeL5pVGSOVgMMqgl9w6djvHGlaq3wHGQ/edit#gid=0')
ws = doc.get_worksheet(0)

# val = ws.acell('B1').value
# print(val)

# val = ws.row_values('1')
# print(val)

# val = ws.col_values('1')
# print(val)

# vals = ws.range('A2:B2')
# for val in vals:
#     print(val)  

# ws.update_acell('B1', 'changed')

ws.append_row(['newA', 'newB', 'newC'])