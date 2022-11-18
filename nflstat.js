var NFL = (document.createElement("flex-container").innerHTML = [{
        City: "Arizona",
        Name: "Arizona Cardinal",
        Date: "March 7",
        AwayTeam: "Falcon",
        Hometeam: "Cardinals",
        Homepoint: "78",
        AwayPoint: "45"
    },
    {
        City: "Atlanta",
        Name: "Falcons",
        Date: "March 7",
        AwayTeam: "Minnesota Vikings",
        Hometeam: "Falcons",
        Homepoint: "23",
        AwayPoint: "8"
    },
    {
        City: "N/S Carolinas",
        Name: "Carolina Panther",
        Date: "March 7",
        AwayTeam: "Minnesota Vikings",
        Hometeam: "Panther",
        Homepoint: "45",
        AwayPoint: "8"
    },
    {
        City: "Chicago",
        Name: "Chicago Bears",
        Date: "March 7",
        AwayTeam: "Dallas Cowboys",
        Hometeam: "Chicago Bears",
        Homepoint: "78",
        AwayPoint: "8"
    },
    {
        City: "Dallas",
        Name: "Dallas Cowboys",
        Date: "March 7",
        AwayTeam: "Chicago Bears",
        Hometeam: "Dallas Cowboys",
        Homepoint: "90",
        AwayPoint: "87"
    },
    {
        City: "Detroits",
        Name: "Detroit Lions",
        Date: "March 7",
        AwayTeam: "Chicago Bears",
        Hometeam: "Detroit Lions",
        Homepoint: "90",
        AwayPoint: "87"
    },
    {
        City: "Jacksonville",
        Name: "Jacksonville Jaguars",
        Date: "March 7",
        AwayTeam: "Chicago Bears",
        Hometeam: "Jacksonville Jaguars",
        Homepoint: "90",
        AwayPoint: "87"
    },

    {
        City: "GreenBay",
        Name: "Green Bay Packers",
        Date: "March 7",
        AwayTeam: "Detroit Lions",
        Hometeam: "Green Bay Packers",
        Homepoint: "90",
        AwayPoint: "87"
    },

    {
        City: " Los Angeles",
        Name: " Los Angeles Rams",
        Date: "March 7",
        AwayTeam: "Detroit Lions",
        Hometeam: " Los Angeles Rams",
        Homepoint: "90",
        AwayPoint: "87"
    },
    {
        City: " Los Angeles",
        Name: " Los Angeles Rams",
        Date: "March 7",
        AwayTeam: "Detroit Lions",
        Hometeam: " Los Angeles Rams",
        Homepoint: "90",
        AwayPoint: "87"
    },
    {
        City: "Minnesota",
        Name: "Minnesota Vikings",
        Date: "March 7",
        AwayTeam: "Detroit Lions",
        Hometeam: "Minnesota",
        Homepoint: "90",
        AwayPoint: "87"
    },
    {
        City: "New Orleans",
        Name: "New Orleans Saints",
        Date: "March 7",
        AwayTeam: "Detroit Lions",
        Hometeam: "New Orleans Saints",
        Homepoint: "90",
        AwayPoint: "87"
    },
    {
        City: "New York",
        Name: "New York Giants",
        Date: "March 7",
        AwayTeam: "Detroit Lions",
        Hometeam: "New York Giants",
        Homepoint: "90",
        AwayPoint: "87"
    },
    {
        City: "Denver",
        Name: "Denver Broncos",
        Date: "March 7",
        AwayTeam: "Detroit Lions",
        Hometeam: "Denver Broncos",
        Homepoint: "90",
        AwayPoint: "87"
    },
    {
        City: "Houston ",
        Name: "Houston Texan",
        Date: "March 7",
        AwayTeam: "Detroit Lions",
        Hometeam: "Houston Texan",
        Homepoint: "90",
        AwayPoint: "87"
    },
    {
        City: "Miami ",
        Name: " Miami Dolphins ",
        Date: "March 7",
        AwayTeam: "Detroit Lions",
        Hometeam: " Miami Dolphins ",
        Homepoint: "90",
        AwayPoint: "87"
    },
    {
        City: "Tennessee",
        Name: " Tennessee Titans",
        Date: "March 7",
        AwayTeam: "Detroit Lions",
        Hometeam: " Tennessee Titans",
        Homepoint: "90",
        AwayPoint: "87"
    },
    {
        City: "Buffalo",
        Name: " Buffalo Bills",
        Date: "March 7",
        AwayTeam: "Miami Dolphins",
        Hometeam: "Buffalo Bills",
        Homepoint: "90",
        AwayPoint: "87"
    }
]);

const nflTeams = [
  {
    city: "Arizona",
    name: "Cardinals",
    cPrim: "#97233F",
    cSecn: "#FFB612",
    wins: 0,
    losses: 0,
    ties: 0,
    imgurl: "https://static.www.nfl.com/image/private/f_auto/league/u9fltoslqdsyao8cpm0k",
  },
  {
    city: "Atlanta",
    name: "Falcons",
    cPrim: "#A71930",
    cSecn: "#000000",
    wins: 0,
    losses: 0,
    ties: 0,
    imgurl: "https://static.www.nfl.com/image/private/f_auto/league/d8m7hzpsbrl6pnqht8op",
  },
  {
    city: "Carolina",
    name: "Panthers",
    cPrim: "#0085CA",
    cSecn: "#101820",
    wins: 0,
    losses: 0,
    ties: 0,
    imgurl: "https://static.www.nfl.com/image/private/f_auto/league/ervfzgrqdpnc7lh5gqwq",
  },
  {
    city: "Chicago",
    name: "Bears",
    cPrim: "#0B162A",
    cSecn: "#C83803",
    wins: 0,
    losses: 0,
    ties: 0,
    imgurl: "https://static.www.nfl.com/image/private/f_auto/league/ra0poq2ivwyahbaq86d2",
  },
  {
    city: "Dallas",
    name: "Cowboys",
    cPrim: "#041E42",
    cSecn: "#869397",
    wins: 0,
    losses: 0,
    ties: 0,
    imgurl: "https://static.www.nfl.com/image/private/f_auto/league/ieid8hoygzdlmzo0tnf6",
  },
  {
    city: "Detroit",
    name: "Lions",
    cPrim: "#0076B6",
    cSecn: "#B0B7BC",
    wins: 0,
    losses: 0,
    ties: 0,
    imgurl: "https://res.cloudinary.com/nflleague/image/private/f_auto/league/ocvxwnapdvwevupe4tpr",
  },
  {
    city: "Green Bay",
    name: "Packers",
    cPrim: "#203731",
    cSecn: "#FFB612",
    wins: 0,
    losses: 0,
    ties: 0,
    imgurl: "https://res.cloudinary.com/nflleague/image/private/f_auto/league/gppfvr7n8gljgjaqux2x",
  },
  {
    city: "Los Angeles",
    name: "Rams",
    cPrim: "#003594",
    cSecn: "#FFA300",
    wins: 0,
    losses: 0,
    ties: 0,
    imgurl: "https://static.www.nfl.com/image/private/f_auto/league/ayvwcmluj2ohkdlbiegi",
  },
  {
    city: "New Orleans",
    name: "Saints",
    cPrim: "#D3BC8D",
    cSecn: "#101820",
    wins: 0,
    losses: 0,
    ties: 0,
    imgurl: "https://static.www.nfl.com/image/private/f_auto/league/grhjkahghjkk17v43hdx",
  },
  {
    city: "New York",
    name: "Giants",
    cPrim: "#0B2265",
    cSecn: "#A71930",
    wins: 0,
    losses: 0,
    ties: 0,
    imgurl: "https://res.cloudinary.com/nflleague/image/private/f_auto/league/t6mhdmgizi6qhndh8b9p",
  },
  {
    city: "Philadelphia",
    name: "Eagles",
    cPrim: "#004C54",
    cSecn: "#A5ACAF",
    wins: 0,
    losses: 0,
    ties: 0,
    imgurl: "https://res.cloudinary.com/nflleague/image/private/f_auto/league/puhrqgj71gobgdkdo6uq",
  },
  {
    city: "San Francisco",
    name: "49ers",
    cPrim: "#AA0000",
    cSecn: "#B3995D",
    wins: 0,
    losses: 0,
    ties: 0,
    imgurl: "https://res.cloudinary.com/nflleague/image/private/f_auto/league/dxibuyxbk0b9ua5ih9hn",
  },
  {
    city: "Seattle",
    name: "Seahawks",
    cPrim: "#002244",
    cSecn: "#69BE28",
    wins: 0,
    losses: 0,
    ties: 0,
    imgurl: "https://res.cloudinary.com/nflleague/image/private/f_auto/league/gcytzwpjdzbpwnwxincg",
  },
  {
    city: "Tampa Bay",
    name: "Buccaneers",
    cPrim: "#D50A0A",
    cSecn: "#B1BABF",
    wins: 0,
    losses: 0,
    ties: 0,
    imgurl: "https://static.www.nfl.com/image/private/f_auto/league/v8uqiualryypwqgvwcih",
  },
  {
    city: "Washington",
    name: "Commanders",
    cPrim: "#773141",
    cSecn: "#FFB612",
    wins: 0,
    losses: 0,
    ties: 0,
    imgurl: "https://static.www.nfl.com/image/private/f_auto/league/xymxwrxtyj9fhaemhdyd",
  },
];

// Populating Team Select Options
const teamSelectOptions = document.getElementById('team-select');
const homeSelectOptions = document.getElementById('home-team-select');
const awaySelectOptions = document.getElementById('away-team');

nflTeams.forEach((team) => {
    const teamOption = document.createElement('option');
    teamOption.textContent = team.name;
    teamOption.value = team.name;
    teamSelectOptions.appendChild(teamOption);
});

nflTeams.forEach((team) => {
  const teamOption = document.createElement('option');
  teamOption.textContent = team.name;
  teamOption.value = team.name;
  homeSelectOptions.appendChild(teamOption);
});

nflTeams.forEach((team) => {
  const teamOption = document.createElement('option');
  teamOption.textContent = team.name;
  teamOption.value = team.name;
  awaySelectOptions.appendChild(teamOption);
});

// Populating Team Cards
const container = document.getElementById("nfl-layout-container");
nflTeams.forEach((team) => {
    const teamCard = document.createElement('div');
    teamCard.id = `team-${team.name}`;
    teamCard.classList.add('nfl-team-card');

    const teamName = document.createElement('h2');
    teamName.textContent = team.name;
    teamName.style.backgroundImage = `linear-gradient(to right, ${team.cPrim} , ${team.cSecn})`;

    const teamLocation = document.createElement('p');
    teamLocation.classList.add('nfl-team-location');
    teamLocation.textContent = `LOCATION: ${team.city.toUpperCase()}`;

    const statsContainer = document.createElement('div');
    statsContainer.classList.add('nfl-team-stats');

    const wins = document.createElement('p');
    wins.id = `WINS-${team.name}`
    wins.textContent = `WINS: ${team.wins}`;

    const ties = document.createElement('p');
    ties.id = `TIES-${team.name}`
    ties.textContent = `TIES: ${team.ties}`;

    const losses = document.createElement('p');
    losses.id = `LOSSES-${team.name}`
    losses.textContent = `LOSSES: ${team.losses}`;

    //Appending to stats
    statsContainer.append(wins, ties, losses);

    //Img container
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('nfl-team-img-container');
    const img = document.createElement('img');
    img.src = team.imgurl;
    imageContainer.appendChild(img);
    
    // Appending all elements to card element
    teamCard.append(
        teamName,
        teamLocation,
        statsContainer,
        imageContainer
    );

    // Appending team card to container
    container.appendChild(teamCard);
});

const updateBtn = document.getElementById('update-stat');
updateBtn.addEventListener('click', function(e){
    e.preventDefault();
    
    const newStat = document.getElementById('new-stat').value;
    const selectedStat = document.getElementById('stat-select').value;
    const selectedTeam = document.getElementById('team-select').value;

    const selector = `${selectedStat}-${selectedTeam}`;
    const statElement = document.getElementById(selector);

    statElement.textContent = `${selectedStat}: ${newStat}`;
});

// Adding a game
const addBtn = document.getElementById('add-game');
addBtn.addEventListener('click', function(e){
  e.preventDefault();
  
  // Container of div that will hold all games
  const gameContainer = document.getElementById('nfl-game-container');
  const newDate = document.getElementById('game-date').value;
  const homeTeam = document.getElementById('home-team-select').value;
  const awayTeam = document.getElementById('away-team').value;
  const homePoints = document.getElementById('home-points').value;
  const awayPoints = document.getElementById('away-points').value;

  // Container for game day stats
  const gameStatContainer = document.createElement('div');
  gameStatContainer.classList.add('game-stats-container');

  // Date
  const dateHeader = document.createElement('h4');
  dateHeader.textContent = "Date";
  const gameStatDate = document.createElement('p');
  gameStatDate.textContent = newDate;

  // Home Team 
  const homeHeader = document.createElement('h4');
  homeHeader.textContent = "Home Team";
  const homeStat = document.createElement('p');
  homeStat.textContent = homeTeam;

  // Away Team 
  const awayHeader = document.createElement('h4');
  awayHeader.textContent = "Away Team";
  const awayStat = document.createElement('p');
  awayStat.textContent = awayTeam;

  // Home Points
  const homePointsHeader = document.createElement('h4');
  homePointsHeader.textContent = "Home Points";
  const homePointsStat = document.createElement('p');
  homePointsStat.textContent = homePoints;

  // Away Points
  const awayPointsHeader = document.createElement('h4');
  awayPointsHeader.textContent = "Away Points";
  const awayPointsStat = document.createElement('p');
  awayPointsStat.textContent = awayPoints;

  gameStatContainer.append(
    dateHeader,
    gameStatDate,
    homeHeader,
    homeStat,
    awayHeader,
    awayStat,
    homePointsHeader,
    homePointsStat,
    awayPointsHeader,
    awayPointsStat
  );

  gameContainer.appendChild(gameStatContainer);
});
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
$('#MinimumToday').attr('min', today);

var NFLteam = 
    document.getElementById("hometeam");
function myFunction() {
  var x = document.getElementById("mySelect");
  var txt = "";
  var i;
  for (i = 0; i < x.length; i++) {
    txt = txt + x.options[i].text + "<br>";
  }
  
  document.getElementById("gameOutput").innerHTML = txt;
}
const nflTeams = [
  {
 


  }
  ]
let myPromise = new Promise(function(myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open('GET', "https://wolfmanbunnydeer.github.io/NFLgames-team3/");
  req.onload = function() {
    if (req.status == 200) {
      myResolve(req.response);
    } else {
      myReject("File not Found");
    }
  };
  req.send();
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
function myFunction() {

// Create a p element:
const para = document.createElement("p");

// Create a text node:
const node = document.createTextNode("This is a paragraph.");

// Append text node to the p element:
para.appendChild(node);

// Append the p element to the body:
document.getElementById("gameDIV").innerhtml(para);
}
function createNFLItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
// get the ul#NFL
const NFL = document.querySelector('#AddGame');
// add NFL item
function myFunction() {
  const element = document.getElementById("gameDIV");
  if (element.getElementByClass== "flex-container") {
    element.getElementByClass = "flex-container";
  } else {
    element.getElementByClass = "flex-container";
  }
}
