echo "Changing owner for wordpress files"

chown -R www-data:www-data /var/www/html

echo "Changing permissions  for wordpress files"
cd /var/www/html && find . -type f -exec chmod 644 {} + && find . -type d -exec chmod 755 {} +

echo "Enabling PPA repository for node and installing text editor"
apt update && apt install nano
cd ~
curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
bash nodesource_setup.sh
apt install nodejs

echo "Node version"
node --version

echo "npm version"
npm --version

cd /var/www/html && npm install