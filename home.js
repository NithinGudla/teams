document.write('hello2');

let teams_data;

let loading_icon = document.getElementById("loading");

let dataFetched = false;

var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
        dataFetched = true;
        loading_icon.style.visibility = 'hidden';
        teams_data = JSON.parse(this.responseText);
        addTeamCardsToScreen();

    }
    else{

      console.log('some');

      setTimeout(function(){

        if(!dataFetched){
          window.location = './error';
        }
      }, 15000);
      
    }
  };

  
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://ipl-t20.herokuapp.com/teams";
  xhttp.open("GET", proxyurl + url, true);
  xhttp.send();

  


function addTeamCardsToScreen(){

  for(let team of teams_data){

      console.log(team);
      let teamCard = createTeamCard(team);
      document.getElementById("grid").appendChild(teamCard);
  }
}

function createTeamCard(team){

    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "team_card");
    mainDiv.setAttribute("id", team.id);
    
    let logoDiv = document.createElement("div");
    logoDiv.setAttribute("id", "logo_div");

    let teamLogo = document.createElement("img");
    teamLogo.src = getTeamLogo(team);
    teamLogo.setAttribute("id", "team_logo");
    


    let teamName = document.createElement("h2");
    teamName.innerHTML = team.teamName;
    teamName.setAttribute("id", "team_name");

    let stadium = document.createElement("p");
    stadium.innerHTML = team.venue;
    stadium.setAttribute("id", "stadium");

    let winningYears = document.createElement("h5");
    winningYears.innerHTML = team.winningYears;
    winningYears.setAttribute("id", "winning_years");
    
    let teamHome = document.createElement("a");
    teamHome.innerHTML = 'TEAM HOME';
    teamHome.setAttribute("href", "./" + team.id);
    teamHome.setAttribute("id", "team_home");

    let teamData = document.createElement("div");
    teamData.setAttribute("id", "team_data");

    logoDiv.appendChild(teamLogo);
    mainDiv.appendChild(logoDiv);
    teamData.appendChild(teamName);
    teamData.appendChild(stadium);
    
    if(team.winningYears.length === 0)
    {
      winningYears.innerHTML = '2015';
      winningYears.style.visibility = 'hidden';
    }

    teamData.appendChild(winningYears);
    teamData.appendChild(teamHome);

    mainDiv.appendChild(teamData);

    let arrowP = document.createElement("a");
    arrowP.innerHTML = '>';
    arrowP.setAttribute("href", "./" + team.id);
    arrowP.setAttribute("class", "arrowP");

    mainDiv.appendChild(arrowP);
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



