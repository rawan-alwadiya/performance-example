const express = require('express');

const app = express();

function delay(duration) {
    const startTime = Date.now();
    while(Date.now() - startTime < duration) {
        //event loop is blocked...
    }
}

app.get('/', (req, res) => {
    // JSON.stringify({}) => "{}"
    // JSON.parse("{}") => {}
    // [5,1,4,2,3].sort()
    res.send(`Performance example ${process.pid}`);
});

app.get('/timer', (req, res) => {
    //delay the response
    delay(4000);
    res.send(`Beep beep beep! ${process.pid}`);
});

console.log('Running server.js...')
console.log('Worker process started');
app.listen(3000);
