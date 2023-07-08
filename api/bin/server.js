var app = require('express')();
const cors = require('cors')();
const http = require('http');
const https = require('https');
const fs = require('fs');
const pg = require('pg');
const basicAuth = require('express-basic-auth')

// middleware called before each route
app.use(cors);

app.use(basicAuth({
    users: { 'maria': 'pass' },
    challenge: true,
    unauthorizedResponse: getUnauthorizedResponse
}))

function getUnauthorizedResponse(req) {
    return req.auth
        ? ('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected')
        : 'No credentials provided'
}

const pool = new pg.Pool({ /* don't expose password or any sensitive info, done only for demo */
  host: 'db',
  user: 'maria',
  password: 'pass',
  database: 'animal',
});

app.get('/', function(req, res) {
    pool.query("SELECT * FROM dog", function(err, results) {
        if(err){
            console.error("err: "+err);
            throw err;
        }
        res.json(results.rows);
    })
    //pool.end();
});

const httpServer = http.createServer(app);

const httpsServer = https.createServer({
    key: fs.readFileSync('/app/cert/server.key'),
    cert: fs.readFileSync('/app/cert/server.crt'),
  }, app);

httpServer.listen(8000, () => {
    console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
});
