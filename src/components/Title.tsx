

function Title({ title="" }) {
	return (
		<header className="flex items-center justify-between mb-4 px-4 mt-2">

			<div >
				<h3 className="text-xl text-white font-semibold tracking-tight hover:underline cursor-pointer">{title}</h3>
			</div>
			 
			
		</header>
	)
}

export default Title
