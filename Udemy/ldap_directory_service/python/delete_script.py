# import class and constants
from ldap3 import Server, Connection, ALL

# define the server

s = Server(host='yourhostname.com', port=389, use_ssl=False, get_info='ALL')

# define the connection
c = Connection(s, user='cn=admin,dc=yourhostname,dc=com', password='admin', version=3, authentication='SIMPLE', client_strategy='SYNC', read_only=False, raise_exceptions=True)

if not c.bind():
    print('error in binding', c.result)
else:
    print('Bind is successful!!')

result = c.delete('c=au,dc=yourhostname,dc=com')

if not result:
    print("Failed to delete")
else:
    print("Successfully deleted")

c.unbind()

print("Unbinded successful!!")
