import Avartar from '../../assets/avatar.jpg'


export interface Movie {
	src: string
	title: string
	main: string
	runtime: string
	money: string
	location: string
	time: string
	day: string
	like: string
}

export const moviesData: Movie[] = [
	{
		src: Avartar,
		title: 'Beckham.@Beckham',
		main: 'I Want To Travel And Code.',
		runtime: 'I have 8 years of experience working in a software company. Currently, I work from home with a long-standing team of coders. We are proficient in coding in all languages..',
		money: '$10 USD / hour',
		location: 'Thanh Pho Ha Noi, Vietnam',
		time: `It's currently 5:56 PM here`,
		day: `Joined July 18, 2014`,
		like: `0 Recommendations`
	},
]
