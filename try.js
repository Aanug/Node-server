const express = require('express');
const app = express();
const port = 3002

app.get('/', (req, res) => {
    res.send('Welcome')
}
)
app.post('/friend', (req, res) => {
    res.send('hello world')
})
app.listen(port,()=>{
    console.log('listening on port ' + port)
})