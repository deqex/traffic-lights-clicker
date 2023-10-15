const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickuUpgrade")
const autoclickerUpgrade = document.getElementById("autoclickerUpgrade")
const levelOfClickUpgradeText = document.getElementById("levelOfClickUpgradeText")
const levelOfAutoclickerText = document.getElementById("levelOfAutoclickerText")
const clickUpgradeText = document.getElementById("zealtext")
const autoclickerUpgradeText = document.getElementById("autoclickerUpgradeText")



let numberOfCookies = 0;
let costOfClickUpgrade = 20;


let levelOfClickUpgrade = 0;


let levelOfAutoclicker = 0;
let clickUpgradeIncrease = 1;
let autoclickIncrease = 0;
let autoclicker
let autoclickerCost = 100;






window.onload =
canBuyClickUpgrade();
canBuyAutoclicker();



cookie.onclick = () => {
    console.log("click");
    numberOfCookies+= clickUpgradeIncrease;
    console.log(numberOfCookies);
    counter.innerHTML = "Pocet zmacknuti: " + numberOfCookies;
    canBuyClickUpgrade();
    canBuyAutoclicker();
}

function cheats() {
    console.log("cheats on!")
    numberOfCookies += 1000000;
    counter.innerText = "Pocet zmacknuti: " + numberOfCookies;
}
const cheatsTwo = () => {
    numberOfCookies *= 100000000000;
   counter.innerText = "Pocet zmacknuti: " + numberOfCookies;
}

const clickUpgradeFunction = () => {
    if (numberOfCookies >= costOfClickUpgrade) {
        numberOfCookies -= Math. round(costOfClickUpgrade) ;
        costOfClickUpgrade *= 1.5;
        counter.innerText = "Pocet zmacknuti: " + Math. round(numberOfCookies);
        clickUpgradeIncrease ++;
        clickUpgradeText.innerHTML = "Ruka navic: " + Math. round(costOfClickUpgrade);

        
        
        levelOfClickUpgrade ++;
        levelOfClickUpgradeText.innerText = "Level: " + levelOfClickUpgrade;

        canBuyClickUpgrade();
        canBuyAutoclicker();


                            
    }
}
clickUpgrade.onclick = clickUpgradeFunction






const autoclickerUpgradeFunction = () => {
    if (numberOfCookies >= autoclickerCost) {
        numberOfCookies -= Math. round(autoclickerCost);
        autoclickerCost *= 1.2;
        autoclickerUpgradeText.innerText = "Clovek navic: " + Math. round(autoclickerCost);
        counter.innerText = "Pocet zmacknuti: " + numberOfCookies;
        autoclickIncrease++;

        levelOfAutoclicker ++;
        levelOfAutoclickerText.innerHTML = "Level: " + levelOfAutoclicker;

        canBuyClickUpgrade();
        canBuyAutoclicker();



         clearInterval(autoclicker);
            autoclicker = setInterval(() => {     
            numberOfCookies += autoclickIncrease
            counter.innerText = "Pocet zmacknuti: " + numberOfCookies;
            canBuyClickUpgrade();
            canBuyAutoclicker();



        }, 1000)
    }
}

autoclickerUpgrade.onclick = autoclickerUpgradeFunction




























// mozna pak dej do jedny funkce VVVVVVV

function canBuyClickUpgrade() {
    if (numberOfCookies >= costOfClickUpgrade) {
        document.getElementById("clickuUpgrade").style.borderColor  = "white";
    } else {
        document.getElementById("clickuUpgrade").style.borderColor = "black";
    
    }
}



function canBuyAutoclicker() {
    if (numberOfCookies >= autoclickerCost) {
        document.getElementById("autoclickerUpgrade").style.borderColor  = "white";
    } else {
        document.getElementById("autoclickerUpgrade").style.borderColor = "black";
    
    }
}


// mozna pak dej do jedny funkce ^^^^^^^^^




































/*
function gfg() { 
    document.body.style.backgroundColor = "red";
    document.body.style.backgroundColor = "green";

} 

gfg(); 
setInterval(gfg, 3000); 
*/