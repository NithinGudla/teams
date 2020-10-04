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

  
      setTimeout(function(){

        if(!dataFetched){
          window.location = '../error';
        }
      }, 15000);
      
    }
  };

  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://ipl-t20.herokuapp.com/teams/rajasthan-royals";
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



