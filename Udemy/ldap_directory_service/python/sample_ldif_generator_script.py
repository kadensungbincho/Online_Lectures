# import class and constants
from ldap3 import Server, Connection, ALL, LDIF 

# define the connection
fp = open('out.ldif','w')
c = Connection(None, client_strategy = LDIF)

with c:
	c.add('c=au,dc=yourhostname,dc=com', ['country', 'top'], {'c': 'au'})
	for line in c.stream.getvalue():
		fp.write(line)

