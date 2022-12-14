const request = require('request');
const constants = require('../config');

const weatherData = (address, callback) => {
    const url ="./weather.json";
    request({url, json:true}, (error, {body})=> {
        if(error) {
            callback("Can't fetch data from open weather map api ", undefined)
        } else if(!body.main || !body.main.temp || !body.name || !body.weather) {
            callback("Unable to find required data, try another location", undefined);
        } else {
            callback(undefined, {
                temperature: body.main.temp,
                description: body.weather[0].description,
                cityName: body.name
            })
        }
    })
}

module.exports = weatherData;
