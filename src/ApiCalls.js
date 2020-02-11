const apiKey = process.env.REACT_APP_WEATHER_API_KEY


export const fetchQuote = () => {
  return fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(res => res)
    .catch(error => error.message)
}

export const fetchImage = () => {
  return fetch(`https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_API_KEY}&collections=573009&orientation=landscape`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error.message)
}

export const fetchWeather = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey}/39.7392, -104.9903`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error.message)
}

