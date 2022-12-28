// 'use strict';

const geoAuth = '627476375995498468503x99850';

const init = {
  lat: 0,
  long: 0,
};

const latEl = document.querySelector('#lat');
const longEl = document.querySelector('#long');
const btn = document.querySelector('button');
const result = document.querySelector('.result');

latEl.addEventListener('keydown', debounce.bind(latEl, 300, init));

longEl.addEventListener('keydown', e => debounce(300, init, e));

btn.addEventListener('click', function (e) {
  fetch(
    `https://geocode.xyz/${init.lat},${init.long}?geoit=json&auth=${geoAuth}`
  )
    .then(res => {
      if (!res.ok) throw new Error(`Problem with GEOCODING ${res.status} `);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in county: ${data.country}, and city: ${data.city}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Not such a country ${res.status} `);

      return res.json();
    })
    .then(data => {
      console.log(data[0].borders);
    })
    .catch(err => console.log(err));
});

let timer;
function debounce(delay, obj, event) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    obj[event.target.name] = Number(event.target.value.trim());
    console.log(obj);
  }, delay);
}
