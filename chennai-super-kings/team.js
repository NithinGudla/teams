let team_data;

let loading_icon = document.getElementById("loading");

let dataFetched = false;


var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
        //console.log(this.responseText);
        dataFetched = true;
        loading_icon.style.visibility = 'hidden';
        team_data = JSON.parse(this.responseText);
        addTeamCardsToScreen();

    }
    else{

      console.log('some');

      setTimeout(function(){

        if(!dataFetched){
          window.location = '../error.html';
        }
      }, 15000);
      
    }
  };

  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://ipl-t20.herokuapp.com/teams/chennai-super-kings";
  xhttp.open("GET", proxyurl + url, true);
  xhttp.send();



function addTeamCardsToScreen(){

  console.log(team_data);
  for(let player of team_data.players){

      console.log(player);
      let playerCard = createPlayerCard(player);
      document.getElementById("grid").appendChild(playerCard);
  }
}

function createPlayerCard(player){

    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "player_card");
    
    let playerImageDiv = document.createElement("div");
    playerImageDiv.setAttribute("class", "player_image_div");

    let playerImage = document.createElement("img");
    playerImage.setAttribute("src", player.image);
    console.log(player.image);
    playerImage.setAttribute("class", "player_image");
    
    playerImageDiv.appendChild(playerImage);
    mainDiv.appendChild(playerImageDiv);

    let playerData = document.createElement("div");
    playerData.setAttribute("class", "player_data");

    mainDiv.appendChild(playerData);

    let playerNameWords = player.name.split(" ");

    let firstName = playerNameWords[0];

    let lastName = '';
    for(let i = 1; i < playerNameWords.length; i++)
        lastName += playerNameWords[i];

    let playerFirstName = document.createElement("p");
    playerFirstName.setAttribute("class", 'player_first_name');
    playerFirstName.innerHTML = firstName;

    playerData.appendChild(playerFirstName);

    let playerLastName = document.createElement("h2");
    playerLastName.setAttribute("class", 'player_last_name');
    playerLastName.innerHTML = lastName;

    playerData.appendChild(playerLastName);

    let IPLYear = document.createElement("p");
    IPLYear.setAttribute("class", 'ipl_year');
    IPLYear.innerHTML = 'I P L &nbsp 2 0 1 9';

    playerData.appendChild(IPLYear);

    let statsDiv = document.createElement("div");
    statsDiv.setAttribute("class", 'stats_div');
    playerData.appendChild(statsDiv);

    let matchesDiv = document.createElement("div");
    matchesDiv.setAttribute("class", 'matches_div');
    statsDiv.appendChild(matchesDiv);

    let runsDiv = document.createElement("div");
    runsDiv.setAttribute("class", 'runs_div');
    statsDiv.appendChild(runsDiv);

    let wicketsDiv = document.createElement("div");
    wicketsDiv.setAttribute("class", 'wickets_div');
    statsDiv.appendChild(wicketsDiv);


    let runs = document.createElement("h2");
    runs.innerHTML = player.stats.runs;
    runs.setAttribute("class", 'runs');
    runsDiv.appendChild(runs);

    let matches = document.createElement("h2");
    matches.innerHTML = player.stats.matches;
    matches.setAttribute("class", 'matches');
    matchesDiv.appendChild(matches);

    let wickets = document.createElement("h2");
    wickets.innerHTML = player.stats.wickets;
    wickets.setAttribute("class", 'wickets');
    wicketsDiv.appendChild(wickets);


    let runsTitle = document.createElement("p");
    runsTitle.innerHTML = 'R U N S';
    runsTitle.setAttribute("class", 'runs_title');
    runsDiv.appendChild(runsTitle);

    let matchesTitle = document.createElement("p");
    matchesTitle.innerHTML = 'M A T C H E S';
    matchesTitle.setAttribute("class", 'matches_title');
    matchesDiv.appendChild(matchesTitle);

    let wicketsTitle = document.createElement("p");
    wicketsTitle.innerHTML = 'W I C K E T S';
    wicketsTitle.setAttribute("class", 'wickets_title');
    wicketsDiv.appendChild(wicketsTitle);


    let viewProfile = document.createElement("p");
    viewProfile.innerHTML = 'VIEW PROFILE';
    viewProfile.setAttribute("class", 'view_profile');
    playerData.appendChild(viewProfile);


    console.log(mainDiv);
    return mainDiv;
}

function getTeamLogo(team){

    switch(team.id){

        case "chennai-super-kings": return "./assets/csk.png"; 
        case "delhi-capitals": return "./assets/dc.png"; 
        case "kings-xi-punjab": return "./assets/kxp.png"; 
        case "kolkata-knight-riders": return "./assets/kkr.png"; 
        case "mumbai-indians": return "./assets/mi.png"; 
        case "rajasthan-royals": return "./assets/rr.png"; 
        case "royal-challengers-bangalore": return "./assets/rcb.png"; 
        case "sunrisers-hyderabad": return "./assets/srh.png"; 
    }
    
}




function getTeamData(){

    let data = {
      "team": {
        "captainId": "2101",
        "wicketKeeperId": "2109"
      },
      "players": [
        {
          "id": "2101",
          "name": "MS Dhoni",
          "nationality": "Indian",
          "image": "https://iplstatic.s3.amazonaws.com/players/210/1.png",
          "stats": {
            "matches": 15,
            "runs": 416,
            "wickets": 0
          }
        },
        {
          "id": "210898",
          "name": "Imran Tahir",
          "nationality": "Indian",
          "image": "https://iplstatic.s3.amazonaws.com/players/210/898.png",
          "stats": {
            "matches": 17,
            "runs": 0,
            "wickets": 26
          }
        },
        {
          "id": "2103746",
          "name": "Lungi Ngidi",
          "nationality": "",
          "image": "https://iplstatic.s3.amazonaws.com/players/210/3746.png",
          "stats": {
            "matches": 10,
            "runs": 76,
            "wickets": 3
          }
        },
        {
          "id": "2105443",
          "name": "Ruthuraj Gaikwad",
          "nationality": "Indian",
          "image": "https://iplstatic.s3.amazonaws.com/players/210/5443.png",
          "stats": {
            "matches": 0,
            "runs": 33,
            "wickets": 0
          }
        },
        {
          "id": "210227",
          "name": "Shane Watson",
          "nationality": "",
          "image": "https://iplstatic.s3.amazonaws.com/players/210/227.png",
          "stats": {
            "matches": 15,
            "runs": 398,
            "wickets": 10
          }
        },
        {
          "id": "210100",
          "name": "Ambati Rayudu",
          "nationality": "Indian",
          "image": "https://iplstatic.s3.amazonaws.com/players/210/100.png",
          "stats": {
            "matches": 17,
            "runs": 282,
            "wickets": 0
          }
        },
        {
          "id": "2107",
          "name": "Murali Vijay",
          "nationality": "Indian",
          "image": "https://iplstatic.s3.amazonaws.com/players/210/7.png",
          "stats": {
            "matches": 9,
            "runs": 18,
            "wickets": 1
          }
        },
        {
          "id": "210297",
          "name": "Kedar Jadhav",
          "nationality": "Indian",
          "image": "https://iplstatic.s3.amazonaws.com/players/210/297.png",
          "stats": {
            "matches": 14,
            "runs": 162,
            "wickets": 1
          }
        },
        {
          "id": "2109",
          "name": "Ravindra Jadeja",
          "nationality": "Indian",
          "image": "https://iplstatic.s3.amazonaws.com/players/210/9.png",
          "stats": {
            "matches": 16,
            "runs": 106,
            "wickets": 15
          }
        },
        {
          "id": "210140",
          "name": "Deepak Chahar",
          "nationality": "Indian",
          "image": "https://iplstatic.s3.amazonaws.com/players/210/140.png",
          "stats": {
            "matches": 7,
            "runs": 34,
            "wickets": 0
          }
        },
        {
          "id": "2104942",
          "name": "Narayan Jagadeesan",
          "nationality": "Indian",
          "image": "https://iplstatic.s3.amazonaws.com/players/210/4942.png",
          "stats": {
            "matches": 0,
            "runs": 0,
            "wickets": 0
          }
        }
      ]
    };

    return data;
}
