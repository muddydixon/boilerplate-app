Application Boilerplate including express / bookshelf / react / flux
-----

Application boilerplate for sample app server / web client.

## How to use

```zsh
% git clone https://github.com/muddydixon/boilerplate-app.git
% cd boilerplate-app
% npm install
% docker run -d -e MYSQL_DATABASE=boilerplate -e MYSQL_PASSWORD=boilerplate -e MYSQL_USER=boilerplate  -e MYSQL_ROOT_PASSWORD=boilerplate -p 3306:3306 --name boilerplate_mysql mysql
% npm run db:latest
% npm jsx:build
% npm start
% open http://localhost:8080/
```

## How to modify
1. modify `.git/config`
  * change repository url
1. modify package.json
  * change package name, description, keywords, author
  * add test

## Author
muddydixon<muddydixon@gmail.com>

## Lisence
Apache Lisence Version 2.0
