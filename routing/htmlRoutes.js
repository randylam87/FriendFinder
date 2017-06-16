// A GET Route to /survey which should display the survey page.
// A default USE route that leads to home.html which displays the home page.

const path = require('path');
const routes = {
    surveyHtml: (app) => {
        app.get('/survey', (req, res) => {
            res.sendFile(path.join(__dirname, '../public', 'survey.html'));
        });
    },
    homeHtml: (app,express) => {
        console.log(path.join(__dirname, '../public'));
        app.use(express.static(path.join(__dirname, '../public')));
    }
};
module.exports = routes;