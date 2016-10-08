
function writeCoach(userId, coachData)
{
	var reference = firebase.database().ref('coaches').child(userId);
	reference.update(coachData);
    //writeSchoolCoach(coachData);
}

function readCoach(userId, callback)
{
	var reference = firebase.database().ref('coaches').child(userId);
	reference.once('value')
    .then(
        function(snapshot) {
            callback(snapshot.val());
        }
    ).catch(
        function(error) {
            console.log("error retrieving data", error);
        }
    );
}

coachData1 = {"name": "Bob", "email": "bob@bob.com", "cellNumber": "1234567890", "schoolName": "FallField Elementary", "address": "1234 school lane"};

coachData2 = {"name": "Cassie", "email": "Cassie@bob.com", "cellNumber": "1134567890", "schoolName": "WinterField Elementary", "address": "12344 school lane"};

//writeCoach("12345", readCoach(coachData1));
//writeCoach("23456", function(coachData2));
writeCoach("12345", coachData1);
readCoach("12345", function(data) {
    console.log("coach info", data);
});
writeCoach("23456", coachData2);
readCoach("23456", function(data) {
    console.log("coach info", data);
});
