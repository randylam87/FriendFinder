module.exports = {
    survey: (app,friends) => {
        let bestMatchScore = 50;
        let currentMatchScore =0;
        let bestMatchedUser;
        app.post('/survey', (req, res) => {
            let user = req.body;
            //compatability logic *lower score = better match*
            for(let i=0;i<friends.length; i++){
                for(let k=0; k< friends[i].scores.length; k++){
                   currentMatchScore += Math.abs(user.scores[k] - friends[i].scores[k]);
                }
                if(bestMatchScore >= currentMatchScore) {
                    bestMatchScore = currentMatchScore;
                    bestMatchedUser = friends[i];
                }
                currentMatchScore = 0;
            }
            res.json(bestMatchedUser);
            friends.push(user);
            res.end();
        });
    },
    friendsJSON: (app, friends) => {
        app.get('/api/friends' , (req,res)=>{
            res.json(friends);
        });
    },
};