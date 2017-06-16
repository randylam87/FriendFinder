const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routing/htmlRoutes.js');
const api = require('./routing/apiRoutes.js');
//for logic
const friends = [];
//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));
//routing
routes.surveyHtml(app);
//api
console.log(api.survey(app,fs,friends));
// api.survey(app,fs);
api.friendsJSON(app,friends);

app.listen(PORT,(req,res)=>{
    console.log(`Server is listening on PORT ${PORT}`);
});


routes.homeHtml(app, express);