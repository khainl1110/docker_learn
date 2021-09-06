const express = require('express');
const cors = require('cors');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server'
    });
client.set('visits', 0);

// App
const app = express();
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    client.get('visits', (err, visits) => {
        res.send({"Message": 'Number of visits is ' + visits});
        client.set('visits', parseInt(visits) +1);
    })

})

let port = 8080
app.listen(port , () => {
    console.log(`Listening to port: ${port}`)
})