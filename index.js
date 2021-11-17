const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = process.env.PORT || 5000


app.post('/api/v1/testPost/', (req, res) => {
    console.log(req.body);
    res.status(200).send('All is Ok')
    return;
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));