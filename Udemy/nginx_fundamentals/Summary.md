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

    try_files $uri /thumb.png /greet;

    location /greet {
      return 200 "hello user";
    }
  }
}
```