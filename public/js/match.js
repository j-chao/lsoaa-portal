<<<<<<< HEAD

var mentor_reference = firebase.database().ref('mentors').child(userId);
var coach_reference = firebase.database().ref('coaches').child(userId);

for(var i in mentor_reference)
{
	for(var j in coach_reference)
	{
		if (mentor_reference[i].schools == coach_reference[j].schools){
			mentor_reference[i].match = coach_reference[j];
		}
	}
}
=======
var mentor_reference = firebase.database().ref('mentors');
var coach_reference = firebase.database().ref('coaches');

mentor_reference.once('value').then(function(snapshot) {
    var mentors = snapshot.val();
    coach_reference.once('value').then(function(snapshot) {
	var coaches = snapshot.val();
	
	for(var i in mentors)
	{
            for(var j in coaches)
            {
                if (mentors[i].schools == coaches[j].schools){
                    mentors[i].match = coaches[j];
		    console.log("there is a match!",mentors[i],coaches[j]);
                }
<<<<<<< HEAD
        }
}
>>>>>>> master
=======
            }
	}

    });
});
>>>>>>> master
