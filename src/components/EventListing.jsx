import './EventListing.css'
import ReactHtmlParser from 'react-html-parser'

function EventListing(props) {
	const event = props.event

	const formatDate = function (value) {
		const date = new Date(value)
		return date.toLocaleString(['en-US'], {
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		})
	}

	return (
		<div className='event-item'>
			<span className='event-title'>{event.title}</span>
			<br />
			<span className='event-date'>{formatDate(event.date)}</span>
			<br />
			<span className='event-location'>{event.location}</span>
			<br />
			<span className='event-content'>{ReactHtmlParser(event.content)}</span>
			<a
				className='event-url'
				href={event.externalUrl}
				target='_blank'
				rel='noreferrer'
			>
				Learn more
			</a>
		</div>
	)
}

export default EventListing
