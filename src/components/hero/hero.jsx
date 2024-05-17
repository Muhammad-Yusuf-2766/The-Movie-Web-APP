import './hero.scss'

const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero__info'>
				<h2>FIND MOVIES</h2>
				<h1>TV shows and more</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos veniam,
					voluptatem corrupti fugiat consectetur ratione voluptatibus quas
					expedita culpa sequi ad beatae facilis vitae, ducimus sed totam
					suscipit reprehenderit officiis?
				</p>
				<button className='btn btn-primary'>Details</button>
			</div>
			<div className='hero__movie'>
				<img src='/image1.svg' alt='' />
				<div className='hero__movie-descr'>
					<h2>Madellin</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
						suscipit deserunt, ut quod voluptate repellat repellendus tenetur,
						impedit eius quisquam assumenda? Quo magnam cumque provident animi
						saepe velit adipisci voluptates?
					</p>
					<div>
						<button className='btn btn-secondary'>Random</button>
						<button className='btn btn-primary'>Details</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
