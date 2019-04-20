var friends = require('../data/friends.js');

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });
    // code here


app.post("/api/friends", function(req, res) {

    var bestMatch = {
        name: "",
        photo: "",
        totalScores: 100
    };
    
    var userInput = req.body;
    var totalDifference = 0;
    for (var i = 0; i < friends.length; i++) {
      totalDifference = 0;
      var currentFriendScores = friends[i].scores;

      for (var j = 0; j <currentFriendScores.length; j++){
          totalDifference += Math.abs(

            parseInt(currentFriendScores[j])
            -parseInt(userInput.scores[j])

          );

      }

      if (bestMatch.totalScores > totalDifference){
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.totalScores = totalDifference
      }
    };

    friends.push(userInput);
            res.json(bestMatch);
        });

    };   

// outter loop: loop through friendsList and the inner loop will loop through the scores in the firendsList.

Math.abs

// inner loop: comparing scores between the user and the current frined from the outter loop

// inner loop variables: [j]; current friend score 

// request: user input
// response: server output (what the user gets back)