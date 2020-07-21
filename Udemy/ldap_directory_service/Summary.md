# Intro to Directory Information Tree
- DIT  is a hierarchical tree-like structure to store entries of directory services
- Directory tree helps to name and refer directory data - Distinguished Names (DN)
- DRN in directory structure
- Entity and attributes in LDAP directory structure

# Object Classes in LDAP
- Object classes are building blocks of directory information tree
- Object class defines the structure of a data present in directory
- types of object class
    - structural object class: this is used for creating entries, every entry should have one or more structural object class
    - auxiliary object class: used to add additional attibutes to an entry created with some other structural object class
    - abstract object class: this sits at the top of the other object class derived from it
- LDAP has oops concept implemented in its objectclass, an inherited objectClass will have attributes in parent objectClass

- Frequently used ObjectClass
    - Organizational Unit (OU): it's a frequently used  ObjectClass, mostly its used as a containers, which contains other ObjectClass under it.
    - Organizational (O): This is mostly used a level above organizational unit objectClass. 
    - Country (C)
    - PosizAccount(UID): used to store information pertaining to a user
    - PosixGroup(CN): used to store information pertaining to a user

- Frequently Used Attributes
    - commonName(CN): this is the primary attribute for more than 8 object classes. If an object has a CN attribute, in modity/add/search operations the object is referred with this attribute.
    - usedid(UID): this is another important attribute, used at last level of directory structure

# Designing Sample DIT


- dc=example, dc=com
    - c=us, o=xxx org
        - ou=people
            - uid=101
            - uid=102
        - ou=groups
            - cn=dev
            - cn=sysAdmin
    - c=uk, o=yyy org
        - ou=people
            - uid=101
            - uid=102
        - ou=groups
            - cn=sys

for uid=101
DN:uid=101,ou=people,o=xxx org,c=us,db=example,dc=com
RDN: uid=101

    
- factors influencing directory tree design
    - enterprise structure
    - applications to be used
    - replication mechanism
- custmoized object class
    - apart from built-in object classes, we can also configure our own customized object classes with attributes based on our requirement, you will learn more about it in coming chapters

# LDAP Directory Server Setup
- install slapd & ldap utils
    - slapd is installed for dynamic configuration

```bash
sudo apt-get update
sudo apt-get install slapd ldap-utils

sudo dpkg-reconfigure slapd
```

# ldap web interface setup
- we can setup web interface or client interface
    - phpLDAPadmin is used for web interface
    - apache directory studio is used for client interface

```bash
sudo apt-get install phpldapadmin

sudo vim /etc/phpldapadmin/config.php
# change host
# server base: 'dc=ec2-3-34-179-42,dc=ap-northeast-2,dc=compute,dc=amazonaws,dc=com'
# go to ec2-3-34-179-42.ap-northeast-2.compute.amazonaws.com/phpldapadmin
```

# LDAP Client Interface

# Data Interchange File Format (LDIF)
- Allows to communicate with LDAP system

```md
*********LDIF statements to create a country object class***********

dn: c=uk,dc=yourhostname,dc=com
c: uk
objectclass: country

*********LDIF statements to add a child entry***********

dn: o=xxx,c=uk,dc=yourhostname,dc=com
o: xxx
objectclass: organization

*********LDIF statements to add users entry***********

dn: uid=jhon,o=xxx,c=uk,dc=yourhostname,dc=com
objectClass: inetOrgPerson
objectClass: posixAccount	
uid: john
sn: Doe
givenName: John
cn: John Doe
displayName: John Doe
uidNumber: 10000
gidNumber: 5000
userPassword: johnldap
gecos: John Doe
loginShell: /bin/bash
homeDirectory: /home/john

dn: uid=davis,o=xxx,c=uk,dc=yourhostname,dc=com
objectClass: inetOrgPerson
objectClass: posixAccount	
uid: davis
sn: Doe
givenName: Davis
cn: Davis Doe
displayName: Davis Doe
uidNumber: 10001
gidNumber: 5001
userPassword: Davisldap
gecos: DavisDoe
loginShell: /bin/bash
homeDirectory: /home/davis

*********LDIF statements to modify an attribute***********

dn: uid=davis,o=xxx,c=uk,dc=yourhostname,dc=com
changetype: modify
replace: displayName
displayName: Davis modified

*********LDIF statements to delete an attribute***********
dn: uid=davis,o=xxx,c=uk,dc=yourhostname,dc=com
changetype: modify
delete: gecos

*********LDIF statements to add an attribute***********
dn: uid=davis,o=xxx,c=uk,dc=yourhostname,dc=com
changetype: modify
add: gecos
gecos: John Doe


*********LDIF statements to change the RDN***********
dn: uid=davis,o=xxx,c=uk,dc=yourhostname,dc=com
changetype: modrdn
newrdn: uid=johnRDNmod	
deleteoldrdn: 0
```

# Deep dive into phpLDAPadmin
```ldif
*********LDIF statements to add 2 OU entities(group)***********

dn: ou=group,o=yyy,c=uk,dc=yourhostname,dc=com
ou: group
objectclass: organizationalUnit

dn: ou=group,o=xxx,c=us,dc=yourhostname,dc=com
ou: group
objectclass: organizationalUnit
```

# Deep dive into client interface

# LDAP Command line tools

```ldif
dn: olcDatabase={0}config,cn=config
changetype: modify
replace: olcRootPW
olcRootPW: {SSHA}00Zpnx28VCenx4ZjSDYhNk9M+3IVuK/3

dn: olcDatabase={1}hdb,cn=config
changetype: modify
replace: olcRootPW
olcRootPW: {SSHA}00Zpnx28VCenx4ZjSDYhNk9M+3IVuK/3
-
replace: olcRootDN
olcRootDN: cn=admin,dc=ec2-34-209-24-204,dc=us-west-2,dc=compute,dc=amazonaws,dc=com
-
replace: olcSuffix
olcSuffix: dc=ec2-34-209-24-204,dc=us-west-2,dc=compute,dc=amazonaws,dc=com

```

```bash
ldapmodify -a -Q -Y EXTERNAL -H  ldapi:/// -f pass.ldif
```

# LDAP Command Line Tool
- LDAP Search
    - -b "basedn"
    - -s "scope"

```bash
ldapsearch -p 389 -h myhost -x -z 2 -b "your base DN" -s base -v "objectclass=*"

sudo ldapsearch -x -z 200 -b 'dc=ec2-34-209-24-204,dc=us-west-2,dc=compute,dc=amazonaws,dc=com' -s sub -v '(uid=davis)'

sudo ldapsearch -x -z 200 -b 'dc=example,dc=com' -s sub -v '(|(uid=sara) (uid=davis))'

ldapadd -x -W -D 'cn=admin,dc=hostname,dc=com' -f ldif_file_name.ldif

ldapdelete -x -W -D "cn=admin,dc=hostname,dc=com" "uid=davis,ou=people,o=yyy,c=uk,dc=hostname,dc=com"
```

- LDAP add, modidy, delete
    - -f "filename"

```ldif
*********LDIF statements to add 4 entities under group***********

dn: cn=dev,ou=group,o=xxx,c=us,dc=yourhostname,dc=com
cu: dev
gidnumber: 5003
memberuid:joe
objectclass: posixGroup

dn: cn=sysadmin,ou=group,o=xxx,c=us,dc=yourhostname,dc=com
cn: sysadmin
gidnumber: 5004
memberuid:steve
objectclass: posixGroup

dn: cn=dev,ou=group,o=yyy,c=uk,dc=yourhostname,dc=com
cn: dev
gidnumber: 5000
memberuid:john
objectclass: posixGroup

dn: cn=sysadmin,ou=group,o=yyy,c=uk,dc=yourhostname,dc=com
cn: sysadmin
gidnumber: 5001
memberuid:davis
objectclass: posixGroup
``` 

# Schemas in LDAP
- Object Classes are grouped into schema in LDAP server
- Based on schemas added, object classes and attributes will be available to build directory structure
- Based on requirements new schemas are added to LDAP server
- Customized schemas, objectClasses and attributes can be created and loaded based on requirement


# Remote LDAP authentication
- Global LDAP DB

# Linux Client Authentication

```bash
sudo apt-get update

sudo apt-get install -y libpam-ldap nscd

# to reconfigure
sudo dpkg-reconfigure ldap-auth-config

vim /etc/nsswitch.conf
# compat -> ldap compat

vim /etc/pam.d/common-session
# session required pam_mkhomedir.so skel=/etc/skel umask=0022

sudo /etc/init.d/nscd restart

sudo passwd
sudo vim /etc/ssh/sshd_config
# PasswordAuth~ yes

sudo -s
/etc/init.d/ssh restart
```

# Python Library for LDAP

# LDAP  Replication
- maintains a shadow copy of directory information tree
- periodic content syncing between master and slave
