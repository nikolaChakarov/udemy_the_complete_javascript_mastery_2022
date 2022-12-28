// 'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderContry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>
`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Country not found!');
      }
      return res.json();
    })
    .then(res => {
      renderContry(res[0]);

      const borders = Promise.all(
        res[0].borders.map(el =>
          fetch(`https://restcountries.com/v2/alpha/${el}`)
            .then(b => b.json())
            .catch(err => err)
        )
      );

      return borders;

      //   const neighbour = res[0].borders[0];
      //   return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(data => {
      data.forEach(country => renderContry(country, 'neighbour'));
    })
    .catch(err => {
      console.log(`👣 👣 👣 ${err}`);
      renderError(err.message);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

function renderError(message) {
  countriesContainer.insertAdjacentText('beforeend', message);
}

btn.addEventListener('click', function (e) {
  getCountryData('france');
});

getCountryData('гдгдгдфг');
