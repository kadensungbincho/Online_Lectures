# import class and constants
from ldap3 import Server, Connection, ALL, MODIFY_REPLACE, MODIFY_ADD, MODIFY_DELETE,MODIFY_INCREMENT

# define the server

s = Server(host='yourhostname.com', port=389, use_ssl=False, get_info='ALL')

# define the connection
c = Connection(s, user='cn=admin,dc=yourhostname,dc=com', password='admin', version=3, authentication='SIMPLE', client_strategy='SYNC', read_only=False, raise_exceptions=True)

if not c.bind():
    print('error in binding', c.result)
else:
    print('Bind is successful!!')

status = c.modify('uid=testuser,ou=people,o=yyy org,c=uk,dc=yourhostname,dc=com',
         {'givenName': [(MODIFY_REPLACE, ['test-replaced'])],
          'homePhone': [(MODIFY_ADD, ['1234567889'])],
	  'gecos': [(MODIFY_DELETE, ['test user'])],
	  'uidNumber': [(MODIFY_INCREMENT, ['10011'])]})

if not status:
    print('error in modify', c.result)
else:
    print('Modified successfully!!')

c.unbind()
print("Unbinded successful!!")
