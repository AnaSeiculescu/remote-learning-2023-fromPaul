'use strict';

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     if(Math.random() > 0.5) {
//       res('Yeey!!');
//     } else {
//       rej('Booo!')
//     }
//   }, 2000);
// });

// promise
//   .then((cheer) => { throw 'Ceva custom';}) // cheer + ' from Paul!')
//   .then((extendedCheer) => console.log(extendedCheer))
//   .catch((msg) => console.error(msg));

// setTimeout(() => {
//   promise.then(console.info, console.warn);
// }, 3000);

// function setTimeoutPromise(cb, timeout) {
//   return new Promise((res, rej) => {
//     if (timeout > 5000) {
//       rej('Please use a smaller timeout!');
//       return;
//     }

//     setTimeout(() => {
//       res(cb());
//     }, timeout);
//   });
// }

// setTimeoutPromise(() => {
//   console.log('Paul');
//   return 'test';
// }, 6000)
//   .then((theReturn) => console.log('From then(): ', theReturn))
//   .catch(console.warn);

// fetch(
//   'https://api.openweathermap.org/data/2.5/weather?q=Brasov,RO&appid=1d260c5f4897b555ae217809965ad963'
// )
//   .then((res) => res.json())
//   .then(handleWeatherData)
//   .catch(console.warn);

// function handleWeatherData(weatherData) {
//   console.log(weatherData);

//   const elems = document.querySelectorAll('[data-weather]');
//   for (const elem of elems) {
//     const param = elem.dataset.weather;
//     let value = weatherData.main[param];
//     if (param.startsWith('temp')) {
//       value = (value - 273.15).toFixed(1);
//     }
//     elem.textContent = value;
//   }

//   const icon = document.querySelector('[data-weather-icon]');
//   const desc = document.querySelector('[data-weather-description]');

//   icon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
//   icon.alt = `${weatherData.weather[0].main} weather icon`;

//   desc.textContent = weatherData.weather[0].description;
// }

async function getWeatherData() {
  let weatherData;
  try {
    weatherData = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Brasov,RO&appid=1d260c5f4897b555ae217809965ad963'
    ).then((res) => res.json())
  } catch(error) {
    console.warn(error);
    return;
  }

  return weatherData;
}

async function displayWeather(weatherData) {
  weatherData = await weatherData;
  console.log(weatherData);

  const elems = document.querySelectorAll('[data-weather]');
  for (const elem of elems) {
    const param = elem.dataset.weather;
    let value = weatherData.main[param];
    if (param.startsWith('temp')) {
      value = (value - 273.15).toFixed(1);
    }
    elem.textContent = value;
  }

  const icon = document.querySelector('[data-weather-icon]');
  const desc = document.querySelector('[data-weather-description]');

  icon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  icon.alt = `${weatherData.weather[0].main} weather icon`;

  desc.textContent = weatherData.weather[0].description;
}

const weatherData = getWeatherData();
// weatherData.then(displayWeather);
displayWeather(weatherData);

// async function test() {
//   return 'Paul';
// }

// console.log(test());

