## What is this? ##
This is the team work repository to be used on the Softhouse Spring Meeting in Ronneby for the **AngularJS** group.
..
### Prerequisites ###

** Build & Development environment **

*  [msys Git](https://msysgit.github.io/) - Version control system

* [NodeJS](www.nodejs.org) - Development Runtime. Atleast version *v0.12.1*

* [Sublime Text](http://www.sublimetext.com/) - Recommended text editor.

* [MongoDB](www.mongodb.org) - Database for laughing-batman

### Getting Started ###

* Clone laughing batman

```
#!bash

git clone https://github.com/Softhouse/laughing-batman.git
```

* Configure MongoDB ReST server
```
#!bash
cd laughing-batman
npm install

export GITHUB_SECRET=THISISMYSUPERSECRET
npm start
```

* Clone this repository:
   
```
#!bash

git clone git@bitbucket.org:petter_nordholm/sh-spring-meeting-angularjs.git
```

* Install required packages:

```
#!bash

cd sh-spring-meeting-angularjs
npm install
bower install
```

* Run Test Server

```
#!bash
grunt serve
```

This should fire up a web-browser with a sample page. Changes done in any file is directly reflected in the browser.
