let actors = [
    {id : 2131, nam : "Adnan Sami"},
    {id : 2131, nam : "Onil Kapur"},
    {id : 2131, nam : "Layla o Layla"},
];

let totalActors = [];

for (let i = 0; i < actors.length; i++) {
    const element = actors[i];
    result = element.nam;
    totalActors.push(result);
} 
console.log(totalActors);


const allNames = actors.map(x => x.nam);
console.log(allNames);

