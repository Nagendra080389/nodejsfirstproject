const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/api/v1/testPost/', (req, res) => {
    console.log(req.body);
    console.log(res);
    res.status(200).send('All is Ok')
    return;
});

app.listen(3000, () => console.log(`App is running`));