var mentor_reference = firebase.database().ref('mentors');
var coach_reference = firebase.database().ref('coaches');

for(var i in mentor_reference)
{
        for(var j in coach_reference)
        {
                if (mentor_reference[i].schools == coach_reference[j].schools){
                        mentor_reference[i].match = coach_reference[j];
                }
        }
}
