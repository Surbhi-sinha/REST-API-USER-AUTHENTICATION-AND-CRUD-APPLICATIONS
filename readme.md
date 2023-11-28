**Instuction for the configuration settings.**

added the dependencies in the package.json

```
"dependencies": {
    "nodemon": "^3.0.1",
    "ts-node": "^10.9.1",
    "typescript": "^5.2.2"
  }
```

configure the typescript file 

1. create a new file "tsconfig.json".
2. open a new object and add:
   ```
   {
      "compilerOptions":{
            "module" : "NodeNext",
            "moduleResolution": "node",
            "baseUrl": "src",
            "outDir": "dist",
            "sourceMap": true,
            "noImplicitAny": true,
      },
      "include": ["src/**/*"],
    }
   ```
      include "src/**/*" means include the src folder -> all the folders-> all the files


set up the nodemon 
1. create a new file **nodemon.json**
2. add the following 
      ```
      {
      "watch":["src"],
      "ext" : ".ts, .js",
      "exec" : "ts-node ./src/index.ts"
      }
      ```
      this implicitly tell the nodemon to watch the changes in the **src** folder , check for the files with extension **.ts , .js** and execute the command **ts-node ./src/index.ts**.

add the script **start** in the package.json file to start the nodemon.
```
"scripts": {
    "start":"nodemon"
  },
```

after the configuration changes just start the terminal and command **npm start**.


Install all the required frameworks from the terminal
```
npm install express http body-parser cookie-parser compression cors mongoose
```
body-parser
body-parser will take the body of your request and parse it to whatever you want your server to receive in POST/PUT requests (JSON, URL encoded, text, raw).
cookie-parser will parse the Cookie header and handle cookie separation and encoding, maybe even decrypt it!
Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain.

after that declare the types of the dependencies from terminal
```
npm i @types/express @types/body-parser @types/cookie-parser @types/compression @types/cors @type/mongoose
```

create a cluster from the mongoDb atlas and copy the cluster link from the dashboard and fill the <password>.


**HOW TO RUN THE PROJECT**

    from terminal enter command "npm start"
    Open mongoDB atlas and the database of the current project.
    Open Postman then open the RESTAPI collection and then send the requests to the servers.

**BASICALLY WHAT THIS PROJECT DOES IS :-**

    Open postman and see the RESTAPI collection 
    there we have authentication and user folders which are Different request to the mongodb atlas server.
    authentication has:- 
        REGISTER, LOGIN
    User has :-
        GET, DELETE and UPDATE

**MORE TO ADD TO THE PROJECT**

    Create a UI for the login page and register page so that user can login/register from UI.
