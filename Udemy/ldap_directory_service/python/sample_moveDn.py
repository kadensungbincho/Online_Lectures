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

status = c.modify_dn('uid=testuser,ou=people,o=yyy org,c=uk,dc=yourhostname,dc=com', 'uid=testuser', new_superior='ou=people,o=xxx org,c=us,dc=yourhostname,dc=com')

print(c.result)

c.unbind()
print("Unbinded successful!!")
