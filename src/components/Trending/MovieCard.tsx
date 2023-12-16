import { AiFillStar } from "react-icons/ai";
import { AiFillDollarCircle } from "react-icons/ai";
import { AiOutlinePause } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineLine } from "react-icons/ai";

import { Movie } from './moviesData'


const MovieCard = ({ movie }: { movie: Movie }) => {
	const { src, title, main, runtime, money, location, time, day, like } = movie
	return (
		<div className='card p-4 grid grid-cols-8'>
			<div className='col-span-2'>
				<div className='w-[236px] h-[236px] mb-3 overflow-hidden'>
					<img src={src} className='w-full' />
				</div>
				<div>
					<div>{money}</div>
					<div>{location}</div>
					<div>{time}</div>
					<div>{day}</div>
					<div>{like}</div>
				</div>
			</div>
			<div className='col-span-6 p-4 text-[#12151b]'>
				<h4>{title}</h4>
				<p className="text-[#3d4a5d] text-xl">{main}</p>
				<div className="flex text-xl">
					<div className="flex items-center mr-7">
						<ul className="flex text-3xl">
							<li><AiFillStar /></li>
							<li><AiFillStar /></li>
							<li><AiFillStar /></li>
							<li><AiFillStar /></li>
							<li><AiFillStar /></li>
						</ul>
						<p>5.0(1 review)</p>
					</div>
					<div className="flex items-center mr-7">
						<AiFillDollarCircle />
						<AiOutlinePause />
						<AiOutlinePause />
						<AiOutlinePause />
						<AiOutlinePause />
						<AiOutlinePause />
						<p>1.6</p>
					</div>
					<div className="flex items-center mr-7">
						<AiOutlineLike />
						<AiOutlineLine />
						<p>100%</p>
					</div>
				</div>
				<div className="grid grid-cols-2">
					<div className="col-span-1 flex"><span className="mr-6">100%</span><p>Jobs Completed</p></div>
					<div className="col-span-1 flex"><span className="mr-6">100%</span><p>On Budget</p></div>
					<div className="col-span-1 flex"><span className="mr-6">100%</span><p>On Time</p></div>
					<div className="col-span-1 flex"><span className="mr-6">100%</span><p>Repeat Hire Rate</p></div>
				</div>
				
				<div className='badge'>
					<p>Dear sir.</p>
					<p>{runtime}</p>
				</div>
			</div>
		</div>
	)
}

export default MovieCard
