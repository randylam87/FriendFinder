const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routing/htmlRoutes.js');

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));
//routing
routes.homeHtml(app, express);

routes.surveyHtml(app);

//survey + home
// app.get('/:key?', (req, res) => {
// let key = req.params.key;
// switch (key) {
//     case "survey":
//         res.sendFile(path.join(`${__dirname}/public/`, "survey.html"));
//         break;
//     default:
//         res.sendFile(path.join(`${__dirname}/public/`, "home.html"));
// }
// });

app.listen(PORT,(req,res)=>{
    console.log(`Server is listening on PORT ${PORT}`);
});

app.post('/survey',(req,res)=>{
    console.log(req.body);
});