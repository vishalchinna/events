import './index.css'

const EventItem = prop => {
  const {eventsData, registrationStatus} = prop
  const {imageUrl, id, location, name} = eventsData
  const checking = () => {
    registrationStatus(id)
  }
  return (
    <li onClick={checking} className="eventItem-box">
      <button type="button" className="btn">
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
