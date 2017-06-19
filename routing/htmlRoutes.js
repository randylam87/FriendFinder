
module.exports = {
    surveyHtml: (app,path) => {
        app.get('/survey', (req, res) => {
            res.sendFile(path.join(__dirname, '../public', 'survey.html'));
        });
    },

    homeHtml: (app, express, path) => {
        app.use(function (req, res) {
            res.sendFile(path.join(__dirname, '../public', 'home.html'));
        });
    }
};