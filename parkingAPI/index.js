var express = require('express'); // Web Framework
var cors = require('cors');
var app = express();
var sql = require('mssql'); // MS Sql Server client

app.use(cors());

//Configuracion
const sqlConfig = {
    user: 'student',
    password: 'student2017',
    server: 'localhost',
    database: 'parking',
    port: 1433,
    debug: true,
    options: {
        encrypt: false,
        instanceName: 'SQLEXPRESS'
    }
};

var server = app.listen(8091, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("app listening at http://%s:%s", host, port)
});

app.get('/updateparking/:name.:status', function(req, res){
    console.log('call to api/updateparking');
    const pool = new sql.ConnectionPool(sqlConfig, err => {
            if(err) console.log(err);

            var name = req.params.name;
            var status = req.params.status;

            var request = pool.request();
            
            var queryText = `update dbo.Devices set [Status] = ${status},\
                                [UpdateDate]=getdate()\
                             where [Name] = ${name}`;

                request.query(queryText, (err, recordset) => {
                        if(err) console.log(err);

                        var data = {
                            success: false,
                            message: err,
                            device: name,
                            status: status,
                            rowsAffected: result.rowsAffected
                         }

                         res.send(data);
                })
    });
    
    pool.on('error', err => {
        res.send({error: err, success:false});
    });
})

app.get('/addparking/:name.:status', function(req, res){
    console.log('call to api/addparking');
    const pool = new sql.ConnectionPool(sqlConfig, err => {
            if(err) console.log(err);

            var name = req.params.name;
            var status = req.params.status;

            var request = pool.request();
            
            var queryText = `insert into dbo.Devices(Name, Status, UpdateDate)\
                                values('${name}', ${status}, getdate())`;

                request.query(queryText, (err, recordset) => {
                        if(err) console.log(err);

                         var data = {
                            success: false,
                            message: err,
                            device: name,
                            status: status,
                            rowsAffected: result.rowsAffected
                         }

                         res.send(data);
                })
    });
    
    pool.on('error', err => {
        res.send({error: err, success:false});
    });
})

app.get('/removeparking/:id', function(req, res){
    console.log('call to api/remove');
    const pool = new sql.ConnectionPool(sqlConfig, err => {
            if(err) console.log(err);

            var id = req.params.id;

            var request = pool.request();
            
            var queryText = `delete from dbo.Devices where dbo.Devices.DeviceId = ${id}`;

                request.query(queryText, (err, recordset) => {
                        if(err) console.log(err);

                         var data = {
                            success: false,
                            message: err,
                            device: name,
                            status: status,
                            rowsAffected: recordset.rowsAffected
                         }

                         res.send(data);
                })
    });
    
    pool.on('error', err => {
        res.send({error: err, success:false});
    });
})

app.get('/getdevices', function(request, response){
    console.log('call to api/parking');
    const pool = new sql.ConnectionPool(sqlConfig, err => {
            if(err) console.log(err);

            var request = pool.request();
            
            var queryText = `SELECT * from [parking].[dbo].[devices]`;

                request.query(queryText, (err, recordset) => {

                     if(err) console.log(err);

                     if(recordset.recordset.length > 0)
                     {
                        console.log("Success getdevices");

                        var result = {
                            success: true, 
                            devices: recordset.recordset
                        }; 
                     }

                     response.send(result);
                 })
    });
    
    pool.on('error', err => {
        res.send({error: err, success:false});
    });
})