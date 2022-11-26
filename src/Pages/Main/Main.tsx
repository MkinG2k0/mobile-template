import { NavLink } from 'react-router-dom'
import { ROUTES } from 'Routes/Routes'

function Main() {
	return (
		<div>
			aasd Main Page <NavLink to={ROUTES.ANY}>Nav Any page</NavLink>
		</div>
	)
}

export default Main
