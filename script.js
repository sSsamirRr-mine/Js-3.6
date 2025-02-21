'use strict';

getData();
let button = document.querySelector('button');
let iframe = document.querySelector('iframe');
let ip = document.querySelector('#IP');
let hostname = document.querySelector('#hostname');
let city = document.querySelector('#city');
let region = document.querySelector('#region');
let country = document.querySelector('#country');
let loc = document.querySelector('#loc');
let org = document.querySelector('#org');
let timezone = document.querySelector('#timezone');
let readme = document.querySelector('#readme');

async function getData() {
    let response = await fetch("https://ipinfo.io/json")
    let Data = await response.json();
    ip.innerHTML = `IP:   ${Data?.ip}`;
    hostname.innerHTML = `Hostname:   ${Data?.hostname}`;
    city.innerHTML = `City:   ${Data?.city}`;
    region.innerHTML = `Region:   ${Data?.region}`;
    country.innerHTML = `Country:   ${Data?.country}`;
    loc.innerHTML = `Location:   ${Data?.loc}`;
    org.innerHTML = `Organization:   ${Data?.org}`;
    timezone.innerHTML = `Timezone:   ${Data?.timezone}`;
    readme.innerHTML = `Readme: ${Data?.readme}`;
    let cords = Data.loc.split(',');
    iframe.src = `https://www.google.com/maps?q=${cords[0]},${cords[1]}&z=15&output=embed`;
    
}

button.addEventListener('click', () => {
    getData();
})