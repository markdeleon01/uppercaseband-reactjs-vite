import './DiscographyListing.css'

function DiscographyListing(props) {
	const release = props.release

	const formatDate = function (value) {
		const date = new Date(value)
		return date.toLocaleString(['en-US'], {
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		})
	}

	const formattedDate = function (release) {
		return formatDate(release.releaseDate)
	}

	return (
		<p data-testid='release-item' className='release-item'>
			<img
                data-testid='release-thumbnail' 
				alt={release.imageUrl}
				className='release-thumbnail'
				src={'/' + release.imageUrl}
			/>
			<br />
			<span data-testid='release-title' className='release-title'>{release.title}</span>
			<br />
			<span data-testid='release-date' className='release-date'>Released: {formattedDate(release)}</span>
			<br />
			<a
                data-testid='release-url' 
				className='release-url'
				href={release.spotifyUrl}
				target='_blank'
				rel='noreferrer'
			>
				Listen on Spotify
			</a>
		</p>
	)
}

export default DiscographyListing
