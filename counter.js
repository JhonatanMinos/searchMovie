export function movieSearch(input, button, movie) {
  const api = 'https://www.omdbapi.com/?apikey=4827904f';
  button.addEventListener('click', () => {
    if (input.value) {
      movie.classList.remove('hidden')
    } else {
      movie.classList.add('hidden')
    }

    fetch(`${api}&s=${input.value}`)
      .then(response => response.json())
      .then(data => {
        if (data.Response === 'True') {
          const movies = data.Search
          let output = ''
          movies.forEach(movie => {
            output += `
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
              <figure class="px-10 pt-10">
                <img src="${movie.Poster}" alt="Shoes" class="rounded-xl"/>
                </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title text-2xl">${movie.Title}</h2>
                <p class="text-xl">${movie.Year}</p>
              </div> 
            </div>
            </div>
            `
          })
          movie.innerHTML = output
        } else {
          movie.innerHTML = `<h1 class="text-3xl text-center">${data.Error}</h1>`
        }
      })
  })
}
