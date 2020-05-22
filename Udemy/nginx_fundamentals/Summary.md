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