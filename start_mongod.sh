# script shell permettant de lancer le service mongod à chaque redémarrage de l'ordinateur

sudo rm -rf /var/lib/mongodb
sudo rm -rf /var/log/mongodb
sudo mkdir /var/lib/mongodb
sudo mkdir /var/log/mongodb
sudo chown -R mongodb:mongodb /var/lib/mongodb
sudo chown -R mongodb:mongodb /var/log/mongodb
