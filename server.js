const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routing/htmlRoutes.js');
const api = require('./routing/apiRoutes.js');
const friends = require('./app/data/friends.js');
//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));


api.friendsJSON(app,friends);
api.survey(app,friends);

//routing
routes.surveyHtml(app, path);
routes.homeHtml(app, express, path);



app.listen(PORT,(req,res)=>{
    console.log(`Server is listening on PORT ${PORT}`);
});