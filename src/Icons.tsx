const LogoIcon = ({size = 24}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.903 11.532a.695.695 0 01-.947.267 8.299 8.299 0 00-3.237-1.02 8.318 8.318 0 00-3.384.351.696.696 0 01-.423-1.326 9.668 9.668 0 013.948-.409 9.703 9.703 0 013.777 1.19.697.697 0 01.266.947zm.958-2.429a.695.695 0 01-.938.295 10.87 10.87 0 00-3.944-1.177 10.828 10.828 0 00-4.127.367.695.695 0 11-.386-1.336 12.264 12.264 0 014.653-.415c1.566.159 3.062.606 4.447 1.327.34.178.473.598.295.939zm.346-2.022a.69.69 0 01-.31-.073 13.454 13.454 0 00-4.659-1.345 13.423 13.423 0 00-4.843.383.695.695 0 11-.359-1.344 14.85 14.85 0 015.343-.423c1.802.183 3.532.682 5.139 1.484a.695.695 0 01-.311 1.318z"
				fill="currentColor"/>
		</svg>
	)
}

const HomeIcon = ({size = 24}) => {
	return (
		<svg viewBox="0 0 512 512" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z"
				fill="currentColor"/>
		</svg>
	)
}

const SearchIcon = ({size = 24}) => {
	return (
		<svg viewBox="0 0 512 512" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
				fill="currentColor" fillRule="evenodd"/>
		</svg>
	)
}

const CollectionIcon = ({size = 24}) => {
	return (
		<svg viewBox="0 0 512 512" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
				fill="currentColor"/>
		</svg>
	)
}

const PlusIcon = ({size = 24}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z" fill="currentColor"/>
			<path fill="none" d="M0 0h16v16H0z"/>
		</svg>
	)
}

const PlayIcon = ({ size=24 }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={size}>
		<path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
	)
}

const Icon = ({name = "", size = 18}) => {

	const icons = {
		home: HomeIcon,
		search: SearchIcon,
		collection: CollectionIcon,
		plus: PlusIcon,
		logo: LogoIcon,
		playIcon: PlayIcon
	}

	const Component = icons[name]
	return <Component size={size}/>

}

export {
	Icon
}
