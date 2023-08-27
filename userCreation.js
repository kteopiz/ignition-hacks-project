/*

Quiz characteristics 

read                            
- how often do you read? 
- 1    - never
- 2    - rarely
- 3    - sometimes
- 4    - often 
- 5    - always 

video_games 
- how often do you play video games? 
- 1    - never
- 2    - rarely
- 3    - sometimes
- 4    - often 
- 5    - always 

artistic 
- How often do you create your own art and crafts projects? 
- 1    - never
- 2    - rarely
- 3    - sometimes
- 4    - often 
- 5    - always 

parties                         
- How often do you attend parties? 
- 1    - never
- 2    - rarely
- 3    - sometimes
- 4    - often 
- 5    - always 

campus
- How often do you attend on campus events?
- 1    - never
- 2    - rarely
- 3    - sometimes
- 4    - often 
- 5    - always 

show_genre 
- What is your favorite show genre?
- 1 - drama 
- 2 - reality
- 3 - comedy 
- 4 - animation 
- 5 - action / adventure 

music_genre 
- What is your favorite music genre?
- 1 - pop
- 2 - rap/hip-hop
- 3 - classical 
- 4 - rock 
- 5 - alternative 

social_battery
Do you consider yourself as:
- 1 - introverted 
- 2 - extroverted 
- 3 - ambiverted

time_preferance
Do you consider yourself as:
- 1 - a morning bird, I would rather meet earlier in the day
- 2 - a night owl, I would rather meet later in the day
- 3 - I do not mind either 

location
Where would you like to meet?
- 1 - Gould Street 
- 2 - Student Campus Centre (SCC)
- 3 - Student Living Centre (SLC)
- 4 - Campus Events and Activities
- 5 - Study Groups and Collaborative Spaces
- 6 - Kerr Hall North


*/

 
class Portfolio 
{
  constructor(fname, lname, age, bio, read, videoGames, artistic, parties, campus, showGenre, musicGenre, socialBattery, timePreferance, location) 
  {
    this._fname = fname;
    this._lname = lname;
    this._age = age;
    this._bio = bio;
    this._read = read;
    this._videoGames = videoGames;
    this._artistic = artistic;
    this._parties = parties;
    this._campus = campus;
    this.showGenre = showGenre;
    this._musicGenre = musicGenre;
    this._socialBattery = socialBattery;
    this._timePreferance = timePreferance;
    this._location = location;
  }

  // FULL NAME AND TO STRING 
  fullName() 
  {
    return this.fname + " " + this.lname;
  }

  toString() 
  {
    let result = "";
    result += "\nName: " + this.fullName();
    result += "\nAge: " + this.age;
    result += "\nBio: " + this.bio;
    return result;
  }


  // GET AND SET (get allows access while set changes the attribute)

  get fname() 
  {
    return this._fname;
  }

  set fname(newfName) 
  {
    this._fname = newfName;
  }

  get lname() {
    return this._lname;
  }

  set lname(newlName) {
    this._lname = newlName;
  }

  get age()
  {
    return this._age;
  }

  set age(newAge)
  {
    this._age = newAge;
  }

  get bio()
  {
    return this._bio;
  }

  set bio(newBio)
  {
    this._bio = newBio;
  }

  // QUIZ CHARACTERISTICS 

  get read()
  {
    return this._read;
  }

  set read(newRead)
  {
    this._read = newRead;
  }

  get videoGames()
  {
    return this._videoGames;
  }

  set videoGames(newVideoGames)
  {
    this.videoGames = newVideoGames;
  }

  get artistic()
  {
    return this._artistic;
  }

  set artistic(newArtistic)
  {
    this.artistic = newArtistic;
  }

  get parties()
  {
    return this._parties;
  }

  set parties(newParties)
  {
    this._parties  = newParties;
  }

  get campus()
  {
    return this._campus;
  }

  set campus(newCampus)
  {
    this._campus  = newCampus;
  }

  get showGenre()
  {
    return this._showGenre;
  }

  set showGenre(newShowGenre)
  {
    this._showGenre  = newShowGenre;
  }

  get musicGenre()
  {
    return this._musicGenre;
  }

  set musicGenre(newMusicGenre)
  {
    this._musicGenre  = newMusicGenre;
  }

  get socialBattery()
  {
    return this._socialBattery;
  }

  set socialBattery(newSocialBattery)
  {
    this._socialBattery = newSocialBattery;
  }

  get timePreferance()
  {
    return this._timePreferance;
  }

  set timePreferance(newTimePreferance)
  {
    this._timePreferance = newTimePreferance;
  }

  get location()
  {
    return this._location;
  }

  set location(newLocation)
  {
    this._location = newLocation;
  }

  
}

// USING CODE EXAMPLE

/*
let johny_bio = "To write a short bio you should first make an initial introduction introducing yourself in the first or first person. "

const johny = new Portfolio("John", "Doe", 5, johny_bio);
console.log(johny.toString()); 

johny.lName = "Dowey"; // Checks changing last name
johny.bio = "lmao whatever that was"; // Checks changing bio 
console.log(johny.toString()); 
*/

// ADD AND DELETE PORTFOLIOS 

let listOfPortfolios = [];

function addPerson(fName, lName, age, bio, read, videoGames, artistic, parties, campus, showGenre, musicGenre, socialBattery, timePreferance, location)
{
  const person = new Portfolio(fName, lName, age, bio, read, videoGames, artistic, parties, campus, showGenre, musicGenre, socialBattery, timePreferance, location);
  
  listOfPortfolios.push(person);
  console.log(listOfPortfolios);
  return person;
}

function deletePerson(index)
{
  listOfPortfolios.splice(1, index);
}


// EXAMPLE OF USE 

/*
addPerson("John", "Doe", 5, "lala", "", "","","","","","","","","",);
addPerson("Joey", "Dowey", 4, "land", "", "","","","","","","","","",);

console.log(listOfPortfolios[0].toString()); 
console.log(listOfPortfolios[1].toString()); 
*/


// COMPARE METHOD

function findMatch(index)
{
    
  let points = 0;
  let max = 0;
  let match = listOfPortfolios[1];
  
  
  for (let j = 1; j < listOfPortfolios.length; j++) 
  {
  
    if(listOfPortfolios[index].age == listOfPortfolios[j].age)
    {
      points++;
    }
  
    if(listOfPortfolios[index].read == listOfPortfolios[j].read)
    {
      points++;
    }
  
    if(listOfPortfolios[index].videoGames == listOfPortfolios[j].videoGames)
    {
      points++;
    }
  
    if(listOfPortfolios[index].artistic == listOfPortfolios[j].artistic)
    {
      points++;
    }

    if(listOfPortfolios[index].parties == listOfPortfolios[j].parties)
    {
      points++;
    }

    if(listOfPortfolios[index].campus == listOfPortfolios[j].campus)
    {
      points++;
    }

    if(listOfPortfolios[index].showGenre == listOfPortfolios[j].showGenre)
    {
      points++;
    }

    if(listOfPortfolios[index].musicGenre == listOfPortfolios[j].musicGenre)
    {
      points++;
    }

    if(listOfPortfolios[index].socialBattery == listOfPortfolios[j].socialBattery)
    {
      points++;
    }

    if(listOfPortfolios[index].timePreferance == listOfPortfolios[j].timePreferance)
    {
      points++;
    }

    if(listOfPortfolios[index].location == listOfPortfolios[j].location)
    {
      points++;
    }
  
    if(points > max)
    {
      max = points 
      match = listOfPortfolios[j];
    }
  
  }

  return match;
}

addPerson("John", "Doe", 22, "Hello! Looking for a mate to attend this freshmen orientation season", "", "","","","","","","","","",);

// EXAMPLE OF USE
/*
console.log(findMatch(0).toString());
*/


    function changeButtonText() {
        var createProfileButton = document.getElementById("createProfile");
        createProfileButton.innerHTML = `Profile Made!`;;
    };

const profileButton = document.getElementById("createProfile");

profileButton.addEventListener("click", function handleClick() {

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const description = document.getElementById("description").value;
    const read = document.getElementById("read").value;
    const videoGames = document.getElementById("videoGames").value;
    const artistic = document.getElementById("artistic").value;
    const parties = document.getElementById("parties").value;
    const campus = document.getElementById("campus").value;
    const showGenre = document.getElementById("showGenre").value;
    const musicGenre = document.getElementById("musicGenre").value;
    const socialBattery = document.getElementById("socialBattery").value;
    const timePreference = document.getElementById("timePreference").value;
    const location = document.getElementById("location").value;

    addPerson(fname, lname, age, gender, description, read, videoGames, artistic, parties, campus, showGenre, musicGenre, socialBattery, timePreference, location);
    
});

