class MovieService {
	_apiBase = 'https://api.themoviedb.org/3'
	_apiLng = 'language=en-US'
	_apiKey = 'api_key=aa00b14566184b823818c61d6ce9bbff'
	_apiImg = 'https://image.tmdb.org/t/p/original'

	getResource = async url => {
		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(`Could not fetch ${url}, status: ${response.status}`)
		}

		return await response.json()
	}

	getPopularMovies = async () => {
		return this.getResource(
			`${this._apiBase}/movie/popular?${this._apiLng}&page=1&${this._apiKey}`
		)
	}

	getTopRatedMovies = async () => {
		return this.getResource(
			`${this._apiBase}/tv/top_rated?${this._apiLng}&page=1&${this._apiKey}`
		)
	}

	getDetailedMovie = async id => {
		return this.getResource(
			`${this._apiBase}/movie/${id}?${this._apiLng}&${this._apiKey}`
		)
	}

	getRandoMovie = async () => {
		const res = await this.getPopularMovies()
		const movie = res.results[Math.floor(Math.random() * res.results.length)]
		return this._tranformMovie(movie)
	}

	_tranformMovie = movie => {
		return {
			name: movie.title,
			description: movie.overview,
			poster_path: `${this._apiImg}${movie.poster_path}`,
			backdrop_path: `${this._apiImg}${movie.backdrop_path}`,
			id: movie.id,
		}
	}
}

export default MovieService
