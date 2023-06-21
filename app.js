const express = require('express');
const app = express();
const router = require('./routes.js');

app.use(express.static("public"));
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);





app.listen(app.get('port'), function () {
    console.log('app listening at: ' + "http://localhost:" + app.get('port') + "/");
});
