var people = [
    { firstName: 'Abhishek', lastName: 'Ghale', picture: 'Pictures/Abhishek.png' },
    { firstName: 'Adam', lastName: 'Collins', picture: 'Pictures/Adam.png' },
    { firstName: 'AJ', lastName: 'Alexander', picture: 'Pictures/AJ.png' },
    { firstName: 'Amber', lastName: 'Mitchell', picture: '' },
    { firstName: 'Barrett', lastName: 'Cid', picture: 'Pictures/Barrett.png' },
    // { firstName: 'Ben', lastName: 'Hornbacher', picture: 'Pictures/Ben.jpg' },
    { firstName: 'Brad', lastName: 'Mell', picture: 'Pictures/Brad.jpg' },
    { firstName: 'Brandon', lastName: 'Morgan', picture: 'Pictures/Brandon.jpg' },
    { firstName: 'Bryan', lastName: 'Haas', picture: 'Pictures/Bryan.png' },
    { firstName: 'Caitlin', lastName: 'Stewart', picture: 'Pictures/Caitlin.jpg' },
    { firstName: 'Chad', lastName: 'Evans', picture: 'Pictures/Chad.png' },
    { firstName: 'Chuck', lastName: 'Wallace', picture: 'Pictures/Chuck.png' },
    { firstName: 'Danny', lastName: 'Taylor', picture: 'Pictures/Danny.jpg' },
    { firstName: 'Debra', lastName: 'Depuy', picture: 'Pictures/Debra.jpg' },
    { firstName: 'Gary', lastName: 'Tipton', picture: 'Pictures/Gary.jpg' },
    { firstName: 'Jake', lastName: 'Spencer', picture: 'Pictures/Jake.jpg' },
    { firstName: 'Julie', lastName: 'Laffin', picture: 'Pictures/Julie.jpg' },
    { firstName: 'Katie', lastName: 'Solloway', picture: 'Pictures/Katie.png' },
    { firstName: 'Kimberly', lastName: 'Collins', picture: 'Pictures/Kimberly.jpg' },
    { firstName: 'Kris', lastName: 'Keepers', picture: 'Pictures/Kris.jpg' },
    { firstName: 'Kyle', lastName: 'Thomason', picture: 'Pictures/Kyle.jpg' },
    { firstName: 'Matt', lastName: 'Breeding', picture: 'Pictures/Matt.jpg' },
    { firstName: 'Micah', lastName: 'McKinnon', picture: 'Pictures/Micah.png' },
    { firstName: 'Mike', lastName: 'Mitchell', picture: 'Pictures/Mike.jpg' },
    { firstName: 'Mitch', lastName: 'Owen', picture: 'Pictures/Mitch.jpg' },
    // { firstName: 'Obiye', lastName: 'Kolokolo', picture: 'Pictures/Obiye.jpg' },
    { firstName: 'Phillip', lastName: 'Braddy', picture: 'Pictures/Phillip.jpg' },
    { firstName: 'Prather', lastName: 'Thomas', picture: 'Pictures/Prather.jpg' },
    { firstName: 'Rhonda', lastName: 'Cook', picture: 'Pictures/Rhonda.png' },
    { firstName: 'Ryan', lastName: 'Burk', picture: 'Pictures/Ryan.png' },
    { firstName: 'Ryan', lastName: 'Jayo', picture: 'Pictures/RyanJa.jpg' },
    { firstName: 'Ryan', lastName: 'Johnson', picture: 'Pictures/RyanJo.jpg' },
    { firstName: 'Shane', lastName: 'Gilbert', picture: 'Pictures/Shane.png' },
    { firstName: 'Shawna', lastName: 'Reed', picture: 'Pictures/Shawna.jpg' }    
];

var person;
getPerson();
updateScore();

loadOptions(people.map(x => x.firstName).filter(unique).sort(), document.getElementById("firstName"));
loadOptions(people.map(x => x.lastName).filter(unique).sort(), document.getElementById("lastName"));

document.getElementById("check").addEventListener("click", check);
document.getElementById("skip").addEventListener("click", skip);

function getPerson() {
    var possibilities = people.filter(x => x.picture && !x.done && !x.skip);

    if (possibilities.length === 0) {
        possibilities = people.filter(x => x.picture && !x.done);
        people.forEach(x => x.skip = null);
    }

    if (possibilities.length > 0)
    {
        if (possibilities.length > 1 && person) {
            possibilities = possibilities.filter(x => x.firstName != person.firstName || x.lastName != person.lastName);
        }
        
        person = possibilities[Math.floor(Math.random() * possibilities.length)];
        document.getElementById("img").src = person.picture;
        document.getElementById("img").title = person.firstName[0] + person.lastName[0];
    }
    else
    {
        win();
    }
}

function win() {
    var pictured = people.filter(x => x.picture).map(x => x.firstName + " " + x.lastName).join("<br>");
    var notpictured = people.filter(x => !x.picture).map(x => x.firstName + " " + x.lastName).join("<br>");
    var resultElement = document.getElementById("result");

    resultElement.innerHTML = "You got them all!<br><br>" + pictured + "<br><br>Not Pictured:<br>" + notpictured;
    resultElement.classList.remove("alert-success");
    resultElement.classList.remove("alert-warning");
    resultElement.classList.remove("alert-danger");

    document.getElementById("play").style.display = 'none';
    document.getElementById("score").style.display = 'none';
}

function loadOptions(list, select) {
    for (i = 0; i < list.length; i++) {
        var opt = document.createElement('option');
        opt.text = list[i];
        opt.value = list[i];
        select.add(opt, null);
    }
}

function unique(value, index, self) { 
    return self.indexOf(value) === index;
}

var successMessages = ["You got it!", "Great job!"];
var halfRightMessages = ["So close!", "You're half right!"];
var failureMessages = ["Try again!", "Not even close!", "Did you even try?"];

function check() {
  var firstNameSelected = document.getElementById("firstName").value;
  var lastNameSelected = document.getElementById("lastName").value;
  var resultElement = document.getElementById("result");
  removeResultStyles();

  if(firstNameSelected === person.firstName && lastNameSelected === person.lastName) {
    resultElement.innerHTML = successMessages[Math.floor(Math.random() * successMessages.length)];
    resultElement.classList.add("alert-success");

    people.find(({ firstName, lastName }) => firstName === person.firstName && lastName === person.lastName).done = "1";
    getPerson();
    updateScore();
  }
  else if(firstNameSelected === person.firstName || lastNameSelected === person.lastName) {
    resultElement.innerHTML = halfRightMessages[Math.floor(Math.random() * halfRightMessages.length)];
    resultElement.classList.add("alert-warning");
  }
  else {
    resultElement.innerHTML = failureMessages[Math.floor(Math.random() * failureMessages.length)];
    resultElement.classList.add("alert-danger");
  }
}

function skip() {
    people.find(({ firstName, lastName }) => firstName === person.firstName && lastName === person.lastName).skip = "1";
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
    removeResultStyles(resultElement);
    getPerson();
}

function removeResultStyles() {
    var resultElement = document.getElementById("result");
    resultElement.classList.remove("alert-success");
    resultElement.classList.remove("alert-warning");
    resultElement.classList.remove("alert-danger");
}

function updateScore() {
    document.getElementById("done").innerHTML = people.filter(x => x.done).length ;
    document.getElementById("left").innerHTML = people.filter(x => x.picture && !x.done).length;
}

function cheat(advance) {
    document.getElementById("firstName").value = person.firstName;
    document.getElementById("lastName").value = person.lastName;

    if (advance) {
        check();
    }

    return person.firstName + " " + person.lastName;
}
