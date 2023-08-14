import './index.css'

const ActiveEventRegistrationDetails = prop => {
  const {status} = prop
  const {registrationStatus} = status
  switch (registrationStatus) {
    case 'REGISTERED':
      return (
        <div className="final-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="pic"
          />
          <h1>You have already registered for the event</h1>
        </div>
      )
    case 'YET_TO_REGISTER':
      return (
        <div className="final-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="pic"
          />
          <p>
            A live performance brings so much to your relationship with
            dance.Seeing dance live can often make to fail totally in love with
            this beautiful art form.
          </p>
          <button type="button">Register Here</button>
        </div>
      )
    case 'REGISTRATIONS_CLOSED':
      return (
        <div className="final-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            className="pic"
          />
          <h1>Registrations Are Closed Now!</h1>
          <p>Stay tuned. We will reopen the registration soon!</p>
        </div>
      )
    default:
      return <p>{registrationStatus}</p>
  }
}

export default ActiveEventRegistrationDetails
