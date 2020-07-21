# import class and constants
from ldap3 import Server, Connection, ALL, SUBTREE
total_entries = 0

# define the server

s = Server(host='yourhostname.com', port=389, use_ssl=False, get_info='ALL')

# define the connection
c = Connection(s, user='cn=admin,dc=yourhostname,dc=com', password='admin', version=3, authentication='SIMPLE', client_strategy='SYNC', read_only=False, raise_exceptions=True)

if not c.bind():
    print('error in binding', c.result)
else:
    print('Bind is successful!!')

c.search(search_base = 'dc=yourhostname,dc=com',
         search_filter = '(objectClass=inetOrgPerson)',
         search_scope = SUBTREE,
         attributes = ['cn', 'givenName'],
         paged_size = 5)
total_entries += len(c.response)
for entry in c.response:
    print(entry['dn'], entry['attributes'])

c.unbind()
print("Unbinded successful!!")
