var people = [
    { firstName: 'Abhishek', lastName: 'Ghale', picture: 'https://media-exp1.licdn.com/dms/image/C4E03AQEnlkRQz0C2JQ/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=FG9drSNGK2IP_O5a71ocg4r15SicLMiVYU3C_kBQNv8' },
    { firstName: 'Adam', lastName: 'Collins', picture: 'https://media-exp1.licdn.com/dms/image/C5103AQFwHz7PeTTbIQ/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=C4y1AgIEc6CO0xtRiqsd6L0Q5aX9I_f7OlWGK-nx_mY' },
    { firstName: 'AJ', lastName: 'Alexander', picture: 'https://media-exp1.licdn.com/dms/image/C4E03AQF7oSe_t2hAYw/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=P2VrZ_Mcty7HpDkgaM-h9q5lIJJEe_kbhyIACMjZUWQ' },
    { firstName: 'Amber', lastName: 'Mitchell', picture: '' },
    { firstName: 'Austin', lastName: 'Keeton', picture: 'https://avatars0.githubusercontent.com/u/14999024' },
    { firstName: 'Barrett', lastName: 'Cid', picture: '' },
    { firstName: 'Ben', lastName: 'Hornbacher', picture: 'https://media-exp1.licdn.com/dms/image/C5603AQG51XeqleWhTA/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=bWvanJUXmbW6Xe1qmauYKz9B-Stom4Yk2MiV9zJAXlI' },
    { firstName: 'Brad', lastName: 'Mell', picture: 'https://media-exp1.licdn.com/dms/image/C5603AQGKTEFyWYllqQ/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=ilyu_prL9KqqgoqZFAVdXY_noBcaDkc9DqxD2eI3108' },
    { firstName: 'Brandon', lastName: 'Morgan', picture: 'http://moderntrill.com/img/team/2.jpg' },
    { firstName: 'Brent', lastName: 'Beachler', picture: 'http://moderntrill.com/img/team/3.jpg' },
    { firstName: 'Bryan', lastName: 'Haas', picture: 'Pictures/Bryan.png' },
    { firstName: 'Caitlin', lastName: 'Stewart', picture: 'https://pbs.twimg.com/profile_images/590660648884953088/ELguo9zO_400x400.jpg' },
    { firstName: 'Chad', lastName: 'Evans', picture: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/14141987_1160643213981221_5106362624990197306_n.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=vieJ1uWnMMMAX9yBPJR&_nc_ht=scontent-dfw5-1.xx&oh=d7aa698192a39683b84d51b2c8499609&oe=5ED44132' },
    { firstName: 'Chuck', lastName: 'Wallace', picture: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/11754260_10204830037777446_4541829961710943003_n.jpg?_nc_cat=108&_nc_sid=e007fa&_nc_ohc=wSftXijcFukAX-mez0P&_nc_ht=scontent-dfw5-2.xx&oh=fe8aa770006c7420cd174538920d02c0&oe=5ED0E941' },
    { firstName: 'Danny', lastName: 'Taylor', picture: 'https://media-exp1.licdn.com/dms/image/C5603AQEtNZsiT26rjg/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=vl5AY5umW-3ujLKCSu0qude381b8WYatp2t7xGRGZzA' },
    { firstName: 'Debra', lastName: 'Depuy', picture: 'https://media-exp1.licdn.com/dms/image/C4D03AQFoBUCKTsVhyQ/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=VTtJR_U-gl7SwRoibO3ekCC1DT60jSfp8yHUn_yTZM8' },
    { firstName: 'Eric', lastName: 'Moore', picture: 'https://media-exp1.licdn.com/dms/image/C5603AQEHGGiO2w6FgA/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=czHtR00RgYW8ZURXtkSTSwYrMQn1RCwdMOpJH_yNjmI' },
    { firstName: 'Gary', lastName: 'Tipton', picture: 'https://media-exp1.licdn.com/dms/image/C4E03AQHG2dYP_KyCMQ/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=BMRHI63EerhtxuRb33CuyxVsWDMFNkBWfMXoKxJ6vpc' },
    { firstName: 'Jake', lastName: 'Spencer', picture: 'https://media-exp1.licdn.com/dms/image/C4E03AQG1mQr776_6kg/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=bLZqKVuOY16By_Hw1Fh_sZO5MPXywdqH8QCA1gG-t6s' },
    { firstName: 'Julie', lastName: 'Laffin', picture: 'https://media-exp1.licdn.com/dms/image/C5103AQFyGB68hYfVsw/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=s84NTfsK_RXedSQDrAxxxZ_4R0IjGWaKokZpfjue5YU' },
    { firstName: 'Katie', lastName: 'Solloway', picture: 'https://media-exp1.licdn.com/dms/image/C4E03AQFVDx9POIXU4Q/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=KgZPfCW4gxrySjagIaKNUvShGVraGMRo79agvCVeo_4' },
    { firstName: 'Kimberly', lastName: 'Collins', picture: 'https://avatars3.githubusercontent.com/u/15042297' },
    { firstName: 'Kyle', lastName: 'Thomason', picture: 'https://media-exp1.licdn.com/dms/image/C5603AQGv4RAG0VRxjg/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=vPzs2AMcfZtKiLLP7_7grhaRX9y2NKha2aA98UdullE' },
    { firstName: 'Matt', lastName: 'Breeding', picture: 'https://media-exp1.licdn.com/dms/image/C4D03AQGBRoz2GvDvew/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=tpv_LiXjfiMFHbvzSmJ8fmXm08zNz1pS65mNQ92VIWc' },
    { firstName: 'Micah', lastName: 'McKinnon', picture: 'https://media-exp1.licdn.com/dms/image/C5603AQFP8FImvSWCNg/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=edkFcOVHxTgeq6RZ9a6Jtcj_cJLmSdCpF52wnAAbhBw' },
    { firstName: 'Mike', lastName: 'Mitchell', picture: 'https://ap.rdcpix.com/2079968914/9321e42131100314df1ce0789a0b76a0a-c0od-r7_w144.jpg' },
    { firstName: 'Mitch', lastName: 'Owen', picture: '' },
    { firstName: 'Obiye', lastName: 'Kolokolo', picture: 'https://media-exp1.licdn.com/dms/image/C5603AQH6QxZlsTJkWA/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=GkiuVcXRZUuQn_j12RIzG3gxsZ26WqcE9LOZa4ElXIE' },
    { firstName: 'Phillip', lastName: 'Braddy', picture: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/75326_1649951458850_6012910_n.jpg?_nc_cat=101&_nc_sid=e007fa&_nc_ohc=73VBWM2v5jsAX-slaXl&_nc_ht=scontent-dfw5-1.xx&oh=142aa1cc454675b7adc4ed0628687eff&oe=5ED3DF01' },
    { firstName: 'Prather', lastName: 'Thomas', picture: 'https://media-exp1.licdn.com/dms/image/C4E03AQGEhe1GZ9kUfw/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=JAXiPkhXKsJguEwGD6TCuZwmJPI_msp45KphZZ0C6Ec' },
    { firstName: 'Rhonda', lastName: 'Cook', picture: 'https://media-exp1.licdn.com/dms/image/C4E03AQEARegJmoEI8Q/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=AqepisHLWpmzAFSj6b-TlECh0BZl0oI7Wv-EqHeNf6s' },
    { firstName: 'Ryan', lastName: 'Burk', picture: 'https://pbs.twimg.com/profile_images/1163883735462420480/dZUcGf74_400x400.jpg' },
    { firstName: 'Ryan', lastName: 'Jayo', picture: 'https://media-exp1.licdn.com/dms/image/C4E03AQHFlRlRQgj96g/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=WreXyaFDGdQ5cpISlmzLGtyfumejZMZaP9aAobGesV0' },
    { firstName: 'Ryan', lastName: 'Johnson', picture: 'http://moderntrill.com/img/team/1.jpg' },
    { firstName: 'Shane', lastName: 'Gilbert', picture: 'https://media-exp1.licdn.com/dms/image/C4D03AQGH8AX0RFAFGQ/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=TGYkPbDy4d3kpejFYQNVr0cUSjAqNqLnaq_un3jcdoo' },
    { firstName: 'Shawna', lastName: 'Reed', picture: 'https://media-exp1.licdn.com/dms/image/C4E03AQEGtZtNAKI-sA/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=nPPGufRjazFJSOwAc7sp5fCIjbV5RISzmfdsVEs03yA' }    
];

var person;
getPerson();

loadOptions(people.map(x => x.firstName).filter(unique).sort(), document.getElementById("firstName"));
loadOptions(people.map(x => x.lastName).filter(unique).sort(), document.getElementById("lastName"));

document.getElementById("check").addEventListener("click", check);
document.getElementById("skip").addEventListener("click", skip);

function getPerson() {
    var possibilities = people.filter(x => x.picture && !x.done);

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
        var pictured = people.filter(x => x.picture).map(x => x.firstName + " " + x.lastName).join("<br>");
        var notpictured = people.filter(x => !x.picture).map(x => x.firstName + " " + x.lastName).join("<br>");
        document.getElementById("result").innerHTML = "You got them all!<br><br>" + pictured + "<br><br>Not Pictured:<br>" + notpictured;
        document.getElementById("img").src = "http://www.myconsultinggroup.com/assets/img/logo/headerLogo.png";
        document.getElementById("play").style.visibility = 'hidden'; 
    }
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

  if(firstNameSelected === person.firstName && lastNameSelected === person.lastName) {
    document.getElementById("result").innerHTML = successMessages[Math.floor(Math.random() * successMessages.length)];
    people.find(({ firstName, lastName }) => firstName === person.firstName && lastName === person.lastName).done = "1";
    getPerson();
  }
  else if(firstNameSelected === person.firstName || lastNameSelected === person.lastName) {
    document.getElementById("result").innerHTML = halfRightMessages[Math.floor(Math.random() * halfRightMessages.length)];
  }
  else {
    document.getElementById("result").innerHTML = failureMessages[Math.floor(Math.random() * failureMessages.length)];
  }
}

function skip() {
    getPerson();
}
