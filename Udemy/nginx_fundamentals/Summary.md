# Intro
```bash
apt-get update
apt-get install -y nginx

# check whether the server started automatically
ps aux | grep nginx 

nginx -s stop

vim /lib/systemd/system/nginx.service
# and change PIDFile to /var/run/nginx.pid

systemctl daemon-reload
systemctl start nginx
systemctl status nginx
systemctl enable nginx
reboot
```

# Term
- Context (same as scope)
- Directive

# Configuration

```bash
mkdir -p /sites/demo
```
- Add demo sites and demo nginx.conf 
```bash
events {}
  
http {

  include mime.types;

  server {

    listen 80;
    server_name 67.205.154.222;

    root /sites/demo;
  }
}
```

```bash
nginx -t
systemctl reload nginx

cat /etc/nginx/mime.types
```

# Location Blocks
```bash
events {}

http {

  include mime.types;

  server {

    listen 80;
    server_name 67.205.154.222;

    root /sites/demo;

    # prefix match
    location /greet {
      return 200 "Hello from nginx greet location";
    }

    #exact match
    location = /greet {
      return 200 "Hello from nginx greet location exact";
    }

    #regex match
    location ~ /greet[0-9] {
      return 200 "Hello from nginx greet location regex";
    }

    location ~* /greet[0-9] {
      return 200 "Hello from nginx greet location regex case insensitive";
    }

    # Preferential Prefix match
    location ^~ /greet[0-9] {
      return 200 "Hello from nginx greet location preferential";
    }    
  }
}
```
```bash
systemctl reload nginx
```

# Variables
- Configuration Variables
- Nginx Module Variables

```bash
events {}
  
http {

  include mime.types;

  server {

    listen 80;
    server_name 67.205.154.222;

    root /sites/demo;

    # Check
    if ( $arg_apikey != 1234 ) {
      return 401 "Incorrect API KEY";
    }

    location /inspect {
      return 200 "$host\n$uri\n$args";
    }

    location /inspectName {
      return 200 "Name: $arg_name";
    }
  }
}

curl localhost/inspectName?name=kaden

curl localhost/inspectName?name=kaden&apikey=1234
```

```bash
events {}
  
http {

  include mime.types;

  server {

    listen 80;
    server_name 67.205.154.222;

    root /sites/demo;

    set $weekend 'No';

    if ( $date_local ~ 'Saturday|Sunday' ) {
      set $weekend 'Yes';
    }

    location /is_weekend {
      return 200 $weekend;
    }
  }
}
```

# Rewrites & Redirects

```bash
events {}
  
http {

  include mime.types;

  server {

    listen 80;
    server_name 67.205.154.222;

    root /sites/demo;

    location /logo {
      return 307 /thumb.png;
    }
  }
}
```

```bash
events {}
  
http {

  include mime.types;

  server {

    listen 80;
    server_name 67.205.154.222;

    root /sites/demo;

    rewrite ^/user/\w+ /greet;

    location /greet {
      return 200 "hello user";
    }
  }
}
```

```bash
events {}
  
http {

  include mime.types;

  server {

    listen 80;
    server_name 67.205.154.222;

    root /sites/demo;

    rewrite ^/user/(\w+) /greet/$1;

    location /greet {
      return 200 "hello user";
    }

    location = /greet/kaden {
        return 200 "hello kaden";
    }
  }
}
```

```bash
events {}
  
http {

  include mime.types;

  server {

    listen 80;
    server_name 67.205.154.222;

    root /sites/demo;

    rewrite ^/user/(\w+) /greet/$1;
    rewrite ^/user/kaden /thumb.png;

    location /greet {
      return 200 "hello user";
    }

    location = /greet/kaden {
        return 200 "hello kaden";
    }
  }
}
```
```bash
events {}
  
http {

  include mime.types;

  server {

    listen 80;
    server_name 67.205.154.222;

    root /sites/demo;

    rewrite ^/user/(\w+) /greet/$1 last;
    rewrite ^/user/kaden /thumb.png;

    location /greet {
      return 200 "hello user";
    }

    location = /greet/kaden {
        return 200 "hello kaden";
    }
  }
}
```


# Try files
```bash
events {}
  
http {

  include mime.types;

  server {

    listen 80;
    server_name 67.205.154.222;

    root /sites/demo;

    try_files /thumb.png /greet;

    location /greet {
      return 200 "hello user";
    }
  }
}
```

```bash
events {}
  
http {

  include mime.types;

  server {

    listen 80;
    server_name 67.205.154.222;

    root /sites/demo;

    try_files $uri /cat.png /greet /freindly_404; # named location, only the last element is 'rewrited'

    location /freindly_404 {
        return 404 "Sorry, that file could not be found";
    }

    location /greet {
      return 200 "hello user";
    }
  }
}
```

# logging
- Error log
- Access log

```bash
ls -l /var/log/nginx
```

```bash
events {}
  
http {

  include mime.types;

  server {

    listen 80;
    server_name 67.205.154.222;

    root /sites/demo;

    location /secure {
        access_log /var/log/nginx/secure.access.log;
        return 200 "Welcome to secure zone";
    }

    location /too_many_request_path {
        access_log off;
        return 200 "Welcome to secure zone";
    }
  }
}
```
- check http://nginx.org/en/docs/http/ngx_http_log_module.html

# Ingeritance & Directive Types
- Directive
    - Standard
    - Array
    - Action


# PHP processing
```bash
apt-get update
apt-get install -y php-fpm

systemctl list-units | grep php
systemctl status php7.2-fpm
```

```bash
events {}

http {

  include mime.types;

  server {

    listen 80;
    server_name 67.205.154.222;

    root /sites/demo;

    index index.php index.html;

    location / {
      try_files $uri $uri/ =404;
    }

    location ~\.php$ {
      # Pass php requests to the php-fpm service (fastcgi)
      include fastcgi.conf;
      fastcgi_pass unix:/run/php/php7.2-fpm.sock;
    }
  }
}
```

```bash
find / -name *fpm.sock
echo '<?php phpinfo(); ?>' > /sites/demo/info.php

ps aux | grep nginx
ps aux | grep php
# check nginx and php process owner
# nginx worker process owner(nobody) has no permission on php socket owner(www-data)
```

- So add user to the nginx.conf file
```bash
user www-data; # this change nginx worker process owner

events {}

http {

  include mime.types;

  server {

    listen 80;
    server_name 67.205.154.222;

    root /sites/demo;

    index index.php index.html;

    location / {
      try_files $uri $uri/ =404;
    }

    location ~\.php$ {
      # Pass php requests to the php-fpm service (fastcgi)
      include fastcgi.conf;
      fastcgi_pass unix:/run/php/php7.2-fpm.sock;
    }
  }
}
```

```bash
echo '<h1>Date: <?php echo date("l jS F"); ?></h1>' > /sites/demo/index.ph
```

# Worker process
- master: actual server


```bash
user www-data; # this change nginx worker process owner

worker_processes 2;

events {}

http {

  include mime.types;

  server {

    listen 80;
    server_name 67.205.154.222;

    root /sites/demo;

    index index.php index.html;

    location / {
      try_files $uri $uri/ =404;
    }

    location ~\.php$ {
      # Pass php requests to the php-fpm service (fastcgi)
      include fastcgi.conf;
      fastcgi_pass unix:/run/php/php7.2-fpm.sock;
    }
  }
}
```

```bash
ps aux | grep nginx
# 2 workers for nginx
```
- Nginx worker handles the requests asyncnously, cores does not share the processes so it would be better to set the number of workers as cores numbers (or worker_processes auto)

```bash
nproc

lscpu
```

```bash
user www-data;

pid /var/run/new_nginx.pid; # reconfigure pid file location

worker_processes auto;

events {
    worker_connections 1024; # check ulimit -n
}

http {

  include mime.types;

  server {

    listen 80;
    server_name 67.205.154.222;

    root /sites/demo;

    index index.php index.html;

    location / {
      try_files $uri $uri/ =404;
    }

    location ~\.php$ {
      # Pass php requests to the php-fpm service (fastcgi)
      include fastcgi.conf;
      fastcgi_pass unix:/run/php/php7.2-fpm.sock;
    }
  }
}
```

- worker_processes x worker_connections = max connections

```bash
cp /var/run/nginx.pid  /var/run/new_nginx.pid
systemctl reload nginx
```


# Buffers & Timeouts
- Buffer: between reading and writing, load the data into mem or disk
    - if the server request is larger than 'client_max_body_size', then it throws 413 "Request Entity too Large" error
- Timeouts: cut off time for a given event


# Adding Dynamic Modules
```bash
nginx -V

./configure --help
./configure --help | grep dynamic
``` 

# headers & expries
- Expires: notify clients how long the server can cache the requested form

```bash
user www-data;

worker_processes auto;

events {
  worker_connections 1024;
}

http {

  include mime.types;

  server {

    listen 80;
    server_name 67.205.154.222;

    root /sites/demo;

    index index.php index.html;

    location / {
      try_files $uri $uri/ =404;
    }

    location ~\.php$ {
      # Pass php requests to the php-fpm service (fastcgi)
      include fastcgi.conf;
      fastcgi_pass unix:/run/php/php7.2-fpm.sock;
    }

    location = /thumb.png {
        add_header my_header "Hello World";
    }

  }
}
```

```bash
curl -I http://67.205.154.222/thumb.png 
# check header
```

```bash
user www-data;

worker_processes auto;

events {
  worker_connections 1024;
}

http {

  include mime.types;

  server {

    listen 80;
    server_name 67.205.154.222;

    root /sites/demo;

    index index.php index.html;

    location / {
      try_files $uri $uri/ =404;
    }

    location ~\.php$ {
      # Pass php requests to the php-fpm service (fastcgi)
      include fastcgi.conf;
      fastcgi_pass unix:/run/php/php7.2-fpm.sock;
    }

    location = /thumb.png {
        add_header Cache-Control public;
        add_header Pragma public;
        add_header Vary Accept-Encoding;
        expires 1M;
    }
  }
}
```

```bash
user www-data;

worker_processes auto;

events {
  worker_connections 1024;
}

http {

  include mime.types;

  server {

    listen 80;
    server_name 67.205.154.222;

    root /sites/demo;

    index index.php index.html;

    location / {
      try_files $uri $uri/ =404;
    }

    location ~\.php$ {
      # Pass php requests to the php-fpm service (fastcgi)
      include fastcgi.conf;
      fastcgi_pass unix:/run/php/php7.2-fpm.sock;
    }

    location ~* \.(css|js|jpg|png)$ {
        access_log off;
        add_header Cache-Control public;
        add_header Pragma public;
        add_header Vary Accept-Encoding;
        expires 1M;
    }
  }
}
```

# Compressed responses with GZIP

```bash
user www-data;

worker_processes auto;

events {
  worker_connections 1024;
}

http {

  include mime.types;

  gzip on;
  gzip_comp_level 3;

  gzip_types text/css;
  gzip_types text/javascript;

  server {

    listen 80;
    server_name 67.205.154.222;

    root /sites/demo;

    index index.php index.html;

    location / {
      try_files $uri $uri/ =404;
    }

    location ~\.php$ {
      # Pass php requests to the php-fpm service (fastcgi)
      include fastcgi.conf;
      fastcgi_pass unix:/run/php/php7.2-fpm.sock;
    }

    location ~* \.(css|js|jpg|png)$ {
        access_log off;
        add_header Cache-Control public;
        add_header Pragma public;
        add_header Vary Accept-Encoding;
        expires 1M;
    }
  }
}
```

```bash
curl -I -H "Accept-Encoding: gzip, defalte"  http://67.205.154.222/style.css
```

# FastCGI Cache - Micro Cache
```bash
user www-data;

worker_processes auto;

events {
  worker_connections 1024;
}

http {

  include mime.types;

  # Configuration microcache 
  fastcgi_cache_path /tmp/nginx_cache levels=1:2 keys_zone=ZONE_1:100m inactive=60m;
  fastcgi_cache_key "$scheme$request_method$host$request_uri";

  server {

    listen 80;
    server_name 67.205.154.222;

    root /sites/demo;

    index index.php index.html;

    location / {
      try_files $uri $uri/ =404;
    }

    location ~\.php$ {
      # Pass php requests to the php-fpm service (fastcgi)
      include fastcgi.conf;
      fastcgi_pass unix:/run/php/php7.2-fpm.sock;

      # Enable Cache
      fastcgi_cache ZONE_1;
      fastcgi_cache_valid 200 60m;
      fastcgi_cache_valid 404 10m;
    }

  }
}
```

- Performance check: Apache Bench

```bash
apt-get install -y apache2-utils

ab -n 100 -c 10 http://67.205.154.222/
```

- Time per req: 2173.158 (added sleep(1) on index.php)
- Time per req cached: 301.309

- Check whethere it is from cache or not: $upstream_cache_status
```bash
user www-data;

worker_processes auto;

events {
  worker_connections 1024;
}

http {

  include mime.types;

  # Configuration microcache 
  fastcgi_cache_path /tmp/nginx_cache levels=1:2 keys_zone=ZONE_1:100m inactive=60m;
  fastcgi_cache_key "$scheme$request_method$host$request_uri";
  add_header X-Cache $upstream_cache_status;

  server {

    listen 80;
    server_name 67.205.154.222;

    root /sites/demo;

    index index.php index.html;

    location / {
      try_files $uri $uri/ =404;
    }

    location ~\.php$ {
      # Pass php requests to the php-fpm service (fastcgi)
      include fastcgi.conf;
      fastcgi_pass unix:/run/php/php7.2-fpm.sock;

      # Enable Cache
      fastcgi_cache ZONE_1;
      fastcgi_cache_valid 200 60m;
      fastcgi_cache_valid 404 10m;
    }

  }
}
```

```bash
#check cache hit or miss
curl -I http://67.205.154.222/
```

- Cache pass
```bash
user www-data;

worker_processes auto;

events {
  worker_connections 1024;
}

http {

  include mime.types;

  # Configuration microcache 
  fastcgi_cache_path /tmp/nginx_cache levels=1:2 keys_zone=ZONE_1:100m inactive=60m;
  fastcgi_cache_key "$scheme$request_method$host$request_uri";
  add_header X-Cache $upstream_cache_status;

  server {

    listen 80;
    server_name 67.205.154.222;

    root /sites/demo;

    index index.php index.html;

    set $no_cache 0;

    if ($arg_skipcache = 1) {
        set $no_cache 1;
    }

    location / {
      try_files $uri $uri/ =404;
    }

    location ~\.php$ {
      # Pass php requests to the php-fpm service (fastcgi)
      include fastcgi.conf;
      fastcgi_pass unix:/run/php/php7.2-fpm.sock;

      # Enable Cache
      fastcgi_cache ZONE_1;
      fastcgi_cache_valid 200 60m;
      fastcgi_cache_valid 404 10m;
      fastcgi_cache_bypass $no_cache;
      fastcgi_no_cache $no_cache;
    }
  }
}
```

# Http2
- Http1: textual protocol
- Http2: binary protocol
    - greatly reduce the error chance, compressed header, persistent connections, multiplex streaming(image, text or other can be combined into a single stream of data, http1 requires a dedicated connection for each resource), server push 

- Why?
    - Opening a connection requires resources for handshakes, parsing, etc. Connections are valuable resources 
    - http1
        - client requests html
        - server send index.html
        - client requests style.css
        - server send style.css 
        - client requests js
        - server send js
        - -> using 3 connections
    - http2
        - client requests index.html
        - server send index.html
        - client requests style.css and js through the same connection
        - server send multiplex stream of both files
        - -> using 1 connection

- https
    - requires SSL (HTTPS)
    
- Configure nginx

    --with-http_ssl_module --with-http_v2_module 

```bash
openssl req -x509 -days 10 -nodes -newkey rsa:2048 -keyout /etc/nginx/ssl/self.key -out /etc/nginx/ssl/self.crt
```

```bash
user www-data;

worker_processes auto;

events {
  worker_connections 1024;
}

http {

  include mime.types;

  server {

    listen 443 ssl http2;
    server_name 67.205.154.222;

    root /sites/demo;

    index index.php index.html;

    ssl_certificate /etc/nginx/ssl/self.crt;
    ssl_certificate_key /etc/nginx/ssl/self.key;

    location / {
      try_files $uri $uri/ =404;
    }

    location ~\.php$ {
      # Pass php requests to the php-fpm service (fastcgi)
      include fastcgi.conf;
      fastcgi_pass unix:/run/php/php7.2-fpm.sock;
    }
  }
}
```

# Server Push
- https://nghttp2.org/
- https://www.nginx.com/blog/nginx-1-13-9-http2-server-push/

```bash
apt-get install -y nghttp2-client

nghttp -nys https://67.205.154.222/index.html

# Check whether other resources are also downloaded at the same time
nghttp -nysa https://67.205.154.222/index.html
```

```bash
user www-data;

worker_processes auto;

events {
  worker_connections 1024;
}

http {

  include mime.types;

  server {

    listen 443 ssl http2;
    server_name 67.205.154.222;

    root /sites/demo;

    index index.php index.html;

    ssl_certificate /etc/nginx/ssl/self.crt;
    ssl_certificate_key /etc/nginx/ssl/self.key;

    location = /index.html {
        http2_push /style.css;
        http2_push /thumb.png;
    }

    location / {
      try_files $uri $uri/ =404;
    }

    location ~\.php$ {
      # Pass php requests to the php-fpm service (fastcgi)
      include fastcgi.conf;
      fastcgi_pass unix:/run/php/php7.2-fpm.sock;
    }
  }
}
```

- After we set the http2_push, check that all the resources delivered when we request like:
```bash
nghttp -nys https://67.205.154.222/index.html
```

# Https
```bash
# Make dhparam.pem 
openssl dhparam 2048 -out /etc/nginx/ssl/dhparam.pem
```

```bash
user www-data;

worker_processes auto;

events {
  worker_connections 1024;
}

http {

  include mime.types;

  # Redirect all traffic to HTTPS
  server {
      listen 80;
      server_name 67.205.154.222;
      return 301 https://$host$request_uri;
  }

  server {

    listen 443 ssl http2;
    server_name 67.205.154.222;

    root /sites/demo;

    index index.html;

    ssl_certificate /etc/nginx/ssl/self.crt;
    ssl_certificate_key /etc/nginx/ssl/self.key;

    # Disable SSL
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;

    # Optimize cipher suits
    ssl_prefer_server_ciphers on;
    ssl_ciphers ECDH+AESGCM:ECDH+AES256:ECDH+AES128:DH+3DES:!ADH:!AECDH:!MD5;

    # Enable DH Params
    ssl_dhparam /etc/nginx/ssl/dhparam.pem;

    # Enable HSTS
    add_header Strict-Transport-Security "max-age=31536000" always; # header that let the browser not to load with HTTP

    # SSL sessions
    ssl_session_cache shared:SSL:40m;
    ssl_session_timeout 4h;
    ssl_session_tickets on;

    location / {
      try_files $uri $uri/ =404;
    }

    location ~\.php$ {
      # Pass php requests to the php-fpm service (fastcgi)
      include fastcgi.conf;
      fastcgi_pass unix:/run/php/php7.2-fpm.sock;
    }
  }
}
```

- https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange
- https://hackernoon.com/algorithms-explained-diffie-hellman-1034210d5100

```bash
curl -Ik http://67.205.154.222/
```

# Rate limiting
- Security
- Reliability
- Shaping

- Info
    - https://www.joedog.org/siege-home/
    - https://www.nginx.com/blog/rate-limiting-nginx/
    - https://www.freecodecamp.org/news/nginx-rate-limiting-in-a-nutshell-128fe9e0126c/

```bash 
apt-get install siege
siege -v -r 2 -c 5 https://67.205.154.222/thumb.png


New configuration template added to /root/.siege
Run siege -C to view the current settings in that file
** SIEGE 4.0.4
** Preparing 5 concurrent users for battle.
The server is now under siege...
HTTP/1.1 200     0.03 secs:   12627 bytes ==> GET  /thumb.png
HTTP/1.1 200     0.03 secs:   12627 bytes ==> GET  /thumb.png
HTTP/1.1 200     0.03 secs:   12627 bytes ==> GET  /thumb.png
HTTP/1.1 200     0.04 secs:   12627 bytes ==> GET  /thumb.png
HTTP/1.1 200     0.02 secs:   12627 bytes ==> GET  /thumb.png
HTTP/1.1 200     0.02 secs:   12627 bytes ==> GET  /thumb.png
HTTP/1.1 200     0.03 secs:   12627 bytes ==> GET  /thumb.png
HTTP/1.1 200     0.03 secs:   12627 bytes ==> GET  /thumb.png
HTTP/1.1 200     0.03 secs:   12627 bytes ==> GET  /thumb.png
HTTP/1.1 200     0.03 secs:   12627 bytes ==> GET  /thumb.png

Transactions:		          10 hits
Availability:		      100.00 %
Elapsed time:		        0.08 secs
Data transferred:	        0.12 MB
Response time:		        0.03 secs
Transaction rate:	      125.00 trans/sec
Throughput:		        1.51 MB/sec
Concurrency:		        3.62
Successful transactions:          10
Failed transactions:	           0
Longest transaction:	        0.04
Shortest transaction:	        0.02
```

```bash
user www-data;

worker_processes auto;

events {
  worker_connections 1024;
}

http {

  include mime.types;

  # Define limit zone
  limit_req_zone $request_uri zone=MYZONE:10m rate=1r/s;

  # Redirect all traffic to HTTPS
  server {
      listen 80;
      server_name 67.205.154.222;
      return 301 https://$host$request_uri;
  }

  server {

    listen 443 ssl http2;
    server_name 67.205.154.222;

    root /sites/demo;

    index index.html;

    ssl_certificate /etc/nginx/ssl/self.crt;
    ssl_certificate_key /etc/nginx/ssl/self.key;

    # Disable SSL
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;

    # Optimize cipher suits
    ssl_prefer_server_ciphers on;
    ssl_ciphers ECDH+AESGCM:ECDH+AES256:ECDH+AES128:DH+3DES:!ADH:!AECDH:!MD5;

    # Enable DH Params
    ssl_dhparam /etc/nginx/ssl/dhparam.pem;

    # Enable HSTS
    add_header Strict-Transport-Security "max-age=31536000" always; # header that let the browser not to load with HTTP

    # SSL sessions
    ssl_session_cache shared:SSL:40m;
    ssl_session_timeout 4h;
    ssl_session_tickets on;

    location / {
      limit_req zone=MYZONE; # add burst=5 to allow bursting, 1+5=6 connections max, nodelay for allowing the quick response with burst
      try_files $uri $uri/ =404;
    }

    location ~\.php$ {
      # Pass php requests to the php-fpm service (fastcgi)
      include fastcgi.conf;
      fastcgi_pass unix:/run/php/php7.2-fpm.sock;
    }
  }
}
```

- Check fail after applying limit
```bash
root@ubuntu-s-1vcpu-1gb-nyc1-01:~# siege -v -r 2 -c 5 https://67.205.154.222/thumb.png
** SIEGE 4.0.4
** Preparing 5 concurrent users for battle.
The server is now under siege...
HTTP/1.1 200     0.01 secs:   12627 bytes ==> GET  /thumb.png
HTTP/1.1 503     0.03 secs:     222 bytes ==> GET  /thumb.png
HTTP/1.1 503     0.01 secs:     222 bytes ==> GET  /thumb.png
HTTP/1.1 503     0.03 secs:     222 bytes ==> GET  /thumb.png
HTTP/1.1 503     0.03 secs:     222 bytes ==> GET  /thumb.png
HTTP/1.1 503     0.03 secs:     222 bytes ==> GET  /thumb.png
HTTP/1.1 503     0.02 secs:     222 bytes ==> GET  /thumb.png
HTTP/1.1 503     0.01 secs:     222 bytes ==> GET  /thumb.png
HTTP/1.1 503     0.02 secs:     222 bytes ==> GET  /thumb.png
HTTP/1.1 503     0.02 secs:     222 bytes ==> GET  /thumb.png

Transactions:		           1 hits
Availability:		       10.00 %
Elapsed time:		        0.06 secs
Data transferred:	        0.01 MB
Response time:		        0.21 secs
Transaction rate:	       16.67 trans/sec
Throughput:		        0.23 MB/sec
Concurrency:		        3.50
Successful transactions:           1
Failed transactions:	           9
Longest transaction:	        0.03
Shortest transaction:	        0.01
```

# Basic Auth
```bash
htpasswd -c /etc/nginx/.htpasswd user1
```

```bash
user www-data;

worker_processes auto;

events {
  worker_connections 1024;
}

http {

  include mime.types;

  # Define limit zone
  limit_req_zone $request_uri zone=MYZONE:10m rate=1r/s;

  # Redirect all traffic to HTTPS
  server {
      listen 80;
      server_name 67.205.154.222;
      return 301 https://$host$request_uri;
  }

  server {

    listen 443 ssl http2;
    server_name 67.205.154.222;

    root /sites/demo;

    index index.html;

    ssl_certificate /etc/nginx/ssl/self.crt;
    ssl_certificate_key /etc/nginx/ssl/self.key;

    # Disable SSL
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;

    # Optimize cipher suits
    ssl_prefer_server_ciphers on;
    ssl_ciphers ECDH+AESGCM:ECDH+AES256:ECDH+AES128:DH+3DES:!ADH:!AECDH:!MD5;

    # Enable DH Params
    ssl_dhparam /etc/nginx/ssl/dhparam.pem;

    # Enable HSTS
    add_header Strict-Transport-Security "max-age=31536000" always; # header that let the browser not to load with HTTP

    # SSL sessions
    ssl_session_cache shared:SSL:40m;
    ssl_session_timeout 4h;
    ssl_session_tickets on;

    location / {
      auth_basic "Secure Area";
      auth_basic_user_file /etc/nginx/.htpasswd;
      try_files $uri $uri/ =404;
    }

    location ~\.php$ {
      # Pass php requests to the php-fpm service (fastcgi)
      include fastcgi.conf;
      fastcgi_pass unix:/run/php/php7.2-fpm.sock;
    }
  }
}
```

# Hardening Nginx
```bash
htpasswd -c /etc/nginx/.htpasswd user1
```

```bash
apt-get update
```

- Hide nginx versions from header
- xframe
- Remove unused nginx default modules like
    - http_autoindex_module

```bash
user www-data;

worker_processes auto;

events {
  worker_connections 1024;
}

http {

  include mime.types;

  server_tokens off;

  # Redirect all traffic to HTTPS
  server {
      listen 80;
      server_name 67.205.154.222;
      return 301 https://$host$request_uri;
  }

  server {

    listen 443 ssl http2;
    server_name 67.205.154.222;

    root /sites/demo;

    index index.html;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";

    ssl_certificate /etc/nginx/ssl/self.crt;
    ssl_certificate_key /etc/nginx/ssl/self.key;

    # Disable SSL
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;

    # Optimize cipher suits
    ssl_prefer_server_ciphers on;
    ssl_ciphers ECDH+AESGCM:ECDH+AES256:ECDH+AES128:DH+3DES:!ADH:!AECDH:!MD5;

    # Enable DH Params
    ssl_dhparam /etc/nginx/ssl/dhparam.pem;

    # Enable HSTS
    add_header Strict-Transport-Security "max-age=31536000" always; # header that let the browser not to load with HTTP

    # SSL sessions
    ssl_session_cache shared:SSL:40m;
    ssl_session_timeout 4h;
    ssl_session_tickets on;

    location / {
      try_files $uri $uri/ =404;
    }

    location ~\.php$ {
      # Pass php requests to the php-fpm service (fastcgi)
      include fastcgi.conf;
      fastcgi_pass unix:/run/php/php7.2-fpm.sock;
    }
  }
}
```

# Reverse Proxy & Load Balancing

```bash
events {}

http {
    server {
        listen 8888;

        location / {
            return 200 "Hello from NGINX";
        }
    }
}
```

```bash
nginx -c ~/nginx.conf

curl http://localhost:8888

# run php server 
php -S localhost:9999 resp.txt
```

# Reverse Proxy
- Intermediary between clients and the sources(servers)
- Common use case
    - php backend + nginx reverse proxy <-> client
    - node.js, ruby ...

```bash
events {}

http {
    server {
        listen 8888;

        location / {
            return 200 "Hello from NGINX";
        }

        location /php {
            add_header proxied nginx; # to clients
            proxy_set_header proxied nginx; # to servers
            proxy_pass "http://localhost:9999/";
        }
    }
}
```

# Load Balancer
```bash
events {}

http {
    server {
        listen 8888;

        location / {
            proxy_pass 'http:localhost:10001/';
        }
    }
}
```

```bash
while sleep 0.5; do curl http://localhost:8888; done
```

```bash
events {}

http {

    upstream php_server {
            server localhost:10001;
            server localhost:10002;
            server localhost:10003;
    }

    server {
        listen 8888;

        location / {
            proxy_pass http://php_servers;
        }
    }
}
```

# LB Options
- Sticky sessions: ip hash
```bash
events {}

http {

    upstream php_server {
            ip_hash;
            # least_conn; # lb by congestion
            server localhost:10001;
            server localhost:10002;
            server localhost:10003;
    }

    server {
        listen 8888;

        location / {
            proxy_pass http://php_servers;
        }
    }
}
```