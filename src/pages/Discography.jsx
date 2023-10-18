import './Discography.css'
import DiscographyListing from '../components/DiscographyListing'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { discographyActions } from '../store/discography'
import { fetchDiscography } from '../services/DiscographyService'
import NProgress from 'nprogress'

function Discography() {
	NProgress.start()
	const releases = useSelector((state) => state.discography.releases)
	const dispatch = useDispatch()

	// useEffect hook is called after React updates the DOM
	useEffect(() => {
		fetchDiscography().then((data) => {
			dispatch(discographyActions.setReleases(data))
		}).then( () => {
			NProgress.done()
		})
	}, [dispatch])

	return (
		<div data-testid='discography' className='discography'>
			<h1 data-testid='discography-header-1'>U P P E R C A S E</h1>
			<hr width='50%' align='center' />
			<h2 data-testid='discography-header-2'>Discography</h2>
			{releases &&
				releases.map((release) => (
					<DiscographyListing key={release.title} release={release} />
				))}
		</div>
	)
}

export default Discography