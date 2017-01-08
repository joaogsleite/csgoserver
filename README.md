## Install
* macOS
```bash
brew update
brew install homebrew/versions/node6-lts
brew install mongodb
mkdir -p /data/db
```

* Ubuntu
```bash
# NodeJS
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get update
sudo apt-get install -y nodejs


# MongoDB
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6

# only ubuntu 12.04
echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list

# only ubuntu 14.04
echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list

# only ubuntu 16.04
echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list

sudo apt-get update
sudo apt-get install -y mongodb-org
```

## Start
* Start MongoDB
```bash
sudo mongod  #macOS
sudo service mongod start  #ubuntu
```

* Start project
```bash
npm run gulp vendor
npm run gulp
npm start
```


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
<<<<<<< HEAD
exec node server/index.js >> running.log
=======
exec node index.js >> running.log

>>>>>>> 430434db5050e1f5e2cca5f8ec23093365442649
```

* Start/Stop service
```
sudo service csgoserver start
sudo service csgoserver stop
```
