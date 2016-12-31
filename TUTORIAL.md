# ANGULAR 2 TUTORIAL

>  WORKING IN PROGRESS

## Topics
1. Map Component
2  Tabbar Component
3. Bootstrap integration
4. Typing
5. JSON Server e XHR Request
6. services

-

## Bootstrap in `angular-cli`
```
npm install bootstrap --save
```

Modificare `angular-cli.json`:

```
"styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],
```


## Server

```
npm install json-server -g
```

```
cd server
json-server --watch db.json
```

