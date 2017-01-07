


## Background service
* Configure service
```
sudo vim /etc/init/csgoserver.conf
```
```
start on filesystem and started networking
respawn
chdir /home/steam/csgoserver/
env NODE_ENV=production
exec node index.js >> running.log

```

* Start/Stop service
```
sudo service csgoserver start
sudo service csgoserver stop
```
