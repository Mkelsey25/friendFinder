var friends = require("../app/data/friends.js");
var singleUserInfo = {
    name:"",
    score:"",
    picture: ""
};
var userInfo = [];
var userDifferenceScores = [];
var score = 0;
module.exports = function(app){
    app.get('/api/friends', function(request, response) {
    response.json(friends);
    });
    
     app.post('/api/friends', function(request, response) {
        
            friends.push(request.body);
            //friends.push(request.body.scores);
            //console.log("It worked?");

            

            for(var i = 0; i < friends.length; i++) {
                var currentUserSpace = friends.length - 1;
                //console.log(friends[currentUserSpace].scores);
                var potentialMatchSpace = currentUserSpace - i;
                console.log(friends[currentUserSpace]);
                console.log(friends[potentialMatchSpace]); 
                
                for(var e = 0; e < friends[currentUserSpace].scores.length; e++) {

                    function difference (a, b,) {
                        //a = parseInt(friends[currentUserSpace].scores[e]);
                        //b = parseInt(friends[potentialMatchSpace].scores[e]);
                        a = parseInt(friends[currentUserSpace].scores[e]);
                        b = parseInt(friends[potentialMatchSpace].scores[e]);
                       var newScore = Math.abs(a - b);
                       //console.log("NEW SCORE");
                       //console.log(newScore);
                       score += parseInt(newScore);
                       //console.log("SCORE: " + score);
                       
                       //console.log(score);


                        if(i === friends.length - 1 && e === friends[currentUserSpace].scores.length - 1) {
                        userDifferenceScores.push(score);
                        //console.log(userDifferenceScores);
                        singleUserInfo = {
                            name: friends[potentialMatchSpace].name,
                            userScore: score,
                            picture: friends[potentialMatchSpace].photo
    
                        };
                        userInfo.push(singleUserInfo);
                        //console.log(userInfo);
                        score = 0;
                        console.log(bestMatch(userDifferenceScores));
                        var finalMatch = userDifferenceScores[1];
                        module.exports = finalMatch;
                        //console.log("Final Match Number: " + finalMatch);
                        
                        for(var k = 0; k < userInfo.length; k++) {

                            if(userInfo[k].userScore == finalMatch && userInfo[k].name != friends[currentUserSpace].name) {
                                console.log("Winning Match: " + userInfo[k].name + " " + userInfo[k].picture);
                                var winningUser = userInfo[k];
                                response.json(winningUser + userInfo[k].picture);
                                }

                            else {
                                console.log("Calculating best matches");
                            }
                            
                        }
                        

                        userDifferenceScores = [];
                        
                    }
                    else if(e === friends[currentUserSpace].scores.length - 1) {
                        userDifferenceScores.push(score);
                        singleUserInfo = {
                            name: friends[potentialMatchSpace].name,
                            userScore: score,
                            picture: friends[potentialMatchSpace].photo
    
                        };

                        userInfo.push(singleUserInfo);
                        //console.log("User Info Array: " + userInfo);
                        score = 0;
                        }
                       
                    else {
                        console.log("Still calculating... please hold.");
                    }
                   }
                   difference();
                }
                console.log(userDifferenceScores);
                
                
 
                function bestMatch (items) {
                    for (var i = 0; i < items.length; i++) {
                      let value = items[i]
                      // store the current item value so it can be placed right
                      for (var j = i - 1; j > -1 && items[j] > value; j--) {
                        // loop through the items in the sorted array (the items from the current to the beginning)
                        // copy each item to the next one
                        items[j + 1] = items[j]
                      }
                      // the last item we've reached should now hold the value of the currently sorted item
                      items[j + 1] = value
                    }
                  
                    return userDifferenceScores
                  }
                  
                  
               

                   
            };
            userInfo = [];


    });
    

}



