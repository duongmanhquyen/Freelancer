import MovieCard from './MovieCard'
import { moviesData } from './moviesData'

const Index = () => {
	return (
		<>
			<div className='col-span-3 mx-3 bg-white'>
				{moviesData.map((movie, index) => (
					<MovieCard key={index} movie={movie} />
				))}
			</div>
		</>
	)
}

export default Index
