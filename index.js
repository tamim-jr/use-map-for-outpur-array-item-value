let actors = [
    {id : 2131, nam : "Adnan Sami"},
    {id : 2165, nam : "Onil Kapur"},
    {id : 2145, nam : "Layla o Layla"},
];

let totalActors = [];

for (let i = 0; i < actors.length; i++) {
    const element = actors[i];
    result = element.nam;
    totalActors.push(result);
} 
console.log(totalActors);


const allNames = actors.map(x => x.nam);
const allActorIds = actors.map(x => x.id);
const allBigActors = actors.filter(x => x.id > 2140);
const allBigActor = actors.find(x => x.id > 2140);
console.log(allNames);
console.log(allActorIds);
console.log(allBigActors);
console.log(allBigActor);

