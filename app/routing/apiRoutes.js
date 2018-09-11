// require the friends.js file that holds our friends array
var friendData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {

    var myFriend = req.body;
    var currentMatch;
    var currentDiff;
    var bestDiff;

    for (var i = 0; i < friendData.length; i++) {
      currentDiff = 0;
      for (var j = 0; j < 10; j++) {
        currentDiff = currentDiff + Math.abs((parseInt(myFriend.scores[j]) - friendData[i].scores[j]));
      }
      if (i === 0) { 
        currentMatch = 0;
        bestDiff = currentDiff;
      } else {
        if (currentDiff < bestDiff) {
          currentMatch = i;
          bestDiff = currentDiff;
        }
      }
    }
    friendData.push(myFriend);
  // displays your best match 
    res.send(friendData[currentMatch]);
  });
// clear out our friends array 
  app.post("/api/clear", function() {
   friendData = [];

    console.log(friendData);
  });
};