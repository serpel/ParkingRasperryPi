### Requeriments
* Node JS
* SQL Server express

## 1. Run the API:

Note: Before run the API you should run the database script file on SQL Server.

### `cd parkingAPI`
### `npm install`
### `node index.js`

Runs the node API in the development mode.<br>
Open [http://localhost:8091](http://localhost:8091) to view it in the browser.

### API Documentacion
Note: If you are on developer mode the service will run on localhost, on production mode you will assign a public ip address.

```
http://serverip/updateparking/:name.:status
http://serverip/addparking/:name.:status
http://serverip/removeparking/:id
http://serverip/getdevices
```

:name -> Device Name
:status -> 0 or 1 
:id -> id of the device on database

## 2. Run the React project:

### `cd parking`
### `npm install`
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
