
export const fetchQuote = () => {
  return fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(res => res)
    .catch(error => error.message)
}

export const fetchImage = () => {
  return fetch(`https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error.message)
}