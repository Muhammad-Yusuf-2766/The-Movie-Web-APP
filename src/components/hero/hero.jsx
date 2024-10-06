import React from 'react'
import MovieService from '../../services/movie-service'
import Error from '../errors/error'
import Spinner from '../Spinner/spinner'
import './hero.scss'

class Hero extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			movie: {},
			isLoading: true,
			error: false,
		}
		this.movieService = new MovieService()
		this.getMovie() // Bu useEffect ni o'rniga ishlaydigan kod. (eski va noto'g'ri usul)
	}

	getMovie = () => {
		this.movieService
			.getRandoMovie()
			.then(res => this.setState({ movie: res }))
			.catch(() => this.setState({ error: true }))
			.finally(() => this.setState({ isLoading: false }))
	}

	render() {
		const { movie, isLoading, error } = this.state

		const errorContent = error ? <Error /> : null
		const loadingContent = isLoading ? <Spinner /> : null
		const content = !(error || isLoading) ? (
			<HeroRandomMovie movie={movie} />
		) : null

		return (
			<div className='hero'>
				<div className='hero__info'>
					<h2>FIND MOVIES</h2>
					<h1>TV shows and more</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
						veniam, voluptatem corrupti fugiat consectetur ratione voluptatibus
						quas expedita culpa sequi ad beatae facilis vitae, ducimus sed totam
						suscipit reprehenderit officiis?
					</p>
					<button className='btn btn-primary'>Details</button>
				</div>
				<div className='hero__movie'>
					{errorContent}
					{loadingContent}
					{content}
				</div>
			</div>
		)
	}
}

export default Hero

const HeroRandomMovie = ({ movie }) => {
	return (
		<>
			<img src={movie.poster_path} alt='' />
			<div className='hero__movie-descr'>
				<h2>{movie.name}</h2>
				<p>
					{movie.description && movie.description.length >= 80
						? `${movie.description.slice(0, 200)}...`
						: movie.description}
				</p>
				<div>
					<button className='btn btn-secondary'>Random</button>
					<button className='btn btn-primary'>Details</button>
				</div>
			</div>
		</>
	)
}
