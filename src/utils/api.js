const API_ID = process.env.REACT_APP_API_ID || 'b1da3af7'
const APP_KEY = process.env.REACT_APP_APP_KEY || 'c4116aea501685e5f5c711bfb42d9107'

export function fetchRecipes (food = '') {
  food = food.trim()

  return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))
}