import './App.css'
import AuthButtons from './components/AuthButtons'
import Header from './components/Header'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import Trending from './components/Trending'

function App() {
	return (
		<>
			<div className='max-w-[1440px] m-auto grid md:grid-cols-5'>
				<Nav />
				<AuthButtons />
			</div>
			<Header />
			<main className='max-w-[1440px] m-auto relative z-1 grid grid-cols-4 md:col-span-5 mt-[-280px]'>
				<Trending />
				<Sidebar />
			</main>
		</>
	)
}

export default App
