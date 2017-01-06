


## Background service
* Configure service
```
sudo vim /etc/init/csgoserver.conf
```
```
description "node.js server"
author      "joaaoleite"

# Used to Be: Start on Startup
# until we found some mounts weren't ready yet while booting:
start on started mountall
stop on shutdown

# Automatically Respawn:
respawn
respawn limit 99 5

script
    # Not sure why $HOME is needed, but we found that it is:
    export HOME="/home/steam"

    exec /usr/bin/node /home/steam/csgoserver/index.js >> /var/log/node.log 2>&1
end script

post-start script
   # Optionally put a script here that will notifiy you node has (re)started
   # /root/bin/hoptoad.sh "node.js has started!"
end script
```

* Start/Stop service
```
sudo service csgoserver start
sudo service csgoserver stop
```
