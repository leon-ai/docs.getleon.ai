# Reverse Proxy Setup

## Apache2

This allows you to access the Leon web app using an Apache virtual host.

## Prerequisites 

- **A domain**
> DNS A (and/or AAAA) records have to point to your webserver.

- **SSL certificate**
> A valid SSL certificate.

> The setup is possible without SSL, though using HTTPS is highly recommended. The following configuration examples apply to a HTTPS enforced site.

- **An operating system**
> Obvious.

- **Apache2 / HTTPD**
> Apache2 needs to be installed, and the modules `mod_ssl`, `mod_proxy` as well as `mod_wstunnel` need to be loaded.
<br>Refer to the Apache documentation specific to your operating system to find the correct procedure on how to install and load modules as well as on how and where to define virtual hosts.

- **Firewall**
> If a firewall is in place, the ports 80 and 443 need to be opened and/or forwarded accordingly.
<br>If Leon resides on a different machine, the configured `LEON_PORT` needs to be reachable by the webserver.

- **Leon**
> A working Leon installation. It is recommended to test if Leon works as expected before attempting to troubleshoot issues with the reverse proxy.

> Warning - As of writing this document, the following configuration examples only apply to the DEVELOPMENT branch of Leon.
<br>Since this branch is deemed stable enough by the author, the complex procedure for setting a reverse proxy up with Leon from the Master branch (it involves tampering with the source files) will not be explained.

## Leon configuration (.env)

    # Server
    LEON_HOST=https://leon.example.com
    LEON_PORT=1337
    
## Apache virtual host (leon.conf)

`leon.example.com` is the domain you will use to reach the Leon web app.

`127.0.0.1` is the machine the web server reaches the Leon backend on. If Leon resides on a different machine, replace this with the hostname or IP address of that machine.

`:1337` is the port the Leon backend listens on (you specified it above with `LEON_PORT`).


    <VirtualHost *:80>
      ServerName            leon.example.com
      
      RewriteEngine         On
      RewriteRule           ^(.*)$ https://%{HTTP_HOST}$1 [R=301,L]
    </VirtualHost>
    <VirtualHost *:443>
      ServerName            leon.example.com
      
      SSLEngine             On
      SSLCertificateFile    "/path/to/fullchain.pem"
      SSLCertificateKeyFile "/path/to/privkey.pem
      
      ProxyPreserveHost     Off
      ProxyPass /           http://127.0.0.1:1337/
      ProxyPassReverse /    http://127.0.0.1:1337/
      
      RewriteEngine         On
      RewriteCond           %{HTTP:Upgrade} websocket [NC]
      RewriteCond           %{HTTP:Connection} upgrade [NC]
      RewriteRule           ^/?(.*) "ws://127.0.0.1:1337/$1" [P,L]
    </VirtualHost>

 
 That's it!
      
      
