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
		<div data-testid='event-item' className='event-item'>
			<span data-testid='event-title' className='event-title'>{event.title}</span>
			<br />
			<span data-testid='event-date' className='event-date'>{formatDate(event.date)}</span>
			<br />
			<span data-testid='event-location' className='event-location'>{event.location}</span>
			<br />
			<span data-testid='event-content' className='event-content'>{ReactHtmlParser(event.content)}</span>
			<a
                data-testid='event-url' 
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
