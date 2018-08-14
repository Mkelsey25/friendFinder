var friends = require("../app/data/friends.js");
var userDifferenceScores = [];

module.exports = function(app){
    app.get('/api/friends', function(request, response) {
    response.json(friends);
    });
    
     app.post('/api/friends', function(request, response) {
        
            friends.push(request.body);
            //friends.push(request.body.scores);
            response.json(true);
            console.log("It worked?");
           /* for(var i = 0; i < request.body.scores.length; i++) {
                if(request[0].body.scores[i] > request[i + 1].body.scores[i]) {
                    var diff = request[0].body.scores[i] - request[i+1].body.scores[i]
                    console.log(diff);
                }
            }*/
            

            for(var i = 0; i < friends.length; i++) {
                var currentUserSpace = friends.length - 1;
                //console.log(friends[currentUserSpace].scores);
                var potentialMatchSpace = currentUserSpace - i;
                console.log(friends[currentUserSpace]);
                console.log(friends[potentialMatchSpace]); 
                var score = 0;
                for(var e = 0; e < friends[currentUserSpace].scores.length; e++) {
                    function difference (a, b) {
                        a = parseInt(friends[currentUserSpace].scores[e]);
                        b = parseInt(friends[potentialMatchSpace].scores[e]); 
                       var newScore = Math.abs(a - b);
                       score = score + newScore;
                       //console.log(score);
                       if(i === friends.length - 1 && e === friends[currentUserSpace].scores.length - 1) {
                        userDifferenceScores.push(score);
                        console.log(userDifferenceScores);
                    }
                    else {
                        console.log("Still calculationg... please hold.");
                    }
                   }
                   difference();
                   


                    
                    //console.log(friends[currentUserSpace].scores[e]);
                    //console.log(friends[potentialMatchSpace].scores[e]);
                    /*if(parseInt(friends[currentUserSpace].scores[e] > parseInt(friends[potentialMatchSpace].scores[e]))) {
                        score = score + parseInt(friends[currentUserSpace].scores[e]) - parseInt(friends[potentialMatchSpace].scores[e]);
                        if(i === friends.length - 1 && e === friends[currentUserSpace].scores.length - 1) {
                            userDifferenceScores.push(score);
                            console.log(userDifferenceScores);
                        }
                        else {
                            console.log("Still calculating... please hold.");
                        }
                    }
                    else {
                        score = score + parseInt(friends[potentialMatchSpace].scores[e]) - parseInt(friends[currentUserSpace].scores[e]);
                        if(i === friends.length - 1 && e === friends[currentUserSpace].scores.length - 1) {
                            userDifferenceScores.push(score);
                            console.log(userDifferenceScores);
                        }
                        else {
                            console.log("Still calculating... please hold.");
                        }
                    }*/

                   /* if( i === friends.length - 1 && e === friends[currentUserSpace].scores.length - 1 && parseInt(friends[currentUserSpace].scores[e]) > parseInt(friends[potentialMatchSpace].scores[e])) {
                        score = score + parseInt(friends[currentUserSpace].scores[e]) - parseInt(friends[potentialMatchSpace].scores[e]);
                        userDifferenceScores.push(score);
                        console.log(userDifferenceScores);
                    }
                    else if( i === friends.length - 1 && e === friends[currentUserSpace].scores.length - 1 && parseInt(friends[potentialMatchSpace].scores[e]) > parseInt(friends[currentUserSpace].scores[e])) {
                        score = score + parseInt(friends[potentialMatchSpace].scores[e]) - parseInt(friends[currentUserSpace].scores[e]);
                        userDifferenceScores.push(score);
                        console.log(userDifferenceScores);
                    }
                    else if(parseInt(friends[currentUserSpace].scores[e]) > parseInt(friends[potentialMatchSpace].scores[e])) {
                        score = score + parseInt(friends[currentUserSpace].scores[e]) - parseInt(friends[potentialMatchSpace].scores[e]);

                    }
                    else {
                        score = score + parseInt(friends[potentialMatchSpace].scores[e]) - parseInt(friends[currentUserSpace].scores[e]);
                    }*/
                     
                    //console.log(score);

                }
                
                
                //console.log(friends[potentialMatchSpace].scores);
                /*for(var e = 0; e < friends[potentialMatchSpace].scores.length; i++) {
                    console.log(friends[currentUserSpace].scores[i]);
                    console.log("BREAK");
                    //console.log(friends[currentUserSpace].scores[i]);
                    console.log(friends[currentUserSpace - i].scores[i]);
                    //console.log(friends[potentialMatchSpace].scores[i]);

                     
                };*/
                   
            };

    });
    

}


