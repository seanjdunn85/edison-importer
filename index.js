var UsaStates = require('usa-states').UsaStates;
var usStates = new UsaStates();
const {states} = usStates;
const fetch = require("node-fetch");
const fs = require('fs');
console.log(states);

states.map(async state => {
    const stateParam = state.name.toLowerCase().replace(' ','-');
    const options = {
        url: `https://static01.nyt.com/elections-assets/2020/data/api/2020-11-03/race-page/${stateParam}/president.json`,
        method: 'GET'
    }
    const url =  `https://static01.nyt.com/elections-assets/2020/data/api/2020-11-03/race-page/${stateParam}/president.json`
    fetch(url).then(async response => {
        const res = await response.json()
        fs.writeFile(`./data/${state.abbreviation}.json`, JSON.stringify(res),()=>{});
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
})


