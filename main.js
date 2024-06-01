import './style.css'
import { movieSearch } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Search Movie!</h1>
    <div class="card">
      <input id="input" type="text" placeholder="Input your movie name" class="input input-bordered w-full p-4 rounded-lg mb-4">
      <button id="button" type="button">Search</button>
    </div>
    <div id="movie" class="hidden card">
    </div>
    <p class="read-the-docs">
      Search Movie by name or year
    </p>
  </div>
`

movieSearch(document.querySelector('#input'), document.querySelector('#button'), document.querySelector('#movie'));
