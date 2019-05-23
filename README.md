# Wordpress 

## Requirements

* PHP, MySQL, Nginx and PHPMyAdmin services included.

## Getting Started

### Step 1: Set WP env

#### Option 1: Run the project with docker container

* Download Docker https://www.docker.com/community-edition
* Download Docker compose https://docs.docker.com/compose/install/
* Clone this project repo on any working folder.
* Create .env file to specifiy credentials and some other info. Refer to env.example file
* Open the OS terminal and enter the Project path.
* Write `docker-compose up` in your terminal.
* Now you can open `http://localhost/wp-login.php` in your web browser. Refer to env file for admin credentials.

Notes: Need to edit wp-config.php?, you will have to enter docker container:
* Enter `docker exec -it wordpress sh` in order to access the container
* install a text editor like nano or vim. Or complete step 3
* Run `nano wp-config.php` to edit. 

### Step 2: Pull/Sync DB from DEV Server

* Under WP Admin Panel go to `plugins` section and `activate` the plugins: `WP Sync DB` and `WP Sync DB Media Files`.
* Pull/Sync latest DB from DEV server: Go to `Tools/Migrate DB` and, on the `Migrate` Tab, choose `Pull` option and enter the DEV Server `connection info (Site URL + Secret key)`.
* Set desire options, ex. you would like to activate the `Media Files` to import images used on DEV Server.
* If your local env does not use `https` make sure to change `find/replace` options including the corresponding HTTP protocol, Ex. https://mysite.com => http://localhost
* Save Migration Profile for future DB synchronization
* Press `Migrate DB and Save`. 

### Step 3: Set permissions and owner for wordpress files, install npm and text editor
* There is a file in the container with the appropiate commands to fulfill this task, then execute in your terminal
```
docker exec -it wordpress /bin/bash -c "cd /tmp && ./complete_install.sh"
```
### Step 4: Start Coding

Remember: Once DB is synced your credentials are the ones from DEV Server.

While you're working on your `theme` you will need to install all packages and dependencies from package.json.

* so from project folder run:

```bash
$ npm install
```
* Open `gulpfile.js` and set your local `hostUrl`. Default:

``` 
var hostUrl = 'http://localhost';
```

* To compile sass, run:

```bash
$ gulp
```

