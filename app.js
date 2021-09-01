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


demographics = ["zoomers", "milenials", "boomers", "college students", 
"developers", "military personnel", "tourists", "expats", "dogs", "cats", 
"norwegians", "asians", "americans", "chefs", "fast food workers", "cashiers",
"janitors", "truck drivers", "consultants", "factory workers", "thots", "surfers",
"climbers"]

platforms = ["video streaming", "ride sharing", "photo sharing", "dating", 
"short videos", "social media", "email", "streaming", "house sharing", "app generator", 
"watch apps", "watch faces", "art & design", "augmented reality", "comics", "health & fitness", 
"legal advice", "photo filters", "education", "food app"]

//ex: video streaming for zoomers   lvl:1
//ex: video streaming for zoomers who have pets?

badIdeas = [];
goodIdeas = [];

let currentIdea = "";

listSize = (n) => {
    return n.length;
}

console.log("Demographics size: " + listSize(demographics)) //testing output of size
console.log("Platforms size: " + listSize(platforms))

getAppIdea = (d, p) => {
    let generatedApp = "";
    generatedDemographics = Math.floor(Math.random() * listSize(d));
    generatedPlatform = Math.floor(Math.random() * listSize(p));
    
    // console.log("random platform:"+ generatedPlatform);
    // console.log("random demographics" + generatedDemographics);
    generatedApp = platforms[generatedPlatform] + " for " + demographics[generatedDemographics];

    return generatedApp;
}

genApp = () =>{
    // console.log(getAppIdea(demographics, platforms));
    currentIdea = getAppIdea(demographics, platforms)
    document.getElementById("app").innerHTML = currentIdea;
}


addBad = () => {
    var node = document.createElement("TR");
    var textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("badTAble").appendChild(node);

    badIdeas.push(currentIdea);
    console.log("Bad ideas:" + badIdeas);
}

addGood = () => {
    goodIdeas.push(currentIdea);
    console.log("Good ideas:" + goodIdeas);
}