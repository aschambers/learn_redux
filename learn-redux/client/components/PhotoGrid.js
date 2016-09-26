// need react module
import React from 'React'
// router uses link method of react-router.
import { Link } from 'react-router';

const Main = React.createClass({
	render() {
		return (
			<div className="photo-grid">
				I am a photo grid.
			</div>
		)
	}
});
// export the const Main in this file/available for use in another file.
export default Main;