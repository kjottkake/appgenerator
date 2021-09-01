//youtube - videos
//tiktok - videos for zoomers
//instagram - photo sharing
//facebook - cia tracking
//messenger - messaging
//gmail - email
//tinder - dating
//twitch - streaming

//statistics:
//https://www.bls.gov/ooh/most-new-jobs.htm occupational outlook handbook


//selectors
const button = document.querySelector('button');
const badList = document.querySelector('badList');
const goodList = document.querySelector('goodList');


//Side Effects / lifecycle
const existingBadTodos = JSON.parse(localStorage.getItem('badList')) || [];
const existingGoodTodos = JSON.parse(localStorage.getItem('goodList')) || [];

demographics = ["zoomers", "milenials", "boomers", "college students", 
"developers", "military personnel", "tourists", "expats", "dogs", "cats", 
"norwegians", "asians", "americans", "chefs", "fast food workers", "cashiers",
"janitors", "truck drivers", "consultants", "factory workers", "thots", "surfers",
"climbers"]

platforms = ["video streaming", "ride sharing", "photo sharing", "dating", 
"short videos", "social media", "email", "streaming", "house sharing", "app generator", 
"watch apps", "watch faces", "art & design", "augmented reality", "comics", "health & fitness", 
"legal advice", "photo filters", "education", "food app", "SEO", "fintech", "edutech", "medtech"]

//ex: video streaming for zoomers   lvl:1
//ex: video streaming for zoomers who have pets?


//lists of stuff
badIdeas = [];
goodIdeas = [];

let currentIdea = "";

//gets size of list
listSize = (n) => {
    return n.length;
}

//testing
console.log("Demographics size: " + listSize(demographics)) //testing output of size
console.log("Platforms size: " + listSize(platforms))

getAppIdea = (d, p) => {
    let generatedApp = "";
    generatedDemographics = Math.floor(Math.random() * listSize(d));
    generatedPlatform = Math.floor(Math.random() * listSize(p));
    generatedApp = platforms[generatedPlatform] + " for " + demographics[generatedDemographics];

    return generatedApp;
}

genApp = () =>{
    currentIdea = getAppIdea(demographics, platforms)
    document.getElementById("app").innerHTML = currentIdea;
}


addBad = () => {
    badIdeas.push(currentIdea);
    console.log("Bad ideas:" + badIdeas);
    const li = document.createElement('li');
    li.innerHTML = currentIdea;
    badList.appendChild(li); //wtf why doesn't it work.
    localStorage.setItem('badList', JSON.stringify(badIdeas))
}

addGood = () => {
    goodIdeas.push(currentIdea);
    console.log("Good ideas:" + goodIdeas);
}

