const api = {
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    survey: (app,fs,friends) => {
        app.post('/api/friends', (req, res) => {
            let user = req.body;
            api.compatability(user,friends);
            friends.push(user);
        });
    },
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    friendsJSON: (app,friends) =>{
        app.get('/api/friends' , (req,res)=>{
            res.json(friends);
        });
    },

    compatability: (user, friends)=>{
        console.log(user);
        console.log(friends);
    }
};

module.exports = api;