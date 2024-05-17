import './row-movies.scss'
const RowMoviesItem = ({ movie, onToggleOpen }) => {
	return (
		<div className='movieitem' onClick={onToggleOpen}>
			<img src={movie.image} alt={movie.title} />
			<h2>
				{movie.title} {movie.index + 1}
			</h2>

			<div className='movieitem-descr'>
				<p>{movie.date}</p>
				<div className='dot' />
				<p>{movie.duration}.min</p>
			</div>
		</div>
	)
}

export default RowMoviesItem
